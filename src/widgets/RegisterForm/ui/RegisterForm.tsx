import {
  Button,
  Typography,
  CircularProgress,
  Box,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useForm, useFieldArray } from 'react-hook-form';
import type { RegisterFormData, RegisterFormProps } from '../model';
import {
  validators,
  useRegister,
  getErrorInfo,
  DEFAULT_FORM_VALUE,
} from '../model';
import { AddressForm } from '@/features/addressForm';
import { useEffect, useState } from 'react';
import { ErrorModal } from '@/shared/ui/ModalError';
import { PersonalForm } from '@/features/personalForm';

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm<RegisterFormData>({
    defaultValues: DEFAULT_FORM_VALUE,
  });

  const { mutate: registerUser, isPending } = useRegister();
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {
    fields: addressFields,
    append,
    remove,
  } = useFieldArray({
    name: 'addresses',
    control,
  });

  useEffect(() => {
    register('defaultShippingAddress', validators.defaultShippingAddress);
    register('defaultBillingAddress', validators.defaultBillingAddress);
  }, [register]);

  const onSubmit = (data: RegisterFormData) => {
    registerUser(data, {
      onSuccess: () => {
        onSuccess();
      },
      onError: (err) => {
        const { title, message } = getErrorInfo(err);
        setErrorTitle(title);
        setErrorMessage(message);
        setErrorModalOpen(true);
      },
    });
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <Typography variant="h2" component="h1" sx={{ textAlign: 'center' }}>
          Register Form
        </Typography>

        <PersonalForm
          control={control}
          fieldNames={{
            firstName: 'firstName',
            lastName: 'lastName',
            email: 'email',
            birthDate: 'birthDate',
            password: 'password',
          }}
        />

        {addressFields.map((field, index) => (
          <Box key={field.id}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography variant="body1">Address information</Typography>
              {index > 0 && (
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => remove(index)}
                >
                  Delete this address
                </Button>
              )}
            </Box>
            <AddressForm
              control={control}
              fieldNames={{
                country: `addresses.${index}.country`,
                city: `addresses.${index}.city`,
                street: `addresses.${index}.street`,
                postcode: `addresses.${index}.postcode`,
              }}
            />
            <FormControlLabel
              label="Set this address as default for shipping"
              control={
                <Radio
                  checked={watch('defaultShippingAddress') === index}
                  onChange={() => setValue('defaultShippingAddress', index)}
                  value={index}
                  name="defaultShipping"
                />
              }
            />
            <FormControlLabel
              label="Set this address as default for billing"
              control={
                <Radio
                  checked={watch('defaultBillingAddress') === index}
                  onChange={() => setValue('defaultBillingAddress', index)}
                  value={index}
                  name="defaultBilling"
                />
              }
            />
          </Box>
        ))}

        {errors.defaultShippingAddress && (
          <Typography color="error">
            {errors.defaultShippingAddress.message}
          </Typography>
        )}

        {errors.defaultBillingAddress && (
          <Typography color="error">
            {errors.defaultBillingAddress.message}
          </Typography>
        )}

        <Button
          variant="outlined"
          color="info"
          onClick={() =>
            append({
              country: { code: '', label: '' },
              city: '',
              street: '',
              postcode: '',
            })
          }
        >
          Add another address
        </Button>
        <Button
          variant="contained"
          color="success"
          disabled={isPending}
          type="submit"
        >
          {isPending ? <CircularProgress size={24} /> : 'Send'}
        </Button>
      </Box>

      <ErrorModal
        open={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        title={errorTitle}
        message={errorMessage}
      />
    </>
  );
};

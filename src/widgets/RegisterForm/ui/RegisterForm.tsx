import {
  Button,
  Typography,
  TextField,
  CircularProgress,
  Box,
  FormControlLabel,
  Radio,
} from '@mui/material';
import type {
  ControllerRenderProps,
  ControllerFieldState,
} from 'react-hook-form';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import type { RegisterFormData, RegisterFormProps } from '../model';
import {
  validators,
  TEXT_FIELDS,
  useRegister,
  getErrorInfo,
  DEFAULT_FORM_VALUE,
} from '../model';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AddressForm } from '@/features/addressForm';
import { useEffect, useState } from 'react';
import { ErrorModal } from '@/shared/ui/ModalError';

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
    // append,
    // remove,
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
        {TEXT_FIELDS.map(({ key, label, type }) => (
          <TextField
            key={key}
            label={label}
            {...register(key, validators[key])}
            type={type}
            error={!!errors[key]}
            helperText={errors[key]?.message}
          />
        ))}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Controller
            name="birthDate"
            control={control}
            rules={validators.birthDate}
            render={({
              field,
              fieldState,
            }: {
              field: ControllerRenderProps<RegisterFormData, 'birthDate'>;
              fieldState: ControllerFieldState;
            }) => (
              <DatePicker
                label="Date of Birth"
                value={field.value ?? null}
                onChange={(date) => field.onChange(date)}
                slotProps={{
                  textField: {
                    error: !!fieldState.error,
                    helperText: fieldState.error?.message,
                    fullWidth: true,
                  },
                }}
              />
            )}
          />
        </LocalizationProvider>

        {addressFields.map((field, index) => (
          <Box key={field.id}>
            <AddressForm
              control={control}
              title={'Address Information'}
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
              label="Set this address as default for shipping"
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

        <Button variant="outlined" disabled={isPending} type="submit">
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

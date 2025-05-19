import {
  Button,
  Typography,
  TextField,
  CircularProgress,
  Box,
} from '@mui/material';

import { useState } from 'react';
import type {
  ControllerRenderProps,
  ControllerFieldState,
} from 'react-hook-form';
import { useForm, Controller } from 'react-hook-form';
import type { RegisterFormData, RegisterFormProps } from '../model';
import { validators, TEXT_FIELDS, useRegister, getErrorInfo } from '../model';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AddressForm } from '@/features/addressForm';
import { ErrorModal } from '@/shared/ui/ModalError';

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const { mutate: registerUser, isPending } = useRegister();
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
        <Typography>Register Form</Typography>
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

        <AddressForm
          control={control}
          title={'Address Information'}
          fieldNames={{
            country: 'address.country',
            city: 'address.city',
            street: 'address.street',
            postcode: 'address.postcode',
          }}
        ></AddressForm>

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

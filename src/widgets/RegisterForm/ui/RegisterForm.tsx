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
import type { RegisterFormData } from '../model';
import { validators, TEXT_FIELDS } from '../model';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AddressForm } from '@/features/addressForm';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data: RegisterFormData) => {
    setLoading(true);
    console.log('form data:', data);
    // some fetch...
    setTimeout(() => setLoading(false), 2000);
  };

  return (
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

      <Button variant="outlined" disabled={loading} type="submit">
        {loading ? <CircularProgress size={24} /> : 'Send'}
      </Button>
    </Box>
  );
};

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
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  validateAge,
} from '../model';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

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
      <TextField
        label="First Name"
        {...register('firstName', validateFirstName)}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />
      <TextField
        label="Last Name"
        {...register('lastName', validateLastName)}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />
      <TextField
        label="Email"
        {...register('email', validateEmail)}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Password"
        {...register('password', validatePassword)}
        error={!!errors.password}
        helperText={errors.password?.message}
        type="password"
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          name="birthDate"
          control={control}
          rules={{ validate: validateAge }}
          render={({
            field,
            fieldState,
          }: {
            field: ControllerRenderProps<RegisterFormData, 'birthDate'>;
            fieldState: ControllerFieldState;
          }) => (
            <DatePicker
              label="Date of Birth"
              value={field.value || undefined}
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

      <Button variant="outlined" disabled={loading} type="submit">
        {loading ? <CircularProgress size={24} /> : 'Send'}
      </Button>
    </Box>
  );
};

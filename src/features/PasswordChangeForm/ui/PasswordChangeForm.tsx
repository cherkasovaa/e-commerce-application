import {
  Box,
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import type { PasswordChangeFormProps, PasswordChangeFormData } from '../model';
import { validators } from '../model';
import { useChangePassword } from '../model/useChangePassword';

export const PasswordChangeForm = ({
  onSuccess,
  onCancel,
  onError,
}: PasswordChangeFormProps) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PasswordChangeFormData>({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const changePassword = useChangePassword();
  const newPassword = watch('newPassword');

  const onSubmit = async (data: PasswordChangeFormData) => {
    setIsSubmitting(true);
    await changePassword({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    })
      .then(() => {
        onSuccess();
      })
      .catch((err: string) => {
        onError(err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        p: 2,
      }}
    >
      <TextField
        {...register('currentPassword', validators.currentPassword)}
        label="Current Password"
        type={showCurrentPassword ? 'text' : 'password'}
        error={!!errors.currentPassword}
        helperText={errors.currentPassword?.message}
        fullWidth
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  edge="end"
                >
                  {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <TextField
        {...register('newPassword', validators.newPassword)}
        label="New Password"
        type={showNewPassword ? 'text' : 'password'}
        error={!!errors.newPassword}
        helperText={errors.newPassword?.message}
        fullWidth
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  edge="end"
                >
                  {showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <TextField
        {...register('confirmPassword', {
          ...validators.confirmPassword,
          validate: (value) =>
            value === newPassword || 'Passwords do not match',
        })}
        label="Confirm New Password"
        type={showConfirmPassword ? 'text' : 'password'}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        fullWidth
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'flex-end',
          mt: 2,
        }}
      >
        <Button type="submit" variant="contained" disabled={isSubmitting}>
          {isSubmitting ? 'Changing...' : 'Change Password'}
        </Button>
        <Button variant="outlined" onClick={onCancel} disabled={isSubmitting}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

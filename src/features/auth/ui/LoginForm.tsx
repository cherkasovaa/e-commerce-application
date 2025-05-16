import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';

import { type ChangeEvent, useState, type FormEvent, type JSX } from 'react';
import { useNavigate } from 'react-router-dom';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';

import { useEmailField } from '../model/useEmail';
import { usePasswordField } from '../model/usePassword';
import { useLogin } from '../model/useLogin';
import { mapCommerceToolsError } from '../model/mapServerErrors';

export const LoginForm = (): JSX.Element => {
  const { email, emailError, handleEmailChange, isEmailValid } =
    useEmailField();

  const navigate = useNavigate();
  const {
    password,
    passwordError,
    showPassword,
    handlePasswordChange,
    handleClickShowPassword,
    isPasswordValid,
  } = usePasswordField();

  const isFormValid = isEmailValid && isPasswordValid;
  const [formError, setFormError] = useState('');
  const [loading, setIsLoading] = useState(false);

  const { login } = useLogin();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);

    login(
      { email, password },
      {
        onSettled: () => {
          setIsLoading(false);
        },
        onSuccess: () => {
          navigate('/');
        },
        onError: (error) => {
          const message = mapCommerceToolsError(error);
          setFormError(message);
        },
      }
    );
  };

  const handleEmailChangeAndClearError = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    if (formError) setFormError('');
    handleEmailChange(e);
  };

  const handlePasswordChangeAndClearError = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    if (formError) setFormError('');
    handlePasswordChange(e);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mx: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        mb: 4,
      }}
    >
      <FormControl variant="outlined" fullWidth color="primary">
        <InputLabel htmlFor="outlined-adornment-email">Enter email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          value={email}
          onChange={handleEmailChangeAndClearError}
          error={!!emailError}
          label="Enter email"
        />
        {emailError && <FormHelperText error>{emailError}</FormHelperText>}
      </FormControl>

      <FormControl variant="outlined" fullWidth color="primary">
        <InputLabel htmlFor="outlined-adornment-password">
          Enter password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChangeAndClearError}
          error={!!passwordError}
          label="Enter password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {passwordError && (
          <FormHelperText error>{passwordError}</FormHelperText>
        )}
      </FormControl>
      <Typography sx={{ color: 'red' }}>{formError}</Typography>
      <Button
        type="submit"
        variant="contained"
        fullWidth
        loading={loading}
        disabled={!isFormValid}
      >
        Submit
      </Button>
    </Box>
  );
};

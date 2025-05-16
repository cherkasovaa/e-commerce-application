import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import { useState, type FormEvent, type JSX } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import { useEmailField } from '../model/useEmail';
import { usePasswordField } from '../model/usePassword';

export const LoginForm = (): JSX.Element => {
  const { email, emailError, handleEmailChange, isEmailValid } =
    useEmailField();

  const {
    password,
    passwordError,
    showPassword,
    handlePasswordChange,
    handleClickShowPassword,
    isPasswordValid,
  } = usePasswordField();

  const isFormValid = isEmailValid && isPasswordValid;

  const [loading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
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
          onChange={handleEmailChange}
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
          onChange={handlePasswordChange}
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

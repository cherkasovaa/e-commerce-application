import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import {
  useState,
  type FormEvent,
  type JSX,
  type ChangeEvent,
  type MouseEvent,
} from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import { validateEmail } from '../model/validateEmail';
import { validatePassword } from '../model/validatePassword';

export const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const isFormValid =
    email.trim().length > 0 &&
    password.trim().length > 0 &&
    validateEmail(email) === '' &&
    validatePassword(password) === '';

  const handleClickShowPassword = (): void => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value;
    setEmail(val);
    if (val.trim().length === 0) {
      setEmailError('');
    } else {
      setEmailError(validateEmail(val));
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value;
    setPassword(val);
    if (val.trim().length === 0) {
      setPasswordError('');
    } else {
      setPasswordError(validatePassword(val));
    }
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
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
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

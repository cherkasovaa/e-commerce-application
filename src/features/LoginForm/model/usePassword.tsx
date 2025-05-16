import { type ChangeEvent, useState } from 'react';
import { validatePassword } from './validatePassword';

export const usePasswordField = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (): void => setShowPassword((show) => !show);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value;
    setPassword(val);
    if (val.trim().length === 0) {
      setPasswordError('');
    } else {
      setPasswordError(validatePassword(val));
    }
  };

  return {
    password,
    passwordError,
    showPassword,
    handlePasswordChange,
    handleClickShowPassword,
    isPasswordValid: !!password.trim() && !validatePassword(password),
  };
};

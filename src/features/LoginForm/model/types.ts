import { type ChangeEvent } from 'react';

export interface ILoginFormProps {
  email: string;
  password: string;
}

export interface IEmailFieldProps {
  email: string;
  emailError: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isEmailValid: boolean;
}
export interface IPasswordFieldProps {
  password: string;
  passwordError: string;
  showPassword: boolean;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClickShowPassword: () => void;
  isPasswordValid: boolean;
}

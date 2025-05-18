import { type ChangeEvent, useState } from 'react';
import { type IEmailFieldProps } from './types';
import { validateEmail } from './validateEmail';

export const useEmailField = (): IEmailFieldProps => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value;
    setEmail(val);
    if (val.trim().length === 0) {
      setEmailError('');
    } else {
      setEmailError(validateEmail(val));
    }
  };

  return {
    email,
    emailError,
    handleEmailChange,
    isEmailValid: !!email.trim() && validateEmail(email) === '',
  };
};

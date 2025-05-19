import type { TextFieldConfig } from './types';

export const REGEX = {
  LETTERS_ONLY: /^[A-Za-z]+$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
};

export const ERROR_MESSAGES = {
  REQUIRED: 'This field is required',
  FIRST_NAME_REQUIRED: 'First name is required',
  LAST_NAME_REQUIRED: 'Last name is required',
  EMAIL_REQUIRED: 'Email is required',
  PASSWORD_REQUIRED: 'Password is required',
  BIRTH_DATE_REQUIRED: 'Date of birth is required',

  LETTERS_ONLY: 'Only letters allowed',
  INVALID_EMAIL: 'Enter correct email',
  INVALID_PASSWORD:
    'Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number',
  AGE_RESTRICTION: 'You must be older than 13 years old',
};

export const MIN_AGE = 13;

export const TEXT_FIELDS: TextFieldConfig[] = [
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'email', label: 'Email' },
  { key: 'password', label: 'Password', type: 'password' },
];

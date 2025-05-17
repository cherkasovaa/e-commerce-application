import type { TextFieldConfig, ErrorKey } from './types';

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
  SHIPPING_ADDRESS_REQUIRED: 'Please select a default shipping address',
  BILLING_ADDRESS_REQUIRED: 'Please select a default billing address',

  LETTERS_ONLY: 'Only letters allowed',
  INVALID_EMAIL: 'Enter correct email',
  INVALID_PASSWORD:
    'Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number',
  AGE_RESTRICTION: 'You must be older than 13 years old',
  INVALID_SHIPPING_ADDRESS: 'Invalid default shipping address',
  INVALID_BILLING_ADDRESS: 'Invalid default billing address',
};

export const MIN_AGE = 13;

export const TEXT_FIELDS: TextFieldConfig[] = [
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'email', label: 'Email' },
  { key: 'password', label: 'Password', type: 'password' },
];

export const RESPONSE_ERROR_MESSAGES: Record<
  ErrorKey,
  { title: string; message: string }
> = {
  '400:DuplicateField': {
    title: 'Duplicate Entry',
    message: 'There is already an existing customer with the provided email.',
  },
  403: {
    title: 'Access Denied',
    message: 'You do not have permission to perform this action.',
  },
  404: {
    title: 'Not Found',
    message: 'The requested resource could not be found.',
  },
  429: {
    title: 'Too Many Requests',
    message: 'You have sent too many requests in a given amount of time.',
  },
  500: {
    title: 'Server Error',
    message: 'An unexpected error occurred on the server.',
  },
  default: {
    title: 'Unknown Error',
    message: 'An unexpected error has occurred.',
  },
};

export const DEFAULT_FORM_VALUE = {
  firstName: '',
  secondName: '',
  email: '',
  password: '',
  addresses: [
    {
      country: { code: '', label: '' },
      city: '',
      street: '',
      postcode: '',
    },
  ],
  defaultShippingAddress: 0,
  defaultBillingAddress: 0,
};

import type { ErrorKey } from './types';

export const ERROR_MESSAGES = {
  SHIPPING_ADDRESS_REQUIRED: 'Please select a default shipping address',
  BILLING_ADDRESS_REQUIRED: 'Please select a default billing address',

  INVALID_SHIPPING_ADDRESS: 'Invalid default shipping address',
  INVALID_BILLING_ADDRESS: 'Invalid default billing address',
};

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

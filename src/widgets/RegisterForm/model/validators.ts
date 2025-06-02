import { ERROR_MESSAGES } from './constants';
import type { RegisterFormValidators } from './types';

export const validators: RegisterFormValidators = {
  defaultShippingAddress: {
    required: ERROR_MESSAGES.SHIPPING_ADDRESS_REQUIRED,
    validate: (value) =>
      (typeof value === 'number' && value >= 0) ||
      ERROR_MESSAGES.INVALID_SHIPPING_ADDRESS,
  },
  defaultBillingAddress: {
    required: ERROR_MESSAGES.BILLING_ADDRESS_REQUIRED,
    validate: (value) =>
      (typeof value === 'number' && value >= 0) ||
      ERROR_MESSAGES.INVALID_BILLING_ADDRESS,
  },
};

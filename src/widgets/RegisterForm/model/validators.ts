import { ERROR_MESSAGES, MIN_AGE } from './constants';
import type { RegisterFormValidators } from './types';
import { REGEX } from '@/shared/constants';

export const validators: RegisterFormValidators = {
  firstName: {
    required: ERROR_MESSAGES.FIRST_NAME_REQUIRED,
    pattern: {
      value: REGEX.LETTERS_ONLY,
      message: ERROR_MESSAGES.LETTERS_ONLY,
    },
  },

  lastName: {
    required: ERROR_MESSAGES.LAST_NAME_REQUIRED,
    pattern: {
      value: REGEX.LETTERS_ONLY,
      message: ERROR_MESSAGES.LETTERS_ONLY,
    },
  },

  email: {
    required: ERROR_MESSAGES.EMAIL_REQUIRED,
    pattern: {
      value: REGEX.EMAIL,
      message: ERROR_MESSAGES.INVALID_EMAIL,
    },
  },

  password: {
    required: ERROR_MESSAGES.PASSWORD_REQUIRED,
    pattern: {
      value: REGEX.PASSWORD,
      message: ERROR_MESSAGES.INVALID_PASSWORD,
    },
  },

  birthDate: {
    validate: (birthDate: Date | undefined) => {
      if (!birthDate) return ERROR_MESSAGES.BIRTH_DATE_REQUIRED;
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= MIN_AGE || ERROR_MESSAGES.AGE_RESTRICTION;
    },
  },
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

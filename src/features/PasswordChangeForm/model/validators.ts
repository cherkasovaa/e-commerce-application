import { ERROR_MESSAGES } from './constants';
import { REGEX } from '@/shared/constants';

export const validators = {
  currentPassword: {
    required: ERROR_MESSAGES.REQUIRED,
  },
  newPassword: {
    required: ERROR_MESSAGES.REQUIRED,
    pattern: {
      value: REGEX.PASSWORD,
      message: ERROR_MESSAGES.INVALID_PASSWORD,
    },
  },
  confirmPassword: {
    required: ERROR_MESSAGES.CONFIRM_REQUIRED,
  },
};

import type { HttpErrorType } from '@commercetools/ts-client';
import { FORM_ERROR_MESSAGES } from './constants';

export const getServedErrorInfo = (error: HttpErrorType): string => {
  if (error.errors && error.errors.length > 0) {
    const ctError = error.errors[0];

    switch (ctError.code) {
      case 'InvalidCurrentPassword':
        return FORM_ERROR_MESSAGES.MESSAGES.INVALID_CURRENT_PASSWORD;

      case 'WeakPassword':
        return FORM_ERROR_MESSAGES.MESSAGES.WEAK_PASSWORD;

      case 'ConcurrentModification':
        return FORM_ERROR_MESSAGES.MESSAGES.CONCURRENT_MODIFICATION;

      default:
        return (
          ctError.message || FORM_ERROR_MESSAGES.MESSAGES.FAILED_CHANGE_PASSWORD
        );
    }
  }

  return error.message || FORM_ERROR_MESSAGES.MESSAGES.FAILED_CHANGE_PASSWORD;
};

export const getCustomErrorInfo = (errorMessage: string): string => {
  switch (errorMessage) {
    case 'Customer not found':
      return FORM_ERROR_MESSAGES.MESSAGES.CUSTOMER_NOT_FOUND;
    default:
      return (
        errorMessage || FORM_ERROR_MESSAGES.MESSAGES.FAILED_CHANGE_PASSWORD
      );
  }
};

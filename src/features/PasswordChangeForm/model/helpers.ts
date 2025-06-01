import type { HttpErrorType } from '@commercetools/ts-client';

export const mapServerErrors = (error: HttpErrorType) => {
  if (error.errors) {
    const ctError = error.errors[0];

    switch (ctError.code) {
      case 'InvalidCurrentPassword':
        return 'Current password is incorrect';
      case 'WeakPassword':
        return 'New password is too weak';
      default:
        return 'Failed to change password';
    }
  }

  return 'Failed to change password. Please try again.';
};

import { type HttpErrorType } from '@commercetools/ts-client';

export const mapServerErrors = (error: HttpErrorType): string => {
  switch (error.code) {
    case 'invalid_customer_account_credentials':
      return 'check your email and password and try again';
    default:
      return 'unknown error occured. Try again later';
  }
};

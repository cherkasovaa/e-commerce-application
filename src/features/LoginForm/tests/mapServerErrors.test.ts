import { describe, expect, it } from 'vitest';
import { mapServerErrors } from '../model';
import { type HttpErrorType } from '@commercetools/ts-client';

describe('test: mapServerErrors for login form', () => {
  it('should return error for not found user', () => {
    const error: HttpErrorType = {
      code: 'invalid_customer_account_credentials',
      method: 'POST',
      statusCode: 401,
    };
    const result = mapServerErrors(error);
    expect(result).toBe('Сheck your email and password and try again');
  });
  it('should return error for not found user', () => {
    const error: HttpErrorType = {
      code: 'unknown error',
      method: 'POST',
      statusCode: 401,
    };
    const result = mapServerErrors(error);
    expect(result).toBe('Unknown error occured. Try again later');
  });
});

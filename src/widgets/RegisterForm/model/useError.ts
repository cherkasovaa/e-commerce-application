import { RESPONSE_ERROR_MESSAGES } from './constants';
import { isErrorKey } from './types';
import { type HttpErrorType } from '@commercetools/ts-client';

export const getErrorInfo = (error: HttpErrorType) => {
  const statusCode = error.error?.statusCode;
  const reasonCode = error.code;

  const statusCodeTyped =
    typeof statusCode === 'string' || typeof statusCode === 'number'
      ? String(statusCode)
      : '';

  const detailedKey = `${statusCode}:${reasonCode}`;
  if (isErrorKey(detailedKey)) {
    return RESPONSE_ERROR_MESSAGES[detailedKey];
  }

  if (isErrorKey(statusCodeTyped)) {
    return RESPONSE_ERROR_MESSAGES[statusCodeTyped];
  }

  return RESPONSE_ERROR_MESSAGES.default;
};

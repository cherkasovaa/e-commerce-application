import { RESPONSE_ERROR_MESSAGES } from './constants';
import { isErrorKey } from './types';
import { type HttpErrorType } from '@commercetools/ts-client';

export const getErrorInfo = (error: HttpErrorType) => {
  const statusCode = error.error?.statusCode;
  const reasonCode = error.code;
  const key = `${statusCode}${reasonCode ? ':' + reasonCode : ''}`;

  let errorInfo;
  if (isErrorKey(key)) {
    errorInfo = RESPONSE_ERROR_MESSAGES[key];
  } else {
    errorInfo = RESPONSE_ERROR_MESSAGES.default;
  }

  return errorInfo;
};

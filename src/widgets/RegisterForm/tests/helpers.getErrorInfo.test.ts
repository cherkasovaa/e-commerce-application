import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getErrorInfo } from '../model/helpers';
import * as typesModule from '../model/types';
import { RESPONSE_ERROR_MESSAGES } from '../model/constants';
import type { HttpErrorType, MethodType } from '@commercetools/ts-client';
const spy = vi.spyOn(typesModule, 'isErrorKey');
beforeEach(() => {
  vi.clearAllMocks();
});

const createMockError = (
  statusCode: number,
  code: string,
  method: MethodType = 'GET'
): HttpErrorType => ({
  error: { statusCode },
  code,
  method,
  statusCode,
});

describe('getErrorInfo', () => {
  it('should return a correct error for the specified error', () => {
    spy.mockImplementation((key) => key === '400:DuplicateField');
    const error = createMockError(400, 'DuplicateField');
    const result = getErrorInfo(error);
    expect(result).toBe(RESPONSE_ERROR_MESSAGES['400:DuplicateField']);
    expect(spy).toHaveBeenCalledWith('400:DuplicateField');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should return a correct error for the usual code error', () => {
    spy.mockImplementation((key) => key === '403');
    const error = createMockError(403, 'Forbidden');
    const result = getErrorInfo(error);
    expect(result).toBe(RESPONSE_ERROR_MESSAGES['403']);
    expect(spy).toHaveBeenCalledWith('403:Forbidden');
    expect(spy).toHaveBeenCalledWith('403');
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return a default error for a not described error', () => {
    spy.mockReturnValue(false);

    const error = createMockError(0, '');
    const result = getErrorInfo(error);
    expect(result).toBe(RESPONSE_ERROR_MESSAGES['default']);
    expect(spy).toHaveBeenCalledWith('0:');
    expect(spy).toHaveBeenCalledWith('0');
    expect(spy).toHaveBeenCalledTimes(2);
  });
});

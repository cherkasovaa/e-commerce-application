import { describe, expect, it } from 'vitest';
import { validateEmail } from '../model';
import { EMAIL_ERRORS } from '../model/validationConstants';

describe('test: validateEmail for login form', () => {
  it('should return error for leading/trailing spaces', () => {
    const input = '  test@test.com  ';
    const result = validateEmail(input);
    expect(result).toBe(EMAIL_ERRORS.SPACES);
  });

  it('should return error for invalid email format', () => {
    const input = 'invalid-email@';
    const result = validateEmail(input);
    expect(result).toBe(EMAIL_ERRORS.INVALID_FORMAT);
  });

  it('should return empty string for valid email', () => {
    const input = 'test@test.com';
    const result = validateEmail(input);
    expect(result).toBe('');
  });
});

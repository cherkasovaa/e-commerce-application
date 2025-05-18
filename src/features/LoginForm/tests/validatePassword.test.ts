import { describe, it, expect } from 'vitest';
import { validatePassword } from '../model';
import { PASSWORD_ERRORS } from '../model/validationConstants';

describe('test: validatePassword for login form', () => {
  it('should return error for leading/trailing spaces', () => {
    const input = '  not valid with trailing spaces  ';
    const result = validatePassword(input);
    expect(result).toBe(PASSWORD_ERRORS.SPACES);
  });

  it('should return error for password shorter than 8 characters', () => {
    const input = 'A1!b';
    const result = validatePassword(input);
    expect(result).toBe(PASSWORD_ERRORS.LENGTH);
  });

  it('should return error when missing uppercase letter', () => {
    const input = 'valid123!';
    const result = validatePassword(input);
    expect(result).toBe(PASSWORD_ERRORS.UPPERCASE);
  });

  it('should return error when missing lowercase letter', () => {
    const input = 'VALID123!';
    const result = validatePassword(input);
    expect(result).toBe(PASSWORD_ERRORS.LOWERCASE);
  });

  it('should return error when missing digit', () => {
    const input = 'ValidPass!';
    const result = validatePassword(input);
    expect(result).toBe(PASSWORD_ERRORS.DIGIT);
  });

  it('should return error when missing special character', () => {
    const input = 'Valid1234';
    const result = validatePassword(input);
    expect(result).toBe(PASSWORD_ERRORS.SPECIAL);
  });

  it('should return empty string when password is valid', () => {
    const input = 'Valid123!';
    const result = validatePassword(input);
    expect(result).toBe('');
  });
});

import { ERROR_MESSAGES, MIN_AGE, REGEX } from './constants';

export const validateFirstName = {
  required: { value: true, message: ERROR_MESSAGES.FIRST_NAME_REQUIRED },
  pattern: { value: REGEX.LETTERS_ONLY, message: ERROR_MESSAGES.LETTERS_ONLY },
};

export const validateLastName = {
  required: { value: true, message: ERROR_MESSAGES.LAST_NAME_REQUIRED },
  pattern: { value: REGEX.LETTERS_ONLY, message: ERROR_MESSAGES.LETTERS_ONLY },
};

export const validateEmail = {
  required: { value: true, message: ERROR_MESSAGES.EMAIL_REQUIRED },
  pattern: { value: REGEX.EMAIL, message: ERROR_MESSAGES.INVALID_EMAIL },
};

export const validatePassword = {
  required: { value: true, message: ERROR_MESSAGES.PASSWORD_REQUIRED },
  pattern: { value: REGEX.PASSWORD, message: ERROR_MESSAGES.INVALID_PASSWORD },
};

export const validateAge = (birthDate: Date | undefined): boolean | string => {
  if (!birthDate) return ERROR_MESSAGES.BIRTH_DATE_REQUIRED;
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  return age >= MIN_AGE || ERROR_MESSAGES.AGE_RESTRICTION;
};

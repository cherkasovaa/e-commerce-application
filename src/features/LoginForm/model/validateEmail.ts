import { EMAIL_ERRORS, EMAIL_REGEX } from './validationConstants';

export const validateEmail = (value: string): string => {
  const trimmed = value.trim();

  switch (true) {
    case value !== trimmed:
      return EMAIL_ERRORS.SPACES;

    case !EMAIL_REGEX.test(trimmed):
      return EMAIL_ERRORS.INVALID_FORMAT;

    default:
      return '';
  }
};

import { PASSWORD_ERRORS, PASSWORD_REGEX } from './validationConstants';

export const validatePassword = (value: string): string => {
  const trimmed = value.trim();

  switch (true) {
    case value !== trimmed:
      return PASSWORD_ERRORS.SPACES;

    case trimmed.length < 8:
      return PASSWORD_ERRORS.LENGTH;

    case !PASSWORD_REGEX.UPPERCASE.test(trimmed):
      return PASSWORD_ERRORS.UPPERCASE;

    case !PASSWORD_REGEX.LOWERCASE.test(trimmed):
      return PASSWORD_ERRORS.LOWERCASE;

    case !PASSWORD_REGEX.DIGIT.test(trimmed):
      return PASSWORD_ERRORS.DIGIT;

    case !PASSWORD_REGEX.SPECIAL.test(trimmed):
      return PASSWORD_ERRORS.SPECIAL;

    default:
      return '';
  }
};

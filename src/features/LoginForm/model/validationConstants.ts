export const PASSWORD_REGEX = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  DIGIT: /\d/,
  SPECIAL: /[!@#$%^&*(),.?":{}|<>]/,
};

export const PASSWORD_ERRORS = {
  SPACES: 'Password must not contain leading or trailing spaces',
  LENGTH: 'Password must be at least 8 characters',
  UPPERCASE: 'Password must contain at least one uppercase letter',
  LOWERCASE: 'Password must contain at least one lowercase letter',
  DIGIT: 'Password must contain at least one digit',
  SPECIAL: 'Password must contain at least one special character',
};

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const EMAIL_ERRORS = {
  SPACES: 'Email must not contain leading or trailing spaces',
  INVALID_FORMAT: 'Invalid email format',
};

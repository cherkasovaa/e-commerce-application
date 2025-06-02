export const ERROR_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_PASSWORD:
    'Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number',
  CONFIRM_REQUIRED: 'Please confirm your new password',
};

export const FORM_ERROR_MESSAGES = {
  TITLES: {
    INVALID_PASSWORD: 'Invalid Password',
    WEAK_PASSWORD: 'Weak Password',
    PASSWORD_CHANGE_FAILED: 'Password Change Failed',
    CONCURRENT_MODIFICATION: 'Data Conflict',
    CUSTOMER_NOT_FOUND: 'User Not Found',
  },
  MESSAGES: {
    INVALID_CURRENT_PASSWORD:
      'The current password you entered is incorrect. Please try again.',
    WEAK_PASSWORD:
      'The new password is too weak. Please choose a stronger password with at least 8 characters, including uppercase, lowercase, and numbers.',
    FAILED_CHANGE_PASSWORD: 'Failed to change password. Please try again.',
    CONCURRENT_MODIFICATION:
      'Your data was modified by another session. Please refresh the page and try again.',
    CUSTOMER_NOT_FOUND:
      'User session expired or not found. Please log in again.',
  },
} as const;

export const ACTIONS = {
  SET_FIRST_NAME: 'setFirstName',
  SET_LAST_NAME: 'setLastName',
  CHANGE_EMAIL: 'changeEmail',
  SET_DATE_OF_BIRTH: 'setDateOfBirth',
} as const;

export const ERROR_MESSAGES = {
  TITLES: {
    DUPLICATE_EMAIL: 'Email Already Registered',
    CONCURRENT_MODIFICATION: 'Data Conflict',
    GENERAL_ERROR: 'An Error Occurred',
    CUSTOMER_NOT_FOUND: 'User Not Found',
    NO_CHANGES: 'No Changes Detected',
  },
  MESSAGES: {
    DUPLICATE_EMAIL:
      'This email is already in use by another user. Please try using a different email address.',
    CONCURRENT_MODIFICATION:
      'The data has been modified by another user. Please refresh the page and try again.',
    DEFAULT_UPDATE_FAILED: 'Failed to update profile. Please try again.',
    UNKNOWN_ERROR: 'Something went wrong. Please try again.',
    CUSTOMER_NOT_FOUND:
      'User session expired or not found. Please log in again.',
    NO_CHANGES_TO_UPDATE:
      'No changes were detected. Please modify some fields before saving.',
  },
} as const;

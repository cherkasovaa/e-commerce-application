export const ACTIONS = {
  REMOVE_ADDRESS: 'removeAddress',
  ADD_ADDRESS: 'addAddress',
  CHANGE_ADDRESS: 'changeAddress',
  DEFAULT_SHIPPING: 'setDefaultShippingAddress',
  DEFAULT_BILLING: 'setDefaultBillingAddress',
} as const;

export const ERROR_MESSAGES = {
  TITLES: {
    CONCURRENT_MODIFICATION: 'Data Conflict',
    GENERAL_ERROR: 'An Error Occurred',
    INVALID_OPERATION: 'Invalid Operation',
    INVALID_INPUT: 'Invalid Data',
    REQUIRED_FIELD: 'Missing Required Field',
    INVALID_COUNTRY: 'Invalid Country',
    INVALID_POSTAL_CODE: 'Invalid Postal Code',
    DUPLICATE_ADDRESS: 'Duplicate Address',
    ADDRESS_NOT_FOUND: 'Address Not Found',
    CUSTOMER_NOT_FOUND: 'User Not Found',
    NO_CHANGES: 'No Changes Detected',
  },
  MESSAGES: {
    CONCURRENT_MODIFICATION:
      'The data has been modified by another user. Please refresh the page and try again.',
    DEFAULT_UPDATE_FAILED: 'Failed to update profile. Please try again.',
    UNKNOWN_ERROR: 'Something went wrong. Please try again.',
    ADDRESS_NOT_FOUND:
      'Address not found. Please refresh the page and try again.',
    INVALID_ADDRESS_OPERATION:
      'Invalid address operation. Please check your data.',
    ADDRESS_CONCURRENT_MODIFICATION:
      'Address data was modified by another user. Please refresh and try again.',
    INVALID_JSON_INPUT: 'Invalid address data format. Please check all fields.',
    INVALID_COUNTRY_CODE:
      'Invalid country selected. Please choose a valid country.',
    INVALID_POSTAL_CODE_FORMAT:
      'Invalid postal code format for the selected country.',
    DUPLICATE_ADDRESS_EXISTS: 'This address already exists.',
    FAILED_UPDATE_ADDRESSES: 'Failed to update addresses. Please try again.',
    CUSTOMER_NOT_FOUND:
      'User session expired or not found. Please log in again.',
    NO_CHANGES_TO_UPDATE:
      'No changes were detected. Please modify some fields before saving.',
  },
} as const;

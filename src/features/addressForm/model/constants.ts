export const REGEX = {
  LETTERS_ONLY: /^[A-Za-z]+$/,
};

export const ERROR_MESSAGES = {
  COUNTRY_REQUIRED: 'Country is required',
  CITY_REQUIRED: 'City is required',
  STREET_REQUIRED: 'Street is required',
  POSTCODE_REQUIRED: 'Postcode is required',

  MIN_LENGTH: 'Field should contain at least 1 symbol',
  LETTERS_ONLY: 'Only letters allowed',
  INVALID_POSTCODES: 'Invalid postal code for selected country',
  NO_COUNTRY: 'Select a country first',
};

export const MIN_LENGTH = {
  CITY: 1,
  STREET: 1,
};

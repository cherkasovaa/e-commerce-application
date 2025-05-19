import { ERROR_MESSAGES, REGEX, MIN_LENGTH } from './constants';
import PostalCodes from 'postal-codes-js';
import type { FieldValues } from 'react-hook-form';
import type { AddressValidators, AddressDynamicValidators } from './types';

export const createValidators = <
  T extends FieldValues,
>(): AddressValidators<T> => ({
  country: {
    required: { value: true, message: ERROR_MESSAGES.COUNTRY_REQUIRED },
  },
  city: {
    required: { value: true, message: ERROR_MESSAGES.CITY_REQUIRED },
    minLength: { value: MIN_LENGTH.CITY, message: ERROR_MESSAGES.MIN_LENGTH },
    pattern: {
      value: REGEX.LETTERS_ONLY,
      message: ERROR_MESSAGES.LETTERS_ONLY,
    },
  },
  street: {
    required: { value: true, message: ERROR_MESSAGES.STREET_REQUIRED },
    minLength: { value: MIN_LENGTH.STREET, message: ERROR_MESSAGES.MIN_LENGTH },
  },
});

export const createDynamicValidators = <
  T extends FieldValues,
>(): AddressDynamicValidators<T> => ({
  postcode: (countryCode?: string) => ({
    validate: (value: string) => {
      if (!value) return ERROR_MESSAGES.POSTCODE_REQUIRED;
      if (!countryCode) return ERROR_MESSAGES.NO_COUNTRY;
      const result = PostalCodes.validate(countryCode, value);
      return result === true ? true : ERROR_MESSAGES.INVALID_POSTCODE;
    },
  }),
});

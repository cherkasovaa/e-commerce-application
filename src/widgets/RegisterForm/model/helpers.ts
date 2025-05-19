import { RESPONSE_ERROR_MESSAGES } from './constants';
import { isErrorKey, type RegisterFormData } from './types';
import { type HttpErrorType } from '@commercetools/ts-client';
import { type CustomerDraft } from '@commercetools/platform-sdk';

export const getErrorInfo = (error: HttpErrorType) => {
  const statusCode = error.error?.statusCode;
  const reasonCode = error.code;

  const statusCodeTyped =
    typeof statusCode === 'string' || typeof statusCode === 'number'
      ? String(statusCode)
      : '';

  const detailedKey = `${statusCode}:${reasonCode}`;
  if (isErrorKey(detailedKey)) {
    return RESPONSE_ERROR_MESSAGES[detailedKey];
  }

  if (isErrorKey(statusCodeTyped)) {
    return RESPONSE_ERROR_MESSAGES[statusCodeTyped];
  }

  return RESPONSE_ERROR_MESSAGES.default;
};

export function mapDataToCustomerDraft(
  formData: RegisterFormData
): CustomerDraft {
  const addresses = formData.addresses.map((addressInfo) => ({
    streetName: addressInfo.street,
    postalCode: addressInfo.postcode,
    city: addressInfo.city,
    country: addressInfo.country.code,
  }));

  const dateOfBirth = formData.birthDate
    ? formData.birthDate instanceof Date
      ? formData.birthDate.toISOString().split('T')[0]
      : formData.birthDate
    : undefined;

  return {
    email: formData.email,
    password: formData.password,
    firstName: formData.firstName,
    lastName: formData.lastName,
    dateOfBirth,
    addresses,
    defaultShippingAddress: formData.defaultShippingAddress,
    defaultBillingAddress: formData.defaultBillingAddress,
  };
}

import type { RegisterFormData } from './types';
import type { CustomerDraft } from '@commercetools/platform-sdk';

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

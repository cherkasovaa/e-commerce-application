import type { RegisterFormData } from './types';
import type { CustomerDraft } from '@commercetools/platform-sdk';

export function mapDataToCustomerDraft(
  formData: RegisterFormData
): CustomerDraft {
  const addresses = [
    {
      streetName: formData.address.street,
      postalCode: formData.address.postcode,
      city: formData.address.city,
      country: formData.address.country.code,
    },
  ];
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
    defaultShippingAddress: addresses.length > 0 ? 0 : undefined,
    defaultBillingAddress: addresses.length > 0 ? 0 : undefined,
  };
}

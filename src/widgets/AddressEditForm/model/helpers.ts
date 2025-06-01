import { ACTIONS } from './constants';
import type { AddressUpdateAction, AddressEditFormData } from './types';
import type { HttpErrorType } from '@commercetools/ts-client';
import type { Customer } from '@commercetools/platform-sdk';

export const createAddressUpdateActions = (
  data: AddressEditFormData,
  currentUser: Customer
): AddressUpdateAction[] => {
  const actions: AddressUpdateAction[] = [];
  const currentAddresses = currentUser.addresses || [];

  data.addresses.forEach((newAddress, index) => {
    const existingAddress = currentAddresses[index]; // Сравниваем по индексу

    if (!existingAddress) {
      actions.push({
        action: ACTIONS.ADD_ADDRESS,
        address: {
          country: newAddress.country.code,
          city: newAddress.city,
          streetName: newAddress.street,
          postalCode: newAddress.postcode,
        },
      });
    } else {
      const hasChanges =
        existingAddress.country !== newAddress.country.code ||
        existingAddress.city !== newAddress.city ||
        existingAddress.streetName !== newAddress.street ||
        existingAddress.postalCode !== newAddress.postcode;
      if (hasChanges && existingAddress.id) {
        actions.push({
          action: ACTIONS.CHANGE_ADDRESS,
          addressId: existingAddress.id,
          address: {
            country: newAddress.country.code,
            city: newAddress.city,
            streetName: newAddress.street,
            postalCode: newAddress.postcode,
          },
        });
      }
    }
  });

  if (currentAddresses.length > data.addresses.length) {
    for (let i = data.addresses.length; i < currentAddresses.length; i++) {
      const addressToRemove = currentAddresses[i];
      if (addressToRemove.id) {
        actions.push({
          action: ACTIONS.REMOVE_ADDRESS,
          addressId: addressToRemove.id,
        });
      }
    }
  }

  if (data.defaultShippingAddressId !== currentUser.defaultShippingAddressId) {
    actions.push({
      action: ACTIONS.DEFAULT_SHIPPING,
      addressId: data.defaultShippingAddressId,
    });
  }

  if (data.defaultBillingAddressId !== currentUser.defaultBillingAddressId) {
    actions.push({
      action: ACTIONS.DEFAULT_BILLING,
      addressId: data.defaultBillingAddressId,
    });
  }

  return actions;
};

//TO DO: put as const
export const mapAddressServerErrors = (error: HttpErrorType) => {
  console.log(error);

  if (error.errors) {
    const ctError = error.errors[0];

    switch (ctError.code) {
      case 'InvalidOperation':
        if (ctError.message.includes('does not contain an address')) {
          throw new Error(
            'Address not found. Please refresh the page and try again.'
          );
        }
        throw new Error('Invalid address operation. Please check your data.');

      case 'ConcurrentModification':
        throw new Error(
          'Address data was modified by another user. Please refresh and try again.'
        );

      case 'InvalidJsonInput':
        throw new Error(
          'Invalid address data format. Please check all fields.'
        );

      case 'RequiredField':
        throw new Error(
          `Required field missing: ${ctError.field || 'unknown field'}`
        );

      case 'InvalidCountryCode':
        throw new Error(
          'Invalid country selected. Please choose a valid country.'
        );

      case 'InvalidPostalCode':
        throw new Error('Invalid postal code format for the selected country.');

      case 'DuplicateAddress':
        throw new Error('This address already exists.');

      default:
        throw new Error(ctError.message || 'Failed to update addresses');
    }
  }

  throw new Error('Failed to update addresses. Please try again.');
};

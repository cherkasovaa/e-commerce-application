import { ACTIONS, ERROR_MESSAGES } from './constants';
import type {
  AddressUpdateAction,
  AddressEditFormData,
  ErrorInfo,
} from './types';
import type { HttpErrorType } from '@commercetools/ts-client';
import type { Customer } from '@commercetools/platform-sdk';

export const createAddressUpdateActions = (
  data: AddressEditFormData,
  currentUser: Customer
): AddressUpdateAction[] => {
  const actions: AddressUpdateAction[] = [];
  const currentAddresses = currentUser.addresses || [];

  data.addresses.forEach((newAddress, index) => {
    const existingAddress = currentAddresses[index];

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

export const getServerErrorInfo = (error: HttpErrorType): ErrorInfo => {
  if (error.errors && error.errors.length > 0) {
    const ctError = error.errors[0];

    switch (ctError.code) {
      case 'InvalidOperation':
        if (ctError.message?.includes('does not contain an address')) {
          return {
            title: ERROR_MESSAGES.TITLES.ADDRESS_NOT_FOUND,
            message: ERROR_MESSAGES.MESSAGES.ADDRESS_NOT_FOUND,
          };
        }
        return {
          title: ERROR_MESSAGES.TITLES.INVALID_OPERATION,
          message: ERROR_MESSAGES.MESSAGES.INVALID_ADDRESS_OPERATION,
        };

      case 'ConcurrentModification':
        return {
          title: ERROR_MESSAGES.TITLES.CONCURRENT_MODIFICATION,
          message: ERROR_MESSAGES.MESSAGES.ADDRESS_CONCURRENT_MODIFICATION,
        };

      case 'InvalidJsonInput':
        return {
          title: ERROR_MESSAGES.TITLES.INVALID_INPUT,
          message: ERROR_MESSAGES.MESSAGES.INVALID_JSON_INPUT,
        };

      case 'RequiredField':
        return {
          title: ERROR_MESSAGES.TITLES.REQUIRED_FIELD,
          message: `Required field missing: ${ctError.field || 'unknown field'}`,
        };

      case 'InvalidCountryCode':
        return {
          title: ERROR_MESSAGES.TITLES.INVALID_COUNTRY,
          message: ERROR_MESSAGES.MESSAGES.INVALID_COUNTRY_CODE,
        };

      case 'InvalidPostalCode':
        return {
          title: ERROR_MESSAGES.TITLES.INVALID_POSTAL_CODE,
          message: ERROR_MESSAGES.MESSAGES.INVALID_POSTAL_CODE_FORMAT,
        };

      case 'DuplicateAddress':
        return {
          title: ERROR_MESSAGES.TITLES.DUPLICATE_ADDRESS,
          message: ERROR_MESSAGES.MESSAGES.DUPLICATE_ADDRESS_EXISTS,
        };

      default:
        return {
          title: ERROR_MESSAGES.TITLES.GENERAL_ERROR,
          message:
            ctError.message || ERROR_MESSAGES.MESSAGES.FAILED_UPDATE_ADDRESSES,
        };
    }
  }
  return {
    title: ERROR_MESSAGES.TITLES.GENERAL_ERROR,
    message: error.message || ERROR_MESSAGES.MESSAGES.UNKNOWN_ERROR,
  };
};

export const getCustomErrorInfo = (errorMessage: string): ErrorInfo => {
  switch (errorMessage) {
    case 'Customer not found':
      return {
        title: ERROR_MESSAGES.TITLES.CUSTOMER_NOT_FOUND,
        message: ERROR_MESSAGES.MESSAGES.CUSTOMER_NOT_FOUND,
      };

    case 'No changes to update':
      return {
        title: ERROR_MESSAGES.TITLES.NO_CHANGES,
        message: ERROR_MESSAGES.MESSAGES.NO_CHANGES_TO_UPDATE,
      };

    default:
      return {
        title: ERROR_MESSAGES.TITLES.GENERAL_ERROR,
        message: errorMessage || ERROR_MESSAGES.MESSAGES.UNKNOWN_ERROR,
      };
  }
};

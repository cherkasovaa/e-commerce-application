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
  const currentAddressMap = new Map(
    currentAddresses.map((addr) => [addr.id, addr])
  );

  data.addresses.forEach((formAddress) => {
    const isTemporaryId = formAddress.id?.startsWith('tempId_');

    if (isTemporaryId) {
      actions.push({
        action: ACTIONS.ADD_ADDRESS,
        address: {
          country: formAddress.country.code,
          city: formAddress.city,
          streetName: formAddress.street,
          postalCode: formAddress.postcode,
        },
      });
    } else if (formAddress.id) {
      const existingAddress = currentAddressMap.get(formAddress.id);

      if (existingAddress) {
        const hasChanges =
          existingAddress.country !== formAddress.country.code ||
          existingAddress.city !== formAddress.city ||
          existingAddress.streetName !== formAddress.street ||
          existingAddress.postalCode !== formAddress.postcode;

        if (hasChanges) {
          actions.push({
            action: ACTIONS.CHANGE_ADDRESS,
            addressId: existingAddress.id,
            address: {
              country: formAddress.country.code,
              city: formAddress.city,
              streetName: formAddress.street,
              postalCode: formAddress.postcode,
            },
          });
        }
      }
    }
  });

  const formAddressIds = new Set(
    data.addresses
      .map((addr) => addr.id)
      .filter((id) => id && !id.startsWith('tempId_'))
  );

  currentAddresses.forEach((currentAddr) => {
    if (currentAddr.id && !formAddressIds.has(currentAddr.id)) {
      actions.push({
        action: ACTIONS.REMOVE_ADDRESS,
        addressId: currentAddr.id,
      });
    }
  });

  if (
    currentUser.defaultShippingAddressId !== data.defaultShippingAddressId &&
    data.defaultShippingAddressId &&
    !data.defaultShippingAddressId.startsWith('tempId_')
  ) {
    actions.push({
      action: ACTIONS.DEFAULT_SHIPPING,
      addressId: data.defaultShippingAddressId,
    });
  }
  if (
    currentUser.defaultBillingAddressId !== data.defaultBillingAddressId &&
    data.defaultBillingAddressId &&
    !data.defaultBillingAddressId.startsWith('tempId_')
  ) {
    actions.push({
      action: ACTIONS.DEFAULT_BILLING,
      addressId: data.defaultBillingAddressId,
    });
  }
  return actions;
};

export const createDefaultAddressActions = (
  data: AddressEditFormData,
  currentUser: Customer,
  updatedUser: Customer
): AddressUpdateAction[] => {
  const actions: AddressUpdateAction[] = [];
  const getNewAddressId = (tempId: string): string | null => {
    const tempIndex = data.addresses.findIndex((addr) => addr.id === tempId);
    if (tempIndex === -1) return null;
    let newAddressesBeforeCount = 0;
    for (let i = 0; i < tempIndex; i++) {
      if (data.addresses[i].id?.startsWith('tempId_')) {
        newAddressesBeforeCount++;
      }
    }
    const currentAddressCount = currentUser.addresses?.length || 0;
    const newAddressIndex = currentAddressCount + newAddressesBeforeCount;
    const newAddress = updatedUser.addresses?.[newAddressIndex];
    return newAddress?.id || null;
  };

  if (data.defaultShippingAddressId?.startsWith('tempId_')) {
    const realAddressId = getNewAddressId(data.defaultShippingAddressId);
    if (realAddressId) {
      actions.push({
        action: ACTIONS.DEFAULT_SHIPPING,
        addressId: realAddressId,
      });
    }
  }

  if (data.defaultBillingAddressId?.startsWith('tempId_')) {
    const realAddressId = getNewAddressId(data.defaultBillingAddressId);
    if (realAddressId) {
      actions.push({
        action: ACTIONS.DEFAULT_BILLING,
        addressId: realAddressId,
      });
    }
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

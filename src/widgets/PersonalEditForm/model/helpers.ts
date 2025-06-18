import type { PersonalFormData } from '@/features/personalForm/model';
import { ACTIONS, ERROR_MESSAGES } from './constants';
import type {
  CustomerSetFirstNameAction,
  CustomerSetLastNameAction,
  CustomerChangeEmailAction,
  CustomerSetDateOfBirthAction,
} from '@commercetools/platform-sdk';
import type { PersonalUpdateAction, ErrorInfo } from './types';
import type { HttpErrorType } from '@commercetools/ts-client';

export const createUpdateActions = (
  data: PersonalFormData
): PersonalUpdateAction[] => {
  const actionMappings = [
    {
      condition: !!data.firstName,
      create: (): CustomerSetFirstNameAction => ({
        action: ACTIONS.SET_FIRST_NAME,
        firstName: data.firstName,
      }),
    },
    {
      condition: !!data.lastName,
      create: (): CustomerSetLastNameAction => ({
        action: ACTIONS.SET_LAST_NAME,
        lastName: data.lastName,
      }),
    },
    {
      condition: !!data.email,
      create: (): CustomerChangeEmailAction => ({
        action: ACTIONS.CHANGE_EMAIL,
        email: data.email,
      }),
    },
    {
      condition: !!data.birthDate,
      create: (): CustomerSetDateOfBirthAction => ({
        action: ACTIONS.SET_DATE_OF_BIRTH,
        dateOfBirth: data.birthDate?.toISOString().split('T')[0],
      }),
    },
  ];

  return actionMappings
    .filter((mapping) => mapping.condition)
    .map((mapping) => mapping.create());
};

export const getServerErrorInfo = (error: HttpErrorType): ErrorInfo => {
  if (error.errors && error.errors.length > 0) {
    const ctError = error.errors[0];

    switch (ctError.code) {
      case 'DuplicateField':
        if (ctError.field === 'email') {
          return {
            title: ERROR_MESSAGES.TITLES.DUPLICATE_EMAIL,
            message: ERROR_MESSAGES.MESSAGES.DUPLICATE_EMAIL,
          };
        }
        break;

      case 'ConcurrentModification':
        return {
          title: ERROR_MESSAGES.TITLES.CONCURRENT_MODIFICATION,
          message: ERROR_MESSAGES.MESSAGES.CONCURRENT_MODIFICATION,
        };

      default:
        return {
          title: ERROR_MESSAGES.TITLES.GENERAL_ERROR,
          message:
            ctError.message || ERROR_MESSAGES.MESSAGES.DEFAULT_UPDATE_FAILED,
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

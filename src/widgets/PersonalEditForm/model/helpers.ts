import type { PersonalFormData } from '@/features/personalForm/model';
import { ACTIONS } from './constants';
import type {
  CustomerSetFirstNameAction,
  CustomerSetLastNameAction,
  CustomerChangeEmailAction,
  CustomerSetDateOfBirthAction,
} from '@commercetools/platform-sdk';
import type { PersonalUpdateAction } from './types';
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

//TO DO: put as const
export const mapServerErrors = (error: HttpErrorType) => {
  console.log(error);
  if (error.errors) {
    const ctError = error.errors[0];

    switch (ctError.code) {
      case 'DuplicateField':
        if (ctError.field === 'email') {
          throw new Error('This email is already registered');
        }
        break;
      case 'ConcurrentModification':
        throw new Error(
          'Data was modified by another user. Please refresh and try again.'
        );
      default:
        throw new Error(ctError.message || 'Failed to update profile');
    }
  }

  throw new Error('Failed to update profile. Please try again.');
};

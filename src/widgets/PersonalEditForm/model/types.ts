import type { PersonalFormData } from '@/features/personalForm/model';
import type {
  CustomerSetFirstNameAction,
  CustomerSetLastNameAction,
  CustomerChangeEmailAction,
  CustomerSetDateOfBirthAction,
} from '@commercetools/platform-sdk';

export interface PersonalEditFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date | undefined;
}

export interface PersonalEditFormProps {
  initialData: PersonalFormData;
  onSuccess: () => void;
  onCancel: () => void;
  onError: (error: Error) => void;
}

export interface UpdateCustomerVariables {
  version: number;
  actions: PersonalUpdateAction[];
}

export type PersonalUpdateAction =
  | CustomerSetFirstNameAction
  | CustomerSetLastNameAction
  | CustomerChangeEmailAction
  | CustomerSetDateOfBirthAction;

export interface ErrorInfo {
  title: string;
  message: string;
}

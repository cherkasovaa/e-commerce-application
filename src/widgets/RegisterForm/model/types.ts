import type { AddressData } from '@/features/addressForm';
import type { UseControllerProps } from 'react-hook-form';
import { RESPONSE_ERROR_MESSAGES } from './constants';

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date | undefined;
  address: AddressData;
}

export interface TextFieldConfig {
  key: Exclude<keyof RegisterFormData, 'address' | 'birthDate'>;
  label: string;
  type?: 'text' | 'password' | 'email';
}

export type RegisterFormValidators = {
  [K in keyof Omit<RegisterFormData, 'address'>]: UseControllerProps<
    RegisterFormData,
    K
  >['rules'];
};

export type ErrorKey =
  | '400:DuplicateField'
  | '403'
  | '404'
  | '429'
  | '500'
  | 'default';

export function isErrorKey(key: string): key is ErrorKey {
  return Object.keys(RESPONSE_ERROR_MESSAGES).includes(key);
}

export interface RegisterFormProps {
  onSuccess: () => void;
}

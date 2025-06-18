import type { AddressData } from '@/features/addressForm';
import type { UseControllerProps, Path } from 'react-hook-form';
import { RESPONSE_ERROR_MESSAGES } from './constants';
import type { PersonalFormData } from '@/features/personalForm/model';

export interface RegisterFormData extends PersonalFormData {
  addresses: AddressData[];
  defaultShippingAddress: number;
  defaultBillingAddress: number;
}

export interface TextFieldConfig {
  key: 'firstName' | 'lastName' | 'email' | 'password';
  label: string;
  type?: 'text' | 'password' | 'email';
}

export type RegisterFormValidators = {
  [K in 'defaultShippingAddress' | 'defaultBillingAddress']: UseControllerProps<
    RegisterFormData,
    K extends Path<RegisterFormData> ? K : never
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

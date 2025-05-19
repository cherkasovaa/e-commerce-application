import type { AddressData } from '@/features/addressForm';
import type { UseControllerProps } from 'react-hook-form';

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

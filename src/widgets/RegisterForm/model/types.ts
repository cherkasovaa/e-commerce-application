import type { AddressData } from '@/features/addressForm';

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date | undefined;
  address: AddressData;
}

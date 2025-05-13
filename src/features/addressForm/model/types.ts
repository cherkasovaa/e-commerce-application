import type { Control, Path, FieldValues } from 'react-hook-form';

export interface CountryType {
  code: string;
  label: string;
}

export interface AddressData {
  country: CountryType | null;
  city: string;
  street: string;
  postcode: string;
}

export interface AddressFieldNames<T> {
  country: Path<T>;
  city: Path<T>;
  street: Path<T>;
  postcode: Path<T>;
}

export interface AddressFormProps<T extends FieldValues> {
  control: Control<T>;
  title?: string;
  fieldNames: AddressFieldNames<T>;
}

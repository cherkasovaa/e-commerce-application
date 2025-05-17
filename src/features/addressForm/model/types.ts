import type {
  Control,
  Path,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

export interface CountryType {
  code: string;
  label: string;
}

export interface AddressData {
  country: CountryType;
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

export interface TextFieldConfig {
  key: Exclude<keyof AddressData, 'country'>;
  label: string;
  type?: 'text' | 'password' | 'email';
  dynamicValidation?: boolean;
}

export type StaticAddressFieldKey = keyof Omit<AddressData, 'postcode'>;
export type DynamicAddressFieldKey = 'postcode';

export type AddressValidators<T extends FieldValues> = Record<
  string,
  Omit<
    RegisterOptions<T, Path<T>>,
    'disabled' | 'setValueAs' | 'valueAsNumber' | 'valueAsDate'
  >
>;

export type AddressDynamicValidators<T extends FieldValues> = Record<
  string,
  (
    ...args: string[]
  ) => Omit<
    RegisterOptions<T, Path<T>>,
    'disabled' | 'setValueAs' | 'valueAsNumber' | 'valueAsDate'
  >
>;

export function isDynamicField(key: string): key is DynamicAddressFieldKey {
  return key === 'postcode';
}

import type {
  Control,
  FieldValues,
  Path,
  UseControllerProps,
} from 'react-hook-form';

export interface PersonalFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date | undefined;
}

export interface PersonalFieldNames<T> {
  firstName: Path<T>;
  lastName: Path<T>;
  email: Path<T>;
  password: Path<T>;
  birthDate: Path<T>;
}

export interface PersonalFormProps<T extends FieldValues> {
  control: Control<T>;
  title?: string;
  fieldNames: PersonalFieldNames<T>;
}

export interface TextFieldConfig {
  key: Exclude<keyof PersonalFormData, 'birthDate'>;
  label: string;
  type?: 'text' | 'password' | 'email';
}

export type PersonalFormValidators<T extends FieldValues> = {
  [K in keyof PersonalFormData]: UseControllerProps<T, Path<T>>['rules'];
};

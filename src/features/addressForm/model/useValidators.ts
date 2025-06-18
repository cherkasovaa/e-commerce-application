import { createValidators, createDynamicValidators } from './validators';
import type { FieldValues } from 'react-hook-form';

export const useValidators = <T extends FieldValues>() => {
  const validators = createValidators<T>();
  const dynamicValidators = createDynamicValidators<T>();

  return { validators, dynamicValidators };
};

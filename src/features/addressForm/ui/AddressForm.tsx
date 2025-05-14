import { Autocomplete, Box, Typography, TextField } from '@mui/material';
import type { FieldValues } from 'react-hook-form';
import { Controller, useWatch } from 'react-hook-form';
import type { CountryType, AddressFormProps } from '../model';
import {
  TEXT_FIELDS,
  useValidators,
  useCountryList,
  isDynamicField,
} from '../model';

export const AddressForm = <T extends FieldValues>({
  control,
  title = 'title',
  fieldNames,
}: AddressFormProps<T>) => {
  const selectedCountry = useWatch({ control, name: fieldNames.country });
  const countriesList = useCountryList();
  const { validators, dynamicValidators } = useValidators<T>();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {title && <Typography variant="subtitle1">{title}</Typography>}
      <Controller
        name={fieldNames.country}
        rules={validators.country}
        control={control}
        render={({ field, fieldState }) => {
          const value = field.value ?? null;
          return (
            <Autocomplete<CountryType>
              options={countriesList}
              getOptionLabel={(option) => option.label}
              isOptionEqualToValue={(option, value) =>
                option?.code === value?.code
              }
              value={value}
              onChange={(_, newValue) => {
                field.onChange(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          );
        }}
      />
      {TEXT_FIELDS.map(({ key, label }) => {
        return (
          <Controller
            key={key}
            name={fieldNames[key]}
            control={control}
            rules={
              isDynamicField(key)
                ? dynamicValidators[key](selectedCountry?.code)
                : validators[key]
            }
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                value={field.value ?? ''}
                label={label}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fullWidth
              />
            )}
          />
        );
      })}
    </Box>
  );
};

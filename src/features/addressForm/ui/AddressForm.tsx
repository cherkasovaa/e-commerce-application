import { Autocomplete, Box, Typography, TextField } from '@mui/material';
import type { FieldValues } from 'react-hook-form';
import { Controller, useWatch } from 'react-hook-form';
import type { CountryType, AddressFormProps } from '../model';
import {
  validateCountry,
  validateCity,
  validateStreet,
  validatePostcode,
} from '../model';
import { useEffect, useState } from 'react';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';

countries.registerLocale(enLocale);

export const AddressForm = <T extends FieldValues>({
  control,
  title = 'title',
  fieldNames,
}: AddressFormProps<T>) => {
  const [countriesList, setCountriesList] = useState<CountryType[]>([]);

  const selectedCountry = useWatch({
    control,
    name: fieldNames.country,
  });

  useEffect(() => {
    const countriesData = Object.entries(
      countries.getNames('en', { select: 'official' })
    ).map(([code, label]) => ({
      code,
      label,
    }));

    setCountriesList(countriesData);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {title && <Typography variant="subtitle1">{title}</Typography>}
      <Controller
        name={fieldNames.country}
        rules={validateCountry}
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
      <Controller
        name={fieldNames.city}
        rules={validateCity}
        control={control}
        render={({ field, fieldState }) => {
          const value = field.value ?? '';
          return (
            <TextField
              {...field}
              value={value}
              label="City"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            ></TextField>
          );
        }}
      />
      <Controller
        name={fieldNames.street}
        rules={validateStreet}
        control={control}
        render={({ field, fieldState }) => {
          const value = field.value ?? '';
          return (
            <TextField
              {...field}
              value={value}
              label="Street"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          );
        }}
      />

      <Controller
        name={fieldNames.postcode}
        control={control}
        rules={validatePostcode(selectedCountry?.code)}
        render={({ field, fieldState }) => {
          const value = field.value ?? '';
          return (
            <TextField
              {...field}
              value={value}
              label="Postcode"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          );
        }}
      />
    </Box>
  );
};

import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Controller, type FieldValues } from 'react-hook-form';
import { useState } from 'react';
import { TEXT_FIELDS, useValidators, type PersonalFormProps } from '../model';

export const PersonalForm = <T extends FieldValues>({
  control,
  fieldNames,
}: PersonalFormProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const validators = useValidators<T>();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <>
      {TEXT_FIELDS.map(({ key, label, type }) => {
        return (
          <Controller
            key={key}
            name={fieldNames[key]}
            control={control}
            rules={validators[key]}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                value={field.value ?? ''}
                label={label}
                type={key === 'password' && showPassword ? 'text' : type}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fullWidth
                slotProps={{
                  input: {
                    endAdornment:
                      key === 'password' ? (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={
                              showPassword
                                ? 'hide the password'
                                : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ) : undefined,
                  },
                }}
              />
            )}
          />
        );
      })}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          name={fieldNames.birthDate}
          control={control}
          rules={validators.birthDate}
          render={({ field, fieldState }) => (
            <DatePicker
              label="Date of Birth"
              value={field.value ?? null}
              onChange={(date) => field.onChange(date)}
              slotProps={{
                textField: {
                  error: !!fieldState.error,
                  helperText: fieldState.error?.message,
                  fullWidth: true,
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

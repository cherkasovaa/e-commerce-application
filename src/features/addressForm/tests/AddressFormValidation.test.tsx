import { describe, it, expect, vi } from 'vitest';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider, useForm } from 'react-hook-form';
import { AddressForm } from '../ui/AddressForm';
import { type AddressFieldNames } from '../model';

vi.mock('../model', async () => {
  const actual = await vi.importActual('../model');
  return {
    ...actual,
    useCountryList: () => [
      { code: 'US', label: 'United States' },
      { code: 'RU', label: 'Russian Federation' },
    ],
    TEXT_FIELDS: [
      { key: 'city', label: 'City' },
      { key: 'street', label: 'Street' },
      { key: 'postcode', label: 'Postcode' },
    ],
    isDynamicField: (key: string) => key === 'postcode',
  };
});

describe('AddressForm Validation', () => {
  it('should validate inputs and shows error messages', async () => {
    const user = userEvent.setup();
    const fieldNames: AddressFieldNames<{
      addresses: {
        country: string;
        city: string;
        street: string;
        postcode: string;
      };
    }> = {
      country: 'addresses.country',
      city: 'addresses.city',
      street: 'addresses.street',
      postcode: 'addresses.postcode',
    };

    const TestAddressForm = () => {
      const methods = useForm({
        defaultValues: {
          addresses: {
            country: '',
            city: '',
            street: '',
            postcode: '',
          },
        },
      });

      const onSubmit = methods.handleSubmit(() => {
        console.log('submit');
      });
      return (
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <AddressForm control={methods.control} fieldNames={fieldNames} />{' '}
            <button type="submit">Submit</button>
          </form>
        </FormProvider>
      );
    };

    const { container } = render(<TestAddressForm />);

    const countryField = screen.getByLabelText('Country');
    const cityField = screen.getByLabelText('City');
    const streetField = screen.getByLabelText('Street');
    const postcodeField = screen.getByLabelText('Postcode');
    const submitButton = screen.getByText('Submit');

    expect(countryField).toBeTruthy();
    expect(cityField).toBeTruthy();
    expect(streetField).toBeTruthy();
    expect(postcodeField).toBeTruthy();

    await act(async () => {
      await user.click(submitButton);
    });

    await waitFor(() => {
      const errors = container.querySelectorAll('.MuiFormHelperText-root');
      expect(errors.length).toBeGreaterThan(0);
    });

    await act(async () => {
      await user.click(countryField);
      const usOption = screen.getByText('Russian Federation');
      await user.click(usOption);

      await user.type(cityField, 'Moscow');
      await user.type(streetField, 'Arbat str');
      await user.type(postcodeField, '191000');
    });

    await waitFor(() => {
      const errors = container.querySelectorAll('.MuiFormHelperText-root');
      expect(errors.length).toBe(0);
    });
  });
});

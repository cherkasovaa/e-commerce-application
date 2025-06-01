import { Box, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AddressForm } from '@/features/addressForm';
import type { AddressEditFormProps, AddressEditFormData } from '../model';
import { useUpdateAddresses } from '../model';

export const AddressEditForm = ({
  initialData,
  onSuccess,
  onCancel,
  onError,
}: AddressEditFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    setValue,
  } = useForm<AddressEditFormData>({
    defaultValues: {
      addresses: initialData.addresses,
      defaultShippingAddressId: initialData.defaultShippingAddressId,
      defaultBillingAddressId: initialData.defaultBillingAddressId,
    },
  });

  const updateAddresses = useUpdateAddresses();

  const onSubmit = async (data: AddressEditFormData) => {
    updateAddresses(data)
      .then(() => {
        onSuccess();
      })
      .catch((err: string) => {
        onError(err);
      });
  };

  const addNewAddress = () => {
    const currentAddresses = watch('addresses');
    setValue('addresses', [
      ...currentAddresses,
      {
        country: { code: '', label: '' },
        city: '',
        street: '',
        postcode: '',
      },
    ]);
  };

  const removeAddress = (index: number) => {
    const currentAddresses = watch('addresses');
    setValue(
      'addresses',
      currentAddresses.filter((_, i) => i !== index)
    );
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 800 }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        {watch('addresses').map((_, index) => (
          <Box
            key={index}
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              p: 2,
              position: 'relative',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography variant="subtitle1">Address {index + 1}</Typography>
              {watch('addresses').length > 1 && (
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => removeAddress(index)}
                  disabled={isSubmitting}
                >
                  Remove
                </Button>
              )}
            </Box>

            <AddressForm
              control={control}
              fieldNames={{
                country: `addresses.${index}.country`,
                city: `addresses.${index}.city`,
                street: `addresses.${index}.street`,
                postcode: `addresses.${index}.postcode`,
              }}
            />

            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              <label>
                <input
                  type="radio"
                  name="defaultShipping"
                  checked={
                    watch('defaultShippingAddressId') === `address-${index}`
                  }
                  onChange={() =>
                    setValue('defaultShippingAddressId', `address-${index}`)
                  }
                />
                Default Shipping
              </label>
              <label>
                <input
                  type="radio"
                  name="defaultBilling"
                  checked={
                    watch('defaultBillingAddressId') === `address-${index}`
                  }
                  onChange={() =>
                    setValue('defaultBillingAddressId', `address-${index}`)
                  }
                />
                Default Billing
              </label>
            </Box>
          </Box>
        ))}

        <Button
          variant="outlined"
          onClick={addNewAddress}
          disabled={isSubmitting}
          sx={{ alignSelf: 'flex-start' }}
        >
          Add New Address
        </Button>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'flex-end',
            mt: 3,
          }}
        >
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </Button>
          <Button variant="outlined" onClick={onCancel} disabled={isSubmitting}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

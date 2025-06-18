import {
  Box,
  Button,
  Typography,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { AddressForm } from '@/features/addressForm';
import type { AddressEditFormProps, AddressEditFormData } from '../model';
import {
  useUpdateAddresses,
  getCustomErrorInfo,
  getServerErrorInfo,
} from '../model';
import { ErrorModal } from '@/shared/ui/ModalError';
import { useState } from 'react';

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

  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorModalTitle, setErrorModalTitle] = useState('');
  const [errorModalMessage, setErrorModalMessage] = useState('');
  const updateAddresses = useUpdateAddresses();

  const watchedAddresses = watch('addresses');
  const watchedShippingId = watch('defaultShippingAddressId');
  const watchedBillingId = watch('defaultBillingAddressId');

  const onSubmit = async (data: AddressEditFormData) => {
    updateAddresses(data)
      .then(() => {
        onSuccess();
      })
      .catch((err) => {
        const { title, message } =
          typeof err === 'string'
            ? getCustomErrorInfo(err)
            : getServerErrorInfo(err);
        setErrorModalTitle(title);
        setErrorModalMessage(message);
        setErrorModalOpen(true);
        onError(err);
      });
  };

  const addNewAddress = () => {
    const currentAddresses = watchedAddresses;
    setValue('addresses', [
      ...currentAddresses,
      {
        id: `tempId_${currentAddresses.length}`,
        country: { code: '', label: '' },
        city: '',
        street: '',
        postcode: '',
      },
    ]);
  };

  const removeAddress = (index: number) => {
    const currentAddresses = watchedAddresses;
    const addressToRemove = currentAddresses[index];
    const remainingAddresses = currentAddresses.filter((_, i) => i !== index);
    const lastRemainingAddress = remainingAddresses.pop();

    if (watchedShippingId === addressToRemove?.id) {
      setValue('defaultShippingAddressId', lastRemainingAddress?.id);
    }
    if (watchedBillingId === addressToRemove?.id) {
      setValue('defaultBillingAddressId', lastRemainingAddress?.id);
    }
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
        {watchedAddresses.map((address, index) => {
          return (
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
                {watchedAddresses.length > 1 && (
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

              <Box sx={{ mt: 2 }}>
                <FormControlLabel
                  label="Set this address as default for shipping"
                  control={
                    <Radio
                      checked={watchedShippingId === address.id}
                      onChange={() =>
                        setValue('defaultShippingAddressId', address.id)
                      }
                      value={index}
                      name="defaultShipping"
                    />
                  }
                />
                <FormControlLabel
                  label="Set this address as default for billing"
                  control={
                    <Radio
                      checked={watchedBillingId === address.id}
                      onChange={() =>
                        setValue('defaultBillingAddressId', address.id)
                      }
                      value={index}
                      name="defaultBilling"
                    />
                  }
                />
              </Box>
            </Box>
          );
        })}

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

      <ErrorModal
        open={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        title={errorModalTitle}
        message={errorModalMessage}
      />
    </Box>
  );
};

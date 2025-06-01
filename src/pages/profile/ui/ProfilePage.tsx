import { useState } from 'react';
import {
  Container,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { Edit, Person, LocationOn } from '@mui/icons-material';
import { PersonalInfo } from '@/widgets/PersonalInfo';
import { useGetUserInfo } from '../model/useGetUserInfo';
import { AddressInfo } from '@/widgets/AddressInfo';
import { getCountryName } from '../model/helpers';
import { PersonalEditForm } from '@/widgets/PersonalEditForm';
import { AddressEditForm } from '@/widgets/AddressEditForm';
import { PasswordChangeModal } from '@/widgets/PasswordChangeModal';

export const ProfilePage = () => {
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingAddresses, setIsEditingAddresses] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const { data: customer, isLoading, error } = useGetUserInfo();

  if (isLoading) {
    return (
      <Container
        maxWidth="md"
        sx={{ display: 'flex', justifyContent: 'center', py: 8 }}
      >
        {/* <Loader /> */}
      </Container>
    );
  }

  if (error || !customer || isError) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        {/* <ServerError /> */}
      </Container>
    );
  }

  const addresses =
    customer?.addresses?.map((address) => ({
      id: address.id || '',
      street: address.streetName || '',
      city: address.city || '',
      postalCode: address.postalCode || '',
      country: getCountryName(address.country),
    })) || [];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        My Profile
      </Typography>

      <Card sx={{ mb: 3, boxShadow: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Person color="primary" />
              <Typography variant="h6">Personal Information</Typography>
            </Box>
            <Button
              variant="outlined"
              startIcon={<Edit />}
              onClick={() => setIsEditingPersonal(true)}
            >
              Edit
            </Button>
          </Box>

          {isEditingPersonal ? (
            <PersonalEditForm
              initialData={{
                firstName: customer.firstName || '',
                lastName: customer.lastName || '',
                email: customer.email || '',
                birthDate:
                  typeof customer.dateOfBirth === 'string'
                    ? new Date(customer.dateOfBirth)
                    : undefined,
              }}
              onSuccess={() => {
                setIsEditingPersonal(false);
              }}
              onError={() => {
                setIsEditingPersonal(false);
                setIsError(true);
              }}
              onCancel={() => {
                setIsEditingPersonal(false);
              }}
            />
          ) : (
            <PersonalInfo
              firstName={customer.firstName || ''}
              lastName={customer.lastName || ''}
              birthDate={customer.dateOfBirth || ''}
              email={customer.email || ''}
            />
          )}

          <Button
            sx={{ mt: 2 }}
            variant="outlined"
            onClick={() => setIsEditingPassword(true)}
          >
            Change password
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ boxShadow: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <LocationOn color="primary" />
              <Typography variant="h6">
                Addresses ({addresses.length})
              </Typography>
            </Box>
            <Button
              variant="outlined"
              startIcon={<Edit />}
              onClick={() => setIsEditingAddresses(true)}
            >
              Edit
            </Button>
          </Box>

          {isEditingAddresses ? (
            <AddressEditForm
              initialData={{
                addresses:
                  customer.addresses?.map((address) => ({
                    country: {
                      code: address.country,
                      label: getCountryName(address.country),
                    },
                    city: address.city || '',
                    street: address.streetName || '',
                    postcode: address.postalCode || '',
                  })) || [],

                defaultShippingAddressId: customer.defaultShippingAddressId,
                defaultBillingAddressId: customer.defaultBillingAddressId,
              }}
              onSuccess={() => {
                setIsEditingAddresses(false);
              }}
              onError={() => {
                setIsEditingAddresses(false);
                setIsError(true);
              }}
              onCancel={() => {
                setIsEditingAddresses(false);
              }}
            />
          ) : (
            <AddressInfo
              addresses={addresses}
              defaultShippingAddressId={customer.defaultShippingAddressId}
              defaultBillingAddressId={customer.defaultBillingAddressId}
            />
          )}
        </CardContent>
      </Card>
      <PasswordChangeModal
        open={isEditingPassword}
        onSuccess={() => setIsEditingPassword(false)}
        onClose={() => setIsEditingPassword(false)}
        onError={() => setIsEditingPassword(false)}
      />
    </Container>
  );
};

import React from 'react';
import { Box, Typography, Chip, Divider } from '@mui/material';
import { type AddressInfoProps } from '../model/types';
import { getAddressLabels } from '../model/helpers';

export const AddressInfo: React.FC<AddressInfoProps> = ({
  addresses,
  defaultShippingAddressId,
  defaultBillingAddressId,
}) => {
  if (addresses.length === 0) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        textAlign="center"
        py={4}
      >
        You don't have addresses yet
      </Typography>
    );
  }

  return (
    <Box>
      {addresses.map((address, index) => {
        const labels = getAddressLabels(
          address.id,
          defaultShippingAddressId,
          defaultBillingAddressId
        );

        return (
          <Box key={address.id}>
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="space-between"
              mb={1}
            >
              <Typography variant="subtitle1" fontWeight="medium">
                Address {index + 1}
              </Typography>

              {labels.length > 0 && (
                <Box display="flex" gap={1} flexWrap="wrap">
                  {labels.map((label) => (
                    <Chip
                      key={label}
                      label={label}
                      size="small"
                      color={
                        label.includes('Shipping') ? 'primary' : 'secondary'
                      }
                      variant="outlined"
                    />
                  ))}
                </Box>
              )}
            </Box>

            <Box>
              <Typography variant="body2" color="text.secondary">
                {address.street}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {address.city}, {address.postalCode}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {address.country}
              </Typography>
            </Box>

            {index < addresses.length - 1 && <Divider sx={{ mt: 2, mb: 2 }} />}
          </Box>
        );
      })}
    </Box>
  );
};

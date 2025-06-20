import { APP_PATHS } from '@/shared/config/routes/paths';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const CartEmpty: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      py={10}
    >
      <Typography variant="h5" gutterBottom>
        Your cart is empty
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Looks like you haven’t added anything yet.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={APP_PATHS.CATALOG}
      >
        Browse products
      </Button>
    </Box>
  );
};

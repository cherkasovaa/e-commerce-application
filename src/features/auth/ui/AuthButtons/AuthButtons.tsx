import { NavigationButton } from '@/shared/ui';
import { Box } from '@mui/material';
import React from 'react';

export const AuthButtons: React.FC = () => (
  <Box sx={{ display: 'flex', gap: 5 }}>
    <NavigationButton to="/login" color="inherit">
      Login
    </NavigationButton>
    <NavigationButton to="/register" color="inherit">
      Register
    </NavigationButton>
  </Box>
);

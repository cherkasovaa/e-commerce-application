import { Button } from '@mui/material';
import React from 'react';

export const LogoutButton: React.FC = () => {
  const logout = (): void => localStorage.setItem('isAuthenticated', 'false');

  return (
    <Button onClick={logout} color="primary" variant="contained">
      Log Out
    </Button>
  );
};

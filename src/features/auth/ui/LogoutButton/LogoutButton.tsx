import { localStorageService } from '@/shared/lib/localStorage/localStorageService';
import { Button } from '@mui/material';
import React from 'react';

export const LogoutButton: React.FC = () => {
  const logout = (): void => localStorageService.setAuthStatus(false);

  return (
    <Button onClick={logout} color="primary" variant="contained">
      Log Out
    </Button>
  );
};

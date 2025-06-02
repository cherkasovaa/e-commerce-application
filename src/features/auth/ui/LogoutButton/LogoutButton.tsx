import { localStorageService } from '@/shared/lib/localStorage/localStorageService';
import { Button } from '@mui/material';
import React from 'react';
import { useQueryClient } from '@tanstack/react-query';

export const LogoutButton: React.FC = () => {
  const queryClient = useQueryClient();
  const logout = (): void => {
    localStorageService.clearAuth();
    queryClient.setQueryData(['customer'], undefined);
    queryClient.invalidateQueries({ queryKey: ['customer'] });
    window.dispatchEvent(new CustomEvent('authStatusChanged'));
  };

  return (
    <Button onClick={logout} color="primary" variant="contained">
      Log Out
    </Button>
  );
};

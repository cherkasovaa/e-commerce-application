import { localStorageService } from '@/shared/lib/localStorage/localStorageService';
import { Button } from '@mui/material';
import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { switchToAnonymousFlow } from '@/shared/api/commerceTools/authFlow';

export const LogoutButton: React.FC = () => {
  const queryClient = useQueryClient();
  const logout = async (): Promise<void> => {
    localStorageService.clearAuth();

    await switchToAnonymousFlow();

    queryClient.invalidateQueries({ queryKey: ['cart'] });

    queryClient.setQueryData(['customer'], undefined);
    queryClient.invalidateQueries({ queryKey: ['customer'] });
  };

  return (
    <Button onClick={logout} color="primary" variant="contained">
      Log Out
    </Button>
  );
};

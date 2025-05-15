import { AuthButtons, LogoutButton } from '@/features/auth';
import { Logo } from '@/shared/ui';
import { AppBar, Toolbar } from '@mui/material';
import React from 'react';

export const Header: React.FC = () => {
  const isAuth = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <AppBar position="static" color="transparent">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Logo />

        {isAuth ? <LogoutButton /> : <AuthButtons />}
      </Toolbar>
    </AppBar>
  );
};

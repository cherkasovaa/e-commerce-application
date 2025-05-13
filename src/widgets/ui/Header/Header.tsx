import { AuthButtons, LogoutButton } from '@/features/auth';
import { Logo } from '@/shared/ui';
import { AppBar, Toolbar } from '@mui/material';
import React from 'react';

export const Header: React.FC = () => {
  const auth = true;

  return (
    <AppBar position="static" color="transparent">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Logo />

        {auth ? <LogoutButton /> : <AuthButtons />}
      </Toolbar>
    </AppBar>
  );
};

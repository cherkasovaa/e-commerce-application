import { useState, type FC } from 'react';

import { AuthButtons, LogoutButton } from '@/features/auth';
import { Logo } from '@/shared/ui';
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { MenuDesktop } from '@/shared/ui/MenuDesktop/MenuDesktop';
import { MenuMobile } from '@/shared/ui/MenuMobile/MenuMobile';
import { APP_ROUTES } from '@/shared/config/routes/routes';
import { localStorageService } from '@/shared/lib/localStorage/localStorageService';

export const Header: FC = () => {
  const [isAuth, setIsAuth] = useState(localStorageService.getAuthStatus());

  window.addEventListener('authStatusChanged', () => {
    setIsAuth(localStorageService.getAuthStatus());
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const pages = APP_ROUTES.filter((route) => {
    if (!route.meta.showInNavigateMenu) return false;
    if (route.meta.requiresAuth === undefined) return true;
    if (route.meta.requiresAuth === true) return isAuth;
    if (route.meta.requiresAuth === false) return !isAuth;
    return false;
  });
  return (
    <AppBar
      position="static"
      color="transparent"
      id="back-to-top-anchor"
      elevation={0}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          my: 2,
        }}
      >
        {isMobile ? (
          <>
            <MenuMobile pages={pages} />
            <Logo />
          </>
        ) : (
          <>
            <Logo />
            <MenuDesktop pages={pages} />
          </>
        )}

        {isAuth ? <LogoutButton /> : <AuthButtons />}
      </Toolbar>
    </AppBar>
  );
};

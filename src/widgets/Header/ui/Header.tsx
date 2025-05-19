import { useEffect, useState, type FC } from 'react';

import { AuthButtons, LogoutButton } from '@/features/auth';
import { Logo } from '@/shared/ui';
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { MenuDesktop } from '@/shared/ui/MenuDesktop/MenuDesktop';
import { MenuMobile } from '@/shared/ui/MenuMobile/MenuMobile';
import { APP_ROUTES } from '@/shared/config/routes/routes';
import { localStorageService } from '@/shared/lib/localStorage/localStorageService';

export const Header: FC = () => {
  const [isAuth, setIsAuth] = useState(localStorageService.getAuthStatus());

  useEffect(() => {
    setIsAuth(localStorageService.getAuthStatus());

    const checkAuthStatus = (): void => {
      const currentStatus = localStorageService.getAuthStatus();
      if (isAuth !== currentStatus) {
        setIsAuth(currentStatus);
      }
    };

    const interval = setInterval(checkAuthStatus, 1000);

    return (): void => clearInterval(interval);
  }, [isAuth]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const pages = APP_ROUTES.filter((route) => route.meta.showInNavigateMenu);

  return (
    <AppBar position="static" color="transparent">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
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

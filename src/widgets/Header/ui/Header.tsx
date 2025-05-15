import { useEffect, useState, type FC } from 'react';

import { AuthButtons, LogoutButton } from '@/features/auth';
import { Logo } from '@/shared/ui';
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { MenuDesktop } from '@/shared/ui/MenuDesktop/MenuDesktop';
import { MenuMobile } from '@/shared/ui/MenuMobile/MenuMobile';
import { APP_ROUTES } from '@/shared/config/routes/routes';

export const Header: FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuth(auth);
  }, []);

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

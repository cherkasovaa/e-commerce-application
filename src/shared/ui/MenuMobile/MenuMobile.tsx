import { useState } from 'react';
import type { FC, MouseEvent } from 'react';

import { Box, IconButton, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavigationLinks } from '../NavigationLinks/NavigationLinks';
import type { AppRoutes } from '@/shared/types/appRoutes';

export const MenuMobile: FC<{ pages: AppRoutes[] }> = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
        <MenuIcon />
      </IconButton>

      <Menu
        anchorEl={anchorElNav}
        keepMounted
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        <NavigationLinks pages={pages} onClickItem={handleCloseNavMenu} />
      </Menu>
    </Box>
  );
};

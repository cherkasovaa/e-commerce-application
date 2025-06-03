import type { FC } from 'react';

import { MenuList, useTheme } from '@mui/material';
import { NavigationLinks } from '../NavigationLinks/NavigationLinks';
import type { AppRoutes } from '@/shared/types/appRoutes';

export const MenuDesktop: FC<{ pages: AppRoutes[] }> = ({ pages }) => {
  const theme = useTheme();
  return (
    <MenuList
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
        padding: 0,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <NavigationLinks pages={pages} />
    </MenuList>
  );
};

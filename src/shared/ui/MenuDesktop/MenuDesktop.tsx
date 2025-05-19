import type { FC } from 'react';

import { MenuList } from '@mui/material';
import { NavigationLinks } from '../NavigationLinks/NavigationLinks';
import type { AppRoutes } from '@/shared/types/appRoutes';

export const MenuDesktop: FC<{ pages: AppRoutes[] }> = ({ pages }) => {
  return (
    <MenuList sx={{ flexGrow: 1, display: 'flex' }}>
      <NavigationLinks pages={pages} />
    </MenuList>
  );
};

import type { FC } from 'react';
import { MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import type { AppRoutes } from '@/shared/types/appRoutes';

interface Props {
  pages: AppRoutes[];
  onClickItem?: () => void;
}

export const NavigationLinks: FC<Props> = ({ pages, onClickItem }) => {
  return (
    <>
      {pages.map((page) => (
        <MenuItem
          key={page.name}
          component={Link}
          to={page.path}
          onClick={onClickItem}
          sx={{ textTransform: 'uppercase' }}
        >
          {page.name}
        </MenuItem>
      ))}
    </>
  );
};

import type { FC } from 'react';
import { MenuItem, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import type { AppRoutes } from '@/shared/types/appRoutes';

interface Props {
  pages: AppRoutes[];
  onClickItem?: () => void;
}

export const NavigationLinks: FC<Props> = ({ pages, onClickItem }) => {
  const theme = useTheme();
  return (
    <>
      {pages.map((page) => (
        <MenuItem
          key={page.name}
          component={Link}
          to={page.path}
          onClick={onClickItem}
          sx={{
            textTransform: 'uppercase',
            transition: '0.4s ease-in-out',
            fontWeight: 700,
            padding: '0.4em 2em',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          {page.name}
        </MenuItem>
      ))}
    </>
  );
};

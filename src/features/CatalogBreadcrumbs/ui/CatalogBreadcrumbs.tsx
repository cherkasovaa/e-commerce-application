import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { APP_PATHS } from '@/shared/config/routes/paths';

import {
  Breadcrumbs as MUIBreadcrumbs,
  Link as MUILink,
  Typography,
} from '@mui/material';
import { type JSX } from 'react';
import { Link } from 'react-router-dom';

export const CatalogBreadcrumbs = ({
  category,
}: {
  category: string | undefined;
}): JSX.Element => {
  const linkStyle = {
    textDecoration: 'none',
    transition: '0.3s',
    '&:hover': { color: 'primary.main' },
  };

  return (
    <MUIBreadcrumbs
      separator="|"
      aria-label="breadcrumb"
      sx={{ marginBottom: 3 }}
    >
      <MUILink
        component={Link}
        color="inherit"
        to={APP_PATHS.HOME}
        sx={linkStyle}
      >
        {APP_PAGE_NAMES.HOME}
      </MUILink>
      <MUILink
        component={Link}
        color="inherit"
        to={APP_PATHS.CATALOG}
        sx={linkStyle}
      >
        {APP_PAGE_NAMES.CATALOG}
      </MUILink>
      <Typography color="text.primary" sx={linkStyle}>
        {category || ''}
      </Typography>
    </MUIBreadcrumbs>
  );
};

import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { APP_PATHS } from '@/shared/config/routes/paths';
import { Breadcrumbs, Typography } from '@mui/material';
import MuiLink from '@mui/material/Link';
import type { FC, JSX } from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbsComponentProps {
  gameName: string;
}

export const BreadcrumbsComponent: FC<BreadcrumbsComponentProps> = ({
  gameName,
}): JSX.Element => {
  const linkStyles = {
    textDecoration: 'none',
    transition: '0.3s',
    '&:hover': { color: 'primary.main' },
  };

  return (
    <Breadcrumbs
      separator="|"
      sx={{
        '& .MuiBreadcrumbs-separator': {
          mx: 1.5,
          color: 'primary.main',
        },
      }}
    >
      <MuiLink
        component={Link}
        color="inherit"
        to={APP_PATHS.HOME}
        sx={linkStyles}
      >
        {APP_PAGE_NAMES.HOME}
      </MuiLink>
      <MuiLink
        component={Link}
        color="inherit"
        to={APP_PATHS.CATALOG}
        sx={linkStyles}
      >
        {APP_PAGE_NAMES.CATALOG}
      </MuiLink>
      <Typography sx={{ color: 'text.primary', textTransform: 'uppercase' }}>
        {gameName}
      </Typography>
    </Breadcrumbs>
  );
};

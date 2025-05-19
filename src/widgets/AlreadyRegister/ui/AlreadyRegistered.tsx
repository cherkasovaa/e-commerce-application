import { APP_PATHS } from '@/shared/config/routes/paths';
import { Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const AlreadyRegistered = () => {
  return (
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ textAlign: 'center' }}
    >
      Already have an account?{' '}
      <Link
        component={RouterLink}
        to={APP_PATHS.LOGIN}
        sx={{
          color: 'red',
          fontWeight: 700,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        Sign in here
      </Link>
    </Typography>
  );
};

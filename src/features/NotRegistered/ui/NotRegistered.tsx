import { APP_PATHS } from '@/shared/config/routes/paths';
import { Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const NotRegistered = () => {
  return (
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ textAlign: 'center' }}
    >
      Don't have an account yet?
      <Link
        component={RouterLink}
        to={APP_PATHS.REGISTER}
        sx={{
          fontWeight: 700,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {' '}
        Register here!
      </Link>
    </Typography>
  );
};

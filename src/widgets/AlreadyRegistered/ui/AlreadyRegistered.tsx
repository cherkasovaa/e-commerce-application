import { Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const AlreadyRegistered = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ textAlign: 'center' }}
    >
      Already have an account?{' '}
      <Link
        component={RouterLink}
        to="/login"
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

export default AlreadyRegistered;

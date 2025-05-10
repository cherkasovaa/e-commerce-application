import { Typography } from '@mui/material';
import { type JSX } from 'react';
import { Link } from 'react-router-dom';

export const RegistrationLink = (): JSX.Element => {
  return (
    <Typography sx={{ textAlign: 'center' }}>
      Dont have account yet? <Link to="/register">Register here!</Link>
    </Typography>
  );
};

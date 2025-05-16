import { type JSX } from 'react';
import { LoginForm } from '@/features/LoginForm';
import { Avatar, Paper, Typography } from '@mui/material';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import { Link } from 'react-router-dom';

export const LoginField = (): JSX.Element => {
  return (
    <Paper
      elevation={10}
      sx={{
        marginTop: 8,
        padding: 2,
      }}
    >
      <Avatar
        sx={{
          mx: 'auto',
          bgcolor: 'secondary.contrastText',
          textAlign: 'center',
          mb: 1,
        }}
      >
        <LockOutlineIcon />
      </Avatar>
      <Typography
        component="h1"
        variant="h4"
        sx={{
          mx: 'auto',
          textAlign: 'center',
          mb: 4,
        }}
      >
        Sign in
      </Typography>
      <LoginForm />
      <Typography sx={{ textAlign: 'center' }}>
        Don't have an account yet? <Link to="/register">Register here!</Link>
      </Typography>
    </Paper>
  );
};

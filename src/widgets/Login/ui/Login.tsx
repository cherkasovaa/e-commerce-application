import { LoginForm } from '@/features/auth';
import { Avatar, Paper, Typography } from '@mui/material';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import { type JSX } from 'react';

export const Login = (): JSX.Element => {
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
      <LoginForm></LoginForm>
      <div>New user?</div>
    </Paper>
  );
};

import { LoginForm } from '@/features/auth';
import { Typography } from '@mui/material';

export const Login = () => {
  return (
    <div>
      <Typography variant="h2" mb={2}>
        Войдите в профиль!
      </Typography>
      <LoginForm></LoginForm>
      <div>registration link</div>
    </div>
  );
};

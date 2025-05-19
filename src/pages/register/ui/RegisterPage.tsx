import { useState } from 'react';
import { RegisterForm } from '@/widgets/RegisterForm';
import { Container, Stack, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SUCCESS_TIME } from '../model';
import { RegisterSuccess } from '@/widgets/RegisterSuccess';
import { AlreadyRegistered } from '@/widgets/AlreadyRegistered';
import { useCountDown } from '../model/useCountDown';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const { counter, startCountDown } = useCountDown(SUCCESS_TIME);
  const onSuccess = async () => {
    setIsRegistered(true);
    await startCountDown();
    navigate('/main');
  };

  return (
    <Container maxWidth="md">
      {isRegistered ? (
        <RegisterSuccess counter={counter} />
      ) : (
        <Stack spacing={3} sx={{ my: 4 }}>
          {' '}
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <RegisterForm onSuccess={onSuccess} />
          </Paper>
          <AlreadyRegistered />
        </Stack>
      )}
    </Container>
  );
};

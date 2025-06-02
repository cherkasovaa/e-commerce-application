import { PageMeta } from '@/features/ProductMeta';
import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { APP_PATHS } from '@/shared/config/routes/paths';
import { usePageMeta } from '@/shared/lib/hooks/usePageMeta';
import { AlreadyRegistered } from '@/widgets/AlreadyRegistered';
import { RegisterForm } from '@/widgets/RegisterForm';
import { RegisterSuccess } from '@/widgets/RegisterSuccess';
import { Container, Paper, Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SUCCESS_TIME, useCountDown } from '../model';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const { counter, startCountDown } = useCountDown(SUCCESS_TIME);
  const onSuccess = async () => {
    setIsRegistered(true);
    await startCountDown();
    navigate(APP_PATHS.HOME);
  };

  const metaData = usePageMeta(APP_PAGE_NAMES.REGISTER);

  return (
    <>
      {metaData && <PageMeta {...metaData} />}

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
    </>
  );
};

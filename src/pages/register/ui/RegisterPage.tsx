import type { FC } from 'react';
import { RegisterForm } from '@/widgets/RegisterForm';
import { Container } from '@mui/material';

export const RegisterPage: FC = () => (
  <Container maxWidth="md">
    <RegisterForm />
  </Container>
);

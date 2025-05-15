import { useState, type FC } from 'react';
import { RegisterForm } from '@/widgets/RegisterForm';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SUCCESS_TIME } from '../model';
import { RegisterSuccess } from '@/widgets/RegisterSuccess';

export const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const onSuccess = () => {
    setIsRegistered(true);
    setTimeout(() => {
      navigate('/main');
    }, SUCCESS_TIME);
  };
  return (
    <Container maxWidth="md">
      {!isRegistered && <RegisterForm onSuccess={onSuccess} />}
      {isRegistered && <RegisterSuccess />}
    </Container>
  );
};

import { apiRoot } from '@/shared/api/commercletools';
import { useEffect } from 'react';

export const LoginForm = () => {
  useEffect(() => {
    console.log(apiRoot.carts());
  }, []);
  return <div>LoginForm</div>;
};

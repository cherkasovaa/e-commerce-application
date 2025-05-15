import { type JSX } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthorizedRoute = (): JSX.Element => {
  const isAuth = window.localStorage.getItem('isAuthenticated') === 'true';

  return <>{isAuth ? <Navigate replace to={'/'} /> : <Outlet />}</>;
};

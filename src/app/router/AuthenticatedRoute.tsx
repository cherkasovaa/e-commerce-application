import { type JSX } from 'react';
import { Navigate } from 'react-router-dom';

export const AuthorizedRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const isAuthChecked =
    window.localStorage.getItem('isAuthenticated') === 'true';

  if (isAuthChecked) {
    return <Navigate replace to={'/'} />;
  }

  return children;
};

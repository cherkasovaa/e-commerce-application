import { type JSX } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { localStorageService } from '../../shared/lib/localStorage/localStorageService';

export const AuthorizedRoute = (): JSX.Element => {
  return (
    <>
      {localStorageService.getAuthStatus() ? (
        <Navigate replace to="/" />
      ) : (
        <Outlet />
      )}
    </>
  );
};

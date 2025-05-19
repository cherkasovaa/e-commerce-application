import { type JSX } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { localStorageService } from '../../shared/lib/localStorage/localStorageService';
import { APP_PATHS } from '@/shared/config/routes/paths';

export const AuthorizedRoute = (): JSX.Element => {
  return (
    <>
      {localStorageService.getAuthStatus() ? (
        <Navigate replace to={APP_PATHS.HOME} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

import React from 'react';

import { Routes, Route, HashRouter } from 'react-router-dom';

import { LoginPage } from '@/pages/login';
import { UnauthorizedRoute } from './UnathorizedRoute';
import { AuthorizedRoute } from './AuthorizedRoute';
import { MainPage } from '@/pages/main';
import { RegisterPage } from '@/pages/register';
import { NotFoundPage } from '@/pages/not-found';
import { Layout } from '../layout/Layout';
import { CatalogPage } from '@/pages/catalog';
import { CartPage } from '@/pages/cart';
import { ProfilePage } from '@/pages/profile';
import { APP_PATHS } from '@/shared/config/routes/paths';

export const Router = (): React.JSX.Element => (
  <HashRouter>
    <Routes>
      <Route path={APP_PATHS.HOME} element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route element={<UnauthorizedRoute />}>
          <Route path={APP_PATHS.LOGIN} element={<LoginPage />} />
          <Route path={APP_PATHS.REGISTER} element={<RegisterPage />} />
        </Route>

        <Route element={<AuthorizedRoute />}>
          <Route path={APP_PATHS.PROFILE} element={<ProfilePage />} />
        </Route>

        <Route path={APP_PATHS.CATALOG} element={<CatalogPage />} />
        <Route path={APP_PATHS.CART} element={<CartPage />} />
        <Route path={APP_PATHS.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);

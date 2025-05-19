import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage } from '@/pages/login';
import { AuthorizedRoute } from './AuthenticatedRoute';
import { MainPage } from '@/pages/main';
import { RegisterPage } from '@/pages/register';
import { NotFoundPage } from '@/pages/not-found';
import { Layout } from '../layout/Layout';
import { CatalogPage } from '@/pages/catalog';
import { CartPage } from '@/pages/cart';
import { APP_PATHS } from '@/shared/config/routes/paths';

export const Router = (): React.JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={APP_PATHS.HOME} element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route element={<AuthorizedRoute />}>
          <Route path={APP_PATHS.LOGIN} element={<LoginPage />} />
        </Route>

        <Route path="login" element={<LoginPage />} />
        <Route path={APP_PATHS.CATALOG} element={<CatalogPage />} />
        <Route path={APP_PATHS.CART} element={<CartPage />} />
        <Route path={APP_PATHS.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
      <Route path={APP_PATHS.REGISTER} element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
);

import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';

import { About } from '@/pages/about';
import { CartPage } from '@/pages/cart';
import { CatalogPage } from '@/pages/catalog';
import { LoginPage } from '@/pages/login';
import { MainPage } from '@/pages/main';
import { NotFoundPage } from '@/pages/not-found';
import { ProductPage } from '@/pages/product';
import { ProfilePage } from '@/pages/profile';
import { RegisterPage } from '@/pages/register';
import { APP_PATHS } from '@/shared/config/routes/paths';
import { Layout } from '../layout/Layout';
import { AuthorizedRoute } from './AuthorizedRoute';
import { UnauthorizedRoute } from './UnathorizedRoute';

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
        <Route path={APP_PATHS.PRODUCT} element={<ProductPage />} />
        <Route path={APP_PATHS.ABOUT} element={<About />} />
        <Route path={APP_PATHS.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);

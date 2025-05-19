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

export const Router = (): React.JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<AuthorizedRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
);

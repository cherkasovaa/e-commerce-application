import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '@/pages/login';
import { AuthorizedRoute } from './AuthenticatedRoute';
import { MainPage } from '@/pages/main';
import { RegisterPage } from '@/pages/register';
import { NotFoundPage } from '@/pages/not-found';
import { Layout } from '../layout/Layout';

export const Router = (): React.JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
         
        <Route element={<AuthorizedRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Route>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
);

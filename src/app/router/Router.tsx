import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '@/pages/login';
import { MainPage } from '@/pages/main';
import { RegisterPage } from '@/pages/register';
import { NotFoundPage } from '@/pages/not-found';

export const Router = (): React.JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '@/pages/login';

export const Router = (): React.JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

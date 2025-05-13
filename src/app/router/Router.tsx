import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '@/pages/login';
import { AuthorizedRoute } from './AuthenticatedRoute';
import { MainPage } from '@/pages/main';

export const Router = (): React.JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/login"
        element={
          <AuthorizedRoute>
            <LoginPage />
          </AuthorizedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

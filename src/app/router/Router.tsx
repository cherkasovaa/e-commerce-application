import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterPage } from '@/pages/register';

export const Router = (): React.JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
);

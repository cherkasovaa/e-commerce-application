import React from 'react';

import { Router } from './router/Router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/shared/config/theme';
import { CssBaseline } from '@mui/material';

export const App = (): React.JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

import React from 'react';

import { Router } from './router/Router';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '@/shared/config/theme';
import { CssBaseline } from '@mui/material';
import { ReactQueryProvider } from '@/shared/lib/react-query';

export const App = (): React.JSX.Element => {
  return (
    <ReactQueryProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </ReactQueryProvider>
  );
};

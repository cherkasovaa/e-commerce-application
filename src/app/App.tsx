import { Router } from './router/Router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/shared/config/theme';
import { CssBaseline } from '@mui/material';
import { ReactQueryProvider } from '@/shared/lib/react-query/provider';

export const App = (): React.JSX.Element => {
  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </ReactQueryProvider>
  );
};

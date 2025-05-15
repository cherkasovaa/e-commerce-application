import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#d34040',
      light: '#e57373',
      dark: '#c62828',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffe625',
      light: '#fbee89',
      dark: '#d8bf00',
      contrastText: '#333333',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#bdbdbd',
    },
  },
  typography: {
    fontFamily: ' "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

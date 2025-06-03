import { createTheme } from '@mui/material/styles';
import '@fontsource/orbitron/400.css';
import '@fontsource/orbitron/700.css';

const customBox = {
  box: {
    width: 32,
    height: 32,
    padding: '7px 0',
    borderRadius: 3,
    backgroundColor: '#58e30d',
  },
};

const sharedPalette = {
  secondary: {
    main: '#c3125d',
    light: '#cf417d',
    dark: '#880c41',
    contrastText: '#ffffff',
  },
  error: {
    main: '#f44336',
    light: '#f6685e',
    dark: '#aa2e25',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#ffa726',
    light: '#ffb851',
    dark: '#b2741a',
    contrastText: 'rgba(0,0,0,0.8)',
  },
  info: {
    main: '#0288d1',
  },
  divider: 'rgba(255,255,255,0.12)',
};

const sharedTypography = {
  fontFamily: ' "Open Sans", sans-serif',
  fontWeightLight: 400,
  h1: {
    fontFamily: 'Orbitron',
    fontSize: '3rem',
    fontWeight: 700,
  },
  h2: {
    fontFamily: 'Orbitron',
    fontSize: '2.5rem',
    fontWeight: 700,
  },
  h3: {
    fontSize: '2rem',
    fontFamily: 'Orbitron',
    fontWeight: 400,
  },
  h4: {
    fontFamily: 'Orbitron',
    fontSize: '1.7rem',
  },
  h5: {
    fontFamily: 'Orbitron',
  },
  h6: {
    fontFamily: 'Orbitron',
  },
  button: {
    fontFamily: 'Orbitron',
    fontWeight: 700,
  },
  subtitle1: {
    fontFamily: ' "Open Sans", sans-serif',
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '0.01em',
  },
  overline: {
    fontFamily: 'Orbitron',
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3cbc1c',
      light: '#63c949',
      dark: '#2a8313',
    },
    background: {
      default: '#eaeaea',
      paper: '#dcdcdc',
    },
    text: {
      secondary: 'rgba(6,6,6,0.7)',
      disabled: '#565656',
    },
    ...sharedPalette,
  },
  typography: sharedTypography,
  custom: customBox,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b952f',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2a2a2a',
    },
    text: {
      secondary: 'rgba(255,255,255,0.85)',
      disabled: '#d0d0d0',
    },
    ...sharedPalette,
  },
  typography: sharedTypography,
  custom: customBox,
});

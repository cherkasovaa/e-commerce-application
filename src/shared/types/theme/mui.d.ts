import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      box: {
        width: number;
        height: number;
        padding: string;
        borderRadius: number;
        backgroundColor: string;
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      box?: {
        width?: number;
        height?: number;
        padding?: string;
        borderRadius?: number;
        backgroundColor?: string;
      };
    };
  }
}

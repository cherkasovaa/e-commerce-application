import type { ButtonProps } from '@mui/material';
import { Button, useTheme } from '@mui/material';
import type { JSX } from 'react';

interface ActionButtonProps extends ButtonProps {
  minWidth?: string | number;
}

export const ActionButton = ({
  minWidth = 205,
  sx,
  children,
  ...rest
}: ActionButtonProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Button
      size="small"
      variant="outlined"
      color="secondary"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        border: 'none',
        transition:
          'transform 0.2s ease, background-color 0.2s ease, color 0.2s ease',
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.getContrastText(theme.palette.primary.main),
          transform: 'scale(1.05)',
        },
        minWidth,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

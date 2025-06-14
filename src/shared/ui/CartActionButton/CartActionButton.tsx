import { Button, useTheme } from '@mui/material';
import type { JSX } from 'react';
import React from 'react';

interface CartActionButtonProps {
  handleClick: () => void;
  isDisabled: boolean;
  children: React.ReactNode;
}

export const CartActionButton = ({
  handleClick,
  isDisabled,
  children,
}: CartActionButtonProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Button
      size="small"
      variant="outlined"
      onClick={handleClick}
      disabled={isDisabled}
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
        minWidth: 205,
      }}
    >
      {children}
    </Button>
  );
};

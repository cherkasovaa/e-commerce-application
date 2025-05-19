import type { ButtonProps } from '@mui/material';
import type React from 'react';
import type { To } from 'react-router-dom';

export interface NavigationButtonProps extends ButtonProps {
  to: To;
  children: React.ReactNode;
}

import type { NavigationButtonProps } from '@/shared/types/NavigationButtonTypes';
import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  to,
  children,
  ...props
}) => (
  <StyledButton {...props}>
    <Link
      to={to}
      style={{
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      {children}
    </Link>
  </StyledButton>
);

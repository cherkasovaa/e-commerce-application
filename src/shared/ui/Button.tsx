import type { ButtonProps as MUIButtonProps } from '@mui/material';
import { Button as MUIButton } from '@mui/material';
import { styled } from '@mui/material/styles';

//example of custom styling outside of theme styles
export const Button = styled(({ ...props }: MUIButtonProps) => (
  <MUIButton {...props} variant="contained" />
))(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

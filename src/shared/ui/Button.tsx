import type { ButtonProps as MUIButtonProps } from '@mui/material';
import { Button as MUIButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const AccentButton = styled(MUIButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const Button = (props: MUIButtonProps) => {
  return <AccentButton variant="contained" {...props} />;
};

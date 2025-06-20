import { Box, Typography, useTheme } from '@mui/material';
import type { FC, JSX } from 'react';

interface NotificationComponentProps {
  props: string;
}

export const NotificationComponent: FC<NotificationComponentProps> = ({
  props,
}): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      component="div"
      className="notification"
      sx={{
        textAlign: 'center',
        backgroundColor: theme.palette.primary.main,
        px: 1.5,
        borderRadius: 3,
        minWidth: '18px',
      }}
    >
      <Typography
        variant="subtitle1"
        component="span"
        sx={{
          fontSize: '1em',
          fontWeight: 600,
          letterSpacing: '0.5px',
          color: theme.palette.primary.contrastText,
        }}
      >
        {props}
      </Typography>
    </Box>
  );
};

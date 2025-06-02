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
        p: '0 10px',
        borderRadius: '12px',
        minWidth: '20px',
      }}
    >
      <Typography
        variant="h6"
        component="span"
        sx={{
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

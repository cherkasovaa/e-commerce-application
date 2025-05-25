import type { GameProps } from '@/shared/types/gameProps';
import { Box, Typography, useTheme } from '@mui/material';
import type { FC, JSX } from 'react';

export const GameRating: FC<GameProps> = ({ value }): JSX.Element => {
  const theme = useTheme();
  const styles = theme.custom.box || {
    width: 32,
    height: 32,
    padding: '7px 0',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#58e30d',
  };

  const label = 'Game rating';

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '1rem' }}
    >
      <Box
        sx={{
          width: styles.width,
          height: styles.height,
          p: styles.padding,
          borderRadius: styles.borderRadius,
          backgroundColor: styles.backgroundColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="body2"
          component="p"
          sx={{
            fontWeight: 600,
            color: theme.palette.text.primary,
            lineHeight: 1,
          }}
        >
          {value}
        </Typography>
      </Box>
      <Typography component="span" sx={{ color: theme.palette.text.secondary }}>
        {label}
      </Typography>
    </Box>
  );
};

import type { GenreProps } from '@/shared/types/GenreProps';
import { Box, Typography, useTheme } from '@mui/material';
import type { FC } from 'react';

export const GenreContainer: FC<GenreProps> = ({ value }) => {
  const theme = useTheme();
  const label = 'Genre';

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontWeight: 600,
          color: theme.palette.text.primary,
          lineHeight: 1,
        }}
      >
        {value.label}
      </Typography>
      <Typography
        component="span"
        sx={{
          color: theme.palette.text.secondary,
          fontSize: theme.typography.caption,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

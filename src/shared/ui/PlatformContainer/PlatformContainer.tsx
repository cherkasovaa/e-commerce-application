import type { PlatformProps } from '@/shared/types/platformProps';
import { Box, Typography, useTheme } from '@mui/material';
import type { FC } from 'react';

export const PlatformContainer: FC<PlatformProps> = ({ value }) => {
  const theme = useTheme();
  const label = 'Platform';

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
        component="p"
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

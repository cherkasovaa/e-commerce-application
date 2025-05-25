import type { GameTag } from '@/shared/types/gameTag';
import { Box, Typography, useTheme } from '@mui/material';
import type { FC } from 'react';

interface GameTags {
  values: GameTag[];
}

export const GameTagsContainer: FC<GameTags> = ({ values }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {values.map((value: GameTag) => (
        <Typography
          key={value.key}
          variant="body2"
          component="p"
          sx={{
            fontWeight: 600,
            color: theme.palette.text.secondary,
            lineHeight: 1,
          }}
        >
          {value.label}
        </Typography>
      ))}
    </Box>
  );
};

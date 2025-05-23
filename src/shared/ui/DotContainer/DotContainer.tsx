import type { FC } from 'react';
import type { DotContainerProps } from '@/shared/types/DotContainerProps';
import { Box, useTheme } from '@mui/material';

export const DotContainer: FC<DotContainerProps> = ({
  images,
  active,
  onDotClick,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 16,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 2,
      }}
    >
      {images.map((_, idx) => (
        <Box
          key={idx}
          onClick={() => onDotClick(idx)}
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            background:
              idx === active
                ? theme.palette.primary.dark
                : theme.palette.background.paper,
            margin: '0 4px',
            cursor: 'pointer',
            transition: 'background 0.2s, border 0.2s',
          }}
        />
      ))}
    </Box>
  );
};

import type { FC } from 'react';
import { Paper, useTheme } from '@mui/material';
import type { SlideProps } from '@/shared/types/slideProps';

export const ImageSlide: FC<SlideProps> = ({ image, isFade }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={5}
      sx={{
        position: 'relative',
        mb: 2,
        overflow: 'hidden',
        borderRadius: theme.shape.borderRadius,
        width: 'fit-content',
        height: '100%',
      }}
    >
      <img
        src={image.url}
        alt={image.label ?? 'product image'}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.4s',
          opacity: isFade ? 1 : 0,
        }}
      />
    </Paper>
  );
};

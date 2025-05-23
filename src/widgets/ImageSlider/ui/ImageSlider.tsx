import { Box, Typography } from '@mui/material';

import { useState, type FC } from 'react';
import { DotContainer, ImageSlide, SliderControls } from '@/shared/ui';
import { FADE_DELAY } from '../model/constants';
import type { ImageSliderProps } from '../model/types';
import { theme } from '@/shared/config/theme';

export const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  // console.log('images', images)

  const [active, setActive] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  const maxStep = images.length - 1;
  const hasMultipleImages = images.length > 1;

  const handleChange = (idx: number): void => {
    setFade(false);

    setTimeout(() => {
      setActive(idx);
      setFade(true);
    }, FADE_DELAY);
  };

  const handleNext = (): void => {
    const nextIndex = active === maxStep ? 0 : active + 1;

    handleChange(nextIndex);
  };

  const handlePrev = (): void => {
    const prevIndex = active === 0 ? maxStep : active - 1;

    handleChange(prevIndex);
  };

  return (
    <Box
      sx={{
        width: { xs: '100%', md: '30vw' },
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        border:
          images.length === 0
            ? `1px solid ${theme.palette.text.primary}`
            : 'none',
        borderRadius: theme.shape.borderRadius,
      }}
    >
      {images.length ? (
        <>
          <ImageSlide image={images[active]} isFade={fade} />

          {hasMultipleImages && (
            <>
              <SliderControls handleNext={handleNext} handlePrev={handlePrev} />
              <DotContainer
                images={images}
                active={active}
                onDotClick={handleChange}
              />
            </>
          )}
        </>
      ) : (
        <Typography
          variant="h6"
          component="p"
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '100%',
            textAlign: 'center',
          }}
        >
          The pictures will be added soon
        </Typography>
      )}
    </Box>
  );
};

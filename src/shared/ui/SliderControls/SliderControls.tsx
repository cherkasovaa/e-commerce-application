import type { FC } from 'react';

import { IconButton, useTheme } from '@mui/material';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import type { SliderButtonsClicks } from '@/shared/types/SliderButtonsClicks';

export const SliderControls: FC<SliderButtonsClicks> = ({
  handleNext,
  handlePrev,
}) => {
  const theme = useTheme();

  return (
    <>
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 8,
          color: theme.palette.background.paper,
          background: 'rgba(0,0,0,0.3)',
          '&:hover': { background: 'rgba(0,0,0,0.5)' },
          zIndex: 2,
        }}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 8,
          color: 'white',
          background: 'rgba(0,0,0,0.3)',
          '&:hover': { background: 'rgba(0,0,0,0.5)' },
          zIndex: 2,
        }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </>
  );
};

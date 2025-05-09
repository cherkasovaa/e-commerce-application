import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Typography, Box, Stack } from '@mui/material';

import pageNotFoundAnimation from '@/pages/assets/404_animation.lottie';
import {
  BACK_BUTTON_TEXT,
  PAGE_NOT_FOUNT_DESCRIPTION,
  PAGE_NOT_FOUNT_TITLE,
} from '../constants/constants';
import { NavigationButton } from '@/shared/ui';

export const NotFoundPage: React.FC = () => (
  <>
    <Stack
      direction={{ xs: 'column-reverse', md: 'row' }}
      spacing={10}
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100%' }}
    >
      <DotLottieReact
        src={pageNotFoundAnimation}
        loop
        autoplay
        style={{ width: 300, height: 'auto' }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          textAlign: { md: 'left', xs: 'center' },
        }}
      >
        <Typography variant="h1">{PAGE_NOT_FOUNT_TITLE}</Typography>
        <Typography component="p">{PAGE_NOT_FOUNT_DESCRIPTION}</Typography>

        <NavigationButton
          to="/"
          sx={{
            maxWidth: 'max-content',
            marginTop: 3,
            alignSelf: { md: 'flex-start', xs: 'center' },
          }}
        >
          {BACK_BUTTON_TEXT}
        </NavigationButton>
      </Box>
    </Stack>
  </>
);

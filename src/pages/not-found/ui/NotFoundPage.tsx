import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import { PageMeta } from '@/features/ProductMeta';
import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { APP_PATHS } from '@/shared/config/routes/paths';
import { usePageMeta } from '@/shared/lib/hooks/usePageMeta';
import { NavigationButton } from '@/shared/ui';
import pageNotFoundAnimation from '../assets/404_animation.lottie';
import {
  BACK_BUTTON_TEXT,
  PAGE_NOT_FOUNT_DESCRIPTION,
  PAGE_NOT_FOUNT_TITLE,
} from '../constants/constants';

export const NotFoundPage: React.FC = () => {
  const metaData = usePageMeta(APP_PAGE_NAMES.NOT_FOUND);

  return (
    <>
      {metaData && <PageMeta {...metaData} />}
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
            to={APP_PATHS.HOME}
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
};

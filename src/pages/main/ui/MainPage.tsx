import { PageMeta } from '@/features/ProductMeta';
import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { getGradientBackground } from '@/shared/helpers/getGradientBackground';
import { usePageMeta } from '@/shared/lib/hooks/usePageMeta';
import { GameNews } from '@/widgets/GameNews';
import { HeroContent } from '@/widgets/HeroContent';
import { useTheme } from '@emotion/react';
import { Grid } from '@mui/material';
import React from 'react';

export const MainPage: React.FC = () => {
  const metaData = usePageMeta(APP_PAGE_NAMES.HOME);
  const theme = useTheme();
  return (
    <>
      {metaData && <PageMeta {...metaData} />}
      <Grid
        container
        gap={2}
        sx={{
          borderRadius: 2,
          backgroundImage: getGradientBackground(theme),
        }}
      >
        <HeroContent />
        <GameNews />
      </Grid>
    </>
  );
};

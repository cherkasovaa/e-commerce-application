import { PageMeta } from '@/features/ProductMeta';
import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { SALES } from '@/shared/constants';
import { getGradientBackground } from '@/shared/helpers/getGradientBackground';
import { usePageMeta } from '@/shared/lib/hooks/usePageMeta';
import { Banner } from '@/shared/ui/Banner';
import { GameNews } from '@/widgets/GameNews';
import { HeroContent } from '@/widgets/HeroContent';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import React from 'react';

export const MainPage: React.FC = () => {
  const metaData = usePageMeta(APP_PAGE_NAMES.HOME);
  const theme = useTheme();
  return (
    <>
      {metaData && <PageMeta {...metaData} />}{' '}
      <Banner
        title={SALES.FIRST_ORDER.title}
        description={SALES.FIRST_ORDER.description}
        promo={{ code: SALES.FIRST_ORDER.code, isCopied: true }}
        imageUrl={SALES.FIRST_ORDER.imageUrl}
      />
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

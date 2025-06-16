import { PageMeta } from '@/features/ProductMeta';
import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { usePageMeta } from '@/shared/lib/hooks/usePageMeta';
import { AboutScreen } from '@/widgets/AboutScreen';
import { Container } from '@mui/material';
import type { JSX } from 'react';

export const About = (): JSX.Element => {
  const metaData = usePageMeta(APP_PAGE_NAMES.ABOUT);

  return (
    <>
      {metaData && <PageMeta {...metaData} />}
      <Container maxWidth="lg">
        <AboutScreen />
      </Container>
    </>
  );
};

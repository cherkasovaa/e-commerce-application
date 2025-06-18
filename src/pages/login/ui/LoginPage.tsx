import { PageMeta } from '@/features/ProductMeta';
import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { usePageMeta } from '@/shared/lib/hooks/usePageMeta';
import { LoginField } from '@/widgets/LoginField';
import { Container } from '@mui/material';
import type { JSX } from 'react';

export const LoginPage = (): JSX.Element => {
  const metaData = usePageMeta(APP_PAGE_NAMES.LOGIN);

  return (
    <>
      {metaData && <PageMeta {...metaData} />}
      <Container maxWidth="md">
        <LoginField />
      </Container>
    </>
  );
};

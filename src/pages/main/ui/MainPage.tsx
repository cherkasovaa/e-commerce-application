import { PageMeta } from '@/features/ProductMeta';
import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { usePageMeta } from '@/shared/lib/hooks/usePageMeta';
import React from 'react';

export const MainPage: React.FC = () => {
  const metaData = usePageMeta(APP_PAGE_NAMES.HOME);

  return (
    <>
      {metaData && <PageMeta {...metaData} />}
      <div>Main Page</div>
    </>
  );
};

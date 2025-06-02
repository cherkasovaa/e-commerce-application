import { PageMeta } from '@/features/ProductMeta';
import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { usePageMeta } from '@/shared/lib/hooks/usePageMeta';
import type { JSX } from 'react';
import React from 'react';

export const CatalogPage: React.FC = (): JSX.Element => {
  const metaData = usePageMeta(APP_PAGE_NAMES.CATALOG);

  return (
    <>
      {metaData && <PageMeta {...metaData} />}
      <div>Catalog Page</div>
    </>
  );
};

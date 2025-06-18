import type { PageMetaProps } from '@/features/ProductMeta/model/types';
import { APP_NAME } from '@/shared/config/constants';
import { APP_ROUTES } from '@/shared/config/routes/routes';
import { useMemo } from 'react';

export const usePageMeta = (
  pageTitle: string,
  pageDescription = ''
): PageMetaProps | null => {
  return useMemo(() => {
    if (!pageTitle) return null;

    const pageData = APP_ROUTES.find((route) => route.name === pageTitle);

    if (!pageData) return null;

    const title = `${pageData.meta.title || 'Page'} | ${APP_NAME}`;
    const description = pageDescription;
    return {
      title,
      description,
    };
  }, [pageTitle]);
};

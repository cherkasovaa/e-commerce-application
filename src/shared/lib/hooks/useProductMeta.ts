import type { PageMetaProps } from '@/features/ProductMeta/model/types';
import { APP_NAME, LANGUAGE } from '@/shared/config/constants';
import type { ProductProjection } from '@commercetools/platform-sdk';
import { useMemo } from 'react';

export const useProductMeta = (
  product: ProductProjection | undefined
): PageMetaProps | undefined => {
  return useMemo(() => {
    if (!product) return undefined;

    const title = `${product.name?.[LANGUAGE.EN] || 'Page'} | ${APP_NAME}`;
    const description =
      product.metaDescription?.[LANGUAGE.EN] ||
      product.description?.[LANGUAGE.EN] ||
      '';

    return {
      title,
      description,
    };
  }, [product]);
};

import type { ProductDetailsProps } from '@/pages/product/model/types';
import { LANGUAGE } from '@/shared/config/constants';
import type { ProductProjection } from '@commercetools/platform-sdk';
import { getProductAttribute } from './getProductAttribute';
import { getProductPrice } from './getProductPrice';

export const getDataForProductDetails = (
  data: ProductProjection
): ProductDetailsProps => {
  const title = data.name?.[LANGUAGE.EN] || 'No name';
  const description = data.description?.[LANGUAGE.EN] || '';
  const rating = getProductAttribute<number>(data, 'rating');
  const price = getProductPrice(data.masterVariant?.prices ?? []);

  return {
    title,
    description,
    rating,
    price,
  };
};

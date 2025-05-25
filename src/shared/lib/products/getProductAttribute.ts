import type { ProductProjection } from '@commercetools/platform-sdk';

export const getProductAttribute = <T>(
  product: ProductProjection,
  attributeName: string
): T | null => {
  const attribute = product?.masterVariant?.attributes?.find(
    (variant) => variant.name === attributeName
  );

  return attribute?.value ?? null;
};

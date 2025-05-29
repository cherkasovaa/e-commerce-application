import { type ProductProjection } from '@commercetools/platform-sdk';

interface IProductPriceMeta {
  originalPrice: number | undefined;
  discountedPrice: number | undefined;
  currency: string;
  isDiscounted: boolean;
}

export const useProductPrice = (
  product: ProductProjection
): IProductPriceMeta => {
  const price = product.masterVariant.prices?.[0];

  const originalPrice = price?.value.centAmount ?? undefined;
  const discountedPrice = price?.discounted?.value.centAmount ?? undefined;
  const currency = price?.value.currencyCode ?? 'EUR';

  const isDiscounted =
    originalPrice !== undefined &&
    discountedPrice !== undefined &&
    discountedPrice < originalPrice;

  return {
    originalPrice,
    discountedPrice,
    currency,
    isDiscounted,
  };
};

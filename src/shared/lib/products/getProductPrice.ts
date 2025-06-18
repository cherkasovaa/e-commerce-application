import { LANGUAGE } from '@/shared/config/constants';
import type { ProductPrice } from '@/shared/types/productPrice';
import type { Price } from '@commercetools/platform-sdk';

export const getProductPrice = (prices: Price[]): ProductPrice | null => {
  if (prices.length === 0) {
    return null;
  }

  const price = prices[0];
  const currency = price.value.currencyCode;
  const hasDiscount = !!price?.discounted;
  const centAmount = hasDiscount
    ? price.discounted.value.centAmount
    : price.value.centAmount;

  const value = new Intl.NumberFormat(LANGUAGE.EN, {
    style: 'currency',
    currency: currency,
  }).format(centAmount / 100);

  const originalCentAmount = price.value.centAmount;

  const original = new Intl.NumberFormat(LANGUAGE.EN, {
    style: 'currency',
    currency: currency,
  }).format(originalCentAmount / 100);

  let discount: number | null = null;

  if (hasDiscount) {
    const discountCentAmount = price.discounted.value.centAmount;

    discount = Math.floor(
      ((originalCentAmount - discountCentAmount) / originalCentAmount) * 100
    );
  }

  return {
    value,
    original,
    hasDiscount,
    currency,
    discount,
  };
};

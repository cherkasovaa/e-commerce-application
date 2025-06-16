import type { Cart } from '@commercetools/platform-sdk';

export function isHttpError(error: unknown): error is { statusCode: number } {
  return typeof error === 'object' && error !== null && 'statusCode' in error;
}

export const getCartItemCount = (cart: Cart | undefined): number => {
  if (!cart) return 0;
  return cart.lineItems.reduce((total, item) => total + item.quantity, 0);
};

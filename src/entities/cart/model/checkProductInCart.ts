import { type Cart } from '@commercetools/platform-sdk';

export const checkProductInCart = (cart: Cart, id: string): boolean => {
  return cart.lineItems.some((product) => {
    return product.id === id;
  });
};

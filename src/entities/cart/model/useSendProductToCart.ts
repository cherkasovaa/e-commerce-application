import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { addLineItem } from './addLineItem';
import { getMyActiveCart } from './getMyActiveCart';
import type { Cart } from '@commercetools/platform-sdk';
import { checkProductInCart } from './checkProductInCart';

const fetchCart = async (productId: string): Promise<Cart> => {
  const cart = await getMyActiveCart();

  if (checkProductInCart(cart, productId)) {
    return cart;
  }
  return addLineItem(cart.id, cart.version, productId);
};

export const useSendProductToCart = (): UseMutationResult<
  Cart,
  Error,
  string,
  unknown
> => {
  const mutation = useMutation({
    mutationKey: ['add-cart'],
    mutationFn: fetchCart,
  });

  return mutation;
};

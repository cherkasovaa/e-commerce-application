import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import { addLineItem } from './addLineItem';
import { getMyActiveCart } from './getMyActiveCart';
import type { Cart } from '@commercetools/platform-sdk';

export const useSendProductToCart = (): UseMutationResult<
  Cart,
  Error,
  string,
  { previousCart?: Cart }
> => {
  const queryClient = useQueryClient();

  return useMutation<Cart, Error, string, { previousCart?: Cart }>({
    mutationKey: ['add-cart'],

    mutationFn: async (productId) => {
      const cart = await getMyActiveCart();
      if (cart.lineItems.some((item) => item.id === productId)) {
        return cart;
      }
      return addLineItem(cart.id, cart.version, productId);
    },

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['cart'] });
      const previousCart = queryClient.getQueryData<Cart>(['cart']);
      return { previousCart };
    },

    onError: (_error, _productId, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(['cart'], context.previousCart);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

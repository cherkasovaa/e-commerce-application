import type { Cart } from '@commercetools/platform-sdk';
import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import { getMyActiveCart } from './getMyActiveCart';
import { removeLineItem } from './removeLineItem';

export const useRemoveProductFromCart = (): UseMutationResult<
  Cart,
  Error,
  string,
  { previousCart?: Cart }
> => {
  const queryClient = useQueryClient();

  return useMutation<Cart, Error, string, { previousCart?: Cart }>({
    mutationKey: ['remove-cart'],

    mutationFn: async (productId) => {
      const cart = await getMyActiveCart();

      const lineItem = cart.lineItems.find(
        (item) => item.productId === productId
      );

      if (!lineItem) {
        throw new Error('Line item not found');
      }

      return removeLineItem(cart.id, cart.version, lineItem.id);
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

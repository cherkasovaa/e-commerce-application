import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getApiRoot } from '@/shared/api/commerceTools';
import { useCartQuery } from './useCartQuery';

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();
  const { data: cart } = useCartQuery();

  return useMutation({
    mutationFn: async (lineItemId: string) => {
      if (!cart) throw new Error('Cart not loaded');

      const res = await getApiRoot()
        .me()
        .carts()
        .withId({ ID: cart.id })
        .post({
          body: {
            version: cart.version,
            actions: [
              {
                action: 'removeLineItem',
                lineItemId,
              },
            ],
          },
        })
        .execute();

      return res.body;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

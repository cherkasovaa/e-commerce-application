import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getApiRoot } from '@/shared/api/commerceTools';
import { useCartQuery } from './useCartQuery';

export const useUpdateItemQuantity = () => {
  const { data: cart } = useCartQuery();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      itemId,
      quantity,
    }: {
      itemId: string;
      quantity: number;
    }) => {
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
                action: 'changeLineItemQuantity',
                lineItemId: itemId,
                quantity,
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

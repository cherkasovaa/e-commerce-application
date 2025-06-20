import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getApiRoot } from '@/shared/api/commerceTools';
import type {
  Cart,
  MyCartRemoveLineItemAction,
} from '@commercetools/platform-sdk';

export const useClearCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (cart: Cart) => {
      const actions: MyCartRemoveLineItemAction[] = cart.lineItems.map(
        (item) => ({
          action: 'removeLineItem',
          lineItemId: item.id,
        })
      );

      const res = await getApiRoot()
        .me()
        .carts()
        .withId({ ID: cart.id })
        .post({
          body: {
            version: cart.version,
            actions,
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

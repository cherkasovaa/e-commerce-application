import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getApiRoot } from '@/shared/api/commerceTools';
import type {
  Cart,
  MyCartAddDiscountCodeAction,
} from '@commercetools/platform-sdk';

export const useApplyPromocode = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ cart, code }: { cart: Cart; code: string }) => {
      const actions: MyCartAddDiscountCodeAction[] = [
        {
          action: 'addDiscountCode',
          code,
        },
      ];

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

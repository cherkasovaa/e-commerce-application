import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getApiRoot } from '@/shared/api/commerceTools';
import type {
  Cart,
  MyCartRemoveDiscountCodeAction,
} from '@commercetools/platform-sdk';

export const useRemovePromocode = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ cart, codeId }: { cart: Cart; codeId: string }) => {
      const action: MyCartRemoveDiscountCodeAction = {
        action: 'removeDiscountCode',
        discountCode: {
          typeId: 'discount-code',
          id: codeId,
        },
      };

      const res = await getApiRoot()
        .me()
        .carts()
        .withId({ ID: cart.id })
        .post({
          body: {
            version: cart.version,
            actions: [action],
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

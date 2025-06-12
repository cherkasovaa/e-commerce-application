import { getApiRoot } from '@/shared/api/commerceTools';
import type { Cart } from '@commercetools/platform-sdk';

export const addLineItem = async (
  cartId: string,
  version: number,
  productId: string
): Promise<Cart> => {
  const response = await getApiRoot()
    .me()
    .carts()
    .withId({ ID: cartId })
    .post({
      body: {
        version,
        actions: [
          {
            action: 'addLineItem',
            productId,
            quantity: 1,
          },
        ],
      },
    })
    .execute();
  return response.body;
};

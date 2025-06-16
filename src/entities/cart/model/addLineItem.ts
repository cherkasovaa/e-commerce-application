import { getApiRoot } from '@/shared/api/commerceTools';
import { localStorageService } from '@/shared/lib/localStorage/localStorageService';
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

  if (response.body.anonymousId) {
    localStorageService.setAnonymousID(response.body.anonymousId);
  }

  return response.body;
};

import { getApiRoot } from '@/shared/api/commerceTools';
import { LANGUAGE } from '@/shared/config/constants';
import type { Cart } from '@commercetools/platform-sdk';

export const getMyActiveCart = async (): Promise<Cart> => {
  try {
    const resp = await getApiRoot().me().activeCart().get().execute();
    return resp.body;
  } catch (error) {
    const stringified = JSON.stringify(error);
    const parsed = JSON.parse(stringified);

    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      parsed.statusCode === 404
    ) {
      const createResp = await getApiRoot()
        .me()
        .carts()
        .post({
          body: {
            currency: 'EUR',
            locale: LANGUAGE.EN,
          },
        })
        .execute();
      return createResp.body;
    }

    throw error;
  }
};

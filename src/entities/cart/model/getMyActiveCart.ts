import { getApiRoot } from '@/shared/api/commerceTools';
import { LANGUAGE } from '@/shared/config/constants';
import { localStorageService } from '@/shared/lib/localStorage/localStorageService';
import type { Cart } from '@commercetools/platform-sdk';

export const getMyActiveCart = async (): Promise<Cart> => {
  const isAuth = localStorageService.getAuthStatus();
  const anonymousId = localStorageService.getAnonymousID();

  if (!isAuth && !anonymousId) {
    const response = await getApiRoot()
      .me()
      .carts()
      .post({
        body: { currency: 'EUR', locale: LANGUAGE.EN },
      })
      .execute();
    if (response.body.anonymousId) {
      localStorageService.setAnonymousID(response.body.anonymousId);
    }
    return response.body;
  }

  try {
    const resp = await getApiRoot().me().activeCart().get().execute();
    if (resp.body.anonymousId) {
      localStorageService.setAnonymousID(resp.body.anonymousId);
    }
    return resp.body;
  } catch (error) {
    const stringified = JSON.stringify(error);
    const parsed = JSON.parse(stringified);

    if (parsed.statusCode === 404) {
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

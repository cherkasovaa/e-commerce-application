import { getApiRoot } from '@/shared/api/commerceTools';
import type { Cart } from '@commercetools/platform-sdk';
import { isHttpError } from '../model';

export const getActiveCart = async (): Promise<Cart | null> => {
  try {
    const res = await getApiRoot().me().activeCart().get().execute();
    return res.body;
  } catch (error) {
    if (isHttpError(error) && error.statusCode === 404) return null;
    throw error;
  }
};

import { getApiRoot } from '@/shared/api/commerceTools';
import { localStorageService } from '@/shared/lib/localStorage/localStorageService';
import type { Cart } from '@commercetools/platform-sdk';
import { useQuery } from '@tanstack/react-query';
import { isHttpError } from '../model';

export const useCartQuery = () => {
  const isAuthenticated = localStorageService.getAuthStatus();

  return useQuery<Cart | null>({
    queryKey: ['cart'],
    retry: false,
    queryFn: async () => {
      try {
        if (isAuthenticated) {
          const res = await getApiRoot().me().activeCart().get().execute();
          return res.body;
        } else {
          const anonymousId = localStorageService.getAnonymousID();

          if (!anonymousId) return null;

          const res = await getApiRoot()
            .me()
            .activeCart()
            .get({
              queryArgs: { anonymousId },
            })
            .execute();
          return res.body;
        }
      } catch (error) {
        if (isHttpError(error) && error.statusCode === 404) return null;
        throw error;
      }
    },
  });
};

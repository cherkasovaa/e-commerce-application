import { useQuery } from '@tanstack/react-query';
import { getApiRoot } from '@/shared/api/commerceTools';
import type { Cart } from '@commercetools/platform-sdk';
import { isHttpError } from '../model';
import { localStorageService } from '@/shared/lib/localStorage/localStorageService';

export const useCartQuery = () =>
  useQuery<Cart | null>({
    queryKey: ['cart'],
    retry: false,
    queryFn: async () => {
      try {
        const anonymousId = localStorageService.getAnonymousID();

        const res = await getApiRoot()
          .me()
          .activeCart()
          .get({
            queryArgs: anonymousId ? { anonymousId } : {},
          })
          .execute();
        return res.body;
      } catch (error) {
        if (isHttpError(error) && error.statusCode === 404) return null;
        throw error;
      }
    },
  });

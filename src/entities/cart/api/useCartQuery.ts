import { useQuery } from '@tanstack/react-query';
import { getActiveCart } from './getActiveCart';
import type { Cart } from '@commercetools/platform-sdk';

export const useCartQuery = () =>
  useQuery<Cart | null>({
    queryKey: ['cart'],
    queryFn: getActiveCart,
  });

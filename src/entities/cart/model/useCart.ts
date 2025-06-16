import { type Cart } from '@commercetools/platform-sdk';
import { getMyActiveCart } from './getMyActiveCart';
import { useQuery } from '@tanstack/react-query';

interface IUseCart {
  cart?: Cart;
  isLoading: boolean;
}

export const useCart = (): IUseCart => {
  const { data, isLoading } = useQuery<Cart, Error>({
    queryKey: ['cart'],
    queryFn: getMyActiveCart,
    staleTime: 1000 * 60 * 5,
  });

  return {
    cart: data,
    isLoading,
  };
};

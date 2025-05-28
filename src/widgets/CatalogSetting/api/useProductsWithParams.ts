import { useQuery } from '@tanstack/react-query';
import {
  type IUseProductsWithParamsResponse,
  type IUseProductsWithParamsProps,
} from '../model/types';
import { fetchProductsWithParams } from './fetchProductsWithParams';

export const useProductsWithParams = (
  params: IUseProductsWithParamsProps
): IUseProductsWithParamsResponse => {
  const queryKey = ['products', JSON.stringify(params)];

  const { data, isLoading, isError } = useQuery({
    queryKey,
    queryFn: () => {
      return fetchProductsWithParams(params);
    },
    staleTime: 5 * 1000,
    enabled: !!params.filters,
  });

  return {
    products: data?.results ?? [],
    total: data?.total ?? 0,
    isLoading,
    isError,
  };
};

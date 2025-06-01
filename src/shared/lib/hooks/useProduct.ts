import { getProductById } from '@/entities/product/api/getProductById';
import type { QueryResult } from '@/shared/types/query';
import type { ProductProjection } from '@commercetools/platform-sdk';
import { useQuery } from '@tanstack/react-query';

export function useProduct(id: string): QueryResult<ProductProjection> {
  const { data, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
  });

  return { data, isLoading, error };
}

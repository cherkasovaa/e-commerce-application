import { getApiRoot } from '@/shared/api/commerceTools';
import { type ProductProjection } from '@commercetools/platform-sdk';
import { useQuery } from '@tanstack/react-query';

interface IUseProductsResult {
  products?: ProductProjection[];
}

const fetchProductsList = async (): Promise<ProductProjection[]> => {
  const response = await getApiRoot()
    .productProjections()
    .search()
    .get({
      queryArgs: {
        limit: 500,
      },
    })
    .execute();
  return response.body.results;
};

export const useProducts = (): IUseProductsResult => {
  const { data } = useQuery<ProductProjection[]>({
    queryKey: ['products'],
    queryFn: fetchProductsList,
  });

  return { products: data };
};

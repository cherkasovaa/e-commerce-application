import { getApiRoot } from '@/shared/api/commerceTools';
import { type Category } from '@commercetools/platform-sdk';
import { useQuery } from '@tanstack/react-query';

interface IUseCategoriesResult {
  categories?: Category[];
}

const fetchCategoriesList = async (): Promise<Category[]> => {
  const response = await getApiRoot().categories().get().execute();
  return response.body.results;
};

export const useCategories = (): IUseCategoriesResult => {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategoriesList,
  });

  return { categories: data };
};

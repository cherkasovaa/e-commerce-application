import { getCategoriesByIds } from '@/entities/category/api/getCategoriesByIds';
import type { QueryResult } from '@/shared/types/query';
import type { Category, CategoryReference } from '@commercetools/platform-sdk';
import { useQuery } from '@tanstack/react-query';

export function useCategory(ids: CategoryReference[]): QueryResult<Category[]> {
  const categoriesIds = ids.map((id) => id.id);

  const { data, isLoading, error } = useQuery({
    queryKey: ['categories', categoriesIds],
    queryFn: () => getCategoriesByIds(categoriesIds),
  });

  return { data, isLoading, error };
}

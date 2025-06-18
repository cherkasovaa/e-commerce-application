import type { Category } from '@commercetools/platform-sdk';
import { getApiRoot } from '../../../shared/api/commerceTools';

export const getCategoryById = async (
  categoryId: string
): Promise<Category | null> => {
  const apiRoot = getApiRoot();

  try {
    const response = await apiRoot
      .categories()
      .withId({ ID: categoryId })
      .get()
      .execute();

    return response.body;
  } catch {
    // console.error('Error fetching category:', error);
    return null;
  }
};

export const getCategoriesByIds = async (
  categoryIds: string[]
): Promise<Category[]> => {
  const promises = categoryIds.map((id) => getCategoryById(id));
  const result = await Promise.all(promises);

  return result.filter((category) => category !== null);
};

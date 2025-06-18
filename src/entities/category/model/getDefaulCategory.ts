import { type Category } from '@commercetools/platform-sdk';
import { useCategories } from './useCategories';

export const useDefaultCategoryId = (): Category | undefined => {
  const { categories } = useCategories();

  if (!categories || !categories.length) return undefined;

  const defaultCategory = categories.find(
    (category) => category.key === 'all-games'
  );

  return defaultCategory || categories[0];
};

import { useCategories } from './useCategories';

export const useDefaultCategoryId = (): string | undefined => {
  const { categories } = useCategories();

  if (!categories || !categories.length) return undefined;

  const defaultCategory = categories.find(
    (category) => category.key === 'all-games'
  );

  return defaultCategory?.id || categories[0].id;
};

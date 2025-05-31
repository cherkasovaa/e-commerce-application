import { useCategories } from '@/entities/category';
import { LANGUAGE } from '@/shared/config/constants';
import { type Category } from '@commercetools/platform-sdk';

export const useSpecificCategory = (category: string): Category[] => {
  const { categories } = useCategories();
  if (!categories) return [];
  const parent = categories?.find(
    (cat: Category) => cat.slug[LANGUAGE.EN] === category
  );

  const resultCategories = categories?.filter((cat: Category) => {
    return cat.parent?.id === parent?.id;
  });

  return resultCategories;
};

import type { Category, ProductProjection } from '@commercetools/platform-sdk';

export interface CategoriesProps {
  categories: Category[];
  gameData: ProductProjection;
}

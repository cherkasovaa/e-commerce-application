import { DEFAULT_FILTERS } from './constants';
import { type IProductsParams } from './types';

export const getDefaultParams = (
  defaultCategoryId: string
): IProductsParams => ({
  category: defaultCategoryId,
  searchQuery: '',
  filters: DEFAULT_FILTERS,
  sort: 'name.en-US asc',
  limit: 10,
  page: 1,
});

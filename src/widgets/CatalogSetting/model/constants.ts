import { type IFilterData } from '@/features/FilterForm/model/types';
import { type IProductsParams } from './types';
import { DEFAULT_CATEGORY } from '@/entities/category/model/constants';

export const DEFAULT_FILTERS: IFilterData = {
  price: [0, 100],
  rating: [0, 10],
  tags: {},
  genre: '',
};

export const DEFAULT_PARAMS: IProductsParams = {
  category: DEFAULT_CATEGORY,
  searchQuery: '',
  filters: DEFAULT_FILTERS,
  sort: 'name.en-US asc',
  limit: 10,
  page: 1,
};

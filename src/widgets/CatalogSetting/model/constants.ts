import { type IFilterData } from '@/features/FilterForm/model/types';
import { type IProductsParams } from './types';

export const DEFAULT_FILTERS: IFilterData = {
  price: [0, 100],
  rating: [0, 10],
  tags: {},
  genre: '',
};

export const DEFAULT_PARAMS: IProductsParams = {
  category: '',
  searchQuery: '',
  filters: DEFAULT_FILTERS,
  sort: 'name.en-US asc',
  limit: 10,
  page: 1,
};

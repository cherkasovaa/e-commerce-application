import { type IFilterData } from '@/features/FilterForm/model/types';
import { type IProductsParams } from './types';

export const DEFAULT_FILTERS: IFilterData = {
  price: [0, 100],
  rating: [0, 10],
  tags: {},
  genre: '',
};

export const DEFAULT_PARAMS: IProductsParams = {
  category: '1e7d4bb3-0047-43e7-ac18-6fe7381690d9',
  searchQuery: '',
  filters: DEFAULT_FILTERS,
  sort: 'name[en-US] asc',
  limit: 10,
  page: 1,
};

import {
  type AmountValue,
  type SortValue,
} from '@/features/CatalogSelect/model/types';
import { type IFilterData } from '@/features/FilterForm/model/types';
import { type ProductProjection } from '@commercetools/platform-sdk';

export interface IProductsParams {
  category: string;
  searchQuery: string;
  filters: IFilterData;
  sort: SortValue;
  limit: AmountValue;
  page: number;
}

export interface IUseProductsWithParamsProps {
  category: string;
  searchQuery: string;
  filters: IFilterData;
  sort: SortValue;
  limit: AmountValue;
  page: number;
}

export interface IUseProductsWithParamsResponse {
  products: ProductProjection[];
  total: number;
  isLoading: boolean;
  isError: boolean;
}

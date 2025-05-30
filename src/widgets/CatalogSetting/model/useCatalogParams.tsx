import { useDefaultCategoryId } from '@/entities/category/model/getDefaulCategory';
import { DEFAULT_FILTERS, DEFAULT_PARAMS } from './constants';
import { type IProductsParams } from './types';
import { type Category } from '@commercetools/platform-sdk';
import { useEffect, useState } from 'react';
import {
  type SortValue,
  type AmountValue,
} from '@/features/CatalogSelect/model/types';
import { type IFilterData } from '@/features/FilterForm/model/types';

export const useCatalogParams = () => {
  const [params, setParams] = useState<IProductsParams>(DEFAULT_PARAMS);
  const defaultCategory = useDefaultCategoryId();
  const [activeCategory, setActiveCategory] = useState<Category | undefined>(
    defaultCategory
  );

  useEffect(() => {
    if (!defaultCategory) return;
    setActiveCategory(defaultCategory);
    setParams({ ...DEFAULT_PARAMS, category: defaultCategory.id });
  }, [defaultCategory]);

  const updateParams = (next: Partial<IProductsParams>): void => {
    setParams((prev) => ({ ...prev, ...next }));
  };

  const handlers = {
    onCategoryChange: (category: Category): void => {
      setActiveCategory(category);
      setParams({
        category: category.id,
        page: 1,
        searchQuery: '',
        sort: DEFAULT_PARAMS.sort,
        limit: DEFAULT_PARAMS.limit,
        filters: DEFAULT_FILTERS,
      });
    },

    onSearchSubmit: (searchQuery: string): void =>
      updateParams({ searchQuery: searchQuery.trim(), page: 1 }),

    onSortChange: (sort: SortValue): void => updateParams({ sort, page: 1 }),

    onLimitChange: (limit: AmountValue): void =>
      updateParams({ limit, page: 1 }),

    onPageChange: (_e: unknown, page: number): void => updateParams({ page }),

    onFilterSubmit: (filters: IFilterData): void =>
      updateParams({ filters, page: 1 }),
  };

  return {
    params,
    activeCategory,
    ...handlers,
  };
};

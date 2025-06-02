import { useDefaultCategoryId } from '@/entities/category/model/getDefaulCategory';
import { DEFAULT_FILTERS, DEFAULT_PARAMS } from './constants';
import { type IProductsParams } from './types';
import { type Category } from '@commercetools/platform-sdk';
import { useCallback, useEffect, useState } from 'react';
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

  const updateParams = useCallback((next: Partial<IProductsParams>): void => {
    setParams((prev) => ({ ...prev, ...next }));
  }, []);

  const onCategoryChange = useCallback((category: Category): void => {
    setActiveCategory(category);
    setParams({
      category: category.id,
      page: 1,
      searchQuery: '',
      sort: DEFAULT_PARAMS.sort,
      limit: DEFAULT_PARAMS.limit,
      filters: DEFAULT_FILTERS,
    });
  }, []);

  const onSearchSubmit = useCallback(
    (searchQuery: string): void =>
      updateParams({ searchQuery: searchQuery.trim(), page: 1 }),
    [updateParams]
  );

  const onSortChange = useCallback(
    (sort: SortValue): void => updateParams({ sort, page: 1 }),
    [updateParams]
  );

  const onLimitChange = useCallback(
    (limit: AmountValue): void => updateParams({ limit, page: 1 }),
    [updateParams]
  );

  const onPageChange = useCallback(
    (_e: unknown, page: number): void => updateParams({ page }),
    [updateParams]
  );

  const onFilterSubmit = useCallback(
    (filters: IFilterData): void => updateParams({ filters, page: 1 }),
    [updateParams]
  );

  return {
    params,
    activeCategory,
    onCategoryChange,
    onSearchSubmit,
    onSortChange,
    onLimitChange,
    onPageChange,
    onFilterSubmit,
  };
};

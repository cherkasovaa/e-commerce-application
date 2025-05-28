import { AmountPerPageSelect, SortSelect } from '@/features/CatalogSelect';

import { CategorySelect } from '@/features/CategorySelect';
import { FilterForm } from '@/features/FilterForm';
import { SearchBar } from '@/features/SearchBar';
import { ProductList } from '@/features/ProductList';
import { Box, Button, Grid, Pagination, Stack } from '@mui/material';
import { type ChangeEvent, type JSX, useState } from 'react';
import { type IProductsParams } from '../model/types';
import {
  type AmountValue,
  type SortValue,
} from '@/features/CatalogSelect/model/types';
import { useProductsWithParams } from '../api/useProductsWithParams';
import { DEFAULT_FILTERS, DEFAULT_PARAMS } from '../model/constants';
import { type IFilterData } from '@/features/FilterForm/model/types';

export const CatalogSetting = (): JSX.Element => {
  const [isFilterFormOpen, setIsFilterFormOpen] = useState(false);

  const [params, setParams] = useState<IProductsParams>(DEFAULT_PARAMS);

  const { products, total, isLoading } = useProductsWithParams(params);

  const updateParams = (next: Partial<IProductsParams>): void => {
    setParams((prev) => ({ ...prev, ...next }));
  };

  const onSearchSubmit = (searchQuery: string): void =>
    updateParams({ searchQuery: searchQuery.trim(), page: 1 });
  const onSortChange = (sort: SortValue): void =>
    updateParams({ sort, page: 1 });
  const onLimitChange = (limit: AmountValue): void =>
    updateParams({ limit, page: 1 });
  const onPageChange = (_e: ChangeEvent<unknown>, page: number): void =>
    updateParams({ page });

  const onCategoryChange = (category: string): void =>
    setParams({
      category,
      page: 1,
      searchQuery: '',
      sort: DEFAULT_PARAMS.sort,
      limit: DEFAULT_PARAMS.limit,
      filters: DEFAULT_FILTERS,
    });

  const handleFilterFormData = (filters: IFilterData): void => {
    setParams((prev) => ({ ...prev, filters, page: 1 }));
  };

  return (
    <Grid container p={4} size={12}>
      <CategorySelect onCategoryChange={onCategoryChange} />
      <Grid container spacing={4} size={12}>
        <Grid size={12}>
          <SearchBar
            searchQuery={params.searchQuery}
            onSearchSubmit={onSearchSubmit}
          />
        </Grid>

        <Grid
          size={12}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 3fr', md: '1fr 3fr' },
            gap: 5,
          }}
        >
          <Button
            size="small"
            variant="contained"
            onClick={() => setIsFilterFormOpen(!isFilterFormOpen)}
            sx={{ borderRadius: 0, height: '100%' }}
          >
            {isFilterFormOpen ? 'Hide' : 'Show'} filters
          </Button>
          <Stack direction="row" justifyContent="space-between" spacing={5}>
            <SortSelect value={params.sort} onChange={onSortChange} />
            <AmountPerPageSelect
              value={params.limit}
              onChange={onLimitChange}
            />
          </Stack>
        </Grid>

        <Grid
          size={12}
          spacing={4}
          justifyContent={'center'}
          sx={{
            gridTemplateColumns: {
              display: 'grid',
              xs: '1fr',
              sm: isFilterFormOpen ? '1fr 3fr' : '0px 1fr',
              md: isFilterFormOpen ? '1fr 3fr' : '0px 1fr',
            },
            gap: isFilterFormOpen ? 5 : 0,
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              transition: 'opacity 0.3s ease',
              opacity: isFilterFormOpen ? 1 : 0,
            }}
          >
            <FilterForm handleFilterFormData={handleFilterFormData} />
          </Box>

          <Box>
            <Box display="flex" justifyContent="center" mb={2}>
              <Pagination
                count={Math.ceil(total / Number(params.limit))}
                page={params.page}
                onChange={onPageChange}
                disabled={isLoading}
                size="small"
              />
            </Box>
            <ProductList products={products} isLoading={isLoading} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

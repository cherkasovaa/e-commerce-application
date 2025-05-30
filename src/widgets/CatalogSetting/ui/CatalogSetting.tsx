import { AmountPerPageSelect, SortSelect } from '@/features/CatalogSelect';

import { CategorySelect } from '@/features/CategorySelect';
import { FilterForm } from '@/features/FilterForm';
import { SearchBar } from '@/features/SearchBar';
import { ProductList } from '@/features/ProductList';
import { Box, Button, Grid, Pagination, Stack } from '@mui/material';
import { type JSX, useState } from 'react';

import { useCatalogParams } from '../model/useCatalogParams';
import { CatalogBreadcrumbs } from '@/features/CatalogBreadcrumbs';

export const CatalogSetting = (): JSX.Element => {
  const [isFilterFormOpen, setIsFilterFormOpen] = useState(false);

  const {
    params,
    activeCategory,
    products,
    total,
    isLoading,
    onSearchSubmit,
    onSortChange,
    onLimitChange,
    onPageChange,
    onCategoryChange,
    onFilterSubmit,
  } = useCatalogParams();

  return (
    <Grid container p={4} size={12}>
      <CategorySelect
        onCategoryChange={onCategoryChange}
        activeCategoryId={activeCategory?.id}
      />
      <CatalogBreadcrumbs category={activeCategory?.name['en-US']} />
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
            <FilterForm handleFilterFormData={onFilterSubmit} />
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
            <Box display="flex" justifyContent="center" mt={2}>
              <Pagination
                count={Math.ceil(total / Number(params.limit))}
                page={params.page}
                onChange={onPageChange}
                disabled={isLoading}
                size="large"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

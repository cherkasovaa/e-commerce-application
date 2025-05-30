import { AmountPerPageSelect, SortSelect } from '@/features/CatalogSelect';

import { CategorySelect } from '@/features/CategorySelect';
import { FilterForm } from '@/features/FilterForm';
import { SearchBar } from '@/features/SearchBar';
import { ProductList } from '@/features/ProductList';
import { Box, Button, Grid, Pagination, Stack } from '@mui/material';
import { type JSX, useEffect, useMemo, useState } from 'react';

import { useCatalogParams } from '../model/useCatalogParams';
import { CatalogBreadcrumbs } from '@/features/CatalogBreadcrumbs';
import { useProductsWithParams } from '../api/useProductsWithParams';
import { ErrorModal } from '@/shared/ui/ModalError';

export const CatalogSetting = (): JSX.Element => {
  const [isFilterFormOpen, setIsFilterFormOpen] = useState(false);
  const [showError, setShowError] = useState(false);

  const {
    params,
    activeCategory,
    onSearchSubmit,
    onSortChange,
    onLimitChange,
    onPageChange,
    onCategoryChange,
    onFilterSubmit,
  } = useCatalogParams();

  const { products, total, isLoading, isError, error } =
    useProductsWithParams(params);

  useEffect(() => {
    if (isError) setShowError(true);
  }, [isError]);

  const pageCount = useMemo(
    () => Math.ceil(total / Number(params.limit)),
    [total, params.limit]
  );

  const gridStyle = useMemo(
    () => ({
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: '1fr',
        md: isFilterFormOpen ? '1fr 3fr' : '0px 1fr',
      },
      gridTemplateRows: {
        xs: isFilterFormOpen ? 'min-content 1fr' : '0px 1fr',
        sm: isFilterFormOpen ? 'min-content 1fr' : '0px 1fr',
        md: '1fr',
      },
      gap: isFilterFormOpen ? 5 : 0,
    }),
    [isFilterFormOpen]
  );

  return (
    <Grid container p={4} size={12}>
      <ErrorModal
        open={showError}
        title={`Error fetching data from server: ${error?.message}`}
        message={'Try again later'}
        onClose={() => {
          setShowError(false);
        }}
      />
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
            onClick={() => setIsFilterFormOpen((v) => !v)}
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

        <Grid size={12} spacing={4} justifyContent={'center'} sx={gridStyle}>
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
                count={pageCount}
                page={params.page}
                onChange={onPageChange}
                disabled={isLoading}
                size="small"
              />
            </Box>
            <ProductList products={products} isLoading={isLoading} />
            <Box display="flex" justifyContent="center" mt={2}>
              <Pagination
                count={pageCount}
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

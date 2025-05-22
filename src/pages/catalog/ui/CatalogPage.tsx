import { CategoryCard, useCategories } from '@/entities/category';
import { CatalogFilter } from '@/features/CatalogFilters';
import { SearchBar } from '@/features/SearchBar';
import { ProductList } from '@/widgets/ProductList';
import { Box, Grid } from '@mui/material';
import { type JSX } from 'react';

export const CatalogPage = (): JSX.Element => {
  const { categories } = useCategories();

  return (
    <Box p={4}>
      <Grid container spacing={2} mb={4} justifyContent="center">
        {categories &&
          categories.map((category) => (
            <CategoryCard
              imageUrl="https://img.freepik.com/free-photo/simple-product-backdrop-with-shadow_53876-104170.jpg?t=st=1747935148~exp=1747938748~hmac=24e7a6341fe09bd1b5f4a91c7f0f7cdab95dc874da12c57cccc883aeec702f29&w=1380"
              category={category}
              key={category.key}
              onCategoryClick={() => console.log(category.name)}
            />
          ))}
      </Grid>
      <Grid container spacing={4}>
        <SearchBar
          searchQuery=""
          onSearchChange={() => {
            console.log('change');
          }}
        />
        <CatalogFilter />
        <ProductList />
      </Grid>
    </Box>
  );
};

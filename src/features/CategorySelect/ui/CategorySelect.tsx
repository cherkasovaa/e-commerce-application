import { CategoryCard } from '@/entities/category';
import { Grid } from '@mui/material';
import { useSpecificCategory } from '../model/useSpecificCategory';
import { type JSX } from 'react';
import { type ICategorySelectProps } from '../model/types';
import { type Category } from '@commercetools/platform-sdk';

export const CategorySelect = ({
  onCategoryChange,
  activeCategoryId,
}: ICategorySelectProps): JSX.Element => {
  const groupedCategories = useSpecificCategory('groups');
  const saleCategories = useSpecificCategory('sales');

  const categories = [...groupedCategories, ...saleCategories];

  const handleClick = (category: Category): void => {
    onCategoryChange(category);
  };

  return (
    <Grid container spacing={1} mb={3} size={12} justifyContent="center">
      {categories.map((category) => (
        <CategoryCard
          category={category}
          key={category.key}
          onCategoryClick={() => handleClick(category)}
          active={activeCategoryId === category.id}
        />
      ))}
    </Grid>
  );
};

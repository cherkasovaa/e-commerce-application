import { CategoryCard } from '@/entities/category';
import { Grid } from '@mui/material';
import { useSpecificCategory } from '../model/useSpecificCategory';
import { useEffect, useState, type JSX } from 'react';
import { type ICategorySelectProps } from '../model/types';
import { type Category } from '@commercetools/platform-sdk';
import { useDefaultCategoryId } from '@/entities/category/model/getDefaulCategory';

export const CategorySelect = ({
  onCategoryChange,
}: ICategorySelectProps): JSX.Element => {
  const groupedCategories = useSpecificCategory('groups');
  const saleCategories = useSpecificCategory('sales');

  const defaultCategoryId = useDefaultCategoryId();

  const [activeCard, setActiveCard] = useState('');

  useEffect(() => {
    if (defaultCategoryId) {
      setActiveCard(defaultCategoryId);
    }
  }, [defaultCategoryId]);

  const setActive = (cat: Category): void => {
    onCategoryChange(cat.id);
    setActiveCard(cat.id);
  };

  const categories = [...groupedCategories, ...saleCategories];

  return (
    <Grid container spacing={1} mb={3} size={12} justifyContent={'center'}>
      {categories &&
        categories.map((category) => {
          return (
            <CategoryCard
              category={category}
              key={category.key}
              onCategoryClick={() => setActive(category)}
              active={activeCard === category.id}
            />
          );
        })}
    </Grid>
  );
};

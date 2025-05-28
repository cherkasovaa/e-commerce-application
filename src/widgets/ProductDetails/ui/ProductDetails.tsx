import { LANGUAGE } from '@/shared/config/constants';
import { getProductAttribute } from '@/shared/lib/products/getProductAttribute';
import { getProductPrice } from '@/shared/lib/products/getProductPrice';
import { BreadcrumbsComponent, GameRating } from '@/shared/ui';
import { PriceContainer } from '@/shared/ui/PriceContainer/PriceContainer';
import type { ProductProjection } from '@commercetools/platform-sdk';
import { Grid, Typography, useTheme } from '@mui/material';
import type { JSX } from 'react';

export const ProductDetails = (props: ProductProjection): JSX.Element => {
  const theme = useTheme();
  // console.log(props)
  const title = props.name?.[LANGUAGE.EN] || 'No name';
  const description = props.description?.[LANGUAGE.EN] || '';
  const rating = getProductAttribute<number>(props, 'rating');
  const price = getProductPrice(props.masterVariant?.prices ?? []);

  return (
    <Grid container direction="column">
      <BreadcrumbsComponent gameName={title} />

      <Grid
        container
        direction="column"
        sx={{ p: { xs: '50px 0', md: '100px 0' } }}
      >
        {rating && (
          <Grid container sx={{ alignItems: 'center', gap: { xs: 1, md: 3 } }}>
            <GameRating value={rating} />
          </Grid>
        )}

        <Grid
          container
          spacing={3}
          sx={{ maxWidth: { xs: '100%', md: '60%' } }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{ color: theme.palette.text.primary }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ color: theme.palette.text.secondary }}
          >
            {description}
          </Typography>
        </Grid>

        <PriceContainer value={price} />
      </Grid>
    </Grid>
  );
};

import type { ProductDetailsProps } from '@/pages/product/model/types';
import { BreadcrumbsComponent, GameRating } from '@/shared/ui';
import { PriceContainer } from '@/shared/ui/PriceContainer/PriceContainer';
import { Grid, Typography, useTheme } from '@mui/material';
import type { JSX } from 'react';

export const ProductDetails = (props: ProductDetailsProps): JSX.Element => {
  const theme = useTheme();

  const title = props.title;
  const description = props.description;
  const rating = props.rating;
  const price = props.price;

  return (
    <Grid container direction="column">
      <BreadcrumbsComponent pageName={title} />

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

import { LANGUAGE } from '@/shared/config/constants';
import { getProductAttribute } from '@/shared/lib/products/getProductAttribute';
import { getProductPrice } from '@/shared/lib/products/getProductPrice';
import type { GameTag } from '@/shared/types/gameTag';
import {
  DeveloperContainer,
  GameRating,
  GameTagsContainer,
  GenreContainer,
  PlatformContainer,
} from '@/shared/ui';
import { PriceContainer } from '@/shared/ui/PriceContainer/PriceContainer';
import { ImageSlider } from '@/widgets/ImageSlider';
import type { ProductProjection } from '@commercetools/platform-sdk';
import { Grid, Typography, useTheme } from '@mui/material';
import type { JSX } from 'react';

interface Label {
  label: string;
}

export const ProductDetails = (props: ProductProjection): JSX.Element => {
  // console.log(props);
  const theme = useTheme();

  const title = props.name?.[LANGUAGE.EN] || 'No name';
  const description = props.description?.[LANGUAGE.EN] || '';

  const developer = getProductAttribute<string>(props, 'developer');
  const genre = getProductAttribute<Label>(props, 'genre');
  const rating = getProductAttribute<number>(props, 'rating');
  const platform = getProductAttribute<Label>(props, 'platform');
  const tags = getProductAttribute<GameTag[]>(props, 'tags');
  const price = getProductPrice(props.masterVariant?.prices ?? []);

  return (
    <Grid container spacing={2}>
      <Grid container size={{ xs: 12, sm: 5 }}>
        <ImageSlider images={props.masterVariant.images ?? []} />
      </Grid>

      <Grid
        container
        direction="column"
        size={{ xs: 12, sm: 7 }}
        sx={{ justifyContent: 'flex-start' }}
      >
        <Grid container sx={{ alignItems: 'center', gap: { xs: 1, md: 3 } }}>
          {rating && <GameRating value={rating} />}
          {developer && <DeveloperContainer value={developer} />}
          {genre && <GenreContainer value={genre} />}
        </Grid>

        <Grid container spacing={3}>
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

        <Grid container sx={{ gap: 2, mt: 3 }}>
          {platform && <PlatformContainer value={platform} />}

          {tags && <GameTagsContainer values={tags} />}
        </Grid>

        <PriceContainer value={price} />
      </Grid>
    </Grid>
  );
};

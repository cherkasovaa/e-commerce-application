import { type ProductProjection } from '@commercetools/platform-sdk';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { type JSX } from 'react';

interface IProductCardProps {
  product: ProductProjection;
  onDetailsClick: () => void;
}

export const ProductCard = ({
  product,
  onDetailsClick,
}: IProductCardProps): JSX.Element => {
  const genre = product.masterVariant.attributes?.find(
    (attr) => attr.name === 'genre'
  )?.value.label;
  const platform = product.masterVariant.attributes?.find(
    (attr) => attr.name === 'platform'
  )?.value.label;
  const ratingValue = product.masterVariant.attributes?.find(
    (attr) => attr.name === 'rating'
  )?.value;

  const image = product.masterVariant.images?.[0]?.url;
  const placeholder =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        sx={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: `0 0 16px rgba(255, 0, 0, 0.3)`,
          },
        }}
      >
        <CardMedia component="img" image={image || placeholder} height="200" />

        <CardContent>
          <Typography
            variant="subtitle1"
            component="h2"
            textAlign={'center'}
            gutterBottom
            fontWeight="bold"
            mb={3}
          >
            {product.name['en-US']}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={1}
          >
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ flex: 1, textAlign: 'left' }}
            >
              {platform === 'Nintendo Switch' ? 'Nintendo' : platform}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ flex: 1, textAlign: 'center' }}
            >
              {genre}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ flex: 1, textAlign: 'right' }}
            >
              {ratingValue}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={3}
          >
            <Button
              size="small"
              variant="outlined"
              onClick={onDetailsClick}
              color="secondary"
            >
              view details
            </Button>

            <Typography
              variant="subtitle1"
              color="primary"
              sx={{ textAlign: 'right' }}
            >
              {product.masterVariant.prices?.[0]
                ? `${(product.masterVariant.prices[0].value.centAmount / 100).toFixed(2)} ${product.masterVariant.prices[0].value.currencyCode}`
                : '0 EUR'}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

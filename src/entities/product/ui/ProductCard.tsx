import { type ProductProjection } from '@commercetools/platform-sdk';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { type JSX } from 'react';
import { getAttribute } from '../model';

interface IProductCardProps {
  product: ProductProjection;
  onDetailsClick: () => void;
}

export const ProductCard = ({
  product,
  onDetailsClick,
}: IProductCardProps): JSX.Element => {
  const genre = getAttribute(product, 'genre')?.value.label;

  const platform = getAttribute(product, 'platform')?.value.label;
  const ratingValue = getAttribute(product, 'rating')?.value;
  const description =
    product?.description?.['en-US'] ?? 'No description available.';

  const image = product.masterVariant.images?.[0]?.url;
  const placeholder =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  const theme = useTheme();

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        sx={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: `0 5px 16px ${theme.palette.primary.main}33`,
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
          <Box>
            <Tooltip title={description} placement="top">
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {description}
              </Typography>
            </Tooltip>
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
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
                transition:
                  'transform 0.2s ease, background-color 0.2s ease, color 0.2s ease',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                  color: theme.palette.getContrastText(
                    theme.palette.secondary.dark
                  ),
                  transform: 'scale(1.05)',
                },
              }}
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

import { type ProductProjection } from '@commercetools/platform-sdk';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { type JSX } from 'react';

import { useProductDetails } from '../model/useProductDetails';
import { LANGUAGE } from '@/shared/config/constants';
import { PriceContainer } from '@/shared/ui';
import { getProductPrice } from '@/shared/lib/products/getProductPrice';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface IProductCardProps {
  product: ProductProjection;
  isInCart: boolean;
  onDetailsClick: () => void;
  onCartClick: () => void;
}
export const ProductCard = ({
  product,
  isInCart,
  onDetailsClick,
  onCartClick,
}: IProductCardProps): JSX.Element => {
  const theme = useTheme();

  const { genre, platform, ratingValue, description, image } =
    useProductDetails(product);

  const price = getProductPrice(product.masterVariant?.prices ?? []);

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        sx={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          height: '100%',
          position: 'relative',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: ` 0 5px 16px ${theme.palette.primary.main}33`,
            '.discount-flag': {
              opacity: 0,
            },
            '.price': {
              transform: 'scale(1.2)',
              transition: 'transform 0.3s ease-in-out',
            },
          },
        }}
      >
        {price?.hasDiscount && (
          <Box
            className="discount-flag"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              px: 1.5,
              py: 0.5,
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              transition: 'opacity 0.2s ease',
              zIndex: 1,
              opacity: 0.8,
            }}
          >
            On sale!
          </Box>
        )}
        <CardMedia component="img" image={image} height="200" />

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="subtitle1"
            component="h2"
            textAlign={'center'}
            gutterBottom
            fontWeight="bold"
            mb={3}
          >
            {product.name[LANGUAGE.EN]}
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
            <Stack gap={2} maxWidth={'50%'}>
              <Button
                size="small"
                variant="outlined"
                onClick={onDetailsClick}
                color="secondary"
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.contrastText,
                  border: 'none',
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
              <Button
                size="small"
                variant="outlined"
                onClick={onCartClick}
                color="secondary"
                disabled={isInCart}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: isInCart
                    ? theme.palette.primary.dark
                    : theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  border: 'none',
                  transition:
                    'transform 0.2s ease, background-color 0.2s ease, color 0.2s ease',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.getContrastText(
                      theme.palette.primary.main
                    ),
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <AddShoppingCartIcon />
                <span>{isInCart ? 'in cart' : 'add to cart'} </span>
              </Button>
            </Stack>

            <Stack display={'flex'} direction={'column'} alignContent={'end'}>
              <PriceContainer value={price} />
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

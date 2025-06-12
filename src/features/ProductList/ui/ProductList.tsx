import { useSendProductToCart } from '@/entities/cart';
import { ProductCard } from '@/entities/product';
import { LANGUAGE } from '@/shared/config/constants';
import { APP_PATHS } from '@/shared/config/routes/paths';
import { LoadingCircle } from '@/shared/ui/LoadingCircle/LoadingCircle';
import { type ProductProjection } from '@commercetools/platform-sdk';
import { Box, Grid, Typography } from '@mui/material';
import { type JSX } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductListProps {
  products: ProductProjection[];
  isLoading: boolean;
}

export const ProductList = ({
  products,
  isLoading,
}: ProductListProps): JSX.Element => {
  const navigate = useNavigate();

  const { mutate } = useSendProductToCart();

  const handleCartClick = (id: string): void => {
    mutate(id);
  };

  if (isLoading) {
    return <LoadingCircle />;
  }

  if (!products?.length) {
    return (
      <Box width="100%" textAlign="center" mt={4}>
        <Typography variant="subtitle2">
          Oops! Nothing matches your search. How about exploring our hottest
          deals or other categories?
        </Typography>
      </Box>
    );
  }

  const getProductPath = (id: string): string => `${APP_PATHS.CATALOG}/${id}`;

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <ProductCard
          key={product.key}
          product={product}
          onDetailsClick={() =>
            navigate(getProductPath(product.slug?.[LANGUAGE.EN]))
          }
          onCartClick={() => {
            handleCartClick(product.id);
          }}
        />
      ))}
    </Grid>
  );
};

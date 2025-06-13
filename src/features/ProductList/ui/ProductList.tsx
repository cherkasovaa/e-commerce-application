import { useSendProductToCart } from '@/entities/cart';
import { useCart } from '@/entities/cart/model/useCart';
import { ProductCard } from '@/entities/product';
import { LANGUAGE } from '@/shared/config/constants';
import { APP_PATHS } from '@/shared/config/routes/paths';
import { LoadingCircle } from '@/shared/ui/LoadingCircle/LoadingCircle';
import { SnackNotification } from '@/shared/ui/SnackNotification/SnackNotification';
import { type ProductProjection } from '@commercetools/platform-sdk';
import { Box, Grid, Typography } from '@mui/material';
import { useMemo, useState, type JSX } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductListProps {
  products: ProductProjection[];
  isListLoading: boolean;
}

export const ProductList = ({
  products,
  isListLoading,
}: ProductListProps): JSX.Element => {
  const [notification, setNotification] = useState<{
    severity: 'success' | 'error' | 'info';
    open: boolean;
    message: string;
  }>({ severity: 'success', open: false, message: '' });

  const navigate = useNavigate();

  const { mutate: sendProductToCart } = useSendProductToCart();

  const { cart } = useCart();

  const inCartIds = useMemo(() => {
    return new Set(cart?.lineItems.map((item) => item.productId));
  }, [cart?.lineItems]);

  const handleCartClick = (id: string): void => {
    setNotification({
      severity: 'info',
      open: true,
      message: 'Adding game to cart...',
    });

    if (!inCartIds.has(id)) {
      sendProductToCart(id, {
        onSuccess: () => {
          setNotification({
            severity: 'success',
            open: true,
            message: 'The game added to cart',
          });
        },
        onError: (err: Error) => {
          setNotification({
            severity: 'error',
            open: true,
            message: ` Failed to add game: ${err.message}`,
          });
        },
      });
    }
  };

  if (isListLoading) {
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
      <SnackNotification
        message={notification.message}
        severity={notification.severity}
        open={notification.open}
        onClose={() => setNotification((prev) => ({ ...prev, open: false }))}
      />

      {products.map((product) => {
        return (
          <ProductCard
            key={product.key}
            product={product}
            isInCart={inCartIds.has(product.id)}
            onDetailsClick={() =>
              navigate(getProductPath(product.slug?.[LANGUAGE.EN]))
            }
            onCartClick={() => {
              handleCartClick(product.id);
            }}
          />
        );
      })}
    </Grid>
  );
};

import { useCart } from '@/entities/cart/model/useCart';
import type { ProductDetailsProps } from '@/pages/product/model/types';
import { CART_MESSAGES } from '@/shared/constants/cartMessages';
import { useCartActions } from '@/shared/lib/hooks/useCartActions';
import { useNotification } from '@/shared/lib/hooks/useNotification';
import { ActionButton, BreadcrumbsComponent, GameRating } from '@/shared/ui';
import { PriceContainer } from '@/shared/ui/PriceContainer/PriceContainer';
import { SnackNotification } from '@/shared/ui/SnackNotification/SnackNotification';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useMemo, type JSX } from 'react';

export const ProductDetails = (props: ProductDetailsProps): JSX.Element => {
  const theme = useTheme();

  const { id, title, description, rating, price } = props;

  const { notification, showNotification, hideNotification } =
    useNotification();

  const { addToCart, removeFromCart } = useCartActions({
    productId: id,
    onSuccess: (action) => {
      const message =
        action === 'add'
          ? CART_MESSAGES.ADD.SUCCESS
          : CART_MESSAGES.REMOVE.SUCCESS;
      showNotification('success', message);
    },
    onError: (err, action) => {
      const message =
        action === 'add'
          ? CART_MESSAGES.ADD.ERROR(err.message)
          : CART_MESSAGES.REMOVE.ERROR(err.message);
      showNotification('error', message);
    },
    onStart: (action) => {
      const message =
        action === 'add' ? CART_MESSAGES.ADD.START : CART_MESSAGES.REMOVE.START;
      showNotification('info', message);
    },
  });

  const { cart } = useCart();

  const inCartIds = useMemo(() => {
    return new Set(cart?.lineItems.map((item) => item.productId));
  }, [cart?.lineItems]);

  const isInCart = inCartIds.has(id);

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
            sx={{ color: theme.palette.text.secondary, fontSize: 18 }}
          >
            {description}
          </Typography>
        </Grid>

        <PriceContainer value={price} size={'l'} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 3 }}>
          <ActionButton onClick={addToCart} disabled={isInCart}>
            <AddShoppingCartIcon />
            {inCartIds.has(id) ? 'In cart' : 'Add to cart'}
          </ActionButton>

          <ActionButton onClick={removeFromCart} disabled={!isInCart}>
            <RemoveShoppingCartIcon /> Remove from cart
          </ActionButton>
        </Box>

        <SnackNotification
          message={notification.message}
          severity={notification.severity}
          open={notification.open}
          onClose={hideNotification}
        />
      </Grid>
    </Grid>
  );
};

import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import { CartItem } from './CartItem';
import type { CartProductListProps } from '../model';
import { useCartQuery, useClearCart } from '@/entities/cart';

export const CartProductList: React.FC<CartProductListProps> = ({ items }) => {
  const { mutate: clearCart, isPending } = useClearCart();
  const { data: cart } = useCartQuery();

  const handleClear = () => {
    if (cart) {
      clearCart(cart);
    }
  };
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={0.5}
        mb={2}
      >
        <Typography variant="h6">Cart Items</Typography>
        <Button
          variant="outlined"
          color="error"
          onClick={handleClear}
          disabled={isPending}
        >
          Clear cart
        </Button>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box display="flex" flexDirection="column" gap={2}>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { CartItem } from './CartItem';
import type { CartProductListProps } from '../model';
import { useCartQuery, useClearCart } from '@/entities/cart';

export const CartProductList: React.FC<CartProductListProps> = ({ items }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const { mutate: clearCart, isPending } = useClearCart();
  const { data: cart } = useCartQuery();

  const handleClear = () => {
    if (cart) {
      clearCart(cart);
      setIsConfirmOpen(false);
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
          onClick={() => setIsConfirmOpen(true)}
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

      <Dialog open={isConfirmOpen} onClose={() => setIsConfirmOpen(false)}>
        <DialogTitle>Confirming</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to empty your cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsConfirmOpen(false)}>Cancel</Button>
          <Button onClick={handleClear} color="error" disabled={isPending}>
            Clear
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

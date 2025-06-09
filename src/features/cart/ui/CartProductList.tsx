import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { CartItem } from './CartItem';
import type { CartProductListProps } from '../model';

export const CartProductList: React.FC<CartProductListProps> = ({ items }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Cart Items
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Box display="flex" flexDirection="column" gap={2}>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

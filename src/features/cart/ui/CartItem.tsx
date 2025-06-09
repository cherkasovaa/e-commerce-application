import React from 'react';
import { Paper } from '@mui/material';
import type { CartItemProps } from '../model';

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  console.log(item);
  return <Paper variant="outlined" sx={{ p: 2 }}></Paper>;
};

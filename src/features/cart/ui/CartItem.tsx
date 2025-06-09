import React from 'react';
import {
  Paper,
  Stack,
  Avatar,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import type { CartItemProps } from '../model';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRemoveCartItem } from '@/entities/cart';

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const name = item.name?.['en-US'];
  const quantity = item.quantity;
  const unitPrice = (item.price.value.centAmount / 100).toFixed(2);
  const totalPrice = (item.totalPrice.centAmount / 100).toFixed(2);
  const currency = item.price.value.currencyCode;
  const imageUrl = item.variant.images?.[0]?.url;
  const { mutate: remove } = useRemoveCartItem();

  const handleRemove = () => {
    remove(item.id);
  };

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      {' '}
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          {imageUrl && (
            <Avatar
              variant="rounded"
              src={imageUrl}
              alt={name}
              sx={{ width: 64, height: 64 }}
            />
          )}
          <Box flex={1}>
            <Typography variant="body1">{name}</Typography>
            <Typography variant="body2" color="text.secondary">
              Quantity: {quantity}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Unit price: {unitPrice} {currency}
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Total: {totalPrice} {currency}
            </Typography>
          </Box>{' '}
          <IconButton color="error" onClick={handleRemove}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Paper>
    </Paper>
  );
};

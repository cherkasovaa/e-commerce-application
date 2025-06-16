import { useRemoveCartItem, useUpdateItemQuantity } from '@/entities/cart';
import { LANGUAGE } from '@/shared/config/constants';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import type { CartItemProps } from '../model';

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const name = item.name?.[LANGUAGE.EN];
  const quantity = item.quantity;
  const unitPrice = (item.price.value.centAmount / 100).toFixed(2);
  const totalPrice = (item.totalPrice.centAmount / 100).toFixed(2);
  const currency = item.price.value.currencyCode;
  const imageUrl = item.variant.images?.[0]?.url;
  const { mutate: remove } = useRemoveCartItem();
  const { mutate: updateQuantity } = useUpdateItemQuantity();

  const handleRemove = () => {
    remove(item.id);
  };

  const handleChangeQuantity = (newQuantity: number) => {
    updateQuantity({ itemId: item.id, quantity: newQuantity });
  };

  return (
    <Paper variant="outlined" sx={{ p: 2, minHeight: 150 }}>
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
          <Typography variant="subtitle1">{name}</Typography>{' '}
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              onClick={() => handleChangeQuantity(quantity - 1)}
              disabled={quantity === 1}
            >
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6">{quantity}</Typography>
            <IconButton onClick={() => handleChangeQuantity(quantity + 1)}>
              <AddIcon />
            </IconButton>
          </Stack>
          <Typography color="text.secondary">
            {unitPrice} {currency}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Total: {totalPrice} {currency}
          </Typography>
        </Box>{' '}
        <IconButton color="error" onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};

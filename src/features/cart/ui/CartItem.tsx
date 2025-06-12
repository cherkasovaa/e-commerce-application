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
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useUpdateItemQuantity } from '@/entities/cart';
import { Loader } from '@/shared/ui';

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const name = item.name?.['en-US'];
  const quantity = item.quantity;
  const unitPrice = (item.price.value.centAmount / 100).toFixed(2);
  const totalPrice = (item.totalPrice.centAmount / 100).toFixed(2);
  const currency = item.price.value.currencyCode;
  const imageUrl = item.variant.images?.[0]?.url;
  const { mutate: remove, isPending: isRemoving } = useRemoveCartItem();
  const { mutate: updateQuantity, isPending: isUpdating } =
    useUpdateItemQuantity();

  const isLoading = isRemoving || isUpdating;
  const handleRemove = () => {
    remove(item.id);
  };

  const handleChangeQuantity = (newQuantity: number) => {
    updateQuantity({ itemId: item.id, quantity: newQuantity });
  };

  return (
    <Paper variant="outlined" sx={{ p: 2, minHeight: 150 }}>
      {isLoading ? (
        <Loader />
      ) : (
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
            <Typography variant="body1">{name}</Typography>{' '}
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                onClick={() => handleChangeQuantity(quantity - 1)}
                disabled={quantity === 1}
              >
                <RemoveIcon />
              </IconButton>
              <Typography>{quantity}</Typography>
              <IconButton onClick={() => handleChangeQuantity(quantity + 1)}>
                <AddIcon />
              </IconButton>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {unitPrice} {currency}
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Total: {totalPrice} {currency}
            </Typography>
          </Box>{' '}
          <IconButton color="error" onClick={handleRemove}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      )}
    </Paper>
  );
};

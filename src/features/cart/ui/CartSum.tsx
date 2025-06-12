import { Paper, Typography, Stack } from '@mui/material';
import { useCartQuery } from '@/entities/cart';

export const CartSum: React.FC = () => {
  const { data: cart } = useCartQuery();

  if (!cart) return null;

  const totalItems = cart.lineItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = (cart.totalPrice.centAmount / 100).toFixed(2);
  const currency = cart.totalPrice.currencyCode;

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Stack spacing={1}>
        <Typography variant="h6">Order summary</Typography>
        <Typography>
          Items: <strong>{totalItems}</strong>
        </Typography>
        <Stack spacing={0.5}>
          {cart.lineItems.map((item) => (
            <Typography variant="body2" color="text.secondary">
              • {item.name?.['en-US']} x {item.quantity}
            </Typography>
          ))}
        </Stack>
        <Typography>
          Total:{' '}
          <strong>
            {totalPrice} {currency}
          </strong>
        </Typography>
      </Stack>
    </Paper>
  );
};

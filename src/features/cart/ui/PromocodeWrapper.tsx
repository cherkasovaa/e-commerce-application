import {
  Stack,
  TextField,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import { Close as CloseIcon } from '@mui/icons-material';
import {
  useApplyPromocode,
  useRemovePromocode,
  useCartQuery,
} from '@/entities/cart';
import { PROMOCODE_ERROR } from '../model';

export const PromocodeWrapper = () => {
  const [promoCode, setPromoCode] = useState('');
  const [promoError, setPromoError] = useState<string | null>(null);

  const { data: cart } = useCartQuery();
  const { mutate: applyPromocode, isPending: isApplyingPromocode } =
    useApplyPromocode();
  const { mutate: removePromocode, isPending: isRemovingPromocode } =
    useRemovePromocode();

  if (!cart) return null;

  const handleApplyPromocode = () => {
    if (promoCode.trim()) {
      applyPromocode(
        { cart, code: promoCode.trim() },
        {
          onSuccess: () => {
            setPromoCode('');
            setPromoError(null);
          },
          onError: () => {
            setPromoError(PROMOCODE_ERROR);
          },
        }
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
    setPromoError(null);
  };

  return (
    <Stack spacing={1}>
      {cart.discountCodes.length > 0 && (
        <Stack spacing={0.5}>
          <Typography variant="subtitle2">Applied promo codes:</Typography>
          {cart.discountCodes.map((code) => (
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              key={code.discountCode.id}
            >
              <Typography variant="body2" color="success.main">
                • {code.discountCode.obj?.code || 'Promo code'}
              </Typography>
              <IconButton
                size="small"
                color="error"
                onClick={() =>
                  removePromocode({ cart, codeId: code.discountCode.id })
                }
                disabled={isRemovingPromocode}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Stack>
          ))}
        </Stack>
      )}

      <Stack direction="row" spacing={1}>
        <TextField
          label="Promo code"
          variant="outlined"
          size="small"
          fullWidth
          value={promoCode}
          onChange={handleInputChange}
          error={!!promoError}
          helperText={promoError}
          disabled={isApplyingPromocode}
          slotProps={{
            formHelperText: {
              sx: {
                fontSize: '10px',
                margin: '4px 0 0 0',
                color: 'error.main',
              },
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleApplyPromocode}
          disabled={!promoCode.trim()}
          sx={{ alignSelf: 'flex-start' }}
        >
          Apply
        </Button>
      </Stack>
    </Stack>
  );
};

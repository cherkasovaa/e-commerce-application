import { Grid, Typography, useTheme } from '@mui/material';
import type { FC } from 'react';
import type { ProductPrice } from '../../types/productPrice';
import { NotificationComponent } from '../NotificationComponent/NotificationComponent';

interface PriceProps {
  value: ProductPrice | null;
}
export const PriceContainer: FC<PriceProps> = ({ value }) => {
  const theme = useTheme();

  if (!value) {
    return (
      <Typography
        variant="h6"
        component="p"
        sx={{
          color: theme.palette.text.primary,
          letterSpacing: '0.5px',
          mt: 6,
        }}
      >
        Price Not available
      </Typography>
    );
  }

  const discount = value.discount ? `-${value.discount}%` : '';

  return (
    <Grid
      container
      direction="column"
      sx={{ alignItems: 'flex-start', width: '100%', mt: 7 }}
    >
      {value.hasDiscount && (
        <Grid
          container
          className="discount"
          sx={{ alignItems: 'center', gap: '8px' }}
        >
          <Typography
            variant="h6"
            component="span"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 600,
              position: 'relative',
              '&::after': {
                position: 'absolute',
                bottom: '10px',
                left: '-2px',
                content: '""',
                display: 'block',
                width: '112%',
                height: '2px',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '1px',
                transform: 'rotate(-17deg)',
              },
            }}
          >
            {value.original}
          </Typography>

          <NotificationComponent props={discount} />
        </Grid>
      )}

      <Typography
        variant="h2"
        component="p"
        sx={{ color: theme.palette.text.primary, letterSpacing: '0.5px' }}
      >
        {value.value}
      </Typography>
    </Grid>
  );
};

import { Grid, Typography, useTheme } from '@mui/material';
import type { FC } from 'react';
import type { ProductPrice } from '../../types/productPrice';
import { NotificationComponent } from '../NotificationComponent/NotificationComponent';

interface PriceProps {
  value: ProductPrice | null;
  size?: 's' | 'm' | 'l';
}

export const PriceContainer: FC<PriceProps> = ({ value, size = 's' }) => {
  const theme = useTheme();

  if (!value) {
    return (
      <Typography
        variant="h6"
        component="p"
        sx={{
          color: theme.palette.text.primary,
          letterSpacing: '0.5px',
          mt: size === 'l' ? 6 : 0,
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
      sx={{
        alignItems: size === 'l' ? 'flex-start' : 'flex-end',
        width: '100%',
        mt: size === 'l' ? 7 : 0,
      }}
      gap={1}
    >
      {value.hasDiscount && (
        <Grid
          container
          className="discount"
          sx={{
            alignItems: 'center',
            gap: size === 'l' ? 2 : 1,
            justifyContent: size === 'l' ? 'flex-start' : 'flex-end',
          }}
        >
          <NotificationComponent props={discount} />
          <Typography
            variant={size === 'l' ? 'h6' : 'subtitle1'}
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
        </Grid>
      )}

      <Typography
        variant={size === 'l' ? 'h2' : 'h6'}
        component="p"
        sx={{
          color: theme.palette.text.primary,
          letterSpacing: '0.5px',
          fontWeight: 'bold',
          alignSelf: size === 'l' ? 'start' : 'end',
        }}
      >
        {value.value}
      </Typography>
    </Grid>
  );
};

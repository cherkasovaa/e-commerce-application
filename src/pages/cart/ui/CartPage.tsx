import { CartEmpty } from '@/features/cart';
import { PageMeta } from '@/features/ProductMeta';
import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { usePageMeta } from '@/shared/lib/hooks/usePageMeta';
import { Container, Typography } from '@mui/material';
import React from 'react';

export const CartPage: React.FC = () => {
  const metaData = usePageMeta(APP_PAGE_NAMES.CART);

  return (
    <>
      {metaData && <PageMeta {...metaData} />}

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Cart
        </Typography>
        <CartEmpty />
      </Container>
    </>
  );
};

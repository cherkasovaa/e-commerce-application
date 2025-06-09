import { CartEmpty, CartProductList } from '@/features/cart';
import { PageMeta } from '@/features/ProductMeta';
import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { usePageMeta } from '@/shared/lib/hooks/usePageMeta';
import { Container, Typography } from '@mui/material';
import React from 'react';
import { useCartQuery } from '@/entities/cart/';
import { Loader } from '@/shared/ui';

export const CartPage: React.FC = () => {
  const metaData = usePageMeta(APP_PAGE_NAMES.CART);
  const { data: cart, isLoading, isError } = useCartQuery();

  if (isLoading) return <Loader />;
  if (isError) return <div>Something went wrong...</div>;

  const isEmpty = !cart || cart.lineItems.length === 0;

  return (
    <>
      {metaData && <PageMeta {...metaData} />}

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Cart
        </Typography>
        {isEmpty ? <CartEmpty /> : <CartProductList />}
      </Container>
    </>
  );
};

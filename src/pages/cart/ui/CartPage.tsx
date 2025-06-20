import { CartEmpty, CartProductList, CartSum } from '@/features/cart';
import { PageMeta } from '@/features/ProductMeta';
import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { usePageMeta } from '@/shared/lib/hooks/usePageMeta';
import { Container, Typography, Box } from '@mui/material';
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

        {isEmpty ? (
          <CartEmpty />
        ) : (
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            gap={4}
            alignItems={{ lg: 'flex-start' }}
          >
            <Box flex={1}>
              <CartProductList items={cart.lineItems} />
            </Box>

            <Box
              width={{ xs: '100%', md: 300 }}
              position={{ xs: 'static', md: 'sticky' }}
              top={{ lg: 100 }}
              sx={{
                alignSelf: { lg: 'flex-start' },
              }}
            >
              <CartSum />
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
};

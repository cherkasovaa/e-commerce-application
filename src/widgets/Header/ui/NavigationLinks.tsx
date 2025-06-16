import type { FC } from 'react';
import { Box, MenuItem, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import type { AppRoutes } from '@/shared/types/appRoutes';
import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { ShoppingCart } from '@mui/icons-material';
import { useCartQuery } from '@/entities/cart';
import { getCartItemCount } from '@/entities/cart/model';

interface Props {
  pages: AppRoutes[];
  onClickItem?: () => void;
}

export const NavigationLinks: FC<Props> = ({ pages, onClickItem }) => {
  const theme = useTheme();
  const { data: cart } = useCartQuery();
  const cartCount = getCartItemCount(cart);

  return (
    <>
      {pages.map((page) => {
        const isCart = page.name === APP_PAGE_NAMES.CART;
        return (
          <MenuItem
            key={page.name}
            component={Link}
            to={page.path}
            onClick={onClickItem}
            sx={{
              textTransform: 'uppercase',
              transition: '0.4s ease-in-out',
              fontWeight: 700,
              padding: '0.4em 2em',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            {isCart ? (
              <>
                <ShoppingCart sx={{ mr: 1 }} />
                {page.name}
                {cartCount > 0 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 4,
                      right: 12,
                      backgroundColor: 'red',
                      color: 'white',
                      borderRadius: '50%',
                      fontSize: '0.75rem',
                      width: 18,
                      height: 18,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    {cartCount}
                  </Box>
                )}
              </>
            ) : (
              page.name
            )}
          </MenuItem>
        );
      })}
    </>
  );
};

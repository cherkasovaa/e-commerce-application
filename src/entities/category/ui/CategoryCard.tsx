import { LANGUAGE } from '@/shared/config/constants';
import { type Category } from '@commercetools/platform-sdk';
import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import { type JSX } from 'react';

interface ICategoryCardProps {
  category: Category;
  onCategoryClick: () => void;
  active: boolean;
}

export const CategoryCard = ({
  category,
  onCategoryClick,
  active,
}: ICategoryCardProps): JSX.Element => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <ButtonBase
        onClick={onCategoryClick}
        sx={{
          width: '100%',
          paddingTop: { xs: '10%', sm: '30%', md: '40%' },
          overflow: 'hidden',
          position: 'relative',
          transition: 'transform 0.3s ease-in-out',
          boxShadow: active ? ' 0 0 15px red' : 'none',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(https://images.unsplash.com/photo-1664448288134-669f14c3ebbb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: active ? 'brightness(0.2)' : 'brightness(0.4)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              px: 1,
              fontSize: '1.5em',
              color: 'white',
              textTransform: 'uppercase',
            }}
          >
            {category.name[LANGUAGE.EN]}
          </Typography>
        </Box>
      </ButtonBase>
    </Grid>
  );
};

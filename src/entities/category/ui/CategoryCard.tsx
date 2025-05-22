import { type Category } from '@commercetools/platform-sdk';
import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import { type JSX } from 'react';

interface ICategoryCardProps {
  category: Category;
  imageUrl: string;
  onCategoryClick: () => void;
}

export const CategoryCard = ({
  category,
  imageUrl,
  onCategoryClick,
}: ICategoryCardProps): JSX.Element => {
  return (
    <Grid size={{ xs: 4, sm: 3, md: 2 }}>
      <ButtonBase
        onClick={onCategoryClick}
        sx={{
          width: '100%',
          paddingTop: '100%',
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
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
              fontWeight: 600,
              textAlign: 'center',
              px: 1,
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
            }}
          >
            {category.name['en-GB']}
          </Typography>
        </Box>
      </ButtonBase>
    </Grid>
  );
};

import { LANGUAGE } from '@/shared/config/constants';
import type { CategoriesProps } from '@/shared/types/categoriesProps';
import { AboutGame } from '@/shared/ui';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import type { FC } from 'react';

export const AdditionalInfoScreen: FC<CategoriesProps> = ({
  categories,
  gameData,
}) => {
  const title = 'Information';
  const descriptionEmptyText =
    'There is no description for this game, but we will try to add it soon.';

  const description =
    gameData.description?.[LANGUAGE.EN] || descriptionEmptyText;

  const theme = useTheme();

  return (
    <Grid
      container
      direction="column"
      spacing={4}
      sx={{ maxWidth: 1440, width: '100%', p: '50px 0' }}
    >
      <Grid>
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
      </Grid>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Box
            className="expandable-block"
            sx={{
              p: 3,
              borderRadius: theme.shape.borderRadius,
              boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)',
            }}
          >
            {description}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }} sx={{ minHeight: 'min-content' }}>
          <AboutGame categories={categories} gameData={gameData} />
        </Grid>
      </Grid>
    </Grid>
  );
};

import { getProductAttribute } from '@/shared/lib/products/getProductAttribute';
import { formatDate } from '@/shared/lib/render/formatDate';
import { renderValues } from '@/shared/lib/render/renderValues';
import type { CategoriesProps } from '@/shared/types/categoriesProps';
import type { GameTag } from '@/shared/types/gameTag';
import type { Label } from '@/shared/types/label';
import type { Category } from '@commercetools/platform-sdk';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import type { FC } from 'react';

interface GameInfo {
  title: string;
  value: Label | GameTag[] | Category[] | string | null;
}

export const AboutGame: FC<CategoriesProps> = ({ categories, gameData }) => {
  const title = 'Description';
  const theme = useTheme();

  const genre = getProductAttribute<Label>(gameData, 'genre');
  const developer = getProductAttribute<string>(gameData, 'developer');
  const tags = getProductAttribute<GameTag[]>(gameData, 'tags');
  const platform = getProductAttribute<Label>(gameData, 'platform');
  const releaseDate = getProductAttribute<Label>(gameData, 'releaseDate');

  const gameInfo: GameInfo[] = [
    {
      title: 'Genre',
      value: genre,
    },
    {
      title: 'Developer',
      value: developer,
    },
    {
      title: 'Platform',
      value: platform,
    },
    {
      title: 'Release',
      value: formatDate(releaseDate),
    },
    {
      title: 'Tags',
      value: tags,
    },
    {
      title: 'Categories',
      value: categories,
    },
  ];

  return (
    <Box
      className="about-game"
      sx={{
        p: 3,
        borderRadius: theme.shape.borderRadius,
        boxShadow: '0 0 12px rgba(0, 0, 0, 0.15)',
      }}
    >
      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 900 }}>
        {title}
      </Typography>

      <Grid direction="column">
        {gameInfo &&
          gameInfo.map((info, index) => (
            <Grid
              direction="row"
              key={`${info.title}_${index}`}
              container
              spacing={2}
              justifyContent="flex-start"
            >
              <Grid size={{ xs: 5, sm: 3, lg: 6 }}>
                <Typography variant="h6" component="h4">
                  {info.title}
                </Typography>
              </Grid>

              <Grid size={{ xs: 7, sm: 9, lg: 6 }}>
                {renderValues(info.value)}
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

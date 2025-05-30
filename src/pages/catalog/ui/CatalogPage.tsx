import { CatalogSetting } from '@/widgets/CatalogSetting';
import { Grid } from '@mui/material';
import { type JSX } from 'react';

export const CatalogPage = (): JSX.Element => {
  return (
    <Grid container>
      <CatalogSetting />
    </Grid>
  );
};

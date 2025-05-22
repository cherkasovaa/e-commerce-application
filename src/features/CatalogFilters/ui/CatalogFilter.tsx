import {
  Checkbox,
  FormControlLabel,
  Grid,
  Slider,
  Typography,
} from '@mui/material';
import { filters } from '../model/contants';
import { type JSX } from 'react';

export const CatalogFilter = (): JSX.Element => {
  return (
    <Grid size={{ xs: 12, md: 3 }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>

      <Typography variant="subtitle2" mt={2}>
        Price
      </Typography>
      <Slider
        defaultValue={[0, 200]}
        max={200}
        min={0}
        step={0.5}
        valueLabelDisplay="auto"
      />

      <Typography variant="subtitle2" mt={2}>
        Product type
      </Typography>
      {filters.productType.map((label, i) => (
        <FormControlLabel key={i} control={<Checkbox />} label={label} />
      ))}

      <Typography variant="subtitle2" mt={2}>
        More filters
      </Typography>
      {filters.moreFilters.map((label, i) => (
        <FormControlLabel key={i} control={<Checkbox />} label={label} />
      ))}
    </Grid>
  );
};

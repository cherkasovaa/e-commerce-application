import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { type ISelectProps, type SortValue } from '../model/types';
import { type JSX } from 'react';

export const SortSelect = ({
  value,
  onChange,
}: ISelectProps<SortValue>): JSX.Element => (
  <Grid width={'100%'}>
    <FormControl variant="standard" fullWidth>
      <InputLabel>Sort By</InputLabel>
      <Select
        value={value}
        label="Sort By"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="name.en-US asc">Alphabetically, A-Z</MenuItem>
        <MenuItem value="name.en-US desc">Alphabetically, Z-A</MenuItem>
        <MenuItem value="price asc">Price: Low to High</MenuItem>
        <MenuItem value="price desc">Price: High to Low</MenuItem>
      </Select>
    </FormControl>
  </Grid>
);

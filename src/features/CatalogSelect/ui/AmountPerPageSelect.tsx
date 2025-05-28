import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { type AmountValue, type ISelectProps } from '../model/types';
import { type JSX } from 'react';

export const AmountPerPageSelect = ({
  value,
  onChange,
}: ISelectProps<AmountValue>): JSX.Element => (
  <Grid width={'100%'}>
    <FormControl variant="standard" fullWidth>
      <InputLabel>Amount per page</InputLabel>
      <Select
        value={value}
        label="Sort By"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </FormControl>
  </Grid>
);

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slider,
  Stack,
  Typography,
} from '@mui/material';
import React, { type JSX } from 'react';
import { useUniqueTags } from '../model/useUniqueTags';
import { Controller, useForm } from 'react-hook-form';

import { useUniqueGenres } from '../model/useUniqueGenres';
import { type IFilterData, type IFilterFormProps } from '../model/types';

export const FilterForm = ({
  handleFilterFormData,
}: IFilterFormProps): JSX.Element => {
  const tags = useUniqueTags();
  const genres = useUniqueGenres();

  const { control, handleSubmit, reset } = useForm<IFilterData>({
    defaultValues: {
      price: [0, 100],
      rating: [0, 10],
      tags: Object.fromEntries(tags.map((tag) => [tag, false])),
      genre: '',
    },
  });

  const defaultFilters = React.useMemo(
    () => ({
      price: [0, 100],
      rating: [0, 10],
      tags: Object.fromEntries(tags.map((tag) => [tag, false])),
      genre: '',
    }),
    [tags]
  );

  React.useEffect(() => {
    reset(defaultFilters);
  }, [reset, defaultFilters]);

  const onReset = (): void => {
    reset(defaultFilters);
    handleFilterFormData(defaultFilters);
  };

  const onSubmit = (data: IFilterData): void => {
    handleFilterFormData(data);
  };

  return (
    <Grid component="form" onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
      <Box mb={2} sx={{ paddingRight: 2, paddingLeft: 2, marginTop: 2 }}>
        <Typography variant="subtitle2">Price</Typography>
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <Slider
              {...field}
              value={field.value}
              onChange={(_, value) => field.onChange(value)}
              min={0}
              max={100}
              step={1}
              valueLabelDisplay="auto"
            />
          )}
        />
      </Box>
      <Box mb={2} sx={{ paddingRight: 2, paddingLeft: 2 }}>
        <Typography variant="subtitle2">Rating</Typography>
        <Controller
          name="rating"
          control={control}
          render={({ field }) => (
            <Slider
              {...field}
              value={field.value}
              onChange={(_, value) => field.onChange(value)}
              min={0}
              max={10}
              step={1}
              valueLabelDisplay="auto"
            />
          )}
        />
      </Box>
      <Box mb={4}>
        <FormControl fullWidth>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Controller
            name="genre"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                labelId="genre-label"
                variant="outlined"
                label={'Genre'}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {genres.map((genre) => (
                  <MenuItem key={genre} value={genre}>
                    {genre}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      </Box>
      <Box mb={4}>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">Tags</FormLabel>
          <Paper variant="outlined" sx={{ padding: 2, mt: 1 }}>
            <FormGroup>
              {tags.map((tag) => (
                <Controller
                  key={tag}
                  name={`tags.${tag}`}
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={field.name}
                          checked={Boolean(field.value)}
                          onChange={(e) => field.onChange(e.target.checked)}
                          color="primary"
                        />
                      }
                      label={tag}
                    />
                  )}
                />
              ))}
            </FormGroup>
          </Paper>
        </FormControl>
      </Box>
      <Stack direction="row" justifyContent="space-between" spacing={3}>
        <Button variant="contained" type="submit" color="primary">
          Submit
        </Button>
        <Button variant="outlined" type="reset" color="secondary">
          Reset
        </Button>
      </Stack>
    </Grid>
  );
};

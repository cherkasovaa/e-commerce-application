import TextField from '@mui/material/TextField';
import React from 'react';
import { type ISearchBarProps } from '../model/types';

export const SearchBar: React.FC<ISearchBarProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onSearchChange(event.target.value);
  };

  return (
    <TextField
      fullWidth
      variant="filled"
      label="Search"
      value={searchQuery}
      onChange={handleChange}
      placeholder="what are you looking for?"
      size="small"
    />
  );
};

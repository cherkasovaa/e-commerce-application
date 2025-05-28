import { IconButton, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';
import { type ISearchBarProps } from '../model/types';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar: React.FC<ISearchBarProps> = ({
  searchQuery,
  onSearchSubmit,
}) => {
  const [localInput, setLocalInput] = React.useState(searchQuery);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLocalInput(event.target.value);
  };

  const handleSubmit = (): void => {
    onSearchSubmit(localInput);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <TextField
      fullWidth
      variant="filled"
      label="Search"
      value={localInput}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="What are you looking for?"
      size="small"
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSubmit}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

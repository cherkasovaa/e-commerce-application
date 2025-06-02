import { IconButton, InputAdornment, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';
import { type ISearchBarProps } from '../model/types';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';

export const SearchBar: React.FC<ISearchBarProps> = ({
  searchQuery,
  onSearchSubmit,
}) => {
  const theme = useTheme();
  const [localInput, setLocalInput] = React.useState(searchQuery);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLocalInput(event.target.value);
  };

  const handleSubmit = (): void => {
    onSearchSubmit(localInput);
  };

  const handleClear = (): void => {
    setLocalInput('');
    onSearchSubmit('');
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
              <IconButton
                onClick={handleClear}
                sx={{
                  marginRight: 2,
                  opacity: '0.5',
                  transition: '0.4s ease-in-out',
                  '&:hover': { opacity: '1' },
                }}
              >
                <SearchOffIcon />
              </IconButton>
              <IconButton
                onClick={handleSubmit}
                sx={{
                  marginLeft: 2,
                  transition: '0.4s ease-in-out',
                  '&:hover': {
                    color: theme.palette.getContrastText(
                      theme.palette.secondary.dark
                    ),
                  },
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

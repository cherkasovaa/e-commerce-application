import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { APP_NAME } from '@/shared/config/constants';

export const Logo: React.FC = () => (
  <Box
    component={Link}
    to="/"
    sx={{
      display: 'flex',
      alignItems: 'center',
      color: 'inherit',
      textDecoration: 'none',
      gap: 1,
    }}
  >
    <SportsEsportsIcon fontSize="large" />

    <Typography
      variant="h6"
      noWrap
      sx={{
        mr: 2,
        fontWeight: 700,
        letterSpacing: '.05rem',
        color: 'inherit',
        textDecoration: 'none',
        textTransform: 'uppercase',
        display: { xs: 'none', sm: 'block' },
      }}
    >
      {APP_NAME}
    </Typography>
  </Box>
);

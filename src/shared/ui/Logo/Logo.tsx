import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => (
  <Box
    component={Link}
    to="/"
    sx={{ color: 'inherit', textDecoration: 'none' }}
  >
    <Typography variant="h6" component="p">
      Game Shop
    </Typography>
  </Box>
);

import { Box, CircularProgress } from '@mui/material';
import { type JSX } from 'react';

export const LoadingCircle = (): JSX.Element => (
  <Box width="100%" display="flex" justifyContent="center" mt={4}>
    <CircularProgress />
  </Box>
);

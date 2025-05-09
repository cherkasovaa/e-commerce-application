import { Box, Container } from '@mui/material';
import React from 'react';
import type { LayoutProps } from './types/interfaces';
import { Header } from '@/widgets';

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Container sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Header />
    <Box component="main" sx={{ flex: 1 }}>
      {children}
    </Box>
  </Container>
);

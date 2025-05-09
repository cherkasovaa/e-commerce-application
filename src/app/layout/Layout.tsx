import { Header } from '@/widgets/Header';
import { Box, Container } from '@mui/material';
import React from 'react';
import type { LayoutProps } from './types/interfaces';

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Container
    style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
  >
    <Header />
    <Box component="main" style={{ flex: 1 }}>
      {children}
    </Box>
  </Container>
);

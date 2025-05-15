import { Header } from '@/widgets/Header';
import { Box, Container } from '@mui/material';
import React from 'react';

import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => (
  <Container
    style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
  >
    <Header />

    <Box component="main" style={{ flex: 1 }}>
      <Outlet />
    </Box>
  </Container>
);

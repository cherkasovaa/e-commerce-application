import { AboutIntro } from '@/features/AboutIntro';
import { TeamMembers } from '@/features/TeamMembers';
import { Box } from '@mui/material';
import type { JSX } from 'react';

export const AboutScreen = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        p: { xs: '30px 0', md: '50px 0' },
      }}
    >
      <AboutIntro />
      <TeamMembers />
    </Box>
  );
};

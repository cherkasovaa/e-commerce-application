import { DEVELOPERS } from '@/shared/config/developers';
import { TeamMemberCard } from '@/shared/ui';
import { Box, Typography } from '@mui/material';
import type { JSX } from 'react';

export const TeamMembers = (): JSX.Element => {
  const SECTION_TITLE = 'Our Team';

  return (
    <Box component="section">
      <Typography variant="h3" component="h2" mb={3}>
        {SECTION_TITLE}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          flexWrap: 'wrap',
        }}
      >
        {DEVELOPERS.map((developer, i) => (
          <TeamMemberCard key={i} {...developer} />
        ))}
      </Box>
    </Box>
  );
};

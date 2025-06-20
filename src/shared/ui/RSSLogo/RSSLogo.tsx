import { Box, CardMedia } from '@mui/material';
import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import rssLogo from '../../assets/rsslogo.svg';

export const RSSLogo = (): JSX.Element => {
  const RSS_LINK = 'https://rs.school/';

  return (
    <Box
      component={Link}
      to={RSS_LINK}
      target="_blank"
      sx={{ display: 'flex', alignItems: 'center', width: 42 }}
    >
      <CardMedia
        sx={{ height: 42, width: 42 }}
        image={rssLogo}
        title="RSSchool logo"
      />
    </Box>
  );
};

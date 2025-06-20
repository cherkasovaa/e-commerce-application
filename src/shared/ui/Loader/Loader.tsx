import { Typography, Backdrop, Box } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import React from 'react';

interface LoaderProps {
  fullscreen?: boolean;
  message?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  fullscreen = false,
  message = 'Loading...',
}) => {
  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
        py: fullscreen ? 0 : 4,
      }}
    >
      <SportsEsportsIcon
        sx={{
          fontSize: fullscreen ? 64 : 40,
          color: '#dc2626',
          animation: 'shake 0.6s infinite ease-in-out',
          '@keyframes shake': {
            '0%': { transform: 'rotate(0deg)' },
            '25%': { transform: 'rotate(-8deg)' },
            '50%': { transform: 'rotate(8deg)' },
            '75%': { transform: 'rotate(-4deg)' },
            '100%': { transform: 'rotate(0deg)' },
          },
        }}
      />
      <Typography
        sx={{
          color: '#dc2626',
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {message}
      </Typography>
    </Box>
  );

  if (fullscreen) {
    return (
      <Backdrop
        open
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          zIndex: 9999,
          flexDirection: 'column',
        }}
      >
        {content}
      </Backdrop>
    );
  }

  return content;
};

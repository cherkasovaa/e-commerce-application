import { Typography, CircularProgress, Backdrop } from '@mui/material';

export const Loader: React.FC = () => {
  return (
    <Backdrop
      open={true}
      sx={{
        color: '#dc2626',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <CircularProgress
        sx={{
          color: '#dc2626',
          marginBottom: '16px',
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
        Loading
      </Typography>
    </Backdrop>
  );
};

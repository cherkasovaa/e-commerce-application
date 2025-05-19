import { Box, Typography } from '@mui/material';
import successImage from '../assets/success.jpg';

export const RegisterSuccess = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="20px"
    >
      <Typography variant="h2">Congratulations!</Typography>
      <img
        src={successImage}
        alt="Registration Success"
        style={{
          width: 500,
          maxWidth: '100%',
          height: 'auto',
        }}
      ></img>
      <Typography variant="body1">Your registration was successful!</Typography>
      <Typography variant="body1">
        You will be redirected to the main page in couple seconds
      </Typography>
    </Box>
  );
};

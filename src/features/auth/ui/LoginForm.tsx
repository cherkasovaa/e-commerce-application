import { Box, Button, TextField } from '@mui/material';
import { type FormEvent, useState, type JSX } from 'react';

export const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    console.log(email, password);
  };

  const passwordError = false;
  const emailError = false;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mx: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        mb: 4,
      }}
    >
      <TextField
        id="outlined-basic"
        label="Enter login"
        variant="outlined"
        fullWidth
        autoFocus
        helperText={emailError}
        onChange={(e) => setEmail(e.target.value)}
        color="primary"
        focused
      ></TextField>
      <TextField
        id="outlined-basic"
        label="Enter password"
        variant="outlined"
        fullWidth
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        helperText={passwordError}
        color="primary"
        focused
      ></TextField>
      <Button type="submit" variant="contained" fullWidth loading={loading}>
        Submit
      </Button>
    </Box>
  );
};

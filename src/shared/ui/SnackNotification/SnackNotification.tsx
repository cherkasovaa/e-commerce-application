import { type JSX, type SyntheticEvent, useCallback } from 'react';
import { type ISnackNotification } from './SnackNotification.types';
import { Alert, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const SnackNotification = ({
  message,
  open,
  severity = 'info',
  onClose,
}: ISnackNotification): JSX.Element => {
  const handleClose = useCallback(
    (event?: SyntheticEvent | Event, reason?: string): void => {
      if (reason === 'clickaway') return;
      onClose();
    },
    [onClose]
  );

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
      sx={{
        p: 1,
      }}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={3500}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        action={action}
        sx={{
          width: '100%',
          borderRadius: 2,
          boxShadow: (theme) => theme.shadows[3],
          py: 1.5,
          px: 2,
          color: (theme) => theme.palette[severity].contrastText,
          backgroundColor: (theme) => theme.palette[severity].main,
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

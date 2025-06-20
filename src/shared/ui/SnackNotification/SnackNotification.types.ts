import type { AlertColor } from '@mui/material';

export interface ISnackNotification {
  message: string;
  open: boolean;
  severity?: AlertColor;
  onClose: () => void;
}

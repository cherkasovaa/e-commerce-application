import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { PasswordChangeForm } from '@/features/PasswordChangeForm';
import type { PasswordChangeModalProps } from '../model';
import { useState } from 'react';

export const PasswordChangeModal = ({
  open,
  onClose,
}: PasswordChangeModalProps) => {
  const [error, setError] = useState<string>('');
  const [isChanged, setIsChanged] = useState<boolean>(false);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 2,
        }}
      >
        Change Password
        <IconButton onClick={onClose} sx={{ color: 'grey.400' }}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 1 }}>
        <PasswordChangeForm
          onSuccess={() => setIsChanged(true)}
          onCancel={onClose}
          onError={(error: string) => setError(error)}
        />

        {error && (
          <Typography color="error" sx={{ mt: 1, fontSize: '14px' }}>
            {error}
          </Typography>
        )}

        {isChanged && (
          <Typography color="error" sx={{ mt: 1, fontSize: '14px' }}>
            Your password was successfully changed.
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

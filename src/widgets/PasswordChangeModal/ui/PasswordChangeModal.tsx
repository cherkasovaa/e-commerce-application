import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { PasswordChangeForm } from '@/features/PasswordChangeForm';
import type { PasswordChangeModalProps } from '../model';

export const PasswordChangeModal = ({
  open,
  onClose,
  onSuccess,
  onError,
}: PasswordChangeModalProps) => {
  const handleSuccess = () => {
    onSuccess();
    onClose();
  };

  const handleError = (error: string) => {
    onError(error);
    onClose();
  };

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
          onSuccess={handleSuccess}
          onCancel={onClose}
          onError={handleError}
        />
      </DialogContent>
    </Dialog>
  );
};

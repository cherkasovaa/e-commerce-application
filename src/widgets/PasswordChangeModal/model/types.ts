export interface PasswordChangeModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onError: (error: string) => void;
}

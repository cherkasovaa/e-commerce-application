export interface PasswordChangeFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface PasswordChangeFormProps {
  onSuccess: () => void;
  onCancel: () => void;
  onError: (error: string) => void;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

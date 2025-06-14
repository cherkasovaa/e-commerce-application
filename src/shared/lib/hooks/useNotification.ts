import { useState } from 'react';

type NotificationSeverity = 'success' | 'error' | 'info';

interface NotificationState {
  severity: NotificationSeverity;
  open: boolean;
  message: string;
}

export const useNotification = () => {
  const [notification, setNotification] = useState<NotificationState>({
    severity: 'success',
    open: false,
    message: '',
  });

  const showNotification = (
    severity: NotificationSeverity = 'info',
    message: string
  ): void => {
    setNotification({ severity, open: true, message });
  };

  const hideNotification = (): void => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  return {
    notification,
    showNotification,
    hideNotification,
  };
};

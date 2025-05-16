export const validatePassword = (value: string): string => {
  const trimmed = value.trim();
  if (value !== trimmed)
    return 'Password must not contain leading or trailing spaces';
  if (trimmed.length < 8) return 'Password must be at least 8 characters';
  if (!/[A-Z]/.test(trimmed))
    return 'Password must contain at least one uppercase letter';
  if (!/[a-z]/.test(trimmed))
    return 'Password must contain at least one lowercase letter';
  if (!/\d/.test(trimmed)) return 'Must contain at least one digit';
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(trimmed))
    return 'Password must contain one special character';
  return '';
};

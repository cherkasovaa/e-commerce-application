export const validateEmail = (value: string): string => {
  const trimmed = value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (value !== trimmed)
    return 'Email must not contain leading or trailing spaces';
  if (!emailRegex.test(trimmed)) return 'Invalid email format';
  return '';
};

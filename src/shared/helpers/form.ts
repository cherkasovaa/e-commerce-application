export const formatDate = (date: Date | undefined) => {
  return date
    ? date instanceof Date
      ? date.toISOString().split('T')[0]
      : date
    : undefined;
};

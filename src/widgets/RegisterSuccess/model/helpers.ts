export const decline = (declensions: string[], count: number): string => {
  return Math.abs(count) === 1 ? declensions[0] : declensions[1];
};

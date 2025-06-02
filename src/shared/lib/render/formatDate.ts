import { LANGUAGE } from '@/shared/config/constants';
import type { Label } from '@/shared/types/label';

export const formatDate = (date: Label | null): null | string => {
  if (!date) return null;
  let correctDate = null;

  if (typeof date === 'string') {
    correctDate = new Date(date).toLocaleDateString(LANGUAGE.EN, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return correctDate;
};

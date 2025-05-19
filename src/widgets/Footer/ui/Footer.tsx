import type { FC } from 'react';
import { Skeleton } from '@mui/material';

export const Footer: FC = () => {
  return <Skeleton variant="rectangular" animation="wave" height="3rem" />;
};

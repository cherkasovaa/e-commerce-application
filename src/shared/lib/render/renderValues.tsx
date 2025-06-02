import { LANGUAGE } from '@/shared/config/constants';
import type { GameTag } from '@/shared/types/gameTag';
import type { Label } from '@/shared/types/label';
import type { Category } from '@commercetools/platform-sdk';
import { Typography } from '@mui/material';
import type { JSX } from 'react';

export const renderValues = (
  value: Label | GameTag[] | Category[] | string | null
): string | JSX.Element | null | undefined => {
  if (!value) return null;

  if (typeof value === 'string') {
    return value;
  }

  if ('label' in value) {
    return value.label;
  }

  if (Array.isArray(value)) {
    return (
      <>
        {value.map((item, index) => {
          if ('name' in item && item.name) {
            return (
              <Typography key={index} variant="body2" component="div">
                {item.name[LANGUAGE.EN].slice(0, 1).toUpperCase() +
                  item.name[LANGUAGE.EN].slice(1) || 'Unknown'}
              </Typography>
            );
          }

          if ('key' in item) {
            return (
              <Typography key={index} variant="body2" component="div">
                {item.key || 'Unknown'}
              </Typography>
            );
          }
        })}
      </>
    );
  }
};

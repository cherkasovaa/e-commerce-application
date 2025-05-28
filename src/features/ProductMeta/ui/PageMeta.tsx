import type { FC } from 'react';
import { Helmet } from 'react-helmet';
import type { PageMetaProps } from '../model/types';

export const PageMeta: FC<PageMetaProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

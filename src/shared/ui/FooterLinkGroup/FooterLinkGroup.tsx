import type { FooterLinkGroupProps } from '@/shared/types/footerLinkGroup';
import { Grid, Typography } from '@mui/material';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

export const FooterLinkGroup: FC<FooterLinkGroupProps> = ({ title, data }) => {
  return (
    <Grid size={{ xs: 5, sm: 3, md: 2 }}>
      <Typography
        variant="subtitle1"
        color="text.primary"
        gutterBottom
        sx={{ textTransform: 'uppercase' }}
      >
        {title}
      </Typography>

      {data.map((link, i) => (
        <MuiLink
          component={RouterLink}
          key={`${link.name}_${i}`}
          to={link.href}
          sx={{ display: 'block', color: 'inherit', textDecoration: 'none' }}
          target={link.external ? '_blank' : ''}
        >
          {link.name}
        </MuiLink>
      ))}
    </Grid>
  );
};

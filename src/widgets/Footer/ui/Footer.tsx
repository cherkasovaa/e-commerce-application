import type { FC } from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { FooterLinkGroup, Logo } from '@/shared/ui';
import { DEVELOPERS } from '@/shared/config/developers';
import { APP_ROUTES } from '@/shared/config/routes/routes';
import type { FooterLink } from '@/shared/types/footerLink';
import { COURSE_LINK, COURSE_NAME } from '@/shared/config/constants';

export const Footer: FC = () => {
  const navigationLinks: FooterLink[] = APP_ROUTES.filter(
    (route) => route.meta.showInNavigateMenu
  ).map((route) => ({
    name: route.name,
    href: route.path,
  }));

  const developerLinks: FooterLink[] = Object.values(DEVELOPERS).map((dev) => ({
    name: dev.name,
    href: dev.github,
    external: true,
  }));

  return (
    <Box component="footer" sx={{ py: 2 }}>
      <Container>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid size={{ xs: 2, sm: 1, md: 3 }} marginRight="auto">
            <Logo />
          </Grid>

          <FooterLinkGroup title="Navigation" data={navigationLinks} />

          <FooterLinkGroup title="Developers" data={developerLinks} />
        </Grid>

        <Typography variant="body2" align="center" sx={{ pt: 4 }}>
          © 2025{' '}
          <Link
            href={COURSE_LINK}
            sx={{ color: 'inherit', textDecoration: 'none' }}
            target="_blank"
          >
            {COURSE_NAME}
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

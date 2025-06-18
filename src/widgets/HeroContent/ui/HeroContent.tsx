import { Box, Button, Grid, Typography, Link as MUILink } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import hero from '@/shared/assets/hero.webp';
import { APP_PATHS } from '@/shared/config/routes/paths';
import { Link } from 'react-router-dom';
import { type JSX } from 'react';

export const HeroContent = (): JSX.Element => {
  const linkStyle = {
    textDecoration: 'none',
    transition: '0.3s',
  };

  return (
    <Grid
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
      container
    >
      <Grid size={{ xs: 12, md: 6 }} p={2}>
        <Typography variant="h6">Real games come on discs </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mt: 2,
            lineHeight: 1.2,
          }}
        >
          Not just games. Artifacts of a golden era.
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          Digital fades. Discs don’t. Rediscover the thrill of physical game
          discs — that satisfying click, the shiny cover art, the smell of
          nostalgia. In an era of endless digital scrolls, owning your games is
          a statement. Rare. Tangible. Yours forever.
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<ShoppingCartIcon />}
          sx={{
            mt: 4,
            textTransform: 'uppercase',
          }}
        >
          <MUILink
            component={Link}
            color="inherit"
            to={APP_PATHS.CATALOG}
            sx={linkStyle}
          >
            Own the Game. Literally.
          </MUILink>
        </Button>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          component="img"
          src={hero}
          alt="Gaming Controller"
          sx={{
            width: '100%',
            maxWidth: 600,
            display: 'block',
            mx: 'auto',
          }}
        />
      </Grid>
    </Grid>
  );
};

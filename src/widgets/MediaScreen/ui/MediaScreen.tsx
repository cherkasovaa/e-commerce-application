import type { Image } from '@commercetools/platform-sdk';
import { Box, GlobalStyles, Grid, Typography, useTheme } from '@mui/material';
import type { FC } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface MediaScreenProps {
  images: Image[] | undefined;
}
export const MediaScreen: FC<MediaScreenProps> = ({ images }) => {
  const theme = useTheme();
  const title = 'Media';

  return (
    <>
      <GlobalStyles
        styles={{
          '.swiper-button-next, .swiper-button-prev': {
            color: theme.palette.primary.contrastText,
            background: 'rgba(71, 71, 71, 0.7)',
            borderRadius: '50%',
            width: 48,
            height: 48,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
            transition: 'background 0.3s',
            backdropFilter: 'blur(45px)',
          },
          '.swiper-button-next:hover, .swiper-button-prev:hover': {
            background: 'rgba(71, 71, 71, 1)',
          },
          '.swiper-button-next:after, .swiper-button-prev:after': {
            fontSize: 15,
          },
        }}
      />

      <Grid
        container
        direction="column"
        spacing={4}
        sx={{ maxWidth: 1440, width: '100%', p: '50px 0' }}
      >
        <Typography variant="h2" component="h2">
          {' '}
          {title}{' '}
        </Typography>
        <Box sx={{ width: '100%', display: 'block', position: 'relative' }}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            loop={true}
            navigation
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 2,
              },
            }}
          >
            {images && images.length > 0 ? (
              images.map((image, index) => (
                <SwiperSlide
                  key={image.url}
                  style={{
                    width: '400px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 300,
                    borderRadius: '36px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={image.url}
                    alt={image.label || `Game screen ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <Typography
                  variant="h6"
                  component="p"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  The pictures will be added soon
                </Typography>
              </SwiperSlide>
            )}
          </Swiper>
        </Box>
      </Grid>
    </>
  );
};

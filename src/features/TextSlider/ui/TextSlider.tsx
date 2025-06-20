import { Typography } from '@mui/material';
import type { JSX } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const TextSlider = (): JSX.Element => {
  const techs = [
    'typescript',
    'react',
    'tanstack',
    'material ui',
    'swiper',
    'lottie animation',
    'eslint',
    'husky',
    'lint-staged',
    'prettier',
    'helmet',
    'vite',
    'react router',
    'vitest',
  ];

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Autoplay]}
      loop
    >
      {techs.map((tech) => (
        <SwiperSlide>
          <Typography
            variant="h6"
            component="p"
            sx={{
              backgroundColor: 'primary.main',
              color: 'inherit',
              p: 4,
              textAlign: 'center',
            }}
          >
            {tech}
          </Typography>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

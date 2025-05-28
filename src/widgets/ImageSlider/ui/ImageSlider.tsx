import { Swiper, SwiperSlide } from 'swiper/react';

import type { Image } from '@commercetools/platform-sdk';
import { GlobalStyles, Typography, useTheme } from '@mui/material';
import type { CSSProperties, FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

interface ImageSliderProps {
  images: Image[] | undefined;
  onImageClick?: (_index: number) => void;
  swiperOptions?: SwiperOptions;
  slideStyle?: CSSProperties;
  imageStyle?: CSSProperties;
  showPagination?: boolean;
}

export const ImageSlider: FC<ImageSliderProps> = ({
  images,
  onImageClick,
  swiperOptions = {},
  slideStyle = {},
  imageStyle = {},
  showPagination = false,
}) => {
  const theme = useTheme();
  const emptyMessage = 'The pictures will be added soon';

  const modules = [Navigation];
  if (showPagination) {
    modules.push(Pagination);
  }

  const defaultOptions: SwiperOptions = {
    spaceBetween: 10,
    loop: true,
    navigation: true,
    pagination: showPagination ? { clickable: true } : false,
  };

  const mergedOptions = { ...defaultOptions, ...swiperOptions };

  const defaultSlideStyle: CSSProperties = {
    width: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    borderRadius: '36px',
    overflow: 'hidden',
  };

  const defaultImageStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    cursor: onImageClick ? 'pointer' : 'default',
  };

  const mergedSlideStyle = { ...defaultSlideStyle, ...slideStyle };
  const mergedImageStyle = { ...defaultImageStyle, ...imageStyle };

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
          '.swiper-pagination-bullet': {
            background: theme.palette.text.disabled,
            opacity: 1,
            width: 12,
            height: 12,
            margin: '0 6px',
            transition: '0.3s',
          },
          '.swiper-pagination-bullet-active': {
            background: theme.palette.primary.main,
            transform: 'scale(1.1)',
          },
        }}
      />

      <Swiper modules={modules} {...mergedOptions}>
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <SwiperSlide
              key={image.url}
              style={mergedSlideStyle}
              onClick={() => onImageClick && onImageClick(index)}
            >
              <img
                src={image.url}
                alt={image.label || `Game screen ${index + 1}`}
                style={mergedImageStyle}
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
              {emptyMessage}
            </Typography>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

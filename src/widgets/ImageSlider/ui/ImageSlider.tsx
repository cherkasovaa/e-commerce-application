import { Swiper, SwiperSlide } from 'swiper/react';

import type { Image } from '@commercetools/platform-sdk';
import { Typography } from '@mui/material';
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
  );
};

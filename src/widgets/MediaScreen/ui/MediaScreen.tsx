import { ImageSlider } from '@/widgets/ImageSlider';
import { ModalWindow } from '@/widgets/ModalWindow';
import type { Image } from '@commercetools/platform-sdk';
import { Box, GlobalStyles, Grid, Typography, useTheme } from '@mui/material';
import { useState, type FC } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getSliderStyles } from '../lib/sliderStyles';

interface MediaScreenProps {
  images: Image[] | undefined;
}

export const MediaScreen: FC<MediaScreenProps> = ({ images }) => {
  const theme = useTheme();

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleOpenModal = (index: number): void => {
    setSelectedIndex(index);
    setModalIsOpen(true);
  };

  const handleCloseModal = (): void => {
    setModalIsOpen(false);
    setSelectedIndex(0);
  };

  const title = 'Media';

  const mainSwiperOptions = {
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <>
      <GlobalStyles styles={getSliderStyles(theme)} />
      <Grid
        container
        direction="column"
        spacing={4}
        sx={{ maxWidth: 1440, width: '100%', p: '50px 0' }}
      >
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
        <Box sx={{ width: '100%', display: 'block', position: 'relative' }}>
          <ImageSlider
            images={images}
            onImageClick={handleOpenModal}
            swiperOptions={mainSwiperOptions}
          />
        </Box>
      </Grid>

      <ModalWindow
        open={modalIsOpen}
        onClose={handleCloseModal}
        images={images}
        initialSlideIndex={selectedIndex}
      />
    </>
  );
};

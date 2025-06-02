import { ImageSlider } from '@/widgets/ImageSlider';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, IconButton, useTheme } from '@mui/material';
import type { FC } from 'react';
import type { ImageGalleryModalProps } from '../modal/types';

export const ModalWindow: FC<ImageGalleryModalProps> = ({
  open,
  onClose,
  images,
  initialSlideIndex,
}) => {
  const theme = useTheme();

  const modalSwiperOptions = {
    initialSlide: initialSlideIndex,
    slidesPerView: 1,
  };

  const modalSlideStyle = {
    height: '80vh',
    borderRadius: 0,
  };

  const modalImageStyle = {
    objectFit: 'contain' as const,
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          background: theme.palette.background.paper,
          position: 'relative',
        },
      }}
    >
      <IconButton
        color="inherit"
        onClick={onClose}
        aria-label="close"
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 48,
          height: 48,
          zIndex: 2,
          transition: '.3s',
          '&:hover': {
            color: theme.palette.primary.main,
            background: 'transparent',
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        dividers
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          background: 'primary.main',
        }}
      >
        <ImageSlider
          images={images}
          swiperOptions={modalSwiperOptions}
          slideStyle={modalSlideStyle}
          imageStyle={modalImageStyle}
          showPagination={true}
        />
      </DialogContent>
    </Dialog>
  );
};

import type { Image } from '@commercetools/platform-sdk';

export interface ImageGalleryModalProps {
  open: boolean;
  onClose: () => void;
  images: Image[] | undefined;
  initialSlideIndex: number;
}

import type { ImageProps } from './imageProps';

export interface DotContainerProps {
  images: ImageProps[];
  active: number;
  onDotClick: (_idx: number) => void;
}

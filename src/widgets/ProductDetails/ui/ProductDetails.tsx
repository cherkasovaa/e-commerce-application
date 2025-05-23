import { ImageSlider } from '@/widgets/ImageSlider';
import type { ProductProjection } from '@commercetools/platform-sdk';
import type { JSX } from 'react';

export const ProductDetails = (props: ProductProjection): JSX.Element => {
  // console.log(props);

  return (
    <>
      <ImageSlider images={props.masterVariant.images ?? []} />
    </>
  );
};

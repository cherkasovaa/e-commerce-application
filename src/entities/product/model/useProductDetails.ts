import { type ProductProjection } from '@commercetools/platform-sdk';
import { getAttribute } from './getAttribute';
import { LANGUAGE } from '@/shared/config/constants';

interface IProductMetaDetails {
  genre: string;
  platform: string;
  ratingValue: string;
  description: string;
  image: string;
}

export const useProductDetails = (
  product: ProductProjection
): IProductMetaDetails => {
  const genre = getAttribute(product, 'genre')?.value.label ?? undefined;
  const platform = getAttribute(product, 'platform')?.value.label ?? undefined;
  const ratingValue = getAttribute(product, 'rating')?.value ?? undefined;

  const description =
    product?.description?.[LANGUAGE.EN] ?? 'No description available.';

  const image = product.masterVariant.images?.[0]?.url ?? undefined;
  const placeholder =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  return {
    genre,
    platform,
    ratingValue,
    description,
    image: image ?? placeholder,
  };
};

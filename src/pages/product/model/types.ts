import type { ProductPrice } from '@/shared/types/productPrice';

export interface ProductDetailsProps {
  title: string;
  description: string;
  rating: number | null;
  price: ProductPrice | null;
}

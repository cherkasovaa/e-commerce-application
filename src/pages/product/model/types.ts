import type { ProductPrice } from '@/shared/types/productPrice';

export interface ProductDetailsProps {
  id: string;
  title: string;
  description: string;
  rating: number | null;
  price: ProductPrice | null;
}

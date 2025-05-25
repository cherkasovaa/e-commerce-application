export interface ProductPrice {
  value: string;
  original: string | null;
  hasDiscount: boolean;
  currency: string;
  discount?: number | null;
}

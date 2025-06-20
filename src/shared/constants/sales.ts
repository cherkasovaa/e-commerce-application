import sale from '@/shared/assets/banners/sale.png';
export const SALES = {
  FIRST_ORDER: {
    title: '10% off your first order!',
    description:
      'Use the promo code below at checkout to save on your first purchase',
    code: '10off',
    image: sale,
  },
} as const;

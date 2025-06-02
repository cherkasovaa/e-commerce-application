import { useProducts } from '@/entities/product';
import { getAttribute } from '@/entities/product/model';
import { useMemo } from 'react';

interface IPlatform {
  key: string;
  label: string;
}

export function useUniquePlatforms(): IPlatform[] {
  const { products } = useProducts();

  return useMemo(() => {
    if (!products) return [];

    const map = new Map<string, string>();

    for (const product of products) {
      const attribute = getAttribute(product, 'platform');
      if (attribute?.value?.key && attribute?.value?.label) {
        map.set(attribute.value.key, attribute.value.label);
      }
    }

    return Array.from(map.entries()).map(([key, label]) => ({ key, label }));
  }, [products]);
}

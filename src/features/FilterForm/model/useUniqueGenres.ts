import { useProducts } from '@/entities/product';
import { getAttribute } from '@/entities/product/model';
import { useMemo } from 'react';

export function useUniqueGenres(): string[] {
  const { products } = useProducts();

  return useMemo(() => {
    if (!products) return [];

    const tagsSet = new Set<string>();

    for (const product of products) {
      const attribute = getAttribute(product, 'genre');
      tagsSet.add(attribute?.value.label);
    }

    return Array.from(tagsSet);
  }, [products]);
}

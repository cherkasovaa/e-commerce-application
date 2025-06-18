import { useProducts } from '@/entities/product';
import { getAttribute } from '@/entities/product/model';
import { useMemo } from 'react';

export function useUniqueTags(): string[] {
  const { products } = useProducts();

  return useMemo(() => {
    if (!products) return [];

    const tagsSet = new Set<string>();

    for (const product of products) {
      const tagAttribute = getAttribute(product, 'tags');
      const tagValues = tagAttribute?.value;

      if (Array.isArray(tagValues)) {
        for (const tag of tagValues) {
          tagsSet.add(tag.label);
        }
      }
    }
    return Array.from(tagsSet);
  }, [products]);
}

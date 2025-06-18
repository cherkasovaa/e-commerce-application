import { type IFilterData } from '@/features/FilterForm/model/types';
import { getApiRoot } from '@/shared/api/commerceTools';
import { type IUseProductsWithParamsProps } from '../model/types';
import { type ProductProjectionPagedSearchResponse } from '@commercetools/platform-sdk';

export const fetchProductsWithParams = async (
  params: IUseProductsWithParamsProps
): Promise<ProductProjectionPagedSearchResponse> => {
  const { category, searchQuery, sort, limit, page, filters } = params;

  const queryArgs: Record<string, string | string[]> = {
    limit: String(limit),
    offset: String((page - 1) * limit),
    filter: [`categories.id:"${category}"`, ...buildFilters(filters)],
  };

  if (searchQuery) {
    queryArgs['text.en-US'] = searchQuery.toLowerCase();
    queryArgs['fuzzy'] = 'true';
    queryArgs['fuzzyLevel'] = '1';
  }

  if (sort) {
    queryArgs['sort'] = sort;
  }

  const result = await getApiRoot()
    .productProjections()
    .search()
    .get({ queryArgs })
    .execute();

  return result.body;
};

function buildFilters(filters: IFilterData): string[] {
  const result: string[] = [];

  if (filters.price.length === 2) {
    const [min, max] = filters.price;
    const minCents = Math.round(min * 100);
    const maxCents = Math.round(max * 100);
    result.push(`variants.price.centAmount:range (${minCents} to ${maxCents})`);
  }

  if (filters.rating.length === 2) {
    const [min, max] = filters.rating;
    result.push(`variants.attributes.rating:range (${min} to ${max})`);
  }

  if (filters.genre) {
    result.push(
      `variants.attributes.genre.key:"${filters.genre.toLowerCase()}"`
    );
  }

  if (filters.platform) {
    result.push(
      `variants.attributes.platform.key:"${filters.platform.toLowerCase()}"`
    );
  }

  const selectedTags = Object.entries(filters.tags)
    .filter(([, checked]) => checked)
    .map(([tag]) => `variants.attributes.tags.key:"${tag.toLowerCase()}"`);

  result.push(...selectedTags);

  return result;
}

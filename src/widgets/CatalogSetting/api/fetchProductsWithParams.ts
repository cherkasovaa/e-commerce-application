import { type IFilterData } from '@/features/FilterForm/model/types';
import { getApiRoot } from '@/shared/api/commerceTools';
import { type IUseProductsWithParamsProps } from '../model/types';
import { type ProductProjectionPagedSearchResponse } from '@commercetools/platform-sdk';

export const fetchProductsWithParams = async (
  params: IUseProductsWithParamsProps
): Promise<ProductProjectionPagedSearchResponse> => {
  const { category, searchQuery, sort, limit, page, filters } = params;

  const queryParams = new URLSearchParams();

  if (searchQuery) {
    queryParams.append('text.en', searchQuery);
    queryParams.append('fuzzy', 'true');
    queryParams.append('fuzzyLevel', '1');
  }

  if (sort) {
    queryParams.append('sort', sort);
  }

  queryParams.append('limit', String(limit));
  queryParams.append('offset', String((page - 1) * limit));

  const filterValues = [
    `categories.id:"${category}"`,
    ...buildFilters(filters),
  ];

  filterValues.forEach((filter) => {
    queryParams.append('filter', filter);
  });

  const result = await getApiRoot()
    .productProjections()
    .search()
    .post({
      body: queryParams.toString(),
    })
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
    result.push(`variants.attributes.genre:"${filters.genre}"`);
  }

  const selectedTags = Object.entries(filters.tags)
    .filter(([, checked]) => checked)
    .map(([tag]) => `variants.attributes.tags.key:"${tag}"`);

  result.push(...selectedTags);

  return result;
}

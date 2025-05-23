import type { ProductProjection } from '@commercetools/platform-sdk';
import { getApiRoot } from '.';

export async function getProductById(
  productKey: string
): Promise<ProductProjection> {
  const response = await getApiRoot()
    .productProjections()
    .withKey({ key: productKey })
    .get()
    .execute();

  return response.body;
}

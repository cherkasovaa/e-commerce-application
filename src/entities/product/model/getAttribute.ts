import {
  type Attribute,
  type ProductProjection,
} from '@commercetools/platform-sdk';

export function getAttribute(array: ProductProjection, attribute: string) {
  return array.masterVariant.attributes?.find(
    (attr: Attribute) => attr.name === attribute
  );
}

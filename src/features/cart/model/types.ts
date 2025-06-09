import type { LineItem } from '@commercetools/platform-sdk';

export interface CartProductListProps {
  items: LineItem[];
}

export interface CartItemProps {
  item: LineItem;
}

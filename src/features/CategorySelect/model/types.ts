import {
  type LocalizedString,
  type Category,
} from '@commercetools/platform-sdk';

export interface ICategorySelectProps {
  onCategoryChange: (category: Category) => void;
  activeCategoryId?: string;
}

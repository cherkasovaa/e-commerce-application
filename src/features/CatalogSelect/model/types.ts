export type SortValue =
  | 'name.en-US asc'
  | 'name.en-US desc'
  | 'price asc'
  | 'price desc';
export type AmountValue = 10 | 25 | 50;

export interface ISelectProps<T> {
  value: T;
  onChange: (value: T) => void;
}

export interface IFilterFormProps {
  handleFilterFormData: (data: IFilterData) => void;
}

export interface IFilterData {
  price: [number, number];
  rating: [number, number];
  tags: Record<string, boolean>;
  genre: string;
}

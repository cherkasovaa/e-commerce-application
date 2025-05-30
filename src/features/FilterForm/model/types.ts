export interface IFilterFormProps {
  handleFilterFormData: (data: IFilterData) => void;
}

export interface IFilterData {
  price: number[];
  rating: number[];
  tags: Record<string, boolean>;
  platform: string;
  genre: string;
}

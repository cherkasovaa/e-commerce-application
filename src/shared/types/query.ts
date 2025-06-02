export interface QueryResult<T> {
  data: T | undefined;
  isLoading: boolean;
  error: Error | null;
}

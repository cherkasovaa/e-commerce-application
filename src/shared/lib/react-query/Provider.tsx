import { QueryClientProvider } from '@tanstack/react-query';
import { type ReactQueryProviderProps } from './types';
import { type JSX } from 'react';
import { queryClient } from './client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function ReactQueryProvider({
  children,
}: ReactQueryProviderProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

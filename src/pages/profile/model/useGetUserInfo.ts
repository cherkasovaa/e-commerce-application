import { getApiRoot } from '@/shared/api/commerceTools';
import { type Customer } from '@commercetools/platform-sdk';
import { type HttpErrorType } from '@commercetools/ts-client';
import { useQuery } from '@tanstack/react-query';

const getUserInfo = async (): Promise<Customer> => {
  const response = await getApiRoot().me().get().execute();
  return response.body;
};

export const useGetUserInfo = () => {
  return useQuery<Customer, HttpErrorType>({
    queryKey: ['customer'],
    queryFn: getUserInfo,
  });
};

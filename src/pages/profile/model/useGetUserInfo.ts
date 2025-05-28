import { getApiRoot } from '@/shared/api/commerceTools';
import {
  type ClientResponse,
  type Customer,
} from '@commercetools/platform-sdk';
import { type HttpErrorType } from '@commercetools/ts-client';
import { useQuery } from '@tanstack/react-query';

const getUserInfo = async (): Promise<ClientResponse<Customer>> => {
  const customerInfo = await getApiRoot().me().get().execute();
  return customerInfo;
};

export const useGetUserInfo = () => {
  return useQuery<ClientResponse<Customer>, HttpErrorType>({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });
};

import { getApiRoot } from '@/shared/api/commercetools';
import {
  switchToAnonymousFlow,
  switchToPasswordFlow,
} from '@/shared/api/commercetools/authFlow';
import {
  type ClientResponse,
  type Customer,
} from '@commercetools/platform-sdk';
import { type HttpErrorType } from '@commercetools/ts-client';
import { useMutation } from '@tanstack/react-query';
import { type ILoginFormProps } from './types';

const loginWithCommercetools = async (credentials: ILoginFormProps) => {
  try {
    await switchToPasswordFlow(credentials.email, credentials.password);
    const response = await getApiRoot().me().get().execute();
    return response;
  } catch (err) {
    await switchToAnonymousFlow();
    throw err;
  }
};

export const useLogin = () => {
  const { mutate } = useMutation<
    ClientResponse<Customer>,
    HttpErrorType,
    ILoginFormProps
  >({
    mutationFn: loginWithCommercetools,
  });

  return { login: mutate };
};

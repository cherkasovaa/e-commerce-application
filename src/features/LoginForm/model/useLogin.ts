import { getApiRoot } from '@/shared/api/commerceTools';
import {
  switchToAnonymousFlow,
  switchToPasswordFlow,
} from '@/shared/api/commerceTools/authFlow';
import { localStorageService } from '@/shared/lib/localStorage/localStorageService';
import {
  type ClientResponse,
  type Customer,
} from '@commercetools/platform-sdk';
import { type HttpErrorType } from '@commercetools/ts-client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type ILoginFormProps } from './types';

const loginWithCommercetools = async (credentials: ILoginFormProps) => {
  const { email, password } = credentials;
  const anonymousId = localStorageService.getAnonymousID();

  try {
    if (anonymousId) {
      try {
        const loginResponse = await getApiRoot()
          .login()
          .post({
            body: {
              email: email,
              password: password,
              anonymousId,
              anonymousCartSignInMode: 'MergeWithExistingCustomerCart',
            },
          })
          .execute();

        await switchToPasswordFlow(email, password);

        localStorageService.clearAnonymousID();

        return {
          body: loginResponse.body.customer,
          statusCode: loginResponse.statusCode,
          headers: loginResponse.headers,
        };
      } catch (loginError) {
        console.warn(`Login with cart merge failed: ${loginError}`);
      }
    }

    await switchToPasswordFlow(email, password);

    const response = await getApiRoot().me().get().execute();
    return response;
  } catch (err) {
    await switchToAnonymousFlow();
    throw err;
  }
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation<
    ClientResponse<Customer>,
    HttpErrorType,
    ILoginFormProps
  >({
    mutationFn: loginWithCommercetools,
    onSuccess: (response) => {
      queryClient.setQueryData(['customer'], response.body);
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  return { login: mutate };
};

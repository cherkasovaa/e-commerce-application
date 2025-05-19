import { getApiRoot } from '@/shared/api/commerceTools';
import {
  switchToPasswordFlow,
  switchToAnonymousFlow,
} from '@/shared/api/commerceTools/authFlow';
import {
  type ClientResponse,
  type Customer,
} from '@commercetools/platform-sdk';
import { type HttpErrorType } from '@commercetools/ts-client';
import { useMutation } from '@tanstack/react-query';
import type { RegisterFormData } from './types';
import { mapDataToCustomerDraft } from './mapDataToCustomerDraft';

const registerWithCommercetools = async (data: RegisterFormData) => {
  try {
    await getApiRoot()
      .customers()
      .post({
        body: mapDataToCustomerDraft(data),
      })
      .execute();
    await switchToPasswordFlow(data.email, data.password);
    const customerInfo = await getApiRoot().me().get().execute();
    return customerInfo;
  } catch (err) {
    await switchToAnonymousFlow();
    throw err;
  }
};

export const useRegister = () => {
  return useMutation<ClientResponse<Customer>, HttpErrorType, RegisterFormData>(
    {
      mutationFn: registerWithCommercetools,
    }
  );
};

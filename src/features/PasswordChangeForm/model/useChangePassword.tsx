import { useQueryClient } from '@tanstack/react-query';
import type { Customer } from '@commercetools/platform-sdk';
import { getApiRoot } from '@/shared/api/commerceTools';
import type { ChangePasswordData } from './types';

export const useChangePassword = () => {
  const queryClient = useQueryClient();

  const changePassword = async (
    data: ChangePasswordData
  ): Promise<Customer> => {
    const currentUser = queryClient.getQueryData<Customer>(['customer']);

    if (!currentUser) {
      throw new Error('Customer not found');
    }

    const response = await getApiRoot()
      .customers()
      .password()
      .post({
        body: {
          id: currentUser.id,
          version: currentUser.version,
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
        },
      })
      .execute();

    queryClient.setQueryData(['customer'], response.body);
    queryClient.invalidateQueries({ queryKey: ['customer'] });

    return response.body;
  };

  return changePassword;
};

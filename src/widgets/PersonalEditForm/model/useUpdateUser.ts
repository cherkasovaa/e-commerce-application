import { useQueryClient } from '@tanstack/react-query';
import type { Customer } from '@commercetools/platform-sdk';
import { getApiRoot } from '@/shared/api/commerceTools';
import { localStorageService } from '@/shared/lib/localStorage/localStorageService';
import type { PersonalFormData } from '@/features/personalForm/model';
import type { PersonalUpdateAction } from './types';
import { createUpdateActions } from './helpers';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const updateUser = async (data: PersonalFormData): Promise<Customer> => {
    const customerId = localStorageService.getCustomerId();
    const currentUser = queryClient.getQueryData<Customer>(['customer']);

    if (!customerId || !currentUser) {
      throw new Error('Customer not found');
    }

    const actions: PersonalUpdateAction[] = createUpdateActions(data);

    if (actions.length === 0) {
      throw new Error('No changes to update');
    }

    try {
      const response = await getApiRoot()
        .customers()
        .withId({ ID: customerId })
        .post({
          body: {
            version: currentUser.version,
            actions,
          },
        })
        .execute();

      queryClient.setQueryData(['customer'], response.body);
      queryClient.invalidateQueries({ queryKey: ['customer'] });

      return response.body;
    } catch {
      throw new Error('Failed to update user');
    }
  };

  return updateUser;
};

import { useQueryClient } from '@tanstack/react-query';
import type { Customer } from '@commercetools/platform-sdk';
import { getApiRoot } from '@/shared/api/commerceTools';
import type { AddressData } from '@/features/addressForm/model';
import type { AddressUpdateAction } from './types';
import { createAddressUpdateActions } from './helpers';

interface AddressFormData {
  addresses: AddressData[];
  defaultShippingAddressId?: string;
  defaultBillingAddressId?: string;
}

export const useUpdateAddresses = () => {
  const queryClient = useQueryClient();

  const updateAddresses = async (data: AddressFormData): Promise<Customer> => {
    const currentUser = queryClient.getQueryData<Customer>(['customer']);
    if (!currentUser) {
      throw new Error('Customer not found');
    }

    const actions: AddressUpdateAction[] = createAddressUpdateActions(
      data,
      currentUser
    );

    if (actions.length === 0) {
      throw new Error('No changes to update');
    }

    const response = await getApiRoot()
      .customers()
      .withId({ ID: currentUser.id })
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
  };

  return updateAddresses;
};

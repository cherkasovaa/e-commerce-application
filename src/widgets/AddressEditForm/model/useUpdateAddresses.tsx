import { useQueryClient } from '@tanstack/react-query';
import type { Customer } from '@commercetools/platform-sdk';
import { getApiRoot } from '@/shared/api/commerceTools';
import type { AddressEditFormData, AddressUpdateAction } from './types';
import {
  createAddressUpdateActions,
  createDefaultAddressActions,
} from './helpers';

export const useUpdateAddresses = () => {
  const queryClient = useQueryClient();

  const updateAddresses = async (
    data: AddressEditFormData
  ): Promise<Customer> => {
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

    let updatedUser = await getApiRoot()
      .customers()
      .withId({ ID: currentUser.id })
      .post({
        body: {
          version: currentUser.version,
          actions,
        },
      })
      .execute();

    const defaultValuesActions = createDefaultAddressActions(
      data,
      currentUser,
      updatedUser.body
    );
    if (defaultValuesActions.length > 0) {
      updatedUser = await getApiRoot()
        .customers()
        .withId({ ID: currentUser.id })
        .post({
          body: {
            version: updatedUser.body.version,
            actions: defaultValuesActions,
          },
        })
        .execute();
    }

    queryClient.setQueryData(['customer'], updatedUser.body);
    queryClient.invalidateQueries({ queryKey: ['customer'] });

    return updatedUser.body;
  };

  return updateAddresses;
};

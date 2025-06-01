import type {
  CustomerAddAddressAction,
  CustomerRemoveAddressAction,
  CustomerChangeAddressAction,
  CustomerSetDefaultShippingAddressAction,
  CustomerSetDefaultBillingAddressAction,
} from '@commercetools/platform-sdk';
import type { AddressData } from '@/features/addressForm';

export interface AddressEditFormData {
  addresses: AddressData[];
  defaultShippingAddressId?: string;
  defaultBillingAddressId?: string;
}

export interface AddressEditFormProps {
  initialData: {
    addresses: AddressData[];
    defaultShippingAddressId?: string;
    defaultBillingAddressId?: string;
  };
  onSuccess: () => void;
  onCancel: () => void;
  onError: (err: string) => void;
}

export interface UpdateCustomerVariables {
  version: number;
  actions: AddressUpdateAction[];
}

export type AddressUpdateAction =
  | CustomerAddAddressAction
  | CustomerRemoveAddressAction
  | CustomerChangeAddressAction
  | CustomerSetDefaultShippingAddressAction
  | CustomerSetDefaultBillingAddressAction;

export interface ErrorInfo {
  title: string;
  message: string;
}

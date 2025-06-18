export interface Address {
  id: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface AddressInfoProps {
  addresses: Address[];
  defaultShippingAddressId?: string;
  defaultBillingAddressId?: string;
}

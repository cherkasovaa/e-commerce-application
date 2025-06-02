export const getAddressLabels = (
  addressId: string,
  defaultShippingAddressId?: string,
  defaultBillingAddressId?: string
) => {
  const labels = [];
  if (defaultShippingAddressId === addressId) {
    labels.push('Default Shipping');
  }
  if (defaultBillingAddressId === addressId) {
    labels.push('Default Billing');
  }
  return labels;
};

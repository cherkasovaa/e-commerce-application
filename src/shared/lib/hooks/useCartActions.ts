import { useSendProductToCart } from '@/entities/cart';
import { useRemoveProductFromCart } from '@/entities/cart/model/useRemoveProductFromCart';

interface UseCartActionsProps {
  productId: string;
  onSuccess?: (_action: 'add' | 'remove') => void;
  onError?: (_error: Error, _action: 'add' | 'remove') => void;
  onStart?: (_action: 'add' | 'remove') => void;
}

const ACTION = {
  ADD: 'add',
  REMOVE: 'remove',
} as const;

export const useCartActions = ({
  productId,
  onSuccess,
  onError,
  onStart,
}: UseCartActionsProps) => {
  const { mutate: sendProductToCart } = useSendProductToCart();
  const { mutate: removeProductFromCart } = useRemoveProductFromCart();

  const addToCart = (): void => {
    onStart?.(ACTION.ADD);
    sendProductToCart(productId, {
      onSuccess: () => onSuccess?.(ACTION.ADD),
      onError: (err) => onError?.(err, ACTION.ADD),
    });
  };

  const removeFromCart = (): void => {
    onStart?.(ACTION.REMOVE);
    removeProductFromCart(productId, {
      onSuccess: () => onSuccess?.(ACTION.REMOVE),
      onError: (err) => onError?.(err, ACTION.REMOVE),
    });
  };

  return { addToCart, removeFromCart };
};

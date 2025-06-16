export const CART_MESSAGES = {
  ADD: {
    START: 'Adding game to cart...',
    SUCCESS: 'The game added to cart',
    ERROR: (err: string): string => `Failed to add game: ${err}`,
  },
  REMOVE: {
    START: 'Removing game from cart...',
    SUCCESS: 'The game remove from cart',
    ERROR: (err: string): string => `Failed to remove game: ${err}`,
  },
};

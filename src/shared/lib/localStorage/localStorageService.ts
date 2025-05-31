const LS_KEYS = {
  AUTH: 'isAuthenticated',
  CUSTOMER_ID: 'customerId',
};

export const localStorageService = {
  setAuthStatus(isAuthenticated: boolean): void {
    localStorage.setItem(LS_KEYS.AUTH, String(isAuthenticated));
  },

  getAuthStatus(): boolean {
    return localStorage.getItem(LS_KEYS.AUTH) === 'true';
  },

  clearAuthStatus(): void {
    localStorage.removeItem(LS_KEYS.AUTH);
  },

  setCustomerId(id: string): void {
    localStorage.setItem(LS_KEYS.CUSTOMER_ID, id);
  },

  getCustomerId(): string | null {
    return localStorage.getItem(LS_KEYS.CUSTOMER_ID);
  },

  removeCustomerId(): void {
    localStorage.removeItem(LS_KEYS.CUSTOMER_ID);
  },
};

const AUTH_KEY = 'isAuthenticated';

export const localStorageService = {
  setAuthStatus(isAuthenticated: boolean): void {
    localStorage.setItem(AUTH_KEY, String(isAuthenticated));
  },

  getAuthStatus(): boolean {
    return localStorage.getItem(AUTH_KEY) === 'true';
  },

  clearAuthStatus(): void {
    localStorage.removeItem(AUTH_KEY);
  },
};

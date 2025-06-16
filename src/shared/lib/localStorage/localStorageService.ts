import type { LSKey } from './types';
import { LS_KEYS } from './constants';

export const localStorageService = {
  set(key: LSKey, value: string | boolean): void {
    localStorage.setItem(LS_KEYS[key], String(value));
  },

  get(key: LSKey): string | null {
    return localStorage.getItem(LS_KEYS[key]);
  },

  getBool(key: LSKey): boolean {
    return this.get(key) === 'true';
  },

  remove(key: LSKey): void {
    localStorage.removeItem(LS_KEYS[key]);
  },

  clear(): void {
    Object.values(LS_KEYS).forEach((lsKey) => {
      localStorage.removeItem(lsKey);
    });
  },

  getAuthStatus(): boolean {
    return this.getBool('AUTH');
  },

  setAuthStatus(status: boolean): void {
    this.set('AUTH', status);
  },

  getRefreshToken(): string | null {
    return this.get('REFRESH_TOKEN');
  },

  setRefreshToken(token: string): void {
    this.set('REFRESH_TOKEN', token);
  },

  removeRefreshToken(): void {
    this.remove('REFRESH_TOKEN');
  },

  clearAuth(): void {
    this.remove('AUTH');
    this.remove('REFRESH_TOKEN');
  },

  setAnonymousID(token: string): void {
    this.set('ANONYMOUS_TOKEN', token);
  },

  clearAnonymousID(): void {
    this.remove('ANONYMOUS_TOKEN');
  },

  getAnonymousID(): string | null {
    return this.get('ANONYMOUS_TOKEN');
  },
};

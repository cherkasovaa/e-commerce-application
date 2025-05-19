import { type AuthMiddlewareOptions } from '@commercetools/ts-client';
import {
  authURL,
  clientId,
  clientSecret,
  projectKey,
  scopes,
} from './constants';

export const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: authURL,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
  },
  scopes: scopes.split(','),
  httpClient: fetch,
};

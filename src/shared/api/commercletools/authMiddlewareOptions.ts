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
  projectKey: projectKey,
  credentials: {
    clientId: clientId,
    clientSecret: clientSecret,
  },
  scopes: scopes.split(','),
  httpClient: fetch,
};

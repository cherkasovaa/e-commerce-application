import { type AuthMiddlewareOptions } from '@commercetools/ts-client';
import {
  apiURL,
  clientId,
  clientSecret,
  projectKey,
  scopes,
} from './constants';

export const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: apiURL || '',
  projectKey: projectKey || '',
  credentials: {
    clientId: clientId || '',
    clientSecret: clientSecret || '',
  },
  scopes: scopes ? scopes.split(',') : [],
  httpClient: fetch,
};

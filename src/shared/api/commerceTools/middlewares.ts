import type {
  AuthMiddlewareOptions,
  HttpMiddlewareOptions,
} from '@commercetools/ts-client';
import {
  authURL,
  clientId,
  clientSecret,
  projectKey,
  scopes,
  apiURL,
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

export const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: apiURL,
  httpClient: fetch,
};

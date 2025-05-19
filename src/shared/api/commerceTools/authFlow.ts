import { type Client, ClientBuilder } from '@commercetools/ts-client';
import { httpMiddlewareOptions } from './httpMiddlewareOptions';
import {
  authURL,
  scopes,
  clientId,
  clientSecret,
  projectKey,
} from './constants';
import { localStorageService } from '../../lib/localStorage/localStorageService';

export let currentClient = createAnonymousClient();

export async function switchToPasswordFlow(
  username: string,
  password: string
): Promise<void> {
  const newClient = createClient(username, password);

  currentClient = newClient;
}

export async function switchToAnonymousFlow(): Promise<void> {
  const newClient = createAnonymousClient();

  currentClient = newClient;
}

function createAnonymousClient(): Client {
  localStorageService.setAuthStatus(false);
  return new ClientBuilder()
    .withAnonymousSessionFlow({
      host: authURL,
      projectKey,
      credentials: {
        clientId,
        clientSecret,
      },
      scopes: scopes.split(','),
      httpClient: fetch,
    })
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
}

function createClient(username: string, password: string): Client {
  localStorageService.setAuthStatus(true);
  return new ClientBuilder()
    .withPasswordFlow({
      host: authURL,
      projectKey,
      credentials: {
        clientId,
        clientSecret,
        user: { username, password },
      },
      scopes: scopes.split(','),
      httpClient: fetch,
    })
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
}

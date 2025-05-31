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
import { getApiRoot } from '.';

export let currentClient = createAnonymousClient();

export async function switchToPasswordFlow(
  username: string,
  password: string
): Promise<void> {
  const newClient = createClient(username, password);

  try {
    const response = await getApiRoot().me().get().execute();
    localStorageService.setCustomerId(response.body.id);
    localStorageService.setAuthStatus(true);

    currentClient = newClient;
  } catch {
    throw new Error('Failed to authenticate user');
  }
}
export async function switchToAnonymousFlow(): Promise<void> {
  const newClient = createAnonymousClient();
  currentClient = newClient;
}

function createAnonymousClient(): Client {
  localStorageService.setAuthStatus(false);
  localStorageService.removeCustomerId();
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

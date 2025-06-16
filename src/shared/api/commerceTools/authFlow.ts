import { type Client, ClientBuilder } from '@commercetools/ts-client';
import { httpMiddlewareOptions } from './middlewares';
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
  const anonymousId = localStorageService.getAnonymousID();

  const newClient = createClient(username, password, anonymousId);

  currentClient = newClient;

  window.dispatchEvent(new CustomEvent('authStatusChanged'));
}

export async function switchToAnonymousFlow(): Promise<void> {
  const newClient = createAnonymousClient();

  currentClient = newClient;
  window.dispatchEvent(new CustomEvent('authStatusChanged'));
}

function createAnonymousClient(): Client {
  localStorageService.setAuthStatus(false);
  localStorageService.clearAnonymousID();

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

function createClient(
  username: string,
  password: string,
  anonymousId: string | null
): Client {
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
      ...(anonymousId ? { anonymousId } : {}),
    })
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
}

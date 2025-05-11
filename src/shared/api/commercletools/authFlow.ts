import { ClientBuilder } from '@commercetools/ts-client';
import { authMiddlewareOptions } from './authMiddlewareOptions';
import { httpMiddlewareOptions } from './httpMiddlewareOptions';

export let currentClient = new ClientBuilder()
  .withAnonymousSessionFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();

export function switchToPasswordFlow(username: string, password: string): void {
  currentClient = new ClientBuilder()
    .withPasswordFlow({
      ...authMiddlewareOptions,
      credentials: {
        clientId: authMiddlewareOptions.credentials.clientId,
        clientSecret: authMiddlewareOptions.credentials.clientSecret,
        user: { username, password },
      },
    })
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
}

export function switchToAnonymousFlow(): void {
  currentClient = new ClientBuilder()
    .withAnonymousSessionFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
}

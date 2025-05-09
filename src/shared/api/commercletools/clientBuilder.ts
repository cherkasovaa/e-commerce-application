import { ClientBuilder } from '@commercetools/ts-client';
import { authMiddlewareOptions } from './authMiddlewareOptions';
import { httpMiddlewareOptions } from './httpMiddlewareOptions';

export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

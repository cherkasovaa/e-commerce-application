import { type HttpMiddlewareOptions } from '@commercetools/ts-client';
import { apiURL } from './constants';

export const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: apiURL || '',
  httpClient: fetch,
};

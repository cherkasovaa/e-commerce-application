import {
  type ByProjectKeyRequestBuilder,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import { projectKey } from './constants';
import { currentClient } from './authFlow';

export function getApiRoot(): ByProjectKeyRequestBuilder {
  return createApiBuilderFromCtpClient(currentClient).withProjectKey({
    projectKey,
  });
}

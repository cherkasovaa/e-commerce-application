import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { ctpClient } from './clientBuilder';
import { projectKey } from './constants';

export const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey,
});

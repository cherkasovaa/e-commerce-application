import { getApiRoot } from '@/shared/api/commercletools';
import {
  switchToAnonymousFlow,
  switchToPasswordFlow,
} from '@/shared/api/commercletools/authFlow';
import { useMutation } from '@tanstack/react-query';

const loginWithCommercetools = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    await switchToPasswordFlow(credentials.email, credentials.password);
    const response = await getApiRoot().me().get().execute();
    return response;
  } catch (err) {
    await switchToAnonymousFlow();
    throw err;
  }
};

export const useLogin = () => {
  const { mutate } = useMutation({
    mutationFn: loginWithCommercetools,
  });

  return { login: mutate };
};

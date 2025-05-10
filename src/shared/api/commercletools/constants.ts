export const projectKey: string = import.meta.env.VITE_CTP_PROJECT_KEY;
export const clientId: string = import.meta.env.VITE_CTP_CLIENT_ID;
export const clientSecret: string = import.meta.env.VITE_CTP_CLIENT_SECRET;
export const scopes: string = import.meta.env.VITE_CTP_SCOPES;
export const apiURL: string =
  import.meta.env.VITE_CTP_API_URL ||
  'https://api.europe-west1.gcp.commercetools.com';
export const authURL: string =
  import.meta.env.VITE_CTP_AUTH_URL ||
  'https://auth.europe-west1.gcp.commercetools.com';

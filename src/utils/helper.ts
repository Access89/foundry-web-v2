
const environment = import.meta.env;

export const blockInvalidChar = (e: React.KeyboardEvent<HTMLInputElement>) =>
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

export const variables = {
  base_url: environment.VITE_API_BASE_URL,
  pos_api_base_url: environment.VITE_POS_API_BASE_URL,
  environment: environment.VITE_ENV,
  redirectUrl: environment.VITE_REDIRECT_URL
};

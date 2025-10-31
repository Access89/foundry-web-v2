
const environment = import.meta.env;

export const blockInvalidChar = (e: React.KeyboardEvent<HTMLInputElement>) =>
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

export const variables = {
  base_url: environment.VITE_API_BASE_URL,
  pos_api_base_url: environment.VITE_POS_API_BASE_URL,
  environment: environment.VITE_ENV,
  redirectUrl: environment.VITE_REDIRECT_URL,
  subscription_base_url: environment.VITE_SUBSCRIPTION_BASE_URL,
};


export const parseCurrency = (currency: string) => {
  if (currency === 'USD') return '$';
  if (currency === 'EUR') return '€';
  if (currency === 'GBP') return '£';
  return '₵';
};

export const use_cases_list = [
  'Fashion, electronics, grocery, convenience shops',
  'Chain stores, local provision shops',
  'Chemists, medical supply stores',
  'Restaurants, fast food joints, cafes, bars, food trucks',
  'Stockists, FMCG distributors',
  'Hotels, motels, nightclubs, gyms',
  'Auto parts stores, filling stations',
  'MoMo agents, remittance shops, bill payment agents',
  'Consultants, designers, tutors, artisans',
  'Boutiques, cosmetics shops, corner shops, general stores',
  'Hair salons, barber shops, spas, mechanics, cleaning services',
  'Caterers, small restaurants, bakeries, food vendors',
  'Wholesalers, distributors, suppliers',
  'Law firms, audit firms, small clinics, private schools',
  'E-commerce sellers, social media sellers (Instagram, WhatsApp shops)',
  'Small lending operations, susu collectors, savings groups',
]
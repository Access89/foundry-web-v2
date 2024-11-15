import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
const environment = import.meta.env;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const variables = {
  base_url: environment.VITE_API_BASE_URL,
};

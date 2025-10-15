import { businessPlatformData } from './business.data';
import { financePlatformData } from './finance.data';
import { tradePlatformData } from './trade.data';

export type PlatformKey = 'business' | 'finance' | 'trade';

export const loadPlatformData = async (platform: PlatformKey) => {
  switch (platform) {
    case 'business':
      return businessPlatformData;
    case 'finance':
      return financePlatformData;
    case 'trade':
      return tradePlatformData;
    default:
      throw new Error(`Unknown platform: ${platform}`);
  }
};

export const getAllPlatforms = () => [
  businessPlatformData,
  financePlatformData,
  tradePlatformData
];

// For backward compatibility, export the main data
export const main_platform_data = getAllPlatforms();

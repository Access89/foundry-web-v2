import { useQuery } from 'react-query';
import { queryFn } from '../services/query.api';
import { variables } from './helper';

// TypeScript interfaces
interface Bundle {
  id: number;
  bundle_name: string;
  description: {
    String: string;
    Valid: boolean;
  };
  pricing_model: string;
  is_active: {
    Bool: boolean;
    Valid: boolean;
  };
  created_at: string;
  updated_at: string;
  bundle_type: string;
  price: string;
  currency: {
    String: string;
    Valid: boolean;
  };
}

interface PlansListApiResponse {
  responseInfo: {
    responseCode: string;
    responseMessage: string;
  };
  data: {
    data: {
      id: number;
      plan_name: string;
      category_id: number;
      category_name: string;
      description: string;
      currency: string;
      billing_frequency: string;
      cancellation_policy: string;
      trial_period_days: number;
      features: {
        feature_list: string[];
      };
      is_active: boolean;
      is_default: boolean;
      bundles: Bundle[] | null;
    }[];
  };
}

// API functions
const fetchPlansList = async (page: number = 1, limit: number = 1000, category_id: string = ''): Promise<PlansListApiResponse> => {
  const params: { page: number; limit: number; category_id?: string } = {
    page,
    limit,
  };
  if (category_id) {
    params.category_id = category_id;
  }
  
  return queryFn<PlansListApiResponse>({
    url: `${variables.subscription_base_url}/plans`,
    params
  });
};

// Custom hook
export const useSubscriptionPlans = (page: number = 1, limit: number = 1000, category_id: string = '') => {
  const {
    data: plansListData,
    isLoading: plansListLoading,
    error: plansListError,
    refetch: refetchPlansList
  } = useQuery({
    queryKey: ['subscription-plans-list', page, limit, category_id],
    queryFn: () => fetchPlansList(page, limit, category_id),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  const plans = plansListData?.data?.data || [];
  const isLoading = plansListLoading;
  const error = plansListError;

  const refetch = () => {
    refetchPlansList();
  };

  return {
    plans,
    isLoading,
    error,
    refetch,
    plansListData,
    planDetailsData: plans
  };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
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

interface Plan {
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
  bundles: Bundle[];
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
      bundles: null;
    }[];
  };
}

interface PlanDetailApiResponse {
  responseInfo: {
    responseCode: string;
    responseMessage: string;
  };
  data: Plan;
  message: string;
}

// API functions
const fetchPlansList = async (page: number = 1, limit: number = 1000, category_id: string = ''): Promise<PlansListApiResponse> => {
  const params: any = { page, limit };
  if (category_id) {
    params.category_id = category_id;
  }
  
  return queryFn<PlansListApiResponse>({
    url: `${variables.subscription_base_url}/plans`,
    params
  });
};

const fetchPlanDetails = async (planId: number): Promise<PlanDetailApiResponse> => {
  return queryFn<PlanDetailApiResponse>({
    url: `${variables.subscription_base_url}/plans/${planId}`
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

  // Get plan IDs from the list
  const planIds = plansListData?.data?.data?.map(plan => plan.id) || [];

  // Fetch details for each plan
  const planDetailsQueries = useQuery({
    queryKey: ['subscription-plans-details', planIds],
    queryFn: async () => {
      if (planIds.length === 0) return [];
      
      const promises = planIds.map(id => fetchPlanDetails(id));
      const results = await Promise.all(promises);
      return results.map(result => result.data);
    },
    enabled: planIds.length > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  const isLoading = plansListLoading || planDetailsQueries.isLoading;
  const error = plansListError || planDetailsQueries.error;

  const refetch = () => {
    refetchPlansList();
    planDetailsQueries.refetch();
  };

  return {
    plans: planDetailsQueries.data || [],
    isLoading,
    error,
    refetch,
    plansListData,
    planDetailsData: planDetailsQueries.data
  };
};
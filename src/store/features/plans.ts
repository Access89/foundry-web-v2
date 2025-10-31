import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { queryFn } from '../../services/query.api';
import { variables } from '../../utils/helper';

// Types
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

interface PlansState {
  plans: Plan[];
  isLoading: boolean;
  error: string | null;
  lastFetched: number | null;
}

const initialState: PlansState = {
  plans: [],
  isLoading: false,
  error: null,
  lastFetched: null,
};

// Async thunks
export const fetchSubscriptionPlans = createAsyncThunk(
  'plans/fetchSubscriptionPlans',
  async (params: { page?: number; limit?: number; category_id?: string } = {}) => {
    const { page = 1, limit = 1000, category_id = '' } = params;
    
    // First, fetch the plans list
    const listParams: any = { page, limit };
    if (category_id) {
      listParams.category_id = category_id;
    }
    
    const plansListResponse = await queryFn<PlansListApiResponse>({
      url: `${variables.subscription_base_url}/plans`,
      params: listParams
    });

    const planIds = plansListResponse.data.data.map(plan => plan.id);

    // Then fetch details for each plan
    const promises = planIds.map(id => 
      queryFn<PlanDetailApiResponse>({
        url: `${variables.subscription_base_url}/plans/${id}`
      })
    );
    
    const planDetailsResponses = await Promise.all(promises);
    const plans = planDetailsResponses.map(response => response.data);

    return plans;
  }
);

const plansSlice = createSlice({
	name: 'plans',
	initialState,
	reducers: {
		updatePlansState: (
			state,
			action: PayloadAction<Partial<PlansState>>,
		) => {
			return {
				...state,
				...action.payload,
			};
		},

		resetPlans: () => {
			return initialState;
		},

    clearPlansError: (state) => {
      state.error = null;
    },
	},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptionPlans.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSubscriptionPlans.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plans = action.payload;
        state.lastFetched = Date.now();
        state.error = null;
      })
      .addCase(fetchSubscriptionPlans.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch subscription plans';
      });
  },
});

export const { resetPlans, updatePlansState, clearPlansError } = plansSlice.actions;

export default plansSlice;

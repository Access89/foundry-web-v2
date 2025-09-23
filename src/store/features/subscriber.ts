import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SubscriberStateType = {
	customer_name: string;
	// subscription_plan: string;
	country: string;
	country_code?: string;
	email: string;
	mobile: string;
	password: string,
	business_location: string,
	// nature_of_business: string,
	// business_type: string,
	safe?: boolean
	business_owner: string,
};

const initialState: SubscriberStateType = {
	customer_name: "",
	// subscription_plan: "",
	business_owner: "",
	country: "Ghana",
	country_code: "+233",
	email: "",
	mobile: "",
	password: "",
	business_location: "",
	// nature_of_business: "",
	// business_type: "",
	safe: true
};




const subscriberSlice = createSlice({
	name: 'subscriber',
	initialState,
	reducers: {
		updateSubscriberState: (
			state,
			action: PayloadAction<Partial<typeof initialState>>,
		) => {
			return {
				...state,
				...action.payload,
			};
		},

		resetSubscriber: () => {
			return initialState;
		},
	},
});

export const { resetSubscriber, updateSubscriberState } = subscriberSlice.actions;

export default subscriberSlice;

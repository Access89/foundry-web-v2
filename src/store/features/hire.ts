import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HireCardProps {
	id: string;
	position: string;
	tags: string[];
	about_role: string;
	expertise: string[];
	responsibilities: string[];
  }

const initialState: HireCardProps = {
	id: "",
	about_role: "",
	expertise: [],
	position: "",
	responsibilities: [],
	tags: []
};


const hireSlice = createSlice({
	name: 'hire',
	initialState,
	reducers: {
		updateHireState: (
			state,
			action: PayloadAction<Partial<typeof initialState>>,
		) => {
			return {
				...state,
				...action.payload,
			};
		},

		resetHire: () => {
			return initialState;
		},
	},
});

export const { updateHireState, resetHire } = hireSlice.actions;

export default hireSlice;

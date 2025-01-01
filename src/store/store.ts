import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import globalSlice from './features/global';
import subscriberSlice from './features/subscriber';

const persistConfig = {
	key: 'Foundry Web',
	storage,
	whitelist: [''],
	blacklist: [],
};

const combinedReducers = combineReducers({
	global: globalSlice.reducer,
	subscriber: subscriberSlice.reducer 
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;

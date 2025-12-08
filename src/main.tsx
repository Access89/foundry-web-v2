import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AppNew.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NextUIProvider } from '@nextui-org/react';
import store, { persistedStore } from './store/store.ts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistedStore}>
					<NextUIProvider>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</NextUIProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	</React.StrictMode>,
);

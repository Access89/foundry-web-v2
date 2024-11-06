import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/shared/scroll_to_top';
import { motion, useScroll } from 'framer-motion';
import MainLayout from './layout/main_layout';
import BookingManagement from './pages/logistics/booking_management';
import Pricing from './pages/pricing';
import NotFound from './components/shared/not_found';
import OrderManagement from './pages/logistics/order_management';
import Trucking from './pages/logistics/trucking';
const Home = lazy(() => import('./pages/home'));
const BusinessAutomation = lazy(() => import('./pages/business_automation'));
const FinancialServices = lazy(() => import('./pages/financial_services'));
const UseCases = lazy(() => import('./pages/use_cases'));
const LogisticsAndSupply = lazy(() => import('./pages/logistics'));

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="bg-foundry-background h-full w-full text-base ">
      <div>
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 "
        />

				<ScrollToTop />
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route path="" element={<Home />} />
						<Route path="*" element={<NotFound />} />
						<Route
							path="business-automation"
							element={<BusinessAutomation />}
						/>
						<Route path="financial-services" element={<FinancialServices />} />
						<Route path="use-cases" element={<UseCases />} />

						<Route path="pricing" element={<Pricing />} />
						<Route
							path="logistics-supply-chain"
							element={<LogisticsAndSupply />}
						/>
						<Route
							path="logistics-supply-chain/booking-management"
							element={<BookingManagement />}
						/>
						<Route
							path="logistics-supply-chain/order-management"
							element={<OrderManagement />}
						/>
						<Route
							path="logistics-supply-chain/trucking"
							element={<Trucking />}
						/>
					</Route>
				</Routes>
			</div>
			<Toaster position="top-right" />
		</main>
	);
}

export default App;

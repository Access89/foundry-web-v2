import { motion, useScroll } from "framer-motion";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/shared/not_found";
import ScrollToTop from "./components/shared/scroll_to_top";
import MainLayout from "./layout/main_layout";
import BookADemo from "./pages/book-a-demo";
import FinancialServiceExpansion from "./pages/financial-service";
import BookingManagement from "./pages/logistics/booking_management";
import OrderManagement from "./pages/logistics/order_management";
import Trucking from "./pages/logistics/trucking";
import Onboarding from "./pages/onboarding";
import PricingPage from "./pages/onboarding/_pages/pricing";
import Pricing from "./pages/pricing";
import CustomPlan from "./pages/custom-plan";
import ContactPage from "./pages/contact";
import PasswordSetting from "./pages/onboarding/_components/_tabs/password";
const Home = lazy(() => import("./pages/home"));
const BusinessAutomation = lazy(() => import("./pages/business_automation"));
const FinancialServices = lazy(() => import("./pages/financial_services"));
const UseCases = lazy(() => import("./pages/use_cases"));
const LogisticsAndSupply = lazy(() => import("./pages/logistics"));

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="w-full h-[100dvh] flex flex-col text-base font-roboto">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0"
      />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="business-automation" element={<BusinessAutomation />} />
          <Route path="financial-services" element={<FinancialServices />} />
          <Route
            path="/financial-service/:service"
            element={<FinancialServiceExpansion />}
          />
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
        <Route path="book-a-demo" element={<BookADemo />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="custom-plan" element={<CustomPlan />} />
        <Route path="onboarding/">
          <Route path="" element={<Onboarding />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="password" element={<PasswordSetting />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </main>
  );
}

export default App;

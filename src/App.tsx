import { motion, useScroll } from "framer-motion";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/shared/not_found";
import ScrollToTop from "./components/shared/scroll_to_top";
import MainLayout from "./layout/main_layout";
import BookADemo from "./pages/book-a-demo";
import BookingManagement from "./pages/logistics/booking_management";
import OrderManagement from "./pages/logistics/order_management";
import Trucking from "./pages/logistics/trucking";
import Onboarding from "./pages/onboarding";
import PricingPage from "./pages/onboarding/_pages/pricing";
import Pricing from "./pages/pricing";
import CustomPlan from "./pages/custom-plan";
import ContactPage from "./pages/contact";
import PasswordSetting from "./pages/onboarding/_components/_tabs/password";
import Manage from "./pages/manage business";
import BusinessExpansion from "./pages/business-expansion";
import OperationsExpansion from "./pages/operations-expansion";
import FinancialServiceExpansion from "./pages/financial-service-expansion";
import BecomePartner from "./pages/contact/become-partner";
import ViewUseCase from "./pages/new-use-cases/view-use-cases";
import DownloadAppsAndOtherOffers from "./pages/onboarding/_components/_tabs/download-apps-and-other-offers";
import UpgradePlan from "./pages/onboarding/_pages/upgrade-plan";
import AboutUs from "./pages/AboutUs";
import OnboardingPage from "./pages/OnboardingPage";
import PrivacyPolicy from "./PrivacyPolicy";
import ISOSecurityPolicy from "./ISOSecurityPolicy";
const Home = lazy(() => import("./pages/home"));
const BusinessAutomation = lazy(() => import("./pages/business_automation"));
const Loan = lazy(() => import("./pages/loan"));
const Hire = lazy(() => import("./pages/hire"));
const HireDetail = lazy(() => import("./pages/hire/hire-detail"));
const FinancialServices = lazy(() => import("./pages/financial_services"));
// const UseCases = lazy(() => import('./pages/use_cases'));
const NewUseCases = lazy(() => import("./pages/new-use-cases"));
const OurPlatforms = lazy(() => import("./pages/our-platforms"));
const ViewPlatforms = lazy(() => import("./pages/our-platforms/view"));
const ViewPlatformSpecific = lazy(
  () => import("./pages/our-platforms/view[id]")
);
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
          <Route path="manage" element={<Manage />} />
          <Route path="loan" element={<Loan />} />
          <Route path="hire" element={<Hire />} />
          <Route path="hire-detail" element={<HireDetail />} />
          <Route path="financial-services" element={<FinancialServices />} />

          <Route
            path="/financial-service/:service"
            element={<FinancialServiceExpansion />}
          />

          <Route path="/business/:service" element={<BusinessExpansion />} />

          <Route
            path="/operations/:service"
            element={<OperationsExpansion />}
          />

          <Route path="use-cases" element={<NewUseCases />} />
          <Route path="use-cases/:name" element={<ViewUseCase />} />
          {/* <Route path="use-cases" element={<UseCases />} /> */}
          <Route path="our-platforms" element={<OurPlatforms />} />
          <Route path="our-platforms/:name" element={<ViewPlatforms />} />
          <Route
            path="our-platforms/:name/:subname"
            element={<ViewPlatformSpecific />}
          />

          <Route path="pricing" element={<Pricing />} />
          <Route
            path="onboarding/download-apps-and-other-offers"
            element={<DownloadAppsAndOtherOffers />}
          />
          <Route path="about" element={<AboutUs />} />
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
          <Route path="upgrade-plan/:category/:id" element={<UpgradePlan />} />
        </Route>
        <Route path="book-a-demo" element={<BookADemo />} />
        <Route path="become-partner" element={<BecomePartner />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="custom-plan" element={<CustomPlan />} />
        <Route path="onboarding-page" element={<OnboardingPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="information-security-policy" element={<ISOSecurityPolicy />} />
        <Route path="onboarding/">
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
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

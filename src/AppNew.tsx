import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/v2/Layout";
import Home from "./pages/v2/Home";
import Retail from "./pages/v2/Retail";
import FnB from "./pages/v2/FnB";
import Enterprise from "./pages/v2/Enterprise";
import Banks from "./pages/v2/Banks";
import BaaS from "./pages/v2/BaaS";
import Engagement from "./pages/v2/Engagement";
import Hardware from "./pages/v2/Hardware";
import Credit from "./pages/v2/Credit";
import KYC from "./pages/v2/KYC";
import Invoices from "./pages/v2/Invoices";
import MainLayout from "./layout/main_layout";
import BookingManagement from "./pages/logistics/booking_management";
import OrderManagement from "./pages/logistics/order_management";
import Trucking from "./pages/logistics/trucking";
import Pricing from "./pages/pricing";
import Manage from "./pages/manage business";
import BusinessExpansion from "./pages/business-expansion";
import OperationsExpansion from "./pages/operations-expansion";
import FinancialServiceExpansion from "./pages/financial-service-expansion";
import ViewUseCase from "./pages/new-use-cases/view-use-cases";
import DownloadAppsAndOtherOffers from "./pages/onboarding/_components/_tabs/download-apps-and-other-offers";
import UpgradePlan from "./pages/onboarding/_pages/upgrade-plan";
import AboutUs from "./pages/AboutUs";
import NotFound from "./components/shared/not_found";
const HomeOld = lazy(() => import("./pages/home"));
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

const App = () => {
  return (
    <Routes>
      <Route path="/v2" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="retail" element={<Retail />} />
        <Route path="fnb" element={<FnB />} />
        <Route path="enterprise" element={<Enterprise />} />
        <Route path="banks" element={<Banks />} />
        <Route path="baas" element={<BaaS />} />
        <Route path="engagement" element={<Engagement />} />
        <Route path="hardware" element={<Hardware />} />
        <Route path="credit" element={<Credit />} />
        <Route path="kyc" element={<KYC />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
       <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomeOld />} />
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
    </Routes>
  );
};

export default App;

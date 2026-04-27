import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Country from "./_components/_tabs/Country";
import BasicInformation from "./_components/_tabs/basic-information";
import BusinessInformation from "./_components/_tabs/business-information";
import PasswordSetting from "./_components/_tabs/password";
import { getOnboardingStepPath } from "./_config/steps";
import { useOnboardingPlan } from "./_hooks/use-onboarding-plan";

const Onboarding = () => {
  const location = useLocation();
  const { search } = useOnboardingPlan();
  const preservedSearch = search || location.search;

  return (
    <Routes>
      <Route
        index
        element={
          <Navigate
            to={getOnboardingStepPath("country", preservedSearch)}
            replace
          />
        }
      />
      <Route path="country" element={<Country />} />
      <Route path="business-information" element={<BusinessInformation />} />
      <Route path="basic-information" element={<BasicInformation />} />
      <Route path="password" element={<PasswordSetting />} />
      <Route
        path="*"
        element={
          <Navigate
            to={getOnboardingStepPath("country", preservedSearch)}
            replace
          />
        }
      />
    </Routes>
  );
};

export default Onboarding;

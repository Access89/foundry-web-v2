import { updateSubscriberState } from "@/store/features/subscriber";
import { RootState } from "@/store/store";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import CountryPicker from "../country-picker";
import {
  getOnboardingStep,
  getOnboardingStepPath,
  getPreviousOnboardingStepPath,
} from "../../_config/steps";
import { useOnboardingGuard } from "../../_hooks/use-onboarding-guard";
import OnboardingLayout from "../../_layouts/onboarding-layout";
import {
  countryValidationSchema,
  getCountryInitialValues,
} from "../../_utils/validation";

const Country = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const subscriber = useSelector((state: RootState) => state.subscriber);
  const step = getOnboardingStep("country");

  useOnboardingGuard("country");

  const form = useFormik({
    initialValues: getCountryInitialValues(subscriber),
    validationSchema: countryValidationSchema,
    enableReinitialize: true,
    onSubmit: () => {},
  });

  const handleBack = () => {
    const previousPath = getPreviousOnboardingStepPath(
      "country",
      location.search,
    );

    if (previousPath) {
      navigate(previousPath);
      return;
    }

    navigate(-1);
  };

  const handleContinue = async () => {
    const errors = await form.validateForm();

    if (Object.keys(errors).length > 0) {
      form.setTouched({
        country: true,
        country_code: true,
      });
      toast.error("Please fill in all required fields correctly");
      return;
    }

    navigate(getOnboardingStepPath("business-information", location.search));
  };

  return (
    <OnboardingLayout
      title={step?.title || ""}
      subtitle={step?.subtitle || ""}
      onBack={handleBack}
      onContinue={handleContinue}
    >
      <div className="lg:pt-2 pt-1">
        <CountryPicker
          onSelect={(selectedCountry) => {
            form.setFieldValue("country", selectedCountry.name);
            form.setFieldValue(
              "country_code",
              selectedCountry.phoneCode || "",
            );
            form.setFieldTouched("country", true, false);
            form.setFieldTouched("country_code", true, false);
            dispatch(
              updateSubscriberState({
                country: selectedCountry.name,
                country_code: selectedCountry.phoneCode || "",
              }),
            );
          }}
        />
      </div>
    </OnboardingLayout>
  );
};

export default Country;

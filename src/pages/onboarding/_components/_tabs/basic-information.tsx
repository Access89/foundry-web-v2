import { updateSubscriberState } from "@/store/features/subscriber";
import { RootState } from "@/store/store";
import { useFormik } from "formik";
import type { ChangeEvent } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getOnboardingStep,
  getOnboardingStepPath,
  getPreviousOnboardingStepPath,
} from "../../_config/steps";
import { useOnboardingGuard } from "../../_hooks/use-onboarding-guard";
import OnboardingLayout from "../../_layouts/onboarding-layout";
import {
  contactValidationSchema,
  getContactInitialValues,
} from "../../_utils/validation";
import CustomInput from "../_form/Input";
import PhoneInput from "../_form/phone-input";

const ContactInformation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const subscriber = useSelector((state: RootState) => state.subscriber);
  const step = getOnboardingStep("basic-information");

  useOnboardingGuard("basic-information");

  const form = useFormik({
    initialValues: getContactInitialValues(subscriber),
    validationSchema: contactValidationSchema,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => {},
  });

  const handleBack = () => {
    const previousPath = getPreviousOnboardingStepPath(
      "basic-information",
      location.search,
    );

    navigate(
      previousPath ||
        getOnboardingStepPath("business-information", location.search),
    );
  };

  const handleContinue = async () => {
    const errors = await form.validateForm();

    if (Object.keys(errors).length > 0) {
      form.setTouched({
        email: true,
        phone: true,
      });
      toast.error("Please fill in all required fields correctly");
      return;
    }

    navigate(getOnboardingStepPath("password", location.search));
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.handleChange(event);
    dispatch(updateSubscriberState({ email: event.target.value }));
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, "");
    form.setFieldValue("phone", numericValue);
    dispatch(updateSubscriberState({ mobile: numericValue }));
  };

  return (
    <OnboardingLayout
      title={step?.title || ""}
      subtitle={step?.subtitle || ""}
      onBack={handleBack}
      onContinue={handleContinue}
    >
      <div className="lg:pt-2 pt-1 flex flex-col gap-4">
        <CustomInput
          type="email"
          label="Email"
          placeholder="john@foundry.com"
          id="email"
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={handleEmailChange}
          handleBlur={form.handleBlur}
        />
        <PhoneInput
          type="text"
          label="Phone Number"
          placeholder="23984392"
          id="phone"
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={handlePhoneChange}
          handleBlur={form.handleBlur}
        />
      </div>
    </OnboardingLayout>
  );
};

export default ContactInformation;

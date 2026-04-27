import { updateSubscriberState } from "@/store/features/subscriber";
import { RootState } from "@/store/store";
import { useFormik } from "formik";
import type { ChangeEvent } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getOnboardingStep,
  getPreviousOnboardingStepPath,
  ONBOARDING_DOWNLOAD_PATH,
} from "../../_config/steps";
import { useOnboardingGuard } from "../../_hooks/use-onboarding-guard";
import OnboardingLayout from "../../_layouts/onboarding-layout";
import {
  buildSubscriberPayload,
  getPasswordInitialValues,
  passwordValidationSchema,
} from "../../_utils/validation";
import CustomInput from "../_form/Input";

const PasswordSetting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const subscriber = useSelector((state: RootState) => state.subscriber);
  const step = getOnboardingStep("password");

  useOnboardingGuard("password");

  const form = useFormik({
    initialValues: getPasswordInitialValues(subscriber),
    validationSchema: passwordValidationSchema,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => {},
  });

  const handleBack = () => {
    const previousPath = getPreviousOnboardingStepPath(
      "password",
      location.search,
    );

    if (previousPath) {
      navigate(previousPath);
    }
  };

  const handleContinue = async () => {
    const errors = await form.validateForm();

    if (Object.keys(errors).length > 0) {
      form.setTouched({
        password: true,
        confirm_password: true,
      });
      toast.error("Please fill in all required fields correctly");
      return;
    }

    const payload = buildSubscriberPayload({
      ...subscriber,
      password: form.values.password,
    });

    navigate(`${ONBOARDING_DOWNLOAD_PATH}${location.search}`, {
      state: {
        payload: {
          payload_data: payload,
        },
      },
    });
  };

  return (
    <OnboardingLayout
      title={step?.title || ""}
      subtitle={step?.subtitle || ""}
      onBack={handleBack}
      onContinue={handleContinue}
      continueLabel="Submit"
    >
      <div className="lg:pt-2 flex flex-col gap-4 pt-1">
        <CustomInput
          type="password"
          label="Password"
          placeholder=""
          id="password"
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={(event: ChangeEvent<HTMLInputElement>) => {
            form.handleChange(event);
            dispatch(updateSubscriberState({ password: event.target.value }));
          }}
          handleBlur={form.handleBlur}
        />
        <CustomInput
          type="password"
          label="Confirm Password"
          placeholder=""
          id="confirm_password"
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={form.handleChange}
          handleBlur={form.handleBlur}
        />
      </div>
    </OnboardingLayout>
  );
};

export default PasswordSetting;

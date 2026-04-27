import { updateSubscriberState } from "@/store/features/subscriber";
import { RootState } from "@/store/store";
import { use_cases_list } from "@/utils/helper";
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
  businessValidationSchema,
  getBusinessInitialValues,
} from "../../_utils/validation";
import CustomInput from "../_form/Input";
import SelectInput from "../_form/Select-Input";

const businessTypeOptions = [
  { label: "Limited Liability Company", value: "Limited Liability Company" },
  { label: "Sole Proprietorship", value: "Sole Proprietorship" },
  { label: "Publicly Listed Company", value: "Publicly Listed Company" },
  { label: "Private Limited Company", value: "Private Limited Company" },
  { label: "General Partnership", value: "General Partnership" },
  { label: "Limited Partnership", value: "Limited Partnership" },
  { label: "Other", value: "Other" },
];

const BusinessInformation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const subscriber = useSelector((state: RootState) => state.subscriber);
  const step = getOnboardingStep("business-information");

  useOnboardingGuard("business-information");

  const form = useFormik({
    initialValues: getBusinessInitialValues(subscriber),
    validationSchema: businessValidationSchema,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => {},
  });

  const handleBack = () => {
    const previousPath = getPreviousOnboardingStepPath(
      "business-information",
      location.search,
    );

    navigate(previousPath || getOnboardingStepPath("country", location.search));
  };

  const handleContinue = async () => {
    const errors = await form.validateForm();

    if (Object.keys(errors).length > 0) {
      form.setTouched({
        business_name: true,
        business_owner: true,
        location: true,
        business_type: true,
        nature_of_business: true,
      });
      toast.error("Please fill in all required fields correctly");
      return;
    }

    navigate(getOnboardingStepPath("basic-information", location.search));
  };

  const handleTextChange =
    (field: "customer_name" | "business_owner" | "business_location") =>
    (event: ChangeEvent<HTMLInputElement>) => {
      form.handleChange(event);
      dispatch(updateSubscriberState({ [field]: event.target.value }));
    };

  const handleSelectChange =
    (field: "business_type" | "nature_of_business") =>
    (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      form.setFieldValue(field, value);
      form.setFieldTouched(field, true);
      dispatch(updateSubscriberState({ [field]: value }));
    };

  return (
    <OnboardingLayout
      title={step?.title || ""}
      subtitle={step?.subtitle || ""}
      onBack={handleBack}
      onContinue={handleContinue}
    >
      <div className="lg:pt-2 flex flex-col gap-4 pt-1">
        <CustomInput
          type="text"
          label="Business name"
          placeholder="e.g. JD Enterprise"
          id="business_name"
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={handleTextChange("customer_name")}
          handleBlur={form.handleBlur}
        />
        <CustomInput
          type="text"
          label="Your name"
          placeholder="e.g. Jane Doe"
          id="business_owner"
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={handleTextChange("business_owner")}
          handleBlur={form.handleBlur}
        />
        <CustomInput
          type="text"
          label="Location"
          placeholder="e.g. Accra"
          id="location"
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={(event: ChangeEvent<HTMLInputElement>) => {
            form.handleChange(event);
            dispatch(
              updateSubscriberState({
                business_location: event.target.value,
              }),
            );
          }}
          handleBlur={form.handleBlur}
        />
        <SelectInput
          items={businessTypeOptions}
          placeholder="e.g. Limited Liability Company"
          label="Business Type"
          id="business_type"
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={handleSelectChange("business_type")}
          handleBlur={form.handleBlur}
        />
        <SelectInput
          items={use_cases_list.map((useCase) => ({
            label: useCase,
            value: useCase,
          }))}
          label="Nature of Business"
          placeholder="e.g. Fashion"
          id="nature_of_business"
          values={form.values}
          errors={form.errors}
          touched={form.touched}
          handleChange={handleSelectChange("nature_of_business")}
          handleBlur={form.handleBlur}
        />
      </div>
    </OnboardingLayout>
  );
};

export default BusinessInformation;

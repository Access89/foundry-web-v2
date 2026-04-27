import { SubscriberStateType } from "@/store/features/subscriber";
import * as Yup from "yup";
import { OnboardingStepId } from "../_config/steps";

export type CountryFormValues = {
  country: string;
  country_code: string;
};

export type BusinessInformationFormValues = {
  business_name: string;
  business_owner: string;
  location: string;
  business_type: string;
  nature_of_business: string;
};

export type ContactInformationFormValues = {
  email: string;
  phone: string;
};

export type PasswordFormValues = {
  password: string;
  confirm_password: string;
};

export type SubscriberSetupPayload = {
  company_name: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  user_name: string;
  business_location: string;
  business_type: string;
  nature_of_business: string;
  plan_id?: number;
};

export const countryValidationSchema = Yup.object({
  country: Yup.string().required("Country is required"),
  country_code: Yup.string().required("Country code is required"),
});

export const businessValidationSchema = Yup.object({
  business_name: Yup.string()
    .required("Business name is required")
    .min(2, "Business name must be at least 2 characters")
    .max(100, "Business name must not exceed 100 characters")
    .trim(),
  business_owner: Yup.string()
    .required("Your name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
    .trim(),
  location: Yup.string()
    .required("Location is required")
    .min(2, "Location must be at least 2 characters")
    .max(100, "Location must not exceed 100 characters")
    .trim(),
  business_type: Yup.string().required("Business type is required"),
  nature_of_business: Yup.string().required("Nature of business is required"),
});

export const contactValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(7, "Phone number must be at least 7 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .test("no-spaces", "Phone number cannot contain spaces", (value) =>
      value ? !/\s/.test(value) : true,
    ),
});

export const passwordValidationSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character",
    ),
  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const getCountryInitialValues = (
  subscriber: SubscriberStateType,
): CountryFormValues => ({
  country: subscriber.country || "",
  country_code: subscriber.country_code || "",
});

export const getBusinessInitialValues = (
  subscriber: SubscriberStateType,
): BusinessInformationFormValues => ({
  business_name: subscriber.customer_name || "",
  business_owner: subscriber.business_owner || "",
  location: subscriber.business_location || "",
  business_type: subscriber.business_type || "",
  nature_of_business: subscriber.nature_of_business || "",
});

export const getContactInitialValues = (
  subscriber: SubscriberStateType,
): ContactInformationFormValues => ({
  email: subscriber.email || "",
  phone: subscriber.mobile || "",
});

export const getPasswordInitialValues = (
  subscriber: SubscriberStateType,
): PasswordFormValues => ({
  password: subscriber.password || "",
  confirm_password: "",
});

export const isCountryComplete = (subscriber: SubscriberStateType) =>
  Boolean(subscriber.country && subscriber.country_code);

export const isBusinessInformationComplete = (
  subscriber: SubscriberStateType,
) =>
  Boolean(
    subscriber.customer_name &&
      subscriber.business_owner &&
      subscriber.business_location &&
      subscriber.business_type &&
      subscriber.nature_of_business,
  );

export const isContactInformationComplete = (
  subscriber: SubscriberStateType,
) =>
  Boolean(
    subscriber.email &&
      subscriber.email.includes("@") &&
      subscriber.email.includes(".") &&
      subscriber.mobile &&
      /^[0-9]{7,15}$/.test(subscriber.mobile),
  );

export const getEarliestIncompleteStep = (
  subscriber: SubscriberStateType,
  targetStepId: OnboardingStepId,
): OnboardingStepId | null => {
  if (targetStepId === "country") {
    return null;
  }

  if (!isCountryComplete(subscriber)) {
    return "country";
  }

  if (
    ["basic-information", "password"].includes(targetStepId) &&
    !isBusinessInformationComplete(subscriber)
  ) {
    return "business-information";
  }

  if (
    targetStepId === "password" &&
    !isContactInformationComplete(subscriber)
  ) {
    return "basic-information";
  }

  return null;
};

export const buildSubscriberPayload = (
  subscriber: SubscriberStateType,
): SubscriberSetupPayload => ({
  company_name: subscriber.customer_name,
  email: subscriber.email,
  phone: `${subscriber.country_code || ""}${subscriber.mobile}`,
  country: subscriber.country,
  password: subscriber.password,
  user_name: subscriber.business_owner,
  business_location: subscriber.business_location,
  business_type: subscriber.business_type,
  nature_of_business: subscriber.nature_of_business,
  plan_id: subscriber.plan_id,
});

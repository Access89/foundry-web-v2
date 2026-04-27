export type OnboardingStepId =
  | "country"
  | "business-information"
  | "basic-information"
  | "password";

export type OnboardingStep = {
  id: OnboardingStepId;
  path: string;
  title: string;
  subtitle: string;
  previous: OnboardingStepId | null;
  next: OnboardingStepId | null;
};

export const ONBOARDING_BASE_PATH = "/onboarding";
export const ONBOARDING_DOWNLOAD_PATH =
  "/onboarding/download-apps-and-other-offers";

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: "country",
    path: `${ONBOARDING_BASE_PATH}/country`,
    title: "Let's get started!",
    subtitle: "Which country did you set up your business in?",
    previous: null,
    next: "business-information",
  },
  {
    id: "business-information",
    path: `${ONBOARDING_BASE_PATH}/business-information`,
    title: "Business Information",
    subtitle: "Tell us more about your business.",
    previous: "country",
    next: "basic-information",
  },
  {
    id: "basic-information",
    path: `${ONBOARDING_BASE_PATH}/basic-information`,
    title: "Basic Information",
    subtitle: "What is your phone number and email address?",
    previous: "business-information",
    next: "password",
  },
  {
    id: "password",
    path: `${ONBOARDING_BASE_PATH}/password`,
    title: "Set Password",
    subtitle: "Enter a password to continue.",
    previous: "basic-information",
    next: null,
  },
];

export const getOnboardingStep = (stepId: OnboardingStepId) =>
  ONBOARDING_STEPS.find((step) => step.id === stepId);

export const getOnboardingStepPath = (
  stepId: OnboardingStepId,
  search = "",
) => `${getOnboardingStep(stepId)?.path || ONBOARDING_BASE_PATH}${search}`;

export const getNextOnboardingStepPath = (
  stepId: OnboardingStepId,
  search = "",
) => {
  const next = getOnboardingStep(stepId)?.next;
  return next ? getOnboardingStepPath(next, search) : null;
};

export const getPreviousOnboardingStepPath = (
  stepId: OnboardingStepId,
  search = "",
) => {
  const previous = getOnboardingStep(stepId)?.previous;
  return previous ? getOnboardingStepPath(previous, search) : null;
};

import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getOnboardingStepPath,
  OnboardingStepId,
} from "../_config/steps";
import { getEarliestIncompleteStep } from "../_utils/validation";

export const useOnboardingGuard = (stepId: OnboardingStepId) => {
  const navigate = useNavigate();
  const location = useLocation();
  const subscriber = useSelector((state: RootState) => state.subscriber);

  useEffect(() => {
    const incompleteStep = getEarliestIncompleteStep(subscriber, stepId);

    if (!incompleteStep || incompleteStep === stepId) {
      return;
    }

    navigate(getOnboardingStepPath(incompleteStep, location.search), {
      replace: true,
    });
  }, [location.search, navigate, stepId, subscriber]);
};

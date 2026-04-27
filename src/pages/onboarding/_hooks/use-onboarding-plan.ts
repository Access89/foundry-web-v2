import { updateSubscriberState } from "@/store/features/subscriber";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

export const useOnboardingPlan = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const planId = searchParams.get("plan_id");

  useEffect(() => {
    if (!planId) {
      return;
    }

    const parsedPlanId = Number.parseInt(planId, 10);
    if (Number.isNaN(parsedPlanId)) {
      return;
    }

    dispatch(updateSubscriberState({ plan_id: parsedPlanId }));
  }, [dispatch, planId]);

  return {
    planId,
    search: location.search,
  };
};

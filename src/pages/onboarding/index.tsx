import Country from "./_components/_tabs/Country";
import { useState, useEffect } from "react";
import BasicInformation from "./_components/_tabs/basic-information";
import { Icon } from "@iconify/react/dist/iconify.js";
import BusinessInformation from "./_components/_tabs/business-information";
// import PasswordSetting from "./_components/_tabs/password";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateSubscriberState } from "@/store/features/subscriber";
import { CustomButton } from "@/components/shared/shared_customs";
import { toast } from "react-hot-toast";

type ITab = "country" | "basic-information" | "business-information";
type TReturnValue = void | string;

const Onboarding = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { safe, plan_id } = useSelector((state: RootState) => state.subscriber);

  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState<ITab>("country");

  // Read plan_id from URL search params and update Redux state
  useEffect(() => {
    const planIdFromUrl = searchParams.get("plan_id");
    if (planIdFromUrl && !plan_id) {
      dispatch(
        updateSubscriberState({
          plan_id: parseInt(planIdFromUrl, 10),
        }),
      );
    }
  }, [searchParams, plan_id, dispatch]);

  // Reset validation state when switching tabs
  useEffect(() => {
    dispatch(
      updateSubscriberState({
        safe: false,
        showValidationErrors: false,
      }),
    );
  }, [activeTab, dispatch]);

  const tabs: Record<
    string,
    {
      prev: () => TReturnValue;
      next: () => TReturnValue;
      component: JSX.Element;
    }
  > = {
    country: {
      prev: () => {
        navigate(-1);
      },
      next: () => {
        return "business-information";
      },
      component: <Country />,
    },
    "business-information": {
      prev: () => {
        return "country";
      },
      next: () => {
        return "basic-information";
      },
      component: <BusinessInformation />,
    },

    "basic-information": {
      prev: () => {
        return "business-information";
      },
      next: () => {
        const planIdParam = plan_id ? `?plan_id=${plan_id}` : "";
        navigate(`password${planIdParam}`);
      },
      component: <BasicInformation />,
    },

    // password: {
    //   prev: () => {
    //     return "business-information";
    //   },
    //   next: () => {
    //     navigate("pricing");
    //   },
    //   component: <PasswordSetting />,
    // },
  };
  return (
    <div className="lg:w-[700px] w-full h-full lg:pt-12 lg:px-6 mx-auto flex flex-col justify-between lg:pb-12 px-6 py-6">
      <div className="flex flex-col gap-4">
        <div
          className="flex items-center justify-start cursor-pointer"
          onClick={(event) => {
            event.preventDefault();
            const returnValue = tabs?.[activeTab]?.prev();
            if (typeof returnValue == "string") {
              setActiveTab(returnValue as ITab);
            }
          }}
        >
          <Icon icon={"fluent:arrow-left-16-filled"} height={25} />
        </div>
        {tabs?.[activeTab]?.component}
      </div>
      <CustomButton
        className={`py-6 transition-all duration-300 bg-primary text-white`}
        onPress={() => {
          // Check if form is valid
          if (!safe) {
            // Trigger validation errors to show on all fields
            dispatch(updateSubscriberState({ showValidationErrors: true }));
            toast.error("Please fill in all required fields correctly");
            return;
          }

          // Reset validation errors flag
          dispatch(updateSubscriberState({ showValidationErrors: false }));

          // Proceed to next step
          const returnValue = tabs?.[activeTab]?.next();
          if (typeof returnValue == "string") {
            setActiveTab(returnValue as ITab);
          }
        }}
      >
        Continue
      </CustomButton>
    </div>
  );
};

export default Onboarding;

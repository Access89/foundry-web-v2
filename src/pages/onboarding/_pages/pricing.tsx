/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomButton } from "@/components/shared/shared_customs";
import { mutateFn } from "@/services/mutation.api";
import {
  resetSubscriber,
  SubscriberStateType,
  updateSubscriberState,
} from "@/store/features/subscriber";
import { RootState } from "@/store/store";
import { variables } from "@/utils/helper";
import { Icon } from "@iconify/react/dist/iconify.js";
import { cn } from "@nextui-org/react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const {
    customer_name,
    country,
    email,
    mobile,
    business_location,
    business_type,
    nature_of_business,
    password,
    country_code,
  } = useSelector((state: RootState) => state.subscriber);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // State to track which plan's button is loading
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const { mutate: mutateSubscriber } = useMutation(
    (newData: SubscriberStateType) =>
      mutateFn({
        url: `${variables.base_url}/create/subscriber`,
        data: newData,
      }),
    {
      onSuccess: () => {
        dispatch(resetSubscriber());
        setLoadingPlan(null);
        toast.success(
          "Details submitted for verification! Redirecting to Foundry Platform..."
        );
        // showCustomToast(
        //   "Details submitted for verification! Redirecting to Foundry Platform...",
        //   "Okay",
        //   () => {
        //     window.location.href = variables.redirectUrl;
        //   }
        // );
        window.location.href = variables.redirectUrl;
      },
      onError: (error: any) => {
        console.error("Error creating subscriber:", error);
        toast.error("Details were not submitted, please try again");
        setLoadingPlan(null); // Reset loading state after error
      },
    }
  );

  const onSubmit = async (plan: string) => {
    dispatch(updateSubscriberState({ subscription_plan: plan }));

    setLoadingPlan(plan); // Set loading state for the clicked plan
    mutateSubscriber({
      customer_name,
      country,
      email,
      mobile: country_code + mobile,
      subscription_plan:
        plan === "Free Tier" ? "free_tier" : plan.toLocaleLowerCase(),
      business_location,
      business_type,
      nature_of_business,
      password,
    });
    // showCustomToast(
    //   "Details submitted for verification! Redirecting to Foundry Platform...",
    //   "Okay",
    //   () => {
    //     window.location.href = variables.redirectUrl;
    //   }
    // );
  };

  return (
    <div className="lg:w-[80vw] lg:mx-auto lg:pt-12 p-6 ">
      <div>
        <h4 className="font-semibold lg:text-[1.7rem] text-[1.2rem]">
          Pricing Plan
        </h4>
        <p className="text-[#717173] font-light lg:text-[0.9rem] text-[0.8rem]">
          Select a pricing plan that suits your organization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:pt-8 pt-4">
        {allPlans.map((plan, index) => (
          <div
            key={index}
            className="p-4 bg-[#619B7D]/10 rounded-lg cursor-pointer hover:scale-[1.01] duration-300 flex flex-col"
          >
            <div className="mb-2">
              <h3 className="text-[1.2rem] lg:text-[2rem] font-medium">
                {plan.title}
              </h3>
              <p className="lg:text-[0.9rem] text-[0.8rem] font-light text-secondary-black">
                {plan.description}
              </p>
            </div>
            <div className="flex-grow">
              <h6 className="font-semibold text-[1rem] mb-1">Features</h6>
              <ul className="space-y-1 text-[0.8rem] lg:text-[0.9rem]">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Icon icon={"uil:check"} className="text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <p>
                <span className="lg:text-[2.3rem] text-[1.5rem] font-medium">
                  {plan.price}
                </span>
                {index !== 3 && <span className="text-sm">/mo</span>}
              </p>
              <CustomButton
                className={cn(
                  "bg-primary text-white font-medium w-full mt-2 py-2 lg:py-4 lg:text-[0.9rem]",
                  index === 3 &&
                    "border-2 border-primary bg-transparent text-primary"
                )}
                isLoading={loadingPlan === plan.title}
                onClick={() =>
                  index === 3 ? navigate("/custom-plan") : onSubmit(plan.title)
                }
              >
                {index === 3 ? "Contact Sales" : "Subscribe"}
              </CustomButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const allPlans = [
  {
    title: "Free Tier",
    description:
      "Experience all the essential tools and features your business needs to thrive completely FREE for the first month. Enjoy full access to manage sales, inventory, and finances seamlessly.",
    price: "₵0",
    features: [
      "Virtual Terminal (POS)",
      "Generate Invoices",
      "Manage Inventory",
      "Basic Accounting and Book keeping",
      "Manage Cash flow",
      "Single Location ",
    ],
  },
  {
    title: "Basic",
    description:
      "Expand your reach and sell anywhere: in-store, online, over the phone, or while on the move.",
    price: "₵650",
    features: [
      "Virtual Terminal (POS)",
      "Generate Invoices",
      "Manage Inventory",
      "Basic Accounting and Book keeping",
      "Manage Cash flow",
      "Single Location ",
    ],
  },
  {
    title: "Plus",
    description:
      " Unlock advanced features tailored to meet the unique needs of restaurants, retail shops, and appointment-based businesses. Enjoy the flexibility to upgrade your plan whenever it suits you and cancel at any time without hassle.",
    price: "₵1,500",
    features: [
      "Advance invoicing",
      "Generate Purchase Orders",
      "Inventory analytics",
      "Live phone support",
      "Online Checkout",
      "Single Location",
      "1 Warehouse",
      "Barcode generation and printing",
    ],
  },
  {
    title: "Advanced",
    description:
      "Create a tailored plan designed to address the unique complexities of your operations. Custom processing rates may be offered based on eligibility.",
    price: "Custom",
    features: [
      "Staff Payroll",
      "Advanced Accounting",
      "Warehouse Management",
      "24/7 support",
      "Integrations",
      "Online Ordering",
      "Multi Store ",
      "Business Account ",
      "Business Analytics ",
    ],
  },
];

export default PricingPage;

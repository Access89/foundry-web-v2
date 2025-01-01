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

      <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 space-y-5 md:space-y-0 lg:pt-12 pt-6 ">
        {allPlans.map((plan, index) => (
          <div
            key={index}
            className="p-6 bg-[#619B7D]/10 rounded-[1.8rem] cursor-pointer hover:scale-[1.01] duration-700 justify-between lg:grid lg:grid-rows-3"
          >
            <div className=" ">
              <h3 className="text-[1.5rem] lg:text-[3rem] font-medium">
                {plan.title}
              </h3>
              <p className="lg:text-[1.1rem] text-[0.9rem]  font-light text-secondary-black my-2">
                {plan.description}
              </p>
            </div>
            <div className="row-span-2 flex flex-col justify-between">
              <div className="pt-4 lg:pt-0">
                <h6 className="font-semibold text-[1.2rem] mb-1">Features</h6>
                <div className="grid grid-cols-1 gap-y-2">
                  {plan?.features?.map((feature) => (
                    <div className="flex items-center gap-2">
                      <Icon icon={"uil:check"} className="text-primary" />
                      <p className="font-light">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" pt-2">
                <div className="">
                  <p className="">
                    <span className="lg:text-[2.7rem] text-[1.7rem] font-medium">
                      {plan.price}
                    </span>
                    {index !== 2 && "/mo"}
                  </p>
                </div>

                <CustomButton
                  className={cn(
                    "bg-primary text-white font-medium w-full mt-auto lg:py-6 lg:text-[1.1rem]",
                    index === 3 &&
                      "border-2 border-primary bg-transparent text-primary"
                  )}
                  isLoading={loadingPlan === plan.title} // Show loading only for the clicked button
                  onClick={() => (index === 3 ? {} : onSubmit(plan.title))}
                >
                  {index == 3 ? "Contact Sales" : "Subscribe"}
                </CustomButton>
              </div>
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

import { CustomButton } from "@/components/shared/shared_customs";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { mutateFn } from "@/services/mutation.api";
import { useMutation } from "react-query";
import {
  resetSubscriber,
  updateSubscriberState,
} from "@/store/features/subscriber";

const FOUNDRY_BUSINESS_APP = {
  name: "Foundry Business App",
  plan_type: "FREE",
  description: "Run your business with Foundry from one mobile app.",
  appstore_link: "https://apps.apple.com/us/app/foundry-business/id6751124816",
  playstore_link:
    "https://play.google.com/store/apps/details?id=com.foundryplatform.foundrybooks&pli=1",
};

const FOUNDRY_APP_IMAGES = [
  "/images/foundry/1.png",
  "/images/foundry/2.png",
  "/images/foundry/3.png",
  "/images/foundry/4.png",
];

const getDeviceDownloadTarget = () => {
  if (typeof navigator === "undefined") {
    return {
      label: "Android",
      url: FOUNDRY_BUSINESS_APP.playstore_link,
    };
  }

  const userAgent = navigator.userAgent || "";
  const platform = navigator.platform || "";
  const isAndroid = /Android/i.test(userAgent);
  const isApple = /iPad|iPhone|iPod/i.test(userAgent) || /Mac/i.test(platform);

  if (isApple && !isAndroid) {
    return {
      label: "iOS",
      url: FOUNDRY_BUSINESS_APP.appstore_link,
    };
  }

  return {
    label: "Android",
    url: FOUNDRY_BUSINESS_APP.playstore_link,
  };
};

const getQrCodeUrl = (url: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    url,
  )}`;

type SetupPayload = {
  company_name?: string;
  email?: string;
  phone?: string;
  country?: string;
  password?: string;
  user_name?: string;
  business_location?: string;
  business_type?: string;
  nature_of_business?: string;
  plan_id?: number;
  subscription?: string;
  product?: string;
};

type SetupLocationState = {
  payload?: {
    payload_data?: SetupPayload;
  };
};

type ErrorWithResponse = {
  response?: {
    data?: {
      message?: unknown;
    };
  };
};

const getPayloadData = (state: unknown) =>
  (state as SetupLocationState | null)?.payload?.payload_data;

const normalizeErrorMessage = (value: unknown) => {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") {
    try {
      const message = (value as { message?: unknown }).message;
      return typeof message === "string" ? message : JSON.stringify(value);
    } catch {
      return "Details were not submitted, please try again.";
    }
  }
  return "Details were not submitted, please try again.";
};

const InfoSection = ({
  setupStatus,
  errorMessage,
}: {
  setupStatus: "idle" | "loading" | "success" | "error";
  errorMessage?: string | null;
}) => {
  const location = useLocation();
  const payload_data = getPayloadData(location.state);
  console.log({ payload_data });
  const businessOwner = payload_data?.user_name;

  const getStateInfo = () => {
    if (setupStatus === "error") {
      return {
        icon: "mdi:alert-circle",
        iconColor: "text-red-500",
        bgColor: "bg-red-50",
        borderColor: "border-red-500",
        title: "Setup Failed",
        message: `Sorry ${
          businessOwner || "User"
        }, there was an issue setting up your account. Please try again.`,
        titleColor: "text-red-600",
      };
    } else if (setupStatus === "success") {
      return {
        icon: "mdi:check-circle",
        iconColor: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary",
        title: "Setup Complete!",
        message: `Welcome ${
          businessOwner || "User"
        }! Your Foundry account is ready.`,
        titleColor: "text-primary",
      };
    } else if (setupStatus === "loading") {
      return {
        icon: "eos-icons:loading",
        iconColor: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary",
        title: "Setting things up for you...",
        message: `Congratulations ${
          businessOwner || "User"
        }! We're preparing your Foundry experience.`,
        titleColor: "text-primary",
      };
    } else {
      return {
        icon: "mdi:clock-outline",
        iconColor: "text-gray-500",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-300",
        title: "Getting Ready...",
        message: `Hello ${
          businessOwner || "User"
        }, we're about to set up your account.`,
        titleColor: "text-gray-600",
      };
    }
  };

  const stateInfo = getStateInfo();

  return (
    <div
      className={`${stateInfo.bgColor} border-l-4 ${stateInfo.borderColor} p-4 md:p-6 mb-8`}
    >
      <div className="flex items-center gap-3">
        <Icon
          icon={stateInfo.icon}
          className={`${stateInfo.iconColor} text-2xl ${
            setupStatus === "loading" ? "animate-spin" : ""
          }`}
        />
        <div>
          <h3
            className={`md:text-lg text-base font-semibold ${stateInfo.titleColor}`}
          >
            {stateInfo.title}
          </h3>
          <p className="text-gray-600 text-xs md:text-base">
            {stateInfo.message}
          </p>
          {setupStatus === "error" && (
            <p className="text-xs md:text-base mt-2 text-red-500">
              {normalizeErrorMessage(errorMessage)}{" "}
              <Link to="/contact">Contact support</Link>
            </p>
          )}
          {/* {errorSubscriber && (
            <p className="text-red-500 text-xs md:text-base mt-2">
              Error:{' '}
              {errorSubscriber?.response?.data?.message ||
                'Details were not submitted, please try again'}
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

const RecommendedAppSection = () => {
  const recommendedApp = FOUNDRY_BUSINESS_APP;
  const qrTarget = getDeviceDownloadTarget();

  return (
    <section className="mb-12 mx-4">
      <div className="mb-8 w-full max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-4">
          {recommendedApp.name}
        </h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base lg:text-lg">
          {recommendedApp.description}
        </p>

        {/* Download Buttons - Now positioned here */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* App Store Button */}
          <div
            className="flex-1 bg-[#1C1C1E] rounded-xl p-3 cursor-pointer hover:bg-[#2C2C2E] transition-colors group flex items-center justify-between"
            onClick={() => window.open(recommendedApp.appstore_link, "_blank")}
          >
            <div className="flex items-center gap-2">
              <Icon icon="simple-icons:apple" className="text-white text-2xl" />
              <div>
                <p className="text-white text-xs">Download on the</p>
                <p className="text-white font-semibold">App Store</p>
              </div>
            </div>
            <Icon
              icon="material-symbols:arrow-outward"
              className="text-white text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </div>

          {/* Google Play Button */}
          <div
            className="flex-1 bg-[#16232A] rounded-xl p-3 cursor-pointer hover:bg-[#028C67] transition-colors group flex items-center justify-between"
            onClick={() => window.open(recommendedApp.playstore_link, "_blank")}
          >
            <div className="flex items-center gap-2">
              <Icon
                icon="simple-icons:googleplay"
                className="text-white text-2xl"
              />
              <div>
                <p className="text-white text-xs">Get it on</p>
                <p className="text-white font-semibold">Google Play</p>
              </div>
            </div>
            <Icon
              icon="material-symbols:arrow-outward"
              className="text-white text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FOUNDRY_APP_IMAGES.map((imageUrl, index) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt={`${recommendedApp.name} preview ${index + 1}`}
              className="w-full rounded-lg  object-cover "
            />
          ))}
        </div>

        {/* QR Code Section */}
        <div className="rounded-lg bg-primary-light p-6 flex flex-col md:flex-row justify-between items-center gap-4 cursor-pointer group">
          <div className="flex flex-col justify-center text-center md:text-left group-hover:text-primary transition-colors">
            <span className="text-primary text-lg md:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              Scan to download for {qrTarget.label}{" "}
              <Icon icon="material-symbols:arrow-outward" className="inline" />
            </span>
          </div>
          <div className="flex-shrink-0">
            <img
              src={getQrCodeUrl(qrTarget.url)}
              alt={`${recommendedApp.name} ${qrTarget.label} QR code`}
              className="w-40 h-40 md:w-32 md:h-32 mx-auto group-hover:scale-105 transition-transform rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FreePlanSection = () => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          You're on the Free Plan
        </h2>
        <p className="text-gray-600 mb-6">
          Enjoy access to our core features. Upgrade anytime for more
          capabilities.
        </p>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
        <div className="text-center">
          <Icon
            icon="mdi:gift"
            className="text-primary text-4xl mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Free Tier Benefits</h3>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            You can start with the recommended Foundry app now and speak with
            sales when you are ready to expand your setup.
          </p>
        </div>
      </div>
    </section>
  );
};

const DownloadAppsAndOtherOffers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const payload_data = getPayloadData(location.state);
  const [setupStatus, setSetupStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [setupErrorMessage, setSetupErrorMessage] = useState<string | null>(
    null,
  );
  const dispatch = useDispatch();
  const hasSubmittedRef = useRef(false);

  const pos_api_base_url = "https://api.access89.com/support/v1";
  // const pos_api_base_url = "http://localhost:7071/api";

  const { mutate: mutateSubscriber } = useMutation(
    (newData: SetupPayload) =>
      mutateFn({
        url: `${pos_api_base_url}/setup/create`,
        data: newData,
      }),
    {
      onSuccess: (data) => {
        const responseCode = data?.responseInfo?.responseCode;
        if (responseCode && responseCode !== "000") {
          const message = normalizeErrorMessage(
            data?.message || data?.responseInfo?.responseMessage,
          );
          setSetupStatus("error");
          setSetupErrorMessage(message);
          toast.error(message);
          return;
        }

        setSetupStatus("success");
        setSetupErrorMessage(null);

        // Extract plan_id from API response
        const apiPlanId = data?.data?.plan_id;

        // Reset subscriber data
        dispatch(resetSubscriber());

        // Restore plan_id from API response after reset
        if (apiPlanId) {
          dispatch(
            updateSubscriberState({
              plan_id: apiPlanId,
            }),
          );
        }

        toast.success("Account created successfully!");
      },
      onError: (error: ErrorWithResponse) => {
        const message = normalizeErrorMessage(error?.response?.data?.message);
        setSetupStatus("error");
        setSetupErrorMessage(message);
        toast.error(message);
      },
    },
  );

  // Fire API call when component mounts
  useEffect(() => {
    const recommendedApp = FOUNDRY_BUSINESS_APP;
    if (!payload_data || hasSubmittedRef.current) {
      return;
    }

    hasSubmittedRef.current = true;
    setSetupStatus("loading");
    setSetupErrorMessage(null);
    if (payload_data) {
      mutateSubscriber({
        ...payload_data,
        plan_id: payload_data.plan_id,
        subscription: recommendedApp?.plan_type,
        product: recommendedApp?.name,
      });
    }
  }, [payload_data, mutateSubscriber]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Setup message at top */}
      <InfoSection setupStatus={setupStatus} errorMessage={setupErrorMessage} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Recommended app based on business type */}
        <RecommendedAppSection />

        {/* Free plan information */}
        <FreePlanSection />

        <section className="md:py-16 py-5">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="font-medium text-3xl lg:text-4xl mb-5">
              Looking for something extra?
            </h2>
            <p className="text-secondary-black mb-5">
              Contact our sales team to explore the right Foundry setup for your
              business.
            </p>
            <CustomButton
              className="bg-primary text-white font-medium mt-2 py-2 lg:py-4 lg:text-[0.9rem]"
              onPress={() => navigate("/contact")}
            >
              Contact Sales
            </CustomButton>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DownloadAppsAndOtherOffers;

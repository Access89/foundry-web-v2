import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { parseCurrency } from '@/utils/helper';
import { useSubscriptionPlans } from '@/utils/useSubscriptionPlans';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import toast from 'react-hot-toast';
import { mutateFn } from '@/services/mutation.api';
import { useMutation } from 'react-query';
import {
  resetSubscriber,
  SubscriberStateType,
} from '@/store/features/subscriber';

const appList = [
  {
    name: 'Foundry POS',
    plan_id: 5,
    plan_category: 3,
    qr_code: 'https://www.avasam.com/wp-content/uploads/2019/10/qr-sample.png',
    image: '/icons/app_icons/icon.pos.png',
    description:
      'Easily start selling in person, online, by phone, or on the go',
    appstore_link: 'https://apps.apple.com/gh/developer/access89/id1781630972',
    playstore_link:
      'https://play.google.com/store/apps/developer?id=access+89&hl=en_US',
    displayImage: '/images/apps/FOUND 1.svg',
    use_cases_list: [
      'Fashion, electronics, grocery, convenience shops',
      'Chain stores, local provision shops',
      'Chemists, medical supply stores',
      'Restaurants, fast food joints, cafes, bars, food trucks',
      'Stockists, FMCG distributors',
      'Hotels, motels, nightclubs, gyms',
      'Auto parts stores, filling stations',
      'MoMo agents, remittance shops, bill payment agents',
    ],
  },
  {
    name: 'Foundry Books',
    plan_id: 13,
    plan_category: 5,
    qr_code: 'https://www.avasam.com/wp-content/uploads/2019/10/qr-sample.png',
    image: '/icons/app_icons/icon.books.png',
    description: 'Manage your books and finances with ease.',
    appstore_link: 'https://apps.apple.com/gh/developer/access89/id1781630972',
    playstore_link:
      'https://play.google.com/store/apps/developer?id=access+89&hl=en_US',
    displayImage: '/images/apps/FOUND 1.svg',

    use_cases_list: [
      'Consultants, designers, tutors, artisans',
      'Boutiques, cosmetics shops, corner shops, general stores',
      'Hair salons, barber shops, spas, mechanics, cleaning services',
      'Caterers, small restaurants, bakeries, food vendors',
      'Wholesalers, distributors, suppliers',
      'Law firms, audit firms, small clinics, private schools',
      'E-commerce sellers, social media sellers (Instagram, WhatsApp shops)',
      'Small lending operations, susu collectors, savings groups',
    ],
  },
];

const InfoSection = ({
  isLoadingSubscriber,
  isSetupComplete,
  errorSubscriber,
}: {
  isLoadingSubscriber: boolean;
  isSetupComplete: boolean;
  errorSubscriber: any;
}) => {
  const location = useLocation();
  const { business_owner } = location.state?.payload || {};

  // console.log('errorSubscriber', errorSubscriber?.response?.data?.message);

  // Determine the current state
  const getStateInfo = () => {
    if (errorSubscriber) {
      return {
        icon: 'mdi:alert-circle',
        iconColor: 'text-red-500',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-500',
        title: 'Setup Failed',
        message: `Sorry ${
          business_owner || 'User'
        }, there was an issue setting up your account. Please try again.`,
        titleColor: 'text-red-600',
      };
    } else if (isSetupComplete) {
      return {
        icon: 'mdi:check-circle',
        iconColor: 'text-green-500',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-500',
        title: 'Setup Complete!',
        message: `Welcome ${
          business_owner || 'User'
        }! Your Foundry account is ready.`,
        titleColor: 'text-green-600',
      };
    } else if (isLoadingSubscriber) {
      return {
        icon: 'eos-icons:loading',
        iconColor: 'text-primary',
        bgColor: 'bg-primary/10',
        borderColor: 'border-primary',
        title: 'Setting things up for you...',
        message: `Congratulations ${
          business_owner || 'User'
        }! We're preparing your Foundry experience.`,
        titleColor: 'text-primary',
      };
    } else {
      return {
        icon: 'mdi:clock-outline',
        iconColor: 'text-gray-500',
        bgColor: 'bg-gray-50',
        borderColor: 'border-gray-300',
        title: 'Getting Ready...',
        message: `Hello ${
          business_owner || 'User'
        }, we're about to set up your account.`,
        titleColor: 'text-gray-600',
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
            isLoadingSubscriber ? 'animate-spin' : ''
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
            {errorSubscriber?.response?.data?.message && (
              <p className="text-xs md:text-base mt-2 text-red-500">
                <Link to="/contact"> or contact support</Link>
              </p>
            )}
          </p>
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

// Smart app selection based on business type
const getRecommendedApp = (businessType: string) => {
  if (!businessType) return null;

  const lowerBusinessType = businessType.toLowerCase();

  // Check which app's use_cases_list contains the business type
  for (const app of appList) {
    const hasMatch = app.use_cases_list.some(
      (useCase) =>
        useCase.toLowerCase().includes(lowerBusinessType) ||
        lowerBusinessType.includes(useCase.toLowerCase()),
    );

    if (hasMatch) {
      return app;
    }
  }

  // Default to Foundry Books if no specific match
  return appList[1]; // Foundry Books
};

const RecommendedAppSection = () => {
  const location = useLocation();
  const { payload_data } = location.state?.payload || {};
  const recommendedApp = getRecommendedApp(payload_data?.business_type);

  console.log('recommendedApp', recommendedApp);

  if (!recommendedApp) return null;

  return (
    <section className="mb-12 mx-4 flex items-center justify-between">
      <div className=" mb-8 w-[35%]">
        <h2 className="text-2xl md:text-6xl font-semibold mb-4">
          {recommendedApp.name}
        </h2>
        <p className="text-gray-600 mb-6 text-base md:text-lg">
          {recommendedApp.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-lg bg-primary-light p-4 md:col-span-2 flex justify-between items-center cursor-pointer group">
            <p className="flex flex-col justify-between  h-full group-hover:text-primary transition-colors">
              <p></p>
              <p className=" ">Scan to download</p>
            </p>
            <p>
              <img
                src={recommendedApp.qr_code}
                alt={recommendedApp.name}
                className="w-32 h-32 mx-auto group-hover:scale-105 transition-transform rounded-lg"
              />
            </p>
          </div>
          {/* Download Buttons */}
          {/* App Store Button */}
          <div
            className="bg-primary-light rounded-2xl p-4 cursor-pointer  transition-colors group"
            onClick={() => window.open(recommendedApp.appstore_link, '_blank')}
          >
            <div className="flex flex-col justify-between gap-10">
              <div className="flex items-center justify-between">
                <Icon
                  icon="simple-icons:apple"
                  className="text-primary text-3xl"
                />
                <Icon
                  icon="material-symbols:arrow-outward"
                  className="text-primary text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </div>
              <div>
                <p className="">Open AppStore</p>
              </div>
            </div>
          </div>

          {/* Google Play Button */}
          <div
            className="bg-primary-light rounded-2xl p-4 cursor-pointer  transition-colors group"
            onClick={() => window.open(recommendedApp.playstore_link, '_blank')}
          >
            <div className="flex flex-col justify-between gap-10">
              <div className="flex items-center justify-between">
                <Icon
                  icon="simple-icons:googleplay"
                  className="text-primary text-3xl"
                />
                <Icon
                  icon="material-symbols:arrow-outward"
                  className="text-primary text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </div>
              <div>
                <p className=""> Open Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[65%]">
        <img
          src={recommendedApp.displayImage}
          alt={recommendedApp.name}
          className="w-[80%] h-full mx-auto mb-6 rounded-lg"
        />
      </div>
    </section>
  );
};

const FreePlanSection = () => {
  const location = useLocation();
  const { payload_data } = location.state?.payload || {};

  const { plans: allPlansFromAPI } = useSubscriptionPlans(
    1,
    100,
    getRecommendedApp(payload_data?.business_type)?.plan_category?.toString() ||
      '',
  );

  // Get the free plan features (assuming the first plan is free or we filter for free plans)
  const foundPlan = allPlansFromAPI.find(
    (plan) =>
      plan.id === getRecommendedApp(payload_data?.business_type)?.plan_id,
  );

  // Extract features from the plan - handle different possible structures
  let freePlanFeatures: string[] = [];

  if (foundPlan?.features) {
    if (Array.isArray(foundPlan.features)) {
      // If features is already an array
      freePlanFeatures = foundPlan.features;
    } else if (
      foundPlan.features.feature_list &&
      Array.isArray(foundPlan.features.feature_list)
    ) {
      // If features has a feature_list property
      freePlanFeatures = foundPlan.features.feature_list
        .map((feature: string) => feature.split(':')[1])
        .filter((featureText: string) => featureText && featureText.trim());
    }
  }

  // Fallback to default features if none found
  if (freePlanFeatures.length === 0) {
    freePlanFeatures = [
      // 'Basic POS functionality',
      // 'Essential bookkeeping features',
      // 'Customer management',
      // 'Basic reporting',
      // 'Inventory tracking',
      // 'Sales analytics',
    ];
  }

  // console.log('freePlanFeatures', freePlanFeatures);

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
          <ul className="text-left max-w-2xl mx-auto space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            {freePlanFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Icon icon="uil:check" className="text-primary" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const DownloadAppsAndOtherOffers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { payload_data } = location.state?.payload || {};
  const [collapsedFeatures, setCollapsedFeatures] = useState<{
    [key: string]: boolean;
  }>({});
  const dispatch = useDispatch();

  const pos_api_base_url = 'https://api.access89.com/pos-api/v1';

  const {
    mutate: mutateSubscriber,
    isLoading: isLoadingSubscriber,
    isSuccess: isSuccessSubscriber,
    error: errorSubscriber,
  } = useMutation(
    (newData: SubscriberStateType) =>
      mutateFn({
        url: `${pos_api_base_url}/setup/create/setup`,
        data: newData,
      }),
    {
      onSuccess: () => {
        // console.log('Subscriber created successfully');
        dispatch(resetSubscriber());
        toast.success('Account created successfully!');
      },
      onError: () => {
        // console.error('Error creating subscriber:', error);
        toast.error('Details were not submitted, please try again');
      },
    },
  );

  // Fire API call when component mounts
  useEffect(() => {
    if (payload_data) {
      mutateSubscriber(payload_data as any);
    }
  }, [payload_data, mutateSubscriber]);

  // Get plans from API using the hook
  const {
    plans: allPlansFromAPI,
    isLoading,
    error,
  } = useSubscriptionPlans(
    1,
    100,
    getRecommendedApp(payload_data?.business_type)?.plan_category?.toString() ||
      '',
  );

  const toggleFeatures = (planId: string) => {
    setCollapsedFeatures((prev) => ({
      ...prev,
      [planId]: !prev[planId],
    }));
  };

  // Group plans by category

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Setup message at top */}
      <InfoSection
        isLoadingSubscriber={isLoadingSubscriber}
        isSetupComplete={isSuccessSubscriber}
        errorSubscriber={errorSubscriber}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Recommended app based on business type */}
        <RecommendedAppSection />

        {/* Free plan information */}
        <FreePlanSection />

        {/* Upgrade plans section */}
        <section id="plans" className="py-16">
          <div className="text-center mb-12">
            <h2 className="font-medium text-3xl lg:text-4xl mb-5">
              Subscription Plans
            </h2>
            <p className="text-gray-600 mb-6">
              Compare features across all our plans and upgrade when you're
              ready.
            </p>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="space-y-8">
              {/* Skeleton for category header */}
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-48 mb-4 mx-auto"></div>
              </div>

              {/* Skeleton for plan cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-md animate-pulse"
                  >
                    {/* Plan name skeleton */}
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>

                    {/* Description skeleton */}
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>

                    {/* Features skeleton */}
                    <div className="space-y-2 mb-4">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>

                    {/* Price skeleton */}
                    <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>

                    {/* Button skeleton */}
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">
                Error loading plans. Please try again.
              </p>
            </div>
          ) : (
            <>
              {/* Plans by Category */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {allPlansFromAPI
                  .filter((plan) => plan.plan_name !== 'Enterprise')
                  .reverse()
                  .map((plan) => (
                    <div
                      key={plan.id}
                      className="p-6 bg-primary-light rounded-lg cursor-pointer flex flex-col"
                    >
                      <div className="mb-2">
                        <h3 className="text-[1.2rem] lg:text-[1.8rem] font-medium capitalize">
                          {plan.plan_name.toLocaleLowerCase()}
                        </h3>
                        <p className="lg:text-[0.9rem] h-16 text-[0.8rem] font-light text-secondary-black">
                          {plan.description}
                        </p>
                      </div>

                      <div className="mt-20">
                        {['Enterprise'].includes(plan.plan_name) ? (
                          <p></p>
                        ) : (
                          <p>
                            <span className="lg:text-[2.8rem] text-[1.5rem] font-medium">
                              {parseCurrency(
                                plan?.bundles?.[0]?.currency?.String ||
                                  plan.currency,
                              ) || '₵'}{' '}
                              {plan?.bundles?.[0]?.price || '0'}
                            </span>
                            <span className="text-sm">
                              /{plan.billing_frequency}
                            </span>
                          </p>
                        )}

                        {['free'].includes(plan.plan_name.toLowerCase()) ? (
                          <div className="h-10"></div>
                        ) : (
                          <CustomButton
                            className="bg-primary text-white font-medium w-full mt-2 py-2 lg:py-4 lg:text-[0.9rem]"
                            onPress={() => navigate('/onboarding')}
                          >
                            Get Started
                          </CustomButton>
                        )}
                      </div>

                      <div className="flex-grow mt-4">
                        <button
                          onClick={() => toggleFeatures(plan.id.toString())}
                          className="flex items-center justify-between w-full font-semibold text-[1rem] mb-1 hover:text-primary transition-colors"
                        >
                          Features
                          <Icon
                            icon={
                              collapsedFeatures[plan.id.toString()]
                                ? 'lucide:chevron-down'
                                : 'lucide:chevron-up'
                            }
                            className="text-primary transition-transform duration-200"
                          />
                        </button>

                        <div className="relative">
                          <div
                            className={` h-full transition-all duration-300 ease-in-out scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 ${
                              collapsedFeatures[plan.id.toString()]
                                ? 'max-h-0 opacity-0'
                                : 'max-h-96 opacity-100'
                            }`}
                          >
                            <ul className="space-y-1 text-[0.8rem] lg:text-[0.9rem] pr-2">
                              {plan.features.feature_list
                                .map((feature) => feature.split(':')[1])
                                .filter(
                                  (featureText) =>
                                    featureText && featureText.trim(),
                                )
                                .map((featureText, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2"
                                  >
                                    <p>
                                      <Icon
                                        icon={'uil:check'}
                                        className="text-primary"
                                      />
                                    </p>
                                    <span>{featureText}</span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                          {/* enterprise */}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <section className="md:py-16 py-5">
                <div className=" flex flex-col items-center justify-center">
                  <h2 className="font-medium text-3xl lg:text-4xl mb-5">
                    Looking for something extra?
                  </h2>
                  <p className="text-secondary-black mb-5">
                    Contact our sales team to explore our Enterprise plan and
                    unlock the full potential of Foundry.
                  </p>
                  <div>
                    <CustomButton
                      className="bg-primary text-white font-medium w-full mt-2 py-2 lg:py-4 lg:text-[0.9rem]"
                      onPress={() => navigate('/contact')}
                    >
                      Contact Sales
                    </CustomButton>
                  </div>
                </div>
              </section>
            </>
          )}
        </section>

        {/* All available apps */}
        <section className="my-14">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete App Suite
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Access our complete suite of business management tools designed to
              streamline your operations
            </p>
          </div>

          <div className="space-y-16 flex flex-col gap-16">
            {appList.map((app, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={app.image}
                        alt={app.name}
                        className="w-16 h-16 rounded-xl"
                      />
                      <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
                        {app.name}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      {app.description}
                    </p>
                  </div>

                  {/* Use Cases */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Perfect for:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {app.use_cases_list.map((useCase, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <p>
                            <Icon
                              icon="mdi:check-circle"
                              className="text-primary text-sm"
                            />
                          </p>
                          <span className="text-sm text-gray-600">
                            {useCase}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Download Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* App Store */}
                    <div
                      className="bg-gray-900 rounded-2xl p-6 cursor-pointer hover:bg-gray-800 transition-colors group"
                      onClick={() => window.open(app.appstore_link, '_blank')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <p>
                            <Icon
                              icon="simple-icons:apple"
                              className="text-white text-2xl"
                            />
                          </p>
                          <div>
                            <p className="text-white font-medium">
                              Download on the
                            </p>
                            <p className="text-white text-lg font-bold">
                              App Store
                            </p>
                          </div>
                        </div>
                        <Icon
                          icon="material-symbols:arrow-outward"
                          className="text-white text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </div>
                    </div>

                    {/* Google Play */}
                    <div
                      className="bg-green-600 rounded-2xl p-6 cursor-pointer hover:bg-green-700 transition-colors group"
                      onClick={() => window.open(app.playstore_link, '_blank')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <p>
                            <Icon
                              icon="simple-icons:googleplay"
                              className="text-white text-2xl"
                            />
                          </p>
                          <div>
                            <p className="text-white font-medium">Get it on</p>
                            <p className="text-white text-lg font-bold">
                              Google Play
                            </p>
                          </div>
                        </div>
                        <Icon
                          icon="material-symbols:arrow-outward"
                          className="text-white text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <img
                      src={app.displayImage}
                      alt={app.name}
                      className="w-full max-w-lg h-auto rounded-2xl  mx-auto"
                    />
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/10 rounded-full opacity-40"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DownloadAppsAndOtherOffers;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
// import { cn } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomModal from '@/components/shared/modal';
import { apiClient } from '@/services/api.client';
import { parseCurrency, variables } from '@/utils/helper';
import toast from 'react-hot-toast';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';
import { useSubscriptionPlans } from '@/utils/useSubscriptionPlans';

const PricingPage = ({
  category,
  customerId,
}: {
  category?: string;
  customerId?: string;
}) => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState<any>(null);
  const [isUpgrading, setIsUpgrading] = React.useState(false);
  const [paystackRedirectDetails, setPaystackRedirectDetails] = React.useState({
    ready: false,
    url: '',
    amount: 0,
  });

  const [collapsedFeatures, setCollapsedFeatures] = React.useState<{
    [key: string]: boolean;
  }>({});

  const toggleFeatures = (planId: string) => {
    setCollapsedFeatures((prev) => ({
      ...prev,
      [planId]: !prev[planId],
    }));
  };

  // Get plans from Redux store and filter by category
  // const {
  //   plans: allPlans,
  //   isLoading,
  //   error,
  // } = useSelector((state: RootState) => state.plans);

  const {
    plans: allPlans,
    isLoading,
    error,
  } = useSubscriptionPlans(1, 100, category || '');

  // Filter plans by category if provided
  const plans = React.useMemo(() => {
    // if (!category) return allPlans;
    // return allPlans.filter((plan) => plan.category_name === category);
    return allPlans
      .filter((plan) => !['Enterprise'].includes(plan.plan_name))
      .reverse()
      .filter((plan) => plan.category_id === Number(category));
  }, [allPlans, category]);

  useEffect(() => {
    if (paystackRedirectDetails.ready) {
      // console.log('Redirecting to payment gateway...');
      console.log({ paystackRedirectDetails });
    }
  }, [paystackRedirectDetails]);

  const upgradePlan = async ({
    new_plan_id,
    subscription_id,
  }: {
    new_plan_id: number;
    subscription_id: number;
  }) => {
    if (!new_plan_id) {
      toast.error('Invalid plan selected.');
      return;
    }

    try {
      setIsUpgrading(true);
      console.log({ new_plan_id, subscription_id });

      const response = await apiClient({
        url: `${variables.subscription_base_url}/subscriptions/${subscription_id}/change-plan`,
        method: 'POST',
        data: { new_plan_id },
      });

      const { data, message, responseInfo } = response.data;
      console.log('Plan upgrade response:', response.data);

      if (responseInfo?.responseCode === '000' && data?.payment_url) {
        toast.success('Payment required to complete your upgrade.');

        // Save paystack details for manual trigger
        setPaystackRedirectDetails({
          ready: true,
          url: data.payment_url,
          amount: data.net_amount,
        });

        return;
      }

      if (responseInfo?.responseCode === '000' && !data?.payment_url) {
        toast.success(message || 'Plan upgraded successfully!');
        setOpenModal(false);
        return;
      }

      toast.error(message || 'Something went wrong. Please try again.');
    } catch (error: any) {
      console.error('Error upgrading plan:', error);
      toast.error(
        `Failed to upgrade plan. ${
          error?.response?.data?.message || 'Try again later.'
        }`,
      );
    } finally {
      setIsUpgrading(false);
    }
  };

  // Group plans by category (since we're already filtering by category_id)
  const plansByCategory = React.useMemo(() => {
    const grouped: { [key: string]: typeof plans } = {};
    plans.forEach((plan) => {
      if (!grouped[plan.category_name]) {
        grouped[plan.category_name] = [];
      }
      grouped[plan.category_name].push(plan);
    });
    return grouped;
  }, [plans]);

  return (
    <div className="lg:w-[80vw] lg:mx-auto lg:pt-12 p-6">
      {/* Loading State */}
      {isLoading ? (
        <div className="space-y-8">
          {/* Skeleton for category header */}
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
          </div>

          {/* Skeleton for plan cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="p-4 bg-[#E4EEF0] rounded-lg animate-pulse"
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
          <p className="text-red-500">Error loading plans. Please try again.</p>
        </div>
      ) : (
        <>
          {/* Plans by Category */}
          {Object.keys(plansByCategory).map((categoryName) => (
            <div key={categoryName} className="mb-12 ">
              {/* <h3 className="font-medium text-2xl lg:text-3xl mb-6 text-center">
                {categoryName}
              </h3> */}
              <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
                {plansByCategory[categoryName]
                  .filter((plan) => plan.plan_name !== 'Enterprise')
                  // .reverse()
                  .map((plan) => (
                    <div
                      key={plan.id}
                      className="p-6 bg-primary-light rounded-lg cursor-pointer flex flex-col"
                    >
                      <div className="mb-2">
                        <h3 className="text-[1.2rem] md:text-[2.5rem] font-medium capitalize">
                          {plan.plan_name.toLocaleLowerCase()}
                        </h3>
                        <p className="md:text-[17px] h-16 text-[0.8rem] ">
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

                        {['Enterprise'].includes(plan.plan_name) ? (
                          <CustomButton
                            className="bg-primary text-white font-medium w-full mt-2 py-2 lg:py-4 lg:text-[0.9rem]"
                            onPress={() => navigate('/contact')}
                          >
                            Contact Sales
                          </CustomButton>
                        ) : (
                          <CustomButton
                            className="bg-primary text-white font-medium w-full mt-2 py-2 lg:py-4 lg:text-[0.9rem]"
                            onPress={() => {
                              setSelectedPlan(plan);

                              setOpenModal(true);
                            }} //
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

                        <div className="relative h-full">
                          <div
                            className={`h-full transition-all duration-300 ease-in-out scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 ${
                              collapsedFeatures[plan.id.toString()]
                                ? ' opacity-0'
                                : ' opacity-100'
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
            </div>
          ))}
        </>
      )}

      <CustomModal
        isOpen={openModal}
        onOpenChange={() => setOpenModal(!openModal)}
        body={
          <div className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Confirm Subscription
              </h3>
              <p className="text-gray-600">
                Are you sure you want to subscribe to the{' '}
                <span className="font-semibold text-primary">
                  {selectedPlan?.plan_name}
                </span>{' '}
                plan?
              </p>
            </div>

            {selectedPlan && !paystackRedirectDetails.ready && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium mb-2">Plan Details:</h4>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="font-medium">Plan:</span>{' '}
                    {selectedPlan.plan_name}
                  </p>
                  <p>
                    <span className="font-medium">Category:</span>{' '}
                    {selectedPlan.category_name}
                  </p>
                  <p>
                    <span className="font-medium">Price:</span>{' '}
                    {parseCurrency(
                      selectedPlan?.bundles?.[0]?.currency?.String ||
                        selectedPlan.currency,
                    ) || '₵'}{' '}
                    {selectedPlan?.bundles?.[0]?.price || '0'} /{' '}
                    {selectedPlan.billing_frequency}
                  </p>
                  <p>
                    <span className="font-medium">Description:</span>{' '}
                    {selectedPlan.description}
                  </p>
                </div>
              </div>
            )}

            {paystackRedirectDetails.ready && (
              <div className="bg-gray-50 p-4 px-6 rounded-lg mb-6 ">
                <p className="text-sm">
                  Subscription confirmed, payment is required
                </p>
              </div>
            )}

            {paystackRedirectDetails.ready ? (
              <div className="flex gap-3 justify-end">
                <CustomButton
                  className="bg-primary text-white px-6 py-2"
                  onPress={() => {
                    window.open(paystackRedirectDetails.url);
                  }}
                >
                  Pay
                </CustomButton>
              </div>
            ) : (
              <div className="flex gap-3 justify-end">
                <CustomButton
                  className="bg-gray-200 text-gray-800 px-6 py-2"
                  onPress={() => setOpenModal(false)}
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  isLoading={isUpgrading}
                  className="bg-primary text-white px-6 py-2"
                  disabled={isUpgrading || !customerId}
                  onPress={() => {
                    console.log({ customerId });
                    console.log({ selectedPlan });
                    if (!customerId) {
                      toast.error('Customer ID not found');
                      return;
                    }
                    upgradePlan({
                      new_plan_id: 6,
                      subscription_id: 49,
                      // new_plan_id: selectedPlan?.id || 0,
                      // subscription_id: Number(customerId),
                    });
                  }}
                >
                  {isUpgrading ? 'Processing...' : 'Confirm Subscription'}
                </CustomButton>
              </div>
            )}
          </div>
        }
      />
    </div>
  );
};

export default PricingPage;

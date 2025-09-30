/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import { cn } from '@nextui-org/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomModal from '@/components/shared/modal';
import { apiClient } from '@/services/api.client';
import { parseCurrency, variables } from '@/utils/helper';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

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

  // Get plans from Redux store and filter by category
  const {
    plans: allPlans,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.plans);

  // Filter plans by category if provided
  const plans = React.useMemo(() => {
    // if (!category) return allPlans;
    // return allPlans.filter((plan) => plan.category_name === category);
    return allPlans
      .filter((plan) => !['Enterprise'].includes(plan.plan_name))
      .reverse();
  }, [allPlans, category]);

  const upgradePlan = async ({
    new_plan_id,
    subscription_id,
  }: {
    new_plan_id: number;
    subscription_id: string;
  }) => {
    try {
      setIsUpgrading(true);
      console.log({ new_plan_id, subscription_id });

      const response = await apiClient({
        url: `${variables.subscription_base_url}/subscriptions/${subscription_id}/change-plan`,
        method: 'POST',
        data: {
          new_plan_id,
        },
      });

      console.log('Plan upgraded successfully:', response.data);
      setOpenModal(false);

      // Show success message or redirect
      // You can add a toast notification here
      toast.success('Plan upgraded successfully!');
    } catch (error: any) {
      console.error('Error upgrading plan:', error);
      // Show error message
      toast.error(`Failed to upgrade plan. ${error?.response?.data?.message}`);
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
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-secondary-black">Loading plans...</p>
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <p className="text-red-500">Error loading plans. Please try again.</p>
        </div>
      ) : (
        <>
          {/* Plans by Category */}
          {Object.keys(plansByCategory).map((categoryName) => (
            <div key={categoryName} className="mb-8">
              <h3 className="font-medium text-xl lg:text-2xl mb-4">
                {categoryName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {plansByCategory[categoryName].map((plan) => (
                  <div
                    key={plan.id}
                    className="p-4 bg-[#E4EEF0] rounded-lg cursor-pointer  duration-300 flex flex-col"
                  >
                    <div className="mb-2">
                      <h3 className="text-[1.2rem] lg:text-[2rem] font-medium">
                        {plan.plan_name}
                      </h3>
                      <p className="lg:text-[0.9rem] text-[0.8rem] font-light text-secondary-black">
                        {plan.description}
                      </p>
                    </div>
                    <div className="flex-grow">
                      <h6 className="font-semibold text-[1rem] mb-1">
                        Features
                      </h6>
                      <ul className="space-y-1 text-[0.8rem] lg:text-[0.9rem]">
                        {plan.features.feature_list.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Icon icon={'uil:check'} className="text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      {['Enterprise'].includes(plan.plan_name) ? (
                        <p></p>
                      ) : (
                        <p>
                          <span className="lg:text-[2.3rem] text-[1.5rem] font-medium">
                            {plan?.bundles?.[0]?.currency?.String ||
                              plan.currency ||
                              '₵'}{' '}
                            {plan?.bundles?.[0]?.price || '0'}
                          </span>
                          <span className="text-sm">
                            /{plan.billing_frequency}
                          </span>
                        </p>
                      )}
                      <CustomButton
                        className={cn(
                          'bg-primary text-white font-medium w-full mt-2 py-2 lg:py-6 lg:text-[0.9rem]',
                          ['Enterprise'].includes(plan.plan_name) &&
                            'border-2 border-primary bg-transparent text-primary',
                        )}
                        onPress={() => {
                          if (['Enterprise'].includes(plan.plan_name)) {
                            navigate('/contact');
                          } else {
                            setSelectedPlan(plan);
                            setOpenModal(true);
                          }
                        }}
                      >
                        {['Enterprise'].includes(plan.plan_name)
                          ? 'Contact Sales'
                          : 'Subscribe'}
                      </CustomButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <section className="py-16">
            <div className="container flex flex-col items-center justify-center">
              <h2 className="font-medium text-3xl lg:text-4xl mb-5">
                Looking for something extra?
              </h2>
              <p className="text-secondary-black mb-5">
                Contact our sales team to explore our Enterprise plan and unlock
                the full potential of Foundry.
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

            {selectedPlan && (
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
                  if (!customerId) {
                    alert('Customer ID is required');
                    return;
                  }
                  upgradePlan({
                    new_plan_id: selectedPlan?.id || 0,
                    subscription_id: customerId,
                  });
                }}
              >
                Confirm Subscription
              </CustomButton>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default PricingPage;

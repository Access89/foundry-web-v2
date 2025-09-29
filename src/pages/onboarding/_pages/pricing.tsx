/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import { cn } from '@nextui-org/react';
import React from 'react';
import { useSubscriptionPlans } from '@/utils/useSubscriptionPlans';
import { useNavigate } from 'react-router-dom';
import CustomModal from '@/components/shared/modal';
import { apiClient } from '@/services/api.client';
import { variables } from '@/utils/helper';

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

  // Fetch plans filtered by category_id
  const { plans, isLoading, error } = useSubscriptionPlans(
    1,
    1000,
    category || '',
  );

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
      alert('Plan upgraded successfully!');
    } catch (error) {
      console.error('Error upgrading plan:', error);
      // Show error message
      alert('Failed to upgrade plan. Please try again.');
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
      {/* <div>
        <h4 className="font-semibold lg:text-[1.7rem] text-[1.2rem]">
          Pricing Plan
        </h4>
        <p className="text-[#717173] font-light lg:text-[0.9rem] text-[0.8rem]">
          Select a pricing plan that suits your organization.
        </p>
      </div> */}

      {/* Category Filter */}
      {/* <div className="flex gap-3 flex-wrap mt-6 mb-8">
        {categories.map((category) => (
          <CustomButton
            key={category}
            disabled={selectedCategory === category}
            onPress={() => setSelectedCategory(category)}
            className={cn(
              'whitespace-nowrap relative cursor-pointer rounded-md text-secondary bg-transparent border-2 border-secondary font-medium flex items-center gap-x-2 transition-all px-4 py-2',
              selectedCategory === category &&
                'text-white bg-secondary disabled:cursor-not-allowed',
            )}
          >
            {category}
          </CustomButton>
        ))}
      </div> */}

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    {selectedPlan?.bundles?.[0]?.currency?.String ||
                      selectedPlan.currency ||
                      '₵'}{' '}
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
                {isUpgrading ? 'Upgrading...' : 'Confirm Subscription'}
              </CustomButton>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default PricingPage;

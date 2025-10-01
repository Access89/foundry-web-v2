import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { useNavigate } from 'react-router-dom';
import { Image, cn } from '@nextui-org/react';
import CustomFAQs from '@/components/shared/custom-faq';
import { parseCurrency } from '@/utils/helper';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Pricing = () => {
  const [, setActiveHash] = React.useState('');
  // const [selectedToolOption, setSelectedToolOption] = React.useState('All');
  const [collapsedFeatures, setCollapsedFeatures] = React.useState<{
    [key: string]: boolean;
  }>({});
  const categoryScrollRef = React.useRef<HTMLDivElement>(null);

  // Get plans from Redux store
  const { plans, isLoading, error } = useSelector(
    (state: RootState) => state.plans,
  );

  // Get unique categories from plans
  const categories = React.useMemo(() => {
    const uniqueCategories = new Set(plans.map((plan) => plan.category_name));
    return [...Array.from(uniqueCategories)].reverse();
  }, [plans]);

  const [selectedCategory, setSelectedCategory] = React.useState('Foundry POS');

  // Filter plans by selected category
  const filteredPlans = React.useMemo(() => {
    if (selectedCategory === 'All') return plans;
    return plans.filter((plan) => plan.category_name === selectedCategory);
  }, [plans, selectedCategory]);

  // Group plans by category
  const plansByCategory = React.useMemo(() => {
    const grouped: { [key: string]: typeof plans } = {};
    filteredPlans.forEach((plan) => {
      if (!grouped[plan.category_name]) {
        grouped[plan.category_name] = [];
      }
      grouped[plan.category_name].push(plan);
    });
    return grouped;
  }, [filteredPlans]);

  // Scroll functions for category navigation
  // const scrollLeft = () => {
  //   if (categoryScrollRef.current) {
  //     categoryScrollRef.current.scrollBy({
  //       left: -200,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (categoryScrollRef.current) {
  //     categoryScrollRef.current.scrollBy({
  //       left: 200,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  React.useEffect(() => {
    const scrollActive = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          const id = section.getAttribute('id');
          setActiveHash(String('#' + id));

          // window.scrollTo({ top: top, left: 0, behavior: 'smooth' });
        }
      });
    };
    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, []);

  const navigate = useNavigate();

  // Toggle features collapse state
  const toggleFeatures = (planId: string) => {
    setCollapsedFeatures((prev) => ({
      ...prev,
      [planId]: !prev[planId],
    }));
  };

  // const newCategories = categories?.slice(0, 3).map((category) => {
  //   return {

  //     name: category === 'Foundry POS' ? 'Point of Sale' : category,
  //   };
  // }

  return (
    <main>
      {/* hero */}
      <section className="container hidden">
        <div className=" bg-primary/10  rounded-xl  relative overflow-hidden flex flex-col">
          <div className="lg:px-28 md:pt-16 md:pb-36 px-5 flex flex-col-reverse md:flex-col">
            <div className="lg:max-w-lg md:max-w-xs">
              <h1 className="font-medium text-3xl md:text-4xl">
                Enabling every aspect of your business operations.
              </h1>
              <p className="text-secondary-black my-7">
                Work smarter, enhance efficiency through automation, and unlock
                new revenue streams with the software and hardware platform
                trusted by millions of businesses.
              </p>

              <div className="flex items-center gap-x-4 mb-10">
                <CustomButton
                  onClick={() => navigate('/onboarding')}
                  className="bg-transparent border-2 border-primary px-5 "
                >
                  Get Started
                </CustomButton>
                <CustomButton
                  onClick={() => navigate('/book-a-demo')}
                  className="bg-primary text-white font-medium px-5 "
                >
                  Contact Sales
                </CustomButton>
              </div>
            </div>
            <Image
              src="/images/LS_3.webp"
              alt="AI marketplace"
              width={306}
              height={408}
              classNames={{
                wrapper: 'md:absolute right-10 rounded-none top-0',
                img: 'rounded-none',
              }}
            />
          </div>

          <div className="border-t p-4 mt-16  grid-cols-auto-fill-150 xl:grid-cols-auto-fill-200 gap-5 hidden">
            {navLinks.map((subNav, index) => (
              <CustomButton
                key={index}
                as={ScrollIntoView}
                onClick={() => setActiveHash(subNav.link)}
                selector={subNav.link}
                className="relative cursor-pointer overflow-hidden rounded-md text-secondary bg-transparent border-2 border-secondary font-medium flex items-center gap-x-2 transition-all custom-button hover:text-white"
              >
                {subNav.title}
                <Icon icon="iconamoon:arrow-down-2-light" fontSize={22} />
              </CustomButton>
            ))}
          </div>
        </div>
      </section>

      {/* Plans for every stage */}
      <section id="plans" className="py-16">
        <div className="mx-auto max-w-7xl p-4">
          <h2 className="font-medium text-3xl lg:text-4xl mb-5">
            Plans for every need
          </h2>

          {/* Category Filter */}
          <div className="relative mb-10">
            <div
              ref={categoryScrollRef}
              className="flex gap-5 overflow-x-auto scrollbar-hide pb-4"
            >
              {categories.slice(0, 3).map((category) => (
                <div key={category} className="flex-shrink-0">
                  <CustomButton
                    disabled={selectedCategory === category}
                    onPress={() => setSelectedCategory(category)}
                    className={cn(
                      'whitespace-nowrap relative cursor-pointer rounded-md text-primary bg-transparent border-2 border-primary font-medium flex items-center gap-x-2 transition-all  px-4 py-2',
                      selectedCategory === category &&
                        'text-white bg-primary disabled:cursor-not-allowed',
                    )}
                  >
                    {category === 'Foundry POS' ? 'Point of Sale' : category}
                  </CustomButton>
                </div>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="space-y-12">
              {/* Skeleton for category header */}
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-6"></div>
              </div>

              {/* Skeleton for plan cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="p-6 bg-primary-light rounded-lg animate-pulse"
                  >
                    {/* Plan name skeleton */}
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>

                    {/* Description skeleton */}
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-20"></div>

                    {/* Price skeleton */}
                    <div className="h-12 bg-gray-200 rounded w-1/2 mb-4"></div>

                    {/* Button skeleton */}
                    <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>

                    {/* Features section skeleton */}
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
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
            <section className="">
              {/* Plans by Category */}
              {Object.keys(plansByCategory).map((categoryName) => (
                <div key={categoryName} className="mb-12 ">
                  {/* <h3 className="font-medium text-2xl lg:text-3xl mb-6 text-center">
                    {categoryName}
                  </h3> */}
                  <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
                    {plansByCategory[categoryName]
                      .filter((plan) => plan.plan_name !== 'Enterprise')
                      .reverse()
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
                </div>
              ))}
            </section>
          )}

          <section className="md:py-16 py-5">
            <div className=" flex flex-col items-center justify-center">
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
        </div>
      </section>

      <section className="container md:grid grid-cols-[0.2fr,1fr] md:py-10 pb-16 ">
        <h2 className="font-medium text-3xl md:text-4xl mb-5">FAQ</h2>
        <CustomFAQs options={faqQuestion} />
      </section>
    </main>
  );
};

export default Pricing;

const faqQuestion = [
  {
    header: 'What’s the difference between Foundry Books and Foundry POS?',
    desc: [
      <>
        Foundry <strong className="font-semibold">Point of Sale (POS)</strong>{' '}
        is the app that helps you accept payments in person, online, or on the
        go. It’s built to manage sales, track earnings, and keep your checkout
        experience seamless.
        <br />
        <br />
        <strong className="font-semibold">Foundry Books</strong>, on the other
        hand, is your all-in-one finance and accounting tool. It’s designed to
        give you clear visibility into your cash flow, automate bookkeeping,
        handle invoicing, and keep your business financially organized.
        <br />
        <br />
        Together, Foundry Books and Foundry POS connect sales and finance in one
        ecosystem, so every transaction, expense, and report is synced
        automatically.
        <br />
        <br />
        Compare Foundry POS Free, Foundry POS Pro, and Foundry Books Pro plans
        to find the best setup for your business. Already using Foundry POS? Add
        Foundry Books Pro to unlock deeper financial insights, advanced
        reporting, and seamless integration between sales and accounting.
      </>,
    ],
  },
  {
    header: 'Can you recommend the best solution for my business?',
    desc: [
      <>
        Foundry brings together the tools that power every part of your
        business, from sales and payments to accounting and growth. Discover the
        right solution tailored to your unique needs, all in one connected
        platform.
      </>,
    ],
  },
  {
    header: 'Can I upgrade my Foundry plan?',
    desc: [
      <>
        Yes. You can upgrade from the{' '}
        <strong className="font-semibold">Foundry Free</strong> plan to the{' '}
        <strong className="font-semibold">Foundry Pro</strong> plan at any time
        by subscribing in your dashboard. You’ll keep all your existing features
        and just set up the additional functionality that comes with your
        upgrade.
        <br />
        <br />
        To upgrade to a custom{' '}
        <strong className="font-semibold">Foundry Enterprise</strong> plan,
        simply contact our sales team.
      </>,
    ],
  },
  {
    header: 'Can I downgrade my Foundry plan?',
    desc: [
      <>
        Yes. You can downgrade your subscription from{' '}
        <strong className="font-semibold">Foundry Pro</strong> back to{' '}
        <strong className="font-semibold">Foundry Free</strong> anytime in your
        Dashboard. When you downgrade, you’ll see a notice showing which
        features you’ll lose, such as advanced reporting, multi-location
        management, and premium integrations.
        <br />
        <br />
        You can review and compare plan features anytime on our pricing page.
        You can also pause your subscription directly from your Dashboard.
      </>,
    ],
  },
];

const navLinks = [
  {
    title: 'See Plans',
    link: '#plans',
  },
  {
    title: 'Explore all tools',
    link: '#explore-tools',
  },
  {
    title: 'Processing  Fees',
    link: '#processing-fees',
  },
  {
    title: 'By business type',
    link: '#business-type',
  },
  {
    title: 'Shop hardware',
    link: '#shop-hardware',
  },
];

// const mix_and_match = [
//   {
//     title: 'Foundry POS ',
//     desc: 'Easily start selling in person, online, by phone, or on the go — no training needed.',
//     startingPrice: '',
//     tags: [],
//   },
//   {
//     title: 'Payroll ',
//     desc: 'Manage hours, expedite employee payments, and automate tax filings all from one platform to simplify payroll.',
//     startingPrice: '',
//     tags: [],
//   },
//   {
//     title: 'Online Store',
//     desc: 'Effortlessly sell, accept bookings, and showcase your services online. Expand your reach to customers on Instagram and Facebook.',
//     startingPrice: '',
//     tags: [],
//   },
//   {
//     title: 'Invoices',
//     desc: 'Create and send digital invoices and estimates, accept payments, issue reminders, and track payment statuses.',
//     startingPrice: '',
//     tags: [],
//   },
//   {
//     title: 'Loans',
//     desc: 'Qualify for loans selling using Foundry. Receive funds as quickly as the next business day.',
//     startingPrice: '',
//     tags: [],
//   },
//   {
//     title: 'Loyalty',
//     desc: 'Encourage repeat business with a simple and effective rewards program.',
//     startingPrice: '',
//     tags: [],
//   },
//   {
//     title: 'Marketing suite ',
//     desc: 'Reach out to customers directly with updates on sales, new arrivals, coupons, and more to keep your business top of mind.',
//     startingPrice: '',
//     tags: [],
//   },
// ];

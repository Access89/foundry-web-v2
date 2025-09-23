import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { Link, useNavigate } from 'react-router-dom';
import { Image, cn } from '@nextui-org/react';
import CustomFAQs from '@/components/shared/custom-faq';

const Pricing = () => {
  const [, setActiveHash] = React.useState('');
  const [selectedToolOption, setSelectedToolOption] = React.useState('All');

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

  return (
    <main>
      {/* hero */}
      <section className="container">
        <div className=" bg-primary/10  rounded-xl  relative overflow-hidden flex flex-col">
          <div className="lg:px-28 md:pt-16 md:pb-28 px-5 flex flex-col-reverse md:flex-col">
            <div className="lg:max-w-lg md:max-w-xs">
              <h1 className="font-medium text-3xl md:text-4xl">
                Enabling every aspect of your business operations.
              </h1>
              <p className="text-secondary-black my-7">
                Work smarter, enhance efficiency through automation, and unlock
                new revenue streams with the software and hardware platform
                trusted by millions of businesses.
              </p>

              <div className="flex items-center gap-x-4">
                <CustomButton className="bg-transparent border-2 border-primary px-5 ">
                  Get Started
                </CustomButton>
                <CustomButton className="bg-primary text-white font-medium px-5 ">
                  Contact Sales
                </CustomButton>
              </div>
            </div>
            <Image
              src="/images/LS_3.webp"
              alt="AI marketplace"
              width={336}
              height={458}
              classNames={{
                wrapper: 'md:absolute right-10 rounded-none top-0',
                img: 'rounded-none',
              }}
            />
          </div>

          <div className="border-t p-4 mt-16 grid grid-cols-auto-fill-150 xl:grid-cols-auto-fill-200 gap-5">
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
        <div className="container">
          <h2 className="font-medium text-3xl lg:text-4xl mb-5">
            Plans for every stage
          </h2>
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
                        <Icon icon={'uil:check'} className="text-primary" />
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
                      'bg-primary text-white font-medium w-full mt-2 py-2 lg:py-4 lg:text-[0.9rem]',
                      index === 3 &&
                        'border-2 border-primary bg-transparent text-primary',
                    )}
                    onClick={() =>
                      index === 3
                        ? navigate('/custom-plan')
                        : navigate('/onboarding')
                    }
                  >
                    {index === 3 ? 'Contact Sales' : 'Get Started'}
                  </CustomButton>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden">
            <h2 className="font-medium text-3xl lg:text-4xl mb-5 mt-10">
              Included with every Foundry account:
            </h2>
            <div className="grid grid-cols-auto-fill-300 gap-4 space-y-2 md:space-y-0">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="text-sm flex items-center gap-x-2 text-secondary-black"
                >
                  <Icon
                    icon="eva:checkmark-square-fill"
                    fontSize={20}
                    className="text-secondary"
                  />
                  <p>Real-time Updates</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools to mix & match */}
      <section id="explore-tools" className="py-16">
        <div className="container">
          <h2 className="font-medium text-3xl lg:text-4xl mb-5">
            Tools to mix & match
          </h2>
          <div className="flex gap-5 flex-wrap mb-10">
            {['All', 'Free', 'Commerce', 'Customers', 'Banking', 'Staff'].map(
              (item, index) => (
                <CustomButton
                  key={index}
                  disabled={selectedToolOption === item}
                  onPress={() => setSelectedToolOption(item)}
                  className={cn(
                    'relative cursor-pointer overflow-hidden rounded-md text-secondary bg-transparent border-2 border-secondary font-medium flex items-center gap-x-2 transition-all custom-button hover:text-white',
                    selectedToolOption === item &&
                      'text-white bg-secondary disabled:cursor-not-allowed',
                  )}
                >
                  {item}
                </CustomButton>
              ),
            )}
          </div>
          <div className="grid grid-cols-auto-fill-300 gap-5 space-y-5 md:space-y-0">
            {mix_and_match.map((item) => (
              <div
                key={item.title}
                className="p-5 bg-[#619B7D]/10 rounded-xl flex flex-col"
              >
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-secondary-black my-2">{item.desc}</p>

                <p className="text-sm text-secondary-black mt-5">Starting at</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Fees */}
      <section
        id="processing-fees"
        className=" bg-primary hidden p-5 md:p-10 my-10 md:py-16 w-full text-primary-white"
      >
        <div className="container">
          <h2 className="font-medium text-3xl lg:text-4xl mb-5">
            Processing Fees
          </h2>
          <div className="grid grid-cols-auto-fill-200 gap-5">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <h2 className="text-xl font-medium mb-3">Title</h2>
                <p className="text-sm">
                  Streamline the allocation of resources and time slots,
                  optimising bookings to minimise gaps and maximise utilisation
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans by business Type */}
      <section
        id="business-type"
        className="container py-10 pt-28 lg:pt-20 hidden"
      >
        <div className="flex justify-between">
          <h2 className="font-medium text-3xl md:text-4xl mb-5">
            Plans by business Type
          </h2>
        </div>
        <div className="md:grid md:grid-cols-auto-fill-300 gap-8 space-y-5 md:space-y-0">
          {[
            'Streamline the allocation of resources and time slots, optimising bookings to minimise gaps and maximise utilisation',
            'Streamline the allocation of resources and time slots, optimising bookings to minimise gaps and maximise utilisation',
            'Streamline the allocation of resources and time slots, optimising bookings to minimise gaps and maximise utilisation',
          ].map((item, index) => (
            <div key={index} className="space-y-2 text-sm">
              <div className="border-2 border-white p-3 rounded-xl h-[15rem]"></div>
              <h2 className="text-xl font-medium ">Title</h2>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Adaptable hardware solutions */}
      <section id="shop-hardware" className="py-10">
        <div className="container">
          <h2 className="font-medium text-3xl lg:text-4xl">
            Adaptable hardware solutions
          </h2>
          <div className="flex items-center gap-x-5 my-2">
            <Link
              to={''}
              className="flex items-center gap-x-2 text-primary group hover:opacity-80"
            >
              Discover every hardware and accessory available.
              <Icon
                icon="fluent-emoji-high-contrast:right-arrow"
                fontSize={19}
                className="text-secondary group-hover:translate-x-1  transition-all"
              />
            </Link>
          </div>

          <div className="md:grid md:grid-cols-auto-fill-300 gap-8 space-y-5 md:space-y-0 mt-5">
            {['Foundry Register', 'Foundry Terminal', 'Foundry KDS'].map(
              (item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl relative"
                >
                  <img
                    src="/images/LS_4.webp"
                    alt="a store with a woman in front of it"
                    className="h-full"
                  />
                  <div className="absolute bottom-5 left-5 right-5 rounded-md text-white bg-[#FAFAFA]/20 backdrop-blur-sm p-3">
                    <p className=" font-medium flex items-end gap-x-3">
                      {item}
                      <img
                        src="/icons/play.svg"
                        alt=""
                        className="w-[1rem] mb-1"
                      />
                    </p>
                    <p className="text-sm">maximise utilisation</p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="container md:grid grid-cols-[0.2fr,1fr] py-10 pb-16">
        <h2 className="font-medium text-3xl md:text-4xl mb-5">FAQ</h2>
        <CustomFAQs options={faqQuestion} />
      </section>
    </main>
  );
};

export default Pricing;

const faqQuestion = [
  {
    header: 'How does buy now, pay later work?',
    desc: [
      <>
        Foundry's{' '}
        <strong className="font-semibold">Buy Now, Pay Later (BNPL)</strong>{' '}
        solution allows businesses to access flexible payment options for their
        transactions. Buyers can purchase goods or services immediately while
        spreading the cost over time in manageable installments. This improves
        cash flow for buyers while ensuring suppliers are paid promptly. Foundry
        integrates BNPL options directly into the platform, simplifying credit
        approval, managing repayment schedules, and providing clear insights
        into payment statuses.
      </>,
    ],
  },
  {
    header: 'How does Foundry compare to other business software providers?',
    desc: [
      <>
        Foundry stands out by offering a{' '}
        <strong className="font-semibold">
          comprehensive ecosystem tailored for B2B interactions
        </strong>
        . Unlike many providers that focus on singular solutions, Foundry
        combines tools for supply chain management, financial services,
        regulatory compliance, and digital sales in one unified platform.
        Foundry is designed with scalability, security, and simplicity in mind,
        making it a standout choice for businesses of all sizes.
      </>,
    ],
  },
  {
    header: 'What kind of resources does Foundry provide businesses?',
    desc: [
      <>
        Foundry equips wholesale marketplaces with a robust set of tools and
        resources designed to optimize operations and enhance B2B transactions,
        including:
        <ul className="list-disc pt-2 flex flex-col gap-2">
          <li>
            <strong className="font-semibold">
              Supplier and Buyer Management:
            </strong>{' '}
            Tools to easily onboard and manage suppliers and buyers, ensuring
            seamless interactions and communication.
          </li>
          <li>
            <strong className="font-semibold">
              Order Processing and Tracking:
            </strong>{' '}
            Real-time tracking and streamlined workflows for managing bulk
            orders efficiently.
          </li>
          <li>
            <strong className="font-semibold">Inventory Management:</strong>{' '}
            Advanced systems to monitor stock levels, predict demand, and
            prevent overstocking or shortages.
          </li>
          <li>
            <strong className="font-semibold">
              Payment and Financing Solutions:
            </strong>{' '}
            Integrated payment gateways, credit facilities like Buy Now, Pay
            Later (BNPL), and support for multi-currency transactions to
            simplify payment processes.
          </li>
          <li>
            <strong className="font-semibold">Logistics Integration:</strong>{' '}
            Tools to manage shipping, delivery tracking, and cross-border
            logistics with minimal hassle.
          </li>
          <li>
            <strong className="font-semibold">Data and Insights</strong>{' '}
            Analytics dashboards offering deep insights into sales trends,
            customer behavior, and supply chain performance to inform strategic
            decisions.
          </li>
          <li>
            <strong className="font-semibold">Marketing Support:</strong>{' '}
            Features like promotional tools, custom discounts, and marketplace
            campaigns to help suppliers reach more buyers.
          </li>
          <li>
            <strong className="font-semibold">Compliance Tools:</strong>{' '}
            Built-in solutions to ensure adherence to regional trade
            regulations, tax compliance, and fraud detection.
          </li>
        </ul>
      </>,
    ],
  },
  {
    header: 'Does Foundry have tools for complex businesses?',
    desc: [
      <>
        Yes! Foundry is designed to handle the needs of complex businesses,
        offering:
        <ul className="list-disc pt-2 flex flex-col gap-2">
          <li>
            <strong className="font-semibold">Advanced case management:</strong>{' '}
            for compliance and fraud detection.
          </li>
          <li>
            <strong className="font-semibold">Flexible workflows:</strong> to
            accommodate unique business processes.
          </li>
          <li>
            <strong className="font-semibold">Multi-entity support:</strong> for
            companies operating across different regions or industries.
          </li>
          <li>
            <strong className="font-semibold">
              Customizable integrations:
            </strong>{' '}
            s to connect with existing ERP or CRM systems, ensuring seamless
            operations.
          </li>
        </ul>
      </>,
    ],
  },
  {
    header: 'What are merchant services?',
    desc: [
      <>
        Merchant services refer to the financial tools and technologies that the
        Foundry provides businesses with to manage transactions. These include:
        <ul className="list-disc pt-2 flex flex-col gap-2">
          <li>
            <strong className="font-semibold">
              Payment processing solutions{' '}
            </strong>{' '}
            for online and offline sales.
          </li>
          <li>
            <strong className="font-semibold">
              Point-of-sale integrations
            </strong>
            to track inventory and sales in real-time.
          </li>
          <li>
            <strong className="font-semibold">Fraud protection measures</strong>{' '}
            to secure transactions.
          </li>
          <li>
            <strong className="font-semibold">Custom invoicing systems</strong>{' '}
            to streamline billing and collection processes. operations.
          </li>
        </ul>
      </>,
    ],
  },
  {
    header: 'Does Foundry have tools for professional services businesses?',
    desc: [
      <>
        Absolutely. Foundry offers tools specifically designed for professional
        services, such as:
        <ul className="list-disc pt-2 flex flex-col gap-2">
          <li>
            <strong className="font-semibold">
              Time tracking and billing systems
            </strong>{' '}
            to manage client projects efficiently.
          </li>
          <li>
            <strong className="font-semibold">
              Customer relationship management (CRM)
            </strong>
            features to maintain strong client interactions.
          </li>
          <li>
            <strong className="font-semibold">
              Digital contract management
            </strong>{' '}
            allows businesses to securely create, sign, and store contracts.
          </li>
          <li>
            <strong className="font-semibold">Financial planning tools,</strong>{' '}
            like expense tracking and revenue forecasting, are tailored for
            service-based workflows.
          </li>
        </ul>
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

// const allPlans = [
// 	{
// 		title: 'Free',
// 		description:
// 			'Optimize resources and time slots to optimise bookings to minimise gaps and maximise utilisation',
// 		price: '₵0',
// 	},
// 	{
// 		title: 'Plus',
// 		description:
// 			'Streamline the allocation of resources and time slots, optimising bookings to minimise gaps and maximise utilisation',
// 		price: '₵3000+',
// 	},
// 	{
// 		title: 'Premium',
// 		description:
// 			'Streamline the allocation of resources and time slots, optimising bookings to minimise gaps and maximise utilisation',
// 		price: 'Custom',
// 	},
// ];

const mix_and_match = [
  {
    title: 'Foundry POS ',
    desc: 'Easily start selling in person, online, by phone, or on the go — no training needed.',
    startingPrice: '',
    tags: [],
  },
  {
    title: 'Payroll ',
    desc: 'Manage hours, expedite employee payments, and automate tax filings all from one platform to simplify payroll.',
    startingPrice: '',
    tags: [],
  },
  {
    title: 'Online Store',
    desc: 'Effortlessly sell, accept bookings, and showcase your services online. Expand your reach to customers on Instagram and Facebook.',
    startingPrice: '',
    tags: [],
  },
  {
    title: 'Invoices',
    desc: 'Create and send digital invoices and estimates, accept payments, issue reminders, and track payment statuses.',
    startingPrice: '',
    tags: [],
  },
  {
    title: 'Loans',
    desc: 'Qualify for loans selling using Foundry. Receive funds as quickly as the next business day.',
    startingPrice: '',
    tags: [],
  },
  {
    title: 'Loyalty',
    desc: 'Encourage repeat business with a simple and effective rewards program.',
    startingPrice: '',
    tags: [],
  },
  {
    title: 'Marketing suite ',
    desc: 'Reach out to customers directly with updates on sales, new arrivals, coupons, and more to keep your business top of mind.',
    startingPrice: '',
    tags: [],
  },
];
export const allPlans = [
  {
    title: 'Free Tier',
    description:
      'Experience all the essential tools and features your business needs to thrive completely FREE for the first month. Enjoy full access to manage sales, inventory, and finances seamlessly.',
    price: '₵0',
    features: [
      'Virtual Terminal (POS)',
      'Generate Invoices',
      'Manage Inventory',
      'Basic Accounting and Book keeping',
      'Manage Cash flow',
      'Single Location ',
    ],
  },
  {
    title: 'Basic',
    description:
      'Expand your reach and sell anywhere: in-store, online, over the phone, or while on the move.',
    price: '₵650',
    features: [
      'Virtual Terminal (POS)',
      'Generate Invoices',
      'Manage Inventory',
      'Basic Accounting and Book keeping',
      'Manage Cash flow',
      'Single Location ',
    ],
  },
  {
    title: 'Plus',
    description:
      ' Unlock advanced features tailored to meet the unique needs of restaurants, retail shops, and appointment-based businesses. Enjoy the flexibility to upgrade your plan whenever it suits you and cancel at any time without hassle.',
    price: '₵1,500',
    features: [
      'Advance invoicing',
      'Generate Purchase Orders',
      'Inventory analytics',
      'Live phone support',
      'Online Checkout',
      'Single Location',
      '1 Warehouse',
      'Barcode generation and printing',
    ],
  },
  {
    title: 'Advanced',
    description:
      'Create a tailored plan designed to address the unique complexities of your operations. Custom processing rates may be offered based on eligibility.',
    price: 'Custom',
    features: [
      'Staff Payroll',
      'Advanced Accounting',
      'Warehouse Management',
      '24/7 support',
      'Integrations',
      'Online Ordering',
      'Multi Store ',
      'Business Account ',
      'Business Analytics ',
    ],
  },
];

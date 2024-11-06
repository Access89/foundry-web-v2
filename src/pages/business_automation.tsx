import InfoCard from '@/components/shared/info_card';
import { CustomButton } from '@/components/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';

const BusinessAutomation = () => {
  return (
    <main className="container">
      <section className="text-center pb-10">
        <p className="text-sm text-foundry-secondary font-medium uppercase mb-5">
          Welcome to Business Automation
        </p>
        <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl md:pr-10 mb-10 md:mb-0">
          Point of Sale <br /> for wherever you sell
        </h1>
        <p className="text-secondary-black text-sm my-5">
          From seamless logistics to on-time deliveries, we navigate the roads
          to success with you
        </p>
        <CustomButton className="bg-foundry-primary text-white font-medium px-5 ">
          Explore <Icon icon="solar:arrow-right-outline" fontSize={20} />
        </CustomButton>
      </section>

      <section className="border-3 border-white rounded-xl flex justify-center items-center pt-20 md:pt-16 mt-[4.5rem] lg:mt-10 relative">
        <div className="absolute -top-24 md:-top-10 left-1/2 transform -translate-x-1/2 w-[70%] lg:w-[50%] mx-auto bg-white rounded-3xl p-4 grid grid-cols-auto-fill-150 gap-2">
          {[
            {
              title: 'Manage Cashflow',
              description: 'Efficiently control and monitor finances',
            },
            {
              title: 'Reach Clients',
              description: 'Easily connect and engage customers',
            },
            {
              title: 'Advanced Reporting',
              description: 'Detailed insights and performance analysis',
            },
          ].map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <div className="w-[20%] h-0.5 bg-black my-1" />
              <p className="text-xs text-secondary-black">{item.description}</p>
            </div>
          ))}
        </div>

        <img
          src="/images/BA_1.webp"
          alt="pos device"
          className="w-[20rem] md:w-[28rem]"
        />
      </section>

      <section className="md:grid grid-cols-2 gap-x-5 mt-8 space-y-4 md:space-y-0">
        {[
          {
            title: 'Inventory',
            description:
              'Receive inventory, manage stock, and create purchase orders from a single platform.',
          },
          {
            title: 'Business Insights',
            description:
              'Streamline the allocation of resources and time slots, optimizing bookings to maximize business insights and efficiency',
          },
        ].map((item, index) => (
          <InfoCard
            key={index}
            title={item.title}
            description={item.description}
            titleClassName="text-2xl font-medium"
            descriptionClassName="text-base"
          />
        ))}
      </section>

      <section className="py-10">
        <div className="flex justify-between">
          <h2 className="font-medium text-3xl md:text-4xl mb-5">
            More from Business Automation
          </h2>
        </div>
        <div className="md:grid md:grid-cols-auto-fill-300 gap-5 space-y-5 md:space-y-0">
          {moreConstant.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default BusinessAutomation;

const moreConstant = [
  {
    title: 'HR & Payroll',
    description:
      'Simplify your  business operations by combining HR tasks into one system. This module manages employee records, payroll, benefits, and attendance, ensuring accurate calculations and compliance',
  },
  {
    title: 'Wholesale & Retail',
    description:
      'Access an integrated business management solution with financial tracking, operational control, pricing management, inventory oversight, and cash flow monitoring. Enhance efficiency, financial health, and focus on business growth.',
  },
  {
    title: 'Manufacturing',
    description:
      'Enhance your manufacturing operations with a unified manufacturing management solution covering production control, inventory management, quality assurance, and supply chain oversight, optimizing efficiency and supporting business expansion',
  },
  {
    title: 'Accounting',
    description:
      'Improve your financial oversight with this advanced tool providing real-time insights into budgeting, expense management, revenue tracking, and transaction reconciliation for informed decision-making.',
  },
  {
    title: 'CRM',
    description:
      'Organize and manage customer interactions and data, optimizing customer service, sales, and marketing efforts to enhance relationships and drive business growth.',
  },
  {
    title: 'Hospitality',
    description:
      'Manage your hospitality business with our comprehensive solution that integrates guest information, administrative tasks, financial management, and a special guest portal into one easy system.',
  },
];

import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Image, cn } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const LogisticsAndSupply = () => {
  const navigate = useNavigate();
  return (
    <main className="container">
      <section className="text-center pb-10">
        <p className="text-sm text-foundry-secondary font-medium uppercase mb-5">
          Welcome to logistics & Supply chain
        </p>
        <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl md:pr-10 mb-10 md:mb-0">
          Optimising resources, cutting <br /> costs, boosting competitiveness.
        </h1>
        <p className="text-secondary-black text-sm my-5">
          From seamless logistics to on-time deliveries, we navigate the roads
          to success with you
        </p>
        <CustomButton className="bg-foundry-primary text-white font-medium px-5 ">
          Explore <Icon icon="solar:arrow-right-outline" fontSize={20} />
        </CustomButton>
      </section>

      <section className="border-3 border-white rounded-xl py-20 relative ">
        <div className="absolute z-50 -bottom-32 md:-bottom-12 left-1/2 transform -translate-x-1/2 w-[85%] lg:w-[90%] mx-auto bg-white rounded-3xl p-4 grid md:grid-cols-auto-fill-220 lg:grid-cols-auto-fill-250 xl:grid-cols-auto-fill-300 gap-2">
          {[
            {
              title: 'Improved Efficiency',
              description:
                'Streamlined logistics speed up order fulfilment and ensure smooth operations.',
            },
            {
              title: 'Cost Savings',
              description:
                'Effective logistics cuts costs, reduces waste, and boosts profitability.',
            },
            {
              title: 'Enhanced Customer Satisfaction',
              description:
                'Efficient supply chains ensure satisfied customers with timely, accurate deliveries.',
            },
          ].map((item, index) => (
            <div key={index}>
              <h2 className="text-nowrap">{item.title}</h2>
              <div className="w-[20%] h-0.5 bg-black my-1" />
              <p className="text-xs text-secondary-black">{item.description}</p>
            </div>
          ))}
        </div>
        <img
          src="/icons/Map_1.svg"
          alt="map_1"
          className="w-[20rem] md:w-[27rem] absolute right-0 top-0 -z-0"
        />
        <img
          src="/images/LS_1.webp"
          alt="truck"
          className="md:w-[21rem] ml-auto mr-32 "
        />
        <img
          src="/images/LS_2.webp"
          alt="card"
          className="w-[12rem] absolute md:top-2/3 top-1/2 -translate-y-1/2 right-0 md:right-10"
        />
        <img
          src="/icons/Map_2.svg"
          alt="map_2"
          className="w-[18rem] hidden md:block absolute left-0 bottom-0"
        />
      </section>

      <section className="py-10 pt-36 md:pt-20">
        <div className="flex justify-between">
          <h2 className="font-medium text-3xl md:text-4xl mb-5">
            More from Logistics & Supply Chain
          </h2>
        </div>
        <div className=" space-y-5">
          {logistics.map((item, index) => (
            <div
              onClick={() => navigate(item.link)}
              key={index}
              className="bg-secondary-light rounded-2xl hover:scale-[1.01] hover:shadow transition-all p-4 group lg:px-6 w-full gap-y-3 grid lg:grid-cols-[0.35fr,1fr] gap-x-5 cursor-pointer"
            >
              <div className="flex items-center justify-between gap-x-2.5">
                <div>
                  <Icon
                    icon="eva:checkmark-square-fill"
                    fontSize={24}
                    className="text-foundry-secondary"
                  />
                  <h1 className={cn('text-xl font-medium')}>{item.title}</h1>
                  <p className={cn('text-[#575757] text-sm leading-6')}>
                    {item.description}
                  </p>
                </div>
                <div className="flex-1">
                  <Icon
                    icon="fluent-emoji-high-contrast:right-arrow"
                    fontSize={22}
                    className="text-foundry-secondary group-hover:translate-x-2 transition-all"
                  />
                </div>
              </div>
              <div className="lg:grid grid-cols-auto-fill-220 gap-x-3">
                {item.subItems.map((itx, idx) => (
                  <div key={idx}>
                    <Icon
                      icon="eva:checkmark-square-fill"
                      fontSize={18}
                      className="text-foundry-secondary"
                    />
                    <h1 className={cn('text-base font-medium')}>{itx.title}</h1>
                    <p className={cn('text-[#575757] text-xs leading-6')}>
                      {itx.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LogisticsAndSupply;

const logistics = [
  {
    title: 'Booking Management',
    link: 'booking-management',
    description:
      'Efficiently coordinate and manage bookings to streamline logistical operations.',
    subItems: [
      {
        title: 'Efficient Scheduling',
        description:
          'Streamline the allocation of resources and time slots, optimising bookings to minimise gaps and maximise utilisation',
      },
      {
        title: 'Real-time Updates',
        description:
          'Maintain accurate and up-to-date information on bookings, ensuring prompt communication and adaptability to changes or cancellations.',
      },
      {
        title: 'Resource Optimisation',
        description:
          'Utilise data analytics to forecast demand, allocate resources effectively, and identify opportunities for improving efficiency in logistics operations.',
      },
    ],
  },
  {
    title: 'Order Management',
    link: 'order-management',
    description:
      'Oversee the lifecycle of orders, from placement to fulfilment, ensure timely processing and delivery.',
    subItems: [
      {
        title: 'Efficient Inventory Control',
        description:
          'Streamlining the tracking and organization of stock levels and locations to ensure timely replenishment and prevent stock outs, optimising storage space, and minimising holding costs.',
      },
      {
        title: 'Seamless Order Processing',
        description:
          'Implementing automated systems for order entry, verification, and fulfillment, enhancing accuracy, reducing processing times, and improving customer satisfaction through prompt delivery.',
      },
      {
        title: 'Robust Logistics Co-ordination',
        description:
          'Coordinating the movement of goods from suppliers to customers with precision, managing transportation, warehousing, and distribution networks effectively to meet delivery deadlines and reduce lead times.',
      },
    ],
  },
  {
    title: 'Trucking',
    link: 'trucking',
    description:
      'The backbone of logistics, delivering goods and driving economies forward.',
    subItems: [
      {
        title: 'Efficient Transportation',
        description:
          'Trucking enables the timely delivery of goods across vast distances, providing a crucial link in supply chains by efficiently moving cargo from manufacturers to distributors and retailers.',
      },
      {
        title: 'Flexibility and Accessibility',
        description:
          'With a highly adaptable network, trucking offers the flexibility to reach even remote locations, ensuring goods can be transported door-to-door with minimal disruption and maximum accessibility.',
      },
      {
        title: 'Economic Backbone',
        description:
          'Serving as the backbone of many economies, trucking fosters economic growth by facilitating trade and commerce, supporting industries ranging from retail to manufacturing through reliable transportation services.',
      },
    ],
  },
];

import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const NewUseCases = () => {
  const use_cases = [
    {
      link: '/use-cases/retail',
      title: 'Retail',
      
      icon: 'https://www.shutterstock.com/image-photo/female-retail-worker-standing-store-600nw-2487354813.jpg',
      description:
        'Transform shopper experience and optimize inventory, promotions, delivery and demand forecasting with enterprise AI.',
    },
    {
      link: '/use-cases/financial-services',
      title: 'Financial services',
      icon: 'https://st5.depositphotos.com/6338242/68514/i/450/depositphotos_685142928-stock-photo-financial-service-concept-businessman-using.jpg',
      description:
        'Rapidly deploy AI for CRM, smart lending, cash management, AML and more; scale across banking, insurance and wealth.',
    },
    // {
    //   link: '/use-cases/ev-charging',
    //   title: 'Electric Vehicle Charging Platform',
    //   icon: 'https://www.powermag.com/wp-content/uploads/2020/03/fig-1-car-charging-electric-vehicle-ev-electrification.jpg',
    //   description:
    //     'Optimize reliability, energy management, load forecasting, and operational asset uptime—leveraging AI at scale.',
    // },
    {
      link: '/use-cases/restaurant',
      title: 'Restaurant',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREjXOIxAb4w_BSxoO-qwRhAbHxZqO5hLfo4g&s',
      description:
        'Enhance demand forecasting, supply‑chain, energy and customer CRM insights across food and beverage operations with AI.',
    },
    {
      link: '/use-cases/logistics',
      title: 'Logistics and Supply Chain',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3X-6CPkdk9U9ERuKoQFlVitTop64hRVwtx_-aWPkN32t69uLGh0rmFxm0of2AwNxImkg&usqp=CAU',
      description:
        'Improve forecasting, route and delivery optimization, inventory and resilience across supply network via AI.',
    },
    {
      link: '/use-cases/fund-management',
      title: 'Fund Management',
      icon: 'https://www.shutterstock.com/image-photo/real-estate-professionals-clients-discussing-600nw-2175050111.jpg',
      description:
        'AI‑powered analytics for cash, risk, compliance, customer churn, and smart lending tailored to asset managers.',
    },
    {
      link: '/use-cases/manufacturing',
      title: 'Manufacturing',
      icon: 'https://freedesignfile.com/upload/2017/11/Cargo-transport-logistics-warehouse-Stock-Photo-10.jpg',
      description:
        'Drive inventory, supply‑network, production scheduling, quality, reliability and energy efficiency improvements via AI.',
    },
    {
      link: '/use-cases/fintech',
      title: 'Fintech',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvGHmylHthm7eKZ3bAvUmzvKCk8UFwsL2dw&s',
      description:
        'Apply enterprise‑grade AI across financial workloads: risk, personalization, compliance, fraud detection and credit decisions.',
    },
  ];

  return (
    <div className=" mx-[7rem] py-8">
      <h3 className="text-medium md:text-6xl  font-semibold mb-6 w-[70%]">
        Solving the unsolvable for the world’s biggest industries
      </h3>
      {/* <h3 className="text-medium md:text-5xl  font-semibold mb-6 w-[70%]">
        Find the best tools to streamline the toughest challenges in these use
        cases
      </h3> */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-[7rem]">
        {use_cases.map((uc) => (
          <Link
            key={uc.title}
            to={uc.link}
            className="relative group h-96 overflow-hidden "
          >
            <img
              src={uc.icon}
              alt={uc.title}
              className="w-full h-full object-cover"
            />
            {/* Bottom title overlay */}
            <div className="absolute bottom-6 left-8 w-full  bg-opacity-60 text-white text-2xl font-semibold transition-all duration-300 group-hover:bg-opacity-80">
              {uc.title}
            </div>
            {/* Full overlay on hover */}
            <div className="absolute  text-2xl inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end items-start px-6 py-6">
              <p className="mb-4  leading-relaxed">{uc.description}</p>
              <div className="flex  w-full items-center justify-between   font-medium">
                <p>{uc.title}</p>
                <p className="group-hover:translate-x-1 -translate-x-4 delay-75 transition-all">
                  <Icon icon="gravity-ui:arrow-right" />
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewUseCases;

/* eslint-disable @typescript-eslint/no-explicit-any */
import SuccessStories, {
  SuccessStoriesProps,
} from '@/components/reusable/success-stories-section';
import { CustomButton } from '@/components/shared/shared_customs';
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from '@nextui-org/react';
import { useMemo } from 'react';

const OurPlatforms = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const all = [
    {
      key: 'business',
      link: '/our-platforms/business',
      title: 'Business',
      icon: 'streamline-cyber:business-chart-4',
      description: 'Tools and infrastructure to power everyday operations.',
      subitems: [],
    },
    {
      key: 'finance',
      link: '/our-platforms/finance',
      title: 'Finance',
      icon: 'material-symbols-light:money-bag-outline',
      description: 'Embedded financial infrastructure for modern businesses.',
      subitems: [],
    },
    {
      key: 'trade',
      link: '/our-platforms/trade',
      title: 'Trade',
      icon: 'mdi-light:truck',
      description: 'Simplifying how businesses move goods and make payments.',
      subitems: [],
    },
  ];

  const moduleData = useMemo(() => {
    if (pathname.includes('business')) {
      return {
        ...all.find((a) => a.key === 'business'),
        subitems: [
          'Expense Management',
          'People',
          'Recruitment',
          'HR',
          'Procurement',
          'Analytics',
          'Business APIs',
          'Point of Sale',
          'Foundry Terminal',
          'Invoice Management',
          'Reconcile Transactions',
          'ERP',
        ],
      };
    } else if (pathname.includes('finance')) {
      return {
        ...all.find((a) => a.key === 'finance'),
        subitems: [
          'Onboarding',
          'Core Banking',
          'Digital Banking',
          'Banking as a Service',
          'Lending',
        ],
      };
    } else if (pathname.includes('trade')) {
      return {
        ...all.find((a) => a.key === 'trade'),
        subitems: [
          'Logistics',
          'Warehousing',
          'Make Payments',
          'Track Orders',
          'Foundry Hub',
          'Cornershop',
          'FX',
          'Treasury',
        ],
      };
    } else {
      return null;
    }
  }, [pathname]);

  return (
    <main className="">
      <section className="container">
        <section className="">
          <div className="bg-primary/10 rounded-xl relative overflow-hidden flex flex-col">
            <div className="lg:px-28 md:pt-16 md:pb-28 px-5 flex flex-col-reverse md:flex-col">
              <div className="lg:max-w-lg md:max-w-xs mt-20">
                <h1 className="font-medium text-2xl md:text-4xl w-[50vw]">
                  Lorem ipsum dolor sit amet
                </h1>
                <p className="text-secondary-black text-base md:text-xl my-7">
                  consectetur adipisicing elit. Quibusdam deserunt fuga
                  excepturi sed delectus veniam maxime fugit, facere tempora,
                  voluptatem accusantium repellendus aliquam magnam in magni
                  modi. Ullam, itaque quis!{' '}
                </p>
                <div className="flex items-center gap-x-4">
                  <CustomButton
                    onPress={() => navigate('/book-a-demo')}
                    className="bg-primary text-white font-medium px-5 "
                  >
                    Book Demo
                  </CustomButton>
                </div>
              </div>
              <Image
                src="/images/LS_3.webp"
                alt="AI marketplace"
                // width={336}
                // height={458}
                classNames={{
                  wrapper:
                    'absolute right-10 rounded-none top-0 w-[5rem] h-[5rem] md:h-[20rem] md:w-[20rem]',
                  img: 'rounded-none',
                }}
              />
            </div>

            <div className="border-t md:border-0 p-4 mt-0 md:mt-16  flex items-center flex-col md:flex-row gap-5"></div>
          </div>
        </section>

        <section className="py-10 pt-28 lg:pt-20">
          {moduleData && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                {moduleData.title}
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                {moduleData.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {moduleData.subitems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-neutral-900 text-white p-4 rounded-lg shadow hover:shadow-lg transition"
                  >
                    <div className="text-sm font-medium">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className=" lg:mt-8 lg:pt-5 ">
          <SuccessStories {...exampleData} />
        </section>
      </section>
    </main>
  );
};

// Example usage
const exampleData: SuccessStoriesProps = {
  title: 'Customer Success Stories',
  links: [
    { title: 'Read Foundry Reviews', link: '/foundry-reviews' },
    { title: 'View all Testimonials', link: '/testimonials' },
  ],
  cards: [
    {
      type: 'text',
      content:
        '"Stock loss has reduced and sales are booming. Foundry has grown and helped us implement all these different parts."',
      author: 'Cecilia Dekyi, Cepodek',
      buttonText: 'Read the case study',
    },
    {
      type: 'image',
      imageSrc: '/images/LS_4.webp', // Update to the correct image URL
      imageAlt: 'Afro woman in beauty store',
      overlayText: 'The importance of data to WeNaturals',
      overlayIcon: '/icons/play.svg',
    },
    {
      type: 'stats',
      title: 'SHIELD Microfinance',
      stats: [
        { value: '47%', label: 'revenue increase year over year' },
        { value: '30,000', label: 'transactions per month' },
      ],
      buttonText: 'See their Foundry Setup',
    },
  ],
};

export default OurPlatforms;

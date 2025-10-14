/* eslint-disable @typescript-eslint/no-explicit-any */
import SuccessStories, {
  SuccessStoriesProps,
} from '@/components/reusable/success-stories-section';
import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { UsecaseData } from './data';
import { useMemo } from 'react';
import { Image } from '@nextui-org/react';

const ViewUseCase = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const module: string = pathname.split('/')[2];
  const current = UsecaseData?.[module];

  const columnCount = useMemo(() => {
    const len = current?.['core-features']?.length ?? 1;
    if (len === 4) return 2;
    if (len % 3 === 0) return 3;
    return 2; // default to 2 if not 3-divisible
  }, [current]);

  const currentUseCaseSuccessStories = useMemo(() => {
    // Check if the 'module' exists in our defined success stories data
    if (module && useCaseSuccessStoriesData[module]) {
      return useCaseSuccessStoriesData[module];
    }
    return useCaseSuccessStoriesData.default; // Fallback to a default if no match
  }, [module]);

  return (
    <main className="">
      <section className="container">
        <section className="">
          <div className=" rounded-xl relative overflow-hidden flex flex-col">
            <div className="lg:px-28 md:pt-16 md:pb-28 px-5 flex flex-col-reverse md:flex-col">
              <div className="lg:max-w-lg md:max-w-xs mt-20">
                <h1 className="font-medium text-[#434343] text-2xl md:text-6xl w-[50vw]">
                  {current?.['title']}
                </h1>
                <p className="text-secondary-black text-base md:text-xl my-7">
                  {current?.['description']}
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
          <div className="text-center">
            <h2 className="font-medium text-3xl md:text-4xl ">Core Products</h2>
            <p className="text-primary lg:text-[1.2rem]  my-5">
              {current?.['features-description']}
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-${columnCount} gap-5 mt-10`}
          >
            {current?.['core-features']?.map((e: any, idx: number) => {
              const isOdd = idx % 2 === 1;
              return (
                <div
                  key={idx}
                  className={
                    isOdd
                      ? 'relative bg-[#E4EEF0] text-[#1A1A1A] p-6 rounded-xl h-[300px] flex flex-col border border-[#E6E6E6]'
                      : 'relative bg-[#075056] text-white p-6 rounded-xl h-[300px] flex flex-col'
                  }
                >
                  {/* icon first for even, icon last for odd to alternate layout visually */}
                  {!isOdd && (
                    <Icon
                      icon={e.icon}
                      fontSize={30}
                      className="group-hover:translate-x-1 transition-all text-white w-[2rem]"
                    />
                  )}

                  <div className="mt-auto text-xl max-w-[15rem]">
                    <h5 className="pb-4">{e.description}</h5>
                    <p className="text-sm flex items-center gap-x-1 hover:opacity-80 group">
                      {e.title}
                    </p>
                  </div>

                  {isOdd && (
                    <div className="absolute top-6 right-6">
                      <Icon
                        icon={e.icon}
                        fontSize={30}
                        className="group-hover:translate-x-1 transition-all text-[#1A1A1A] w-[2rem]"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* <section className=" lg:mt-8 lg:pt-5  ">
          <InfoSectionWithGoals
            sectionTitle={current?.title}
            sectionDescription={current?.description}
            goalsTitle="Your Business Goals"
            solutionTitle="How to Solve It with Foundry"
            goals={current?.goals?.map(
              (item: { title: string; description: string }) => ({
                title: item.title,
                desc: [item.description],
              }),
            )}
          />
        </section> */}

        <section className=" lg:mt-8 lg:pt-5 ">
          <SuccessStories {...currentUseCaseSuccessStories} />
        </section>
      </section>

      {/* <InfoSectionWithVideo
        videoElement={
          <div className="bg-[#D9D9D9]/30 flex justify-center items-center h-[25rem]">
            <img src="/icons/camera.svg" alt="camera" className="w-[5rem]" />
          </div>
        }
      /> */}
    </main>
  );
};

// // Example usage
// const exampleData: SuccessStoriesProps = {
//   title: 'Customer Success Stories',
//   links: [
//     { title: 'Read Foundry Reviews', link: '/foundry-reviews' },
//     { title: 'View all Testimonials', link: '/testimonials' },
//   ],
//   cards: [
//     {
//       type: 'text',
//       content:
//         '"Stock loss has reduced and sales are booming. Foundry has grown and helped us implement all these different parts."',
//       author: 'Cecilia Dekyi, Cepodek',
//       buttonText: 'Read the case study',
//     },
//     {
//       type: 'image',
//       imageSrc: '/images/LS_4.webp', // Update to the correct image URL
//       imageAlt: 'Afro woman in beauty store',
//       overlayText: 'The importance of data to WeNaturals',
//       overlayIcon: '/icons/play.svg',
//     },
//     {
//       type: 'stats',
//       title: 'SHIELD Microfinance',
//       stats: [
//         { value: '47%', label: 'revenue increase year over year' },
//         { value: '30,000', label: 'transactions per month' },
//       ],
//       buttonText: 'See their Foundry Setup',
//     },
//   ],
// };

const useCaseSuccessStoriesData: Record<string, SuccessStoriesProps> = {
  retail: {
    title: 'Retail Success Stories',
    links: [
      { title: 'Read Retail Case Studies', link: '/case-studies/retail' },
      { title: 'All Retail Testimonials', link: '/testimonials/retail' },
    ],
    cards: [
      {
        type: 'text',
        content:
          '"Our sales jumped by 40% after implementing Foundry\'s POS and inventory system."',
        author: 'Alex K., Store Manager, Urban Boutique',
        buttonText: 'See their retail transformation',
      },
      {
        type: 'image', // MIDDLE CARD
        imageSrc: 'https://placehold.co/400',
        imageAlt: 'Woman smiling in a retail store',
        overlayText: 'Data-driven Customer Engagement',
        overlayIcon: '/icons/play.svg',
      },
      {
        type: 'stats',
        title: 'ShopSmart Chains',
        stats: [
          { value: '30%', label: 'reduction in stock loss' },
          { value: '15%', label: 'increase in average transaction value' },
        ],
        buttonText: 'Explore their operational gains',
      },
    ],
  },
  'financial-services': {
    title: 'Financial Services Innovation',
    links: [
      {
        title: 'Explore FinServ Case Studies',
        link: '/case-studies/financial-services',
      },
      {
        title: 'Client Success Stories',
        link: '/testimonials/financial-services',
      },
    ],
    cards: [
      {
        type: 'text',
        content:
          '"Foundry\'s compliance automation saved us countless hours and reduced regulatory risks significantly."',
        author: 'Dr. Lena V., Head of Compliance, SecureWealth Bank',
        buttonText: 'Read about their compliance journey',
      },
      {
        type: 'image', // MIDDLE CARD
        imageSrc: 'https://placehold.co/400',
        imageAlt: 'Modern banking hall',
        overlayText: 'Automating Core Banking Operations',
        overlayIcon: '/icons/play.svg',
      },
      {
        type: 'stats',
        title: 'Vanguard Capital',
        stats: [
          { value: '50%', label: 'faster KYC onboarding' },
          { value: '99.9%', label: 'fraud detection accuracy' },
        ],
        buttonText: 'Discover their security uplift',
      },
    ],
  },
  manufacturing: {
    title: 'Manufacturing Efficiency Stories',
    links: [
      { title: 'View Mfg. Case Studies', link: '/case-studies/manufacturing' },
      {
        title: 'All Industry Testimonials',
        link: '/testimonials/manufacturing',
      },
    ],
    cards: [
      {
        type: 'text',
        content:
          '"Implementing Foundry\'s smart factory solutions led to a 20% increase in production."',
        author: 'Ben C., Plant Manager, Precision Parts Inc.',
        buttonText: 'See their production gains',
      },
      {
        type: 'image', // MIDDLE CARD
        imageSrc: 'https://placehold.co/400',
        imageAlt: 'Robots on an assembly line',
        overlayText: 'Real-time Production Analytics',
        overlayIcon: '/icons/play.svg',
      },
      {
        type: 'stats',
        title: 'Innovate Auto Assembly',
        stats: [
          { value: '25%', label: 'reduction in energy consumption' },
          { value: '18%', label: 'improvement in quality control' },
        ],
        buttonText: 'Learn about their smart factory',
      },
    ],
  },
  fintech: {
    title: 'Fintech Innovation Highlights',
    links: [
      { title: 'Fintech Case Studies', link: '/case-studies/fintech' },
      { title: 'Success Stories Portal', link: '/testimonials/fintech' },
    ],
    cards: [
      {
        type: 'text',
        content:
          '"Foundry\'s APIs were instrumental in launching our new digital wallet service, enabling seamless P2P transfers."',
        author: 'Chloe L., Product Lead, SwiftPay',
        buttonText: 'Read their launch story',
      },
      {
        type: 'image', // MIDDLE CARD
        imageSrc: 'https://placehold.co/400',
        imageAlt: 'Person using a fintech app on a phone',
        overlayText: 'From Idea to App Store in Weeks',
        overlayIcon: '/icons/play.svg',
      },
      {
        type: 'stats',
        title: 'CreditFlow Solutions',
        stats: [
          { value: '70%', label: 'faster loan application approval' },
          { value: '1M+', label: 'transactions processed securely' },
        ],
        buttonText: 'See their lending transformation',
      },
    ],
  },
  'ev-charging': {
    title: 'EV Charging Network Success',
    links: [
      { title: 'EV Charging Case Studies', link: '/case-studies/ev-charging' },
      { title: 'All EV Client Stories', link: '/testimonials/ev-charging' },
    ],
    cards: [
      {
        type: 'text',
        content:
          '"Managing our growing EV charging network was complex until Foundry provided a centralized platform."',
        author: 'Mark J., Operations Lead, GreenCharge',
        buttonText: 'Read their infrastructure story',
      },
      {
        type: 'image', // MIDDLE CARD
        imageSrc: 'https://placehold.co/400',
        imageAlt: 'Electric vehicle charging station',
        overlayText: 'Optimizing Charging Infrastructure',
        overlayIcon: '/icons/play.svg',
      },
      {
        type: 'stats',
        title: 'ChargeUp Networks',
        stats: [
          { value: '45%', label: 'increase in charger utilization' },
          { value: '99%', label: 'network uptime' },
        ],
        buttonText: 'Explore their network growth',
      },
    ],
  },
  restaurant: {
    title: 'Restaurant Excellence Stories',
    links: [
      { title: 'Restaurant Case Studies', link: '/case-studies/restaurant' },
      { title: 'Customer Testimonials', link: '/testimonials/restaurant' },
    ],
    cards: [
      {
        type: 'text',
        content:
          '"Our kitchen efficiency improved dramatically with Foundry\'s KDS."',
        author: 'Chef Leo P., Owner, The Gastronomy Hub',
        buttonText: 'See their kitchen transformation',
      },
      {
        type: 'image', // MIDDLE CARD
        imageSrc: 'https://placehold.co/400',
        imageAlt: 'Busy restaurant kitchen',
        overlayText: 'Streamlined Order Management',
        overlayIcon: '/icons/play.svg',
      },
      {
        type: 'stats',
        title: 'DineDash Eatery',
        stats: [
          { value: '20%', label: 'reduction in order errors' },
          { value: '15%', label: 'increase in table turnover' },
        ],
        buttonText: 'View their operational improvements',
      },
    ],
  },
  logistics: {
    title: 'Logistics & Supply Chain Wins',
    links: [
      { title: 'Logistics Case Studies', link: '/case-studies/logistics' },
      { title: 'Supply Chain Successes', link: '/testimonials/logistics' },
    ],
    cards: [
      {
        type: 'text',
        content:
          '"Foundry gave us full visibility from warehouse to delivery."',
        author: 'Sam G., Logistics Manager, Global Connect',
        buttonText: 'Read their visibility story',
      },
      {
        type: 'image', // MIDDLE CARD
        imageSrc: 'https://placehold.co/400',
        imageAlt: 'Logistics trucks on the road',
        overlayText: 'Fleet Management Mastery',
        overlayIcon: '/icons/play.svg',
      },
      {
        type: 'stats',
        title: 'SwiftFreight Solutions',
        stats: [
          { value: '10%', label: 'reduction in fuel costs' },
          { value: '95%', label: 'on-time delivery rate' },
        ],
        buttonText: 'Explore their route optimization',
      },
    ],
  },
  'fund-management': {
    title: 'Fund Management Triumphs',
    links: [
      {
        title: 'Fund Management Case Studies',
        link: '/case-studies/fund-management',
      },
      { title: 'Investor Stories', link: '/testimonials/fund-management' },
    ],
    cards: [
      {
        type: 'text',
        content:
          '"Automating our investor reporting with Foundry saved us hundreds of hours each quarter. Transparency has never been easier."',
        author: 'Jessica H., Fund Administrator, Apex Funds',
        buttonText: 'Discover their reporting efficiency',
      },
      {
        type: 'image', // MIDDLE CARD
        imageSrc: 'https://placehold.co/400',
        imageAlt: 'Financial graphs and charts',
        overlayText: 'Optimized Portfolio Oversight',
        overlayIcon: '/icons/play.svg',
      },
      {
        type: 'stats',
        title: 'Quantum Investment Group',
        stats: [
          { value: '40%', label: 'faster fund reconciliation' },
          { value: '$1B+', label: 'assets under management on Foundry' },
        ],
        buttonText: 'See their AUM growth',
      },
    ],
  },
  // Default or fallback data if no specific use case matches
  default: {
    title: 'Our Customer Success Stories',
    links: [
      { title: 'Read Foundry Reviews', link: '/foundry-reviews' },
      { title: 'View all Testimonials', link: '/testimonials' },
    ],
    cards: [
      {
        type: 'text',
        content:
          '"Foundry transformed how we operate. Their solutions are intuitive and highly effective."',
        author: 'A Happy Customer, Global Inc.',
        buttonText: 'Learn more',
      },
      {
        type: 'image', // Default also has image in the middle
        imageSrc: 'https://placehold.co/400',
        imageAlt: 'Customer success',
        overlayText: 'Innovating with Foundry',
        overlayIcon: '/icons/play.svg',
      },
      {
        type: 'stats',
        title: 'Tech Solutions Co.',
        stats: [
          { value: '50%', label: 'increase in productivity' },
          { value: '99%', label: 'customer satisfaction' },
        ],
        buttonText: 'View their success story',
      },
    ],
  },
};

export default ViewUseCase;

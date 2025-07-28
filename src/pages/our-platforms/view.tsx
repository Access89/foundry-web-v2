/* eslint-disable @typescript-eslint/no-explicit-any */

import { CustomButton } from '@/components/shared/shared_customs';
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from '@nextui-org/react';
import { useEffect, useMemo, useState } from 'react';
import { useRef } from 'react';
import SuccessStories, {
  SuccessStoriesProps,
} from '@/components/reusable/success-stories-section';
import { main_platform_data } from './data/platform.data';

const ViewPlatforms = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const all = main_platform_data;

  const moduleData = all.find((item) => pathname.includes(item.key));

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current || !moduleData?.subitems?.length) return;

      const container = scrollRef.current;
      const cardWidth = 300; // fallback width
      const gap = 20; // assumed gap
      const scrollAmount = cardWidth + gap;

      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });

      setCurrentIndex((prev) => {
        const next = (prev + 1) % moduleData.subitems.length;
        return next;
      });
    }, 4000); //

    return () => clearInterval(interval);
  }, [moduleData]);

  const currentSuccessStories = useMemo(() => {
    if (pathname.includes('business')) {
      return successStoriesData.business;
    } else if (pathname.includes('finance')) {
      return successStoriesData.finance;
    } else if (pathname.includes('trade')) {
      return successStoriesData.trade;
    } else {
      return successStoriesData.default; // Fallback to a default if no match
    }
  }, [pathname]);

  const colors = ['text-[#929292]', 'text-[#000000]', 'text-[#619B7D]'];

  return (
    <main className="">
      <section className="">
        <section className="container">
          <div className=" rounded-xl relative overflow-hidden flex flex-col">
            <div className="lg:px-28 md:pt-16 md:pb-10 px-5 flex flex-col-reverse md:flex-col">
              <div className="lg:max-w-lg md:max-w-xs mt-20">
                <h1 className="font-medium text-[#434343] text-xl sm:text-2xl md:text-[4rem] w-full max-w-full leading-snug sm:leading-tight break-words">
                  {/* First two words together */}
                  <span className="whitespace-nowrap">
                    <span className={`${colors[0]} mr-2 inline-block`}>
                      {moduleData?.title?.split(' ')[0]}
                    </span>
                    <span
                      className={`${colors[1]} font-bold mr-2 inline-block`}
                    >
                      {moduleData?.title?.split(' ')[1]}
                    </span>
                  </span>

                  {/* Remaining words */}
                  {moduleData?.title
                    ?.split(' ')
                    .slice(2)
                    .map((word, idx) => (
                      <span
                        key={idx + 2}
                        className={`${
                          colors[(idx + 2) % colors.length]
                        } mr-2 inline-block`}
                      >
                        {word}
                      </span>
                    ))}
                </h1>

                <p className="text-secondary-black text-base md:text-xl my-7">
                  {moduleData?.description ||
                    'Explore the tools and services powering modern businesses.'}
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
                classNames={{
                  wrapper:
                    'absolute right-10 rounded-none top-0 w-[5rem] h-[5rem] md:h-[20rem] md:w-[20rem]',
                  img: 'rounded-none',
                }}
              />
            </div>

            <div className="border-t md:border-0 p-4 mt-0 md:mt-16 flex items-center flex-col md:flex-row gap-5"></div>
          </div>
        </section>

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold md:mb-10 text-center font-roboto w-full">
          <span className="text-[#929292]">Tailormade</span>{' '}
          <span className="text-[#000000]">for</span>{' '}
          <span className="text-[#619B7D] capitalize">{moduleData?.key}</span>
        </h1>
        <section className="py-10   flex items-center justify-center">
          <div className="overflow-hidden relative">
            <div
              className="flex gap-5 px-1 transition-transform duration-300 ease-in-out items-stretch justify-start overflow-x-auto scrollbar-hide scroll-smooth"
              ref={scrollRef}
              onScroll={() => {
                const scrollLeft = scrollRef.current?.scrollLeft ?? 0;
                const width = 250 + 20; // item width + gap
                setCurrentIndex(Math.round(scrollLeft / width));
              }}
            >
              {moduleData?.subitems.map((item, idx) => (
                <div
                  onClick={() => navigate(item.link)}
                  key={idx}
                  className={`cursor-pointer min-w-[80vw] sm:min-w-[40vw] lg:min-w-[18vw] min-h-[24rem] md:min-h-[28rem] lg:min-h-[30rem]
                    bg-[#36413E] bg-cover text-white p-0 rounded-2xl flex flex-col justify-between
                    shadow hover:shadow-lg transition-all duration-300 ease-in-out transform
                    ${idx === currentIndex + 2 ? 'scale-100' : 'scale-95'}`}
                  style={{
                    backgroundImage: `url(${item.bg})`,
                    backgroundPosition: 'left 80%',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  {/* Title Block */}
                  <div className="p-8">
                    <div className="text-xl text-center font-semibold text-[#272727]">
                      {item.title}
                    </div>
                  </div>

                  {/* Glass Panel (mimicking the image card footer) */}
                  <div className="absolute text-[#272727] bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 flex justify-between items-center">
                    <div className="text-sm  opacity-90">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {moduleData?.subitems.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (!scrollRef.current) return;
                    const container = scrollRef.current;
                    const cardWidth = 300;
                    const gap = 20;
                    container.scrollTo({
                      left: idx * (cardWidth + gap),
                      behavior: 'smooth',
                    });
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 w-2 rounded-full cursor-pointer ${
                    idx === currentIndex
                      ? 'bg-primary scale-110'
                      : 'bg-gray-400'
                  } transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </section>
      </section>

      <section className=" lg:mt-8 lg:pt-5 ">
        <SuccessStories {...currentSuccessStories} />
      </section>
    </main>
  );
};

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

const successStoriesData: Record<string, SuccessStoriesProps> = {
  business: {
    title: 'Customer Success Stories',
    links: [
      { title: 'Explore Business Case Studies', link: '/business-cases' },
      { title: 'Read All Reviews', link: '/reviews' },
    ],
    cards: [
      {
        type: 'text',
        content:
          '"Stock loss has reduced and sales are booming. Foundry has grown and helped us implement all these different parts."',
        author: 'Cecilia Dekyi, Cepodek',
        buttonText: 'See their transformation',
      },
      {
        type: 'image',
        imageSrc: '/images/LS_4.webp', // Placeholder
        imageAlt: 'Happy business owner checking dashboard',
        overlayText: 'How Analytics Powered Their Growth',
        overlayIcon: '/icons/play.svg',
      },
      {
        type: 'stats',
        title: 'Coalition of Concerned Teachers (CCT)',
        stats: [
          { value: '35%', label: 'reduction in operational costs' },
          { value: '1,500+', label: 'employees managed effortlessly' },
        ],
        buttonText: 'View the Business Impact',
      },
    ],
  },
  finance: {
    title: 'Customer Success Stories',
    links: [
      { title: 'Discover Finance Case Studies', link: '/finance-cases' },
      { title: 'View Client Testimonials', link: '/client-testimonials' },
    ],
    cards: [
      {
        type: 'text',
        content:
          '"The embedded finance solutions allowed us to offer new services, boosting customer loyalty and revenue significantly."',
        author: 'John doe., Negios Microfinance',
        buttonText: 'Read the financial journey',
      },
      {
        type: 'image',
        imageSrc: 'https://placehold.co/400', // Placeholder
        imageAlt: 'Digital banking interface',
        overlayText: 'Launching a Neo-Bank in 3 Months',
        overlayIcon: '/icons/play.svg',
      },
      {
        type: 'stats',
        title: 'SHIELD Microfinance',
        stats: [
          { value: '47%', label: 'revenue increase year over year' },
          { value: '30,000', label: 'transactions per month' },
        ],
        buttonText: 'Explore their Lending Success',
      },
    ],
  },
  trade: {
    title: 'Customer Success Stories',
    links: [
      { title: 'Browse Trade Case Studies', link: '/trade-cases' },
      { title: 'Success Stories Hub', link: '/stories-hub' },
    ],
    cards: [
      {
        type: 'stats',
        title: 'Global Spices Traders',
        stats: [
          { value: '20%', label: 'reduction in shipping delays' },
          { value: '98%', label: 'on-time delivery rate' },
        ],
        buttonText: 'See their Trade Efficiency',
      },
      {
        type: 'image',
        imageSrc: 'https://placehold.co/400', // Placeholder
        imageAlt: 'Warehouse automation system',
        overlayText: 'Streamlining Warehouse Operations',
        overlayIcon: '/icons/play.svg',
      },
      {
        type: 'text',
        content:
          '"Foundry Hub gave us unparalleled visibility into our supply chain. We now make faster, more informed decisions."',
        author: 'Maria S., Operations Director, OmniGoods Logistics',
        buttonText: 'Dive into their logistics story',
      },
    ],
  },
  // Default or fallback data if no specific platform matches (optional)
  default: {
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
  },
};

export default ViewPlatforms;

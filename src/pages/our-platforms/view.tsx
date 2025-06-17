/* eslint-disable @typescript-eslint/no-explicit-any */

import { CustomButton } from '@/components/shared/shared_customs';
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from '@nextui-org/react';
import { useEffect, useMemo, useState } from 'react';
import { useRef } from 'react';

const ViewPlatforms = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          {
            title: 'Expense Management',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          { title: 'People', bg: '/images/our-platforms/view/globe-bg.png' },
          {
            title: 'Recruitment',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          { title: 'HR', bg: '/images/our-platforms/view/globe-bg.png' },
          {
            title: 'Procurement',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          { title: 'Analytics', bg: '/images/our-platforms/view/globe-bg.png' },
          {
            title: 'Business APIs',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          {
            title: 'Point of Sale',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          {
            title: 'Foundry Terminal',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          {
            title: 'Invoice Management',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          {
            title: 'Reconcile Transactions',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          { title: 'ERP', bg: '/images/our-platforms/view/globe-bg.png' },
        ],
      };
    } else if (pathname.includes('finance')) {
      return {
        ...all.find((a) => a.key === 'finance'),
        subitems: [
          { title: 'KYC', bg: '/images/our-platforms/view/globe-bg.png' },
          {
            title: 'Core Banking',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          {
            title: 'Digital Banking',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          {
            title: 'Banking as a Service',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          { title: 'Lending', bg: '/images/our-platforms/view/globe-bg.png' },
        ],
      };
    } else if (pathname.includes('trade')) {
      return {
        ...all.find((a) => a.key === 'trade'),
        subitems: [
          { title: 'Logistics', bg: '/images/our-platforms/view/globe-bg.png' },
          {
            title: 'Warehousing',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          {
            title: 'Make Payments',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          {
            title: 'Track Orders',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          {
            title: 'Foundry Hub',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          {
            title: 'Cornershop',
            bg: '/images/our-platforms/view/globe-bg.png',
          },
          { title: 'FX', bg: '/images/our-platforms/view/globe-bg.png' },
          { title: 'Treasury', bg: '/images/our-platforms/view/globe-bg.png' },
        ],
      };
    } else {
      return null;
    }
  }, [pathname]);

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
    }, 2000); //

    return () => clearInterval(interval);
  }, [moduleData]);

  return (
    <main className="">
      <section className="">
        <section className="container">
          <div className="bg-primary/10 rounded-xl relative overflow-hidden flex flex-col">
            <div className="lg:px-28 md:pt-16 md:pb-28 px-5 flex flex-col-reverse md:flex-col">
              <div className="lg:max-w-lg md:max-w-xs mt-20">
                <h1 className="font-medium text-2xl md:text-4xl w-[50vw]">
                  {moduleData?.title || 'Our Platforms'}
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

        <section className="py-10 pt-28 lg:pt-20 flex items-center justify-center">
          <div className="overflow-hidden relative">
            <div
              className="flex gap-5 px-1 transition-transform duration-300 ease-in-out items-stretch justify-start overflow-x-auto scroll-smooth"
              ref={scrollRef}
              onScroll={() => {
                const scrollLeft = scrollRef.current?.scrollLeft ?? 0;
                const width = 250 + 20; // item width + gap
                setCurrentIndex(Math.round(scrollLeft / width));
              }}
            >
              {moduleData?.subitems.map((item, idx) => (
                <div
                  key={idx}
                  className={`min-w-[80vw] sm:min-w-[40vw] lg:min-w-[18vw] min-h-[24rem] md:min-h-[28rem] lg:min-h-[30rem]
                    bg-[#36413E] bg-cover text-white p-0 rounded-2xl flex flex-col justify-between
                    shadow hover:shadow-lg transition-all duration-300 ease-in-out transform
                    ${idx === currentIndex + 2 ? 'scale-100' : 'scale-95'}`} // style={{
                  //   backgroundImage: `url(${item.bg})`,
                  //   backgroundPosition: 'left 80%',
                  //   backgroundRepeat: 'no-repeat',
                  // }}
                >
                  {/* Title Block */}
                  <div className="p-8">
                    <div className="text-xl font-semibold">{item.title}</div>
                  </div>

                  {/* Glass Panel (mimicking the image card footer) */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 flex justify-between items-center">
                    <div className="text-sm text-white opacity-90">
                      Savings Feature
                    </div>
                    <div className="text-white font-semibold text-sm">
                      £100,000
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
    </main>
  );
};

export default ViewPlatforms;

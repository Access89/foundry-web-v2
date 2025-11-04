/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useSwipeable } from 'react-swipeable';

const CARDS_TO_SHOW = {
  desktop: 4,
  semidesktop: 3,
  tablet: 2,
  mobile: 1,
};

const foundry_stars = [
  {
    title: '  Finance your inventory or Purchase orders',
    boldedGreen: ['Finance your', 'inventory'],
    breakAt: ['or'],
    boldedBlack: ['Purchase orders'], 
    link: '/loan',
    image: '/images/foundry_stars/MobilePhone.png',
    imageSize: 'w-[38%] h-[120px]',
    accentClass: 'text-[#075056]', 
  },
  {
    title: 'I want to trade ',
    boldedGreen: ['I want to'],
    breakAt: ['I want to'],
    boldedBlack: ['trade '],
    link: 'https://hub.foundry-platform.app/',
    image: '/images/foundry_stars/TradeInter.png',
    imageSize: 'w-[40%]',
    external: true,
    widthHeight: 'w-[260px] h-[150px]',
    accentClass: 'text-[#075056]', // Change to your desired color
  },
  {
    title: 'I want to manage my business',
    boldedGreen: ['I want to'],
    boldedBlack: ['manage my business'],
    link: '/our-platforms/businesss',  
    image: '/images/foundry_stars/POSImage.webp',
    imageSize: 'w-[38%]',
    accentClass: 'text-[#075056]', // Change to your desired color
  },
  {
    title: 'I want to embed Finance into my platform with one API',
    boldedGreen: ['I want to embed'],
    boldedBlack: ['Finance'],
    link: 'https://developer.access89.com/api-reference/origination',
    image: '/images/foundry_stars/finance.webp',
    imageSize: 'w-[30%]',
    external: true,
    widthHeight: 'w-[360px] h-[150px]',
    accentClass: 'text-[#075056]', // Change to your desired color
  },
  // {
  //   title: "I want to hire a sales person",
  //   boldedGreen: ["I want to"],
  //   boldedBlack: ["hire"],
  //   link: "/hire",
  //   imageSize: "w-[20%]",
  //   image: "/images/foundry_stars/foundry_stars_api.png"
  // }
];
interface FoundryCardProps {
  title: string;
  boldedGreen: string[];
  boldedBlack: string[];
  breakAt?: string[];
  link: string;
  image: string;
  imageSize: string;
  external?: boolean;
  onpagenav?: boolean;
  widthHeight?: string;
  full?: boolean;
  accentClass?: string;
}

const FoundryCard: React.FC<FoundryCardProps> = ({
  title,
  boldedGreen,
  boldedBlack,
  breakAt = [],
  link,
  image,
  imageSize = 'w-[30%]',
  external,
  onpagenav,
  widthHeight,
  full,
  accentClass = 'text-[#075056]',
}) => {
  const highlightText = (
    text: string,
    greenHighlights: string[],
    blackHighlights: string[],
    breakPoints: string[],
  ) => {
    const regex = new RegExp(
      `(${[...greenHighlights, ...blackHighlights, ...breakPoints].join('|')})`,
      'gi',
    );
    const parts = text.split(regex);
    return parts.map((part, i) => {
      if (greenHighlights.includes(part)) {
        return (
          <span key={i} className={`${accentClass} font-light`}>
            {part}
          </span>
        );
      }
      if (blackHighlights.includes(part)) {
        return (
          <span key={i} className="text-black font-semibold">
            {part}
          </span>
        );
      }
      if (breakPoints.includes(part)) {
        return (
          <React.Fragment key={i}>
            {part}
            <br />
          </React.Fragment>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return external ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white rounded-lg my-5 shadow-[0px_2px_11px_2px_rgba(0,0,0,0.09)] flex items-end gap-4 hover:shadow-[0px_4px_15px_3px_rgba(0,0,0,0.12)] transition-transform w-[300px] h-[150px] hover/card:scale-110 ${
        full ? 'w-full' : widthHeight
      }`}
    >
      <div className="flex-1 pt-3 pb-5 lg:pb-8 pl-5 justify-between flex flex-col h-full">
        <h3 className="text-base leading-snug font-sans">
          {highlightText(title, boldedGreen, boldedBlack, breakAt)}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
      className={`mt-4 inline-block w-fit rounded-full border border-[#075056]/50 p-2 hover/card:scale-110 transition-transform`}
        >
          <Icon
            icon="prime:arrow-right"
            className={accentClass}
            fontSize={24}
          />
        </a>
      </div>
      <div className={`${imageSize} flex-shrink-0`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
    </a>
  ) : onpagenav ? (
    <a
      href={link}
      // target="_blank"
      rel="noopener noreferrer"
      className={`bg-white rounded-lg my-5 shadow-[0px_2px_11px_2px_rgba(0,0,0,0.09)] flex items-end gap-4 hover:shadow-[0px_4px_15px_3px_rgba(0,0,0,0.12)] transition-transform w-[300px] h-[150px] hover/card:scale-110 ${
        full ? 'w-full' : widthHeight
      }`}
    >
      <div className="flex-1 pt-3 pb-5 lg:pb-8 pl-5 justify-between flex flex-col h-full">
        <h3 className="text-base leading-snug font-sans">
          {highlightText(title, boldedGreen, boldedBlack, breakAt)}
        </h3>
        <Link
          to={link}
          className="mt-4 inline-block w-fit rounded-full border border-[#075056]/50 p-2  transition-transform"
        >
          <Icon
            icon="prime:arrow-right"
            className={accentClass}
            fontSize={24}
          />
        </Link>
      </div>
      <div className={`${imageSize} flex-shrink-0`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
    </a>
  ) : (
        <Link
      to={link}
      className={`bg-white rounded-lg my-5 shadow-[0px_2px_11px_2px_rgba(0,0,0,0.09)] flex items-end gap-4 hover:shadow-[0px_4px_15px_3px_rgba(0,0,0,0.12)] transition-transform w-[300px] h-[150px] hover/card:scale-110 ${full ? 'w-full' : widthHeight}`}
      // pass accentClass through to nested usage via closure - keep prop for consistency
    >
      <div className="flex-1 pt-3 pb-5 lg:pb-8 pl-5 justify-between flex flex-col h-full">
        <h3 className="text-base leading-snug font-sans">
          {highlightText(title, boldedGreen, boldedBlack, breakAt)}
        </h3>
        <Link
          to={link}
          className="mt-4 inline-block w-fit rounded-full border border-[#075056] p-2  transition-transform"
        >
          <Icon
            icon="prime:arrow-right"
            className={accentClass}
            fontSize={24}
          />
        </Link>
      </div>
      <div className={`${imageSize} flex-shrink-0`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
    </Link>
  );
};

const FoundrySection = () => {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  // const [showHandClick, setShowHandClick] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => setShowHandClick(true), 1500); // show for 2.5s
  //   return () => clearTimeout(timeout);
  // }, []);

  // useEffect(() => {
  //   const timeout = setTimeout(() => setShowHandClick(false), 5000); // show for 2.5s
  //   return () => clearTimeout(timeout);
  // }, []);

  const updateCardsToShow = useCallback(() => setCardsToShow(getCardsToShow()), []);

  useEffect(() => {
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, [updateCardsToShow]);

  function getCardsToShow() {
    if (window.innerWidth < 640) return CARDS_TO_SHOW.mobile;
    if (window.innerWidth < 1020) return CARDS_TO_SHOW.tablet;
    if (window.innerWidth < 1440) return CARDS_TO_SHOW.semidesktop;
    return CARDS_TO_SHOW.desktop;
  }

  const handleSwipeLeft = useCallback(() => {
    setIndex((prev) => Math.min(prev + 1, foundry_stars.length - 1));
  }, []);

  const handleSwipeRight = useCallback(() => {
    setIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    trackMouse: true,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % foundry_stars.length);
    }, 3000); // Adjust this value (3000ms = 3s per move)

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="py-10 lg:mb-20 lg:mx-auto mx-5 flex flex-col overflow-visible flex-1 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-2 lg:mb-4 text-center font-roboto w-full px-4">
       <span className=" bg-gradient-to-r from-[#C65C3E] via-[#DFAF3E]  to-[#075056] bg-clip-text text-transparent"> Accelerating Growth</span><br/> <span className="bg-gradient-to-r from-[#C65C3E] via-[#DFAF3E]  to-[#075056] bg-clip-text text-transparent">for Everyday Businesses
       </span>
      </motion.h1>

      <div className="relative flex items-center justify-center w-full overflow-visible mt-2 md:mt-5 lg:mt-8 lg:pb-5">
        <img
          className="lg:w-[35%] md:w-[60%] w-[100%] h-auto"
          src="/images/foundry_stars/Main2.png"
          alt="hero"
        />

        {/* Scattered Cards */}
        <div className="hidden lg:flex absolute inset-0 z-10">
          {/* hand point */}
          {/* {showHandClick && (
            <motion.div
              initial={{ opacity: 0, x: 40, y: 40, scale: 0.8 }}
              animate={{ opacity: 1, x: -20, y: -20, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
              }}
              className="absolute z-50 pointer-events-none"
              style={{
                top: '15%', // Start lower vertically
                left: '28%', // Start more to the right
              }}
            >
              <Icon
                icon="fluent:cursor-click-20-filled"
                fontSize={40}
                className="text-black"
              />
            </motion.div>
          )} */}

          {foundry_stars.map((item, i) => {
            const positions = [
              'bottom-[5%] left-[15%]',
              'bottom-0 right-[18%]',
              'top-0 left-[10%]',
              'top-0 right-[10%]',
              // "top-1/3 left-0"
            ];

            const customOrder = [2, 3, 0, 1]; // Maps original index to its order
            return (
              <motion.div
                key={i}
                className={`absolute ${
                  positions[i % positions.length]
                } lg:w-[20%] w-[15%]`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: customOrder[i] * 0.4, // Use custom order for delay
                }}
              >
                <FoundryCard {...item} />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden lg:hidden relative w-full px-2" {...handlers}>
        <motion.div
          className="flex gap-2"
          animate={{ x: `-${index * (100 / cardsToShow)}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          {foundry_stars.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-1"
              style={{ flex: `0 0 ${100 / cardsToShow}%` }}
            >
              <FoundryCard full={true} {...card} />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FoundrySection;

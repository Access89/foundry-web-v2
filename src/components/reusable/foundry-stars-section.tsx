/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useSwipeable } from "react-swipeable";

const CARDS_TO_SHOW = {
  desktop: 4,
  semidesktop: 3,
  tablet: 2,
  mobile: 1,
};

const foundry_stars = [
  {
    title: "I want to borrow money and pay in 30, 60 or 90 days",
    boldedGreen: ["I want to", "money and"],
    breakAt: ["borrow"],
    boldedBlack: ["borrow", "pay in 30, 60 or 90 days"],
    link: "/loan",
    image: "/images/foundry_stars/foundry_stars_loan.png",
    imageSize: "w-[40%]",
  },
  {
    title: "I want to manage my business",
    boldedGreen: ["I want to"],
    boldedBlack: ["manage my business"],
    link: "/business-automation",
    image: "/images/foundry_stars/foundry_stars_business.png",
    imageSize: "w-[50%]",
  },
  {
    title: "I want to embed Finance into my platform with one API",
    boldedGreen: ["I want to embed"],
    boldedBlack: ["Finance"],
    link: "https://developer.access89.com/api-reference/origination",
    image: "/images/foundry_stars/finance.png",
    imageSize: "w-[40%]",
    external: true,
  },
  {
    title: "I want to buy items at wholesale prices",
    boldedGreen: ["I want to"],
    breakAt: ["I want to"],
    boldedBlack: ["buy items at wholesale prices"],
    link: "https://hub.foundry-platform.app/",
    image: "/images/foundry_stars/foundry_stars_hub.png",
    imageSize: "w-[50%]",
    external: true,
  },
  {
    title: "I want to hire a sales person",
    boldedGreen: ["I want to"],
    boldedBlack: ["hire"],
    link: "/hire",
    imageSize: "w-[20%]",
    image: "/images/foundry_stars/foundry_stars_api.png",
  },
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
}

const FoundryCard: React.FC<FoundryCardProps> = ({
  title,
  boldedGreen,
  boldedBlack,
  breakAt = [],
  link,
  image,
  imageSize = "w-[40%]",
  external,
}) => {
  const highlightText = (
    text: string,
    greenHighlights: string[],
    blackHighlights: string[],
    breakPoints: string[]
  ) => {
    const regex = new RegExp(
      `(${[...greenHighlights, ...blackHighlights, ...breakPoints].join("|")})`,
      "gi"
    );
    const parts = text.split(regex);
    return parts.map((part, i) => {
      if (greenHighlights.includes(part)) {
        return (
          <span key={i} className="text-[#4C7F64] font-light">
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

  return (
    <div className="bg-white rounded-lg my-5  shadow-[0px_2px_11px_2px_rgba(0,0,0,0.09)] flex items-end gap-4 hover:shadow-[0px_4px_15px_3px_rgba(0,0,0,0.12)] transition-transform w-[360px] h-[180px] group/card">
      <div className="flex-1 pt-3 pb-5 lg:pb-8 pl-5 justify-between flex flex-col h-full">
        <h3 className="text-base leading-snug font-sans">
          {highlightText(title, boldedGreen, boldedBlack, breakAt)}
        </h3>
        {external ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block w-fit rounded-full border border-[#4C7F64]/50 p-2 group/card-hover:scale-125 transition-transform"
          >
            <Icon
              icon="prime:arrow-right"
              className="text-[#4C7F64]"
              fontSize={24}
            />
          </a>
        ) : (
          <Link
            to={link}
            className="mt-4 inline-block w-fit rounded-full border border-[#4C7F64]/50 p-2 group/card-hover:scale-125 transition-transform"
          >
            <Icon
              icon="prime:arrow-right"
              className="text-[#4C7F64]"
              fontSize={24}
            />
          </Link>
        )}
      </div>
      <div className={`${imageSize} flex-shrink-0`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

const FoundrySection = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const getCardsToShow = () => {
    if (window.innerWidth < 640) return CARDS_TO_SHOW.mobile;
    if (window.innerWidth < 1020) return CARDS_TO_SHOW.tablet;
    if (window.innerWidth < 1440) return CARDS_TO_SHOW.semidesktop;
    return CARDS_TO_SHOW.desktop;
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  const maxIndex = Math.max(0, foundry_stars.length);

  React.useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // to move the carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < maxIndex - 3 ? prev + 1 : 0)); // Loop back to the first slide
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index, maxIndex]);

  const nextSlide = () => {
    setIndex((prev) => (prev < maxIndex - 3 ? prev + 1 : prev));
  };
  const prevSlide = () => setIndex((prev) => Math.max(prev - 1, 0));

  const handlers = useSwipeable({
    onSwiping: (event) => {
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${
          -index * 100 + event.deltaX
        }px)`;
      }
    },
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true, // Enables swiping with a mouse
  });

  return (
    <motion.section
      className="py-10 lg:mb-20 lg:mx-auto mx-5 flex flex-col overflow-hidden flex-1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-2 lg:mb-4 text-center font-roboto w-full">
        Empowering Businesses for Growth
      </motion.h1>
      <motion.p className="text-[#B1B1B1] text-xs lg:text-base font-normal mb-6 lg:mb-10 text-center font-sans">
        Seamless solutions for lending, procurement, and logistics. Transform
        your operations with our integrated platform.
      </motion.p>

      {/* <div className="lg:hidden flex">
        <CarouselMobile />
      </div> */}

      <div className=" w-full overflow-hidden md:ml-[8%] group">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0  hidden lg:flex lg:top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full "
        >
          <Icon icon="mdi:chevron-left" className="text-3xl text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute hidden lg:flex right-0 top-3/4 lg:top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full "
        >
          <Icon icon="mdi:chevron-right" className="text-3xl text-gray-600" />
        </button>

        {/* Swipeable Carousel */}
        <motion.div
          {...handlers}
          ref={containerRef}
          className="flex gap-2 md:gap-4 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -maxIndex * 360, right: 0 }}
          animate={{ x: `-${(index / maxIndex) * 100}%` }}
          transition={{ type: "tween" }}
          style={{ width: `${(foundry_stars.length / cardsToShow) * 100}%` }}
        >
          {foundry_stars.map((item, i) => (
            <motion.div key={i} className="lg:w-[20%] flex-shrink-0 px-2">
              <FoundryCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FoundrySection;

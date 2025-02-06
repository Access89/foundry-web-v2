/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface FoundryCardProps {
  title: string;
  boldedGreen: string[];
  boldedBlack: string[];
  link: string;
  image: string;
  imageSize: string;
  external?: boolean;
}

const FoundryCard: React.FC<FoundryCardProps> = ({
  title,
  boldedGreen,
  boldedBlack,
  link,
  image,
  imageSize = "w-[40%]",
  external,
}) => {
  const highlightText = (
    text: string,
    greenHighlights: string[],
    blackHighlights: string[]
  ) => {
    const regex = new RegExp(
      `(${[...greenHighlights, ...blackHighlights].join("|")})`,
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
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="bg-white rounded-lg border shadow-lg flex items-end gap-4 hover:shadow-xl transition-transform w-[360px] h-[180px] group">
      <div className="flex-1 pt-3 pb-5 pl-5 pr-10   justify-between flex flex-col h-full">
        <h3 className="text-base leading-snug font-sans">
          {highlightText(title, boldedGreen, boldedBlack)}
        </h3>
        {external ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block w-fit rounded-full border border-[#4C7F64]/50 p-2 hover:scale-110 transition-transform"
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
            className="mt-4 inline-block w-fit rounded-full border border-[#4C7F64]/50 p-2 hover:scale-110 transition-transform"
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

const CARDS_TO_SHOW = {
  desktop: 4,
  tablet: 2,
  mobile: 1,
};

const foundry_stars = [
  {
    title: "I want to borrow money and pay in 30, 60 or 90 days",
    boldedGreen: ["I want to", "money and"],
    boldedBlack: ["borrow", "pay in 30, 60 or 90 days"],
    link: "",
    image: "/images/foundry_stars/foundry_stars_loan.png",
    imageSize: "w-[40%]",
  },
  {
    title: "I want to manage my business",
    boldedGreen: ["I want to"],
    boldedBlack: ["manage my business"],
    link: "/onboarding",
    image: "/images/foundry_stars/foundry_stars_business.png",
    imageSize: "w-[50%]",
  },
  {
    title: "I want to embed Finance into my platform with one API",
    boldedGreen: ["I want to embed"],
    boldedBlack: ["Finance"],
    link: "https://developer.access89.com/api-reference/origination",
    image: "/images/foundry_stars/foundry_stars_api.png",
    imageSize: "w-[20%]",
    external: true,
  },
  {
    title: "I want to buy items at wholesale prices",
    boldedGreen: ["I want to"],
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

const FoundrySection = () => {
  const [index, setIndex] = useState(0);

  const getCardsToShow = () => {
    if (window.innerWidth < 640) return CARDS_TO_SHOW.mobile;
    if (window.innerWidth < 1024) return CARDS_TO_SHOW.tablet;
    return CARDS_TO_SHOW.desktop;
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  const maxIndex = foundry_stars.length - cardsToShow;

  const handleResize = () => {
    setCardsToShow(getCardsToShow());
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () =>
    setIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  const prevSlide = () => setIndex((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <section className="py-10 lg:mb-20   mx-auto flex flex-col overflow-hidden">
      <h1 className="text-3xl md:text-5xl font-semibold mb-2 text-center font-roboto">
        Empowering all the ways you do business
      </h1>
      <p className="text-[#B1B1B1] font-normal mb-6 text-center font-sans">
        Seamless solutions for lending, procurement, and logistics.
      </p>

      <div className="relative w-full overflow-hidden md:ml-[8%]">
        <motion.div
          className="flex gap-1"
          animate={{ x: `-${index * (100 / cardsToShow)}%` }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{ width: `${(foundry_stars.length / cardsToShow) * 100}%` }}
        >
          {foundry_stars.map((item, i) => (
            <div key={i} className={`lg:w-[20%] flex-shrink-0 px-2`}>
              <FoundryCard {...item} />
            </div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2  hidden   text-gray-500  rounded-full shadow-lg hover:text-black  transition duration-300"
        >
          <Icon icon="icons8:chevron-left-round" fontSize={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hidden  rounded-full shadow-lg hover:text-black  transition duration-300"
        >
          <Icon icon="icons8:chevron-right-round" fontSize={24} />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from(
          { length: foundry_stars.length - cardsToShow + 1 },
          (_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-green-700 scale-125" : "bg-gray-300"
              } hover:scale-150 hover:bg-green-500`}
            />
          )
        )}
      </div>
    </section>
  );
};

export default FoundrySection;

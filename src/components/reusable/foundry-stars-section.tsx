/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
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
    title: "  Finance your inventory or Purchase orders",
    boldedGreen: ["Finance your", "inventory"],
    breakAt: ["or"],
    boldedBlack: ["Purchase orders"],
    link: "/loan",
    image: "/images/foundry_stars/MobilePhone.png",
    imageSize: "w-[38%] h-[120px]",
    accentClass: "text-[#075056]",
  },
  {
    title: "I want to trade ",
    boldedGreen: ["I want to"],
    breakAt: ["I want to"],
    boldedBlack: ["trade "],
    link: "https://hub.foundry-platform.app/",
    image: "/images/foundry_stars/TradeInter.png",
    imageSize: "w-[40%]",
    external: true,
    widthHeight: "w-[260px] h-[150px]",
    accentClass: "text-[#075056]", // Change to your desired color
  },
  {
    title: "I want to manage my business",
    boldedGreen: ["I want to"],
    boldedBlack: ["manage my business"],
    link: "/our-platforms/businesss",
    image: "/images/foundry_stars/POSImage.webp",
    imageSize: "w-[38%]",
    accentClass: "text-[#075056]", // Change to your desired color
  },
  {
    title: "I want to embed Finance into my platform with one API",
    boldedGreen: ["I want to embed"],
    boldedBlack: ["Finance"],
    link: "https://developer.access89.com/api-reference/origination",
    image: "/images/foundry_stars/finance.webp",
    imageSize: "w-[30%]",
    external: true,
    widthHeight: "w-[360px] h-[150px]",
    accentClass: "text-[#075056]", // Change to your desired color
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
  imageSize = "w-[30%]",
  external,
  onpagenav,
  widthHeight,
  full,
  accentClass = "text-[#075056]",
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
        full ? "w-full" : widthHeight
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
        full ? "w-full" : widthHeight
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
      className={`bg-white rounded-lg my-5 shadow-[0px_2px_11px_2px_rgba(0,0,0,0.09)] flex items-end gap-4 hover:shadow-[0px_4px_15px_3px_rgba(0,0,0,0.12)] transition-transform w-[300px] h-[150px] hover/card:scale-110 ${
        full ? "w-full" : widthHeight
      }`}
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
  return (
    <section className="py-10 lg:pt-40 lg:pb-32 lg:mx-auto mx-5 flex flex-col overflow-visible flex-1">
      {/* 2-Column Layout - Similar to V2 Hero */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="">Accelerating Growth</span>
              <br />
              <span className="">for Everyday Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-zinc-600">
              Everything you need to sell, run, and grow your business. One
              platform, infinite possibilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/onboarding"
                className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-md hover:opacity-90 transition-opacity uppercase text-center"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Visual - Hero Image */}
          <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
            <img
              className="w-full h-full object-contain"
              src="/images/foundry_stars/Main2.png"
              alt="Foundry Platform"
            />
          </div>
        </div>

        {/* Mobile Cards Carousel - Only show on mobile */}
        <div className="lg:hidden mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#C65C3E] via-[#DFAF3E] to-[#075056] bg-clip-text text-transparent">
            What would you like to do?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {foundry_stars.map((card, i) => (
              <div key={i}>
                <FoundryCard {...card} full={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundrySection;

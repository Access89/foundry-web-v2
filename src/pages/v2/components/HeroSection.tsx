import React from "react";
import TextType from "@/components/TextType";

interface HeroSectionProps {
  activeSegment: string;
  setActiveSegment: (segment: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  activeSegment,
  setActiveSegment,
}) => {
  return (
    <header
      className={`relative pt-32 xl:pt-44 pb-32 px-8 overflow-hidden transition-colors duration-700 ${
        activeSegment === "bank" ? "bg-[#1C1C1C]" : "bg-white"
      }`}
    >
      <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
        <div className="flex justify-center mb-12">
          <div
            className={`p-1 flex gap-1 border rounded-full ${
              activeSegment === "bank"
                ? "bg-white/5 backdrop-blur-sm border-white/10"
                : "bg-zinc-100 border-zinc-200"
            }`}
          >
            <button
              onClick={() => setActiveSegment("merchant")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeSegment === "merchant"
                  ? "bg-white text-black"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              For Business
            </button>
            <button
              onClick={() => setActiveSegment("bank")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeSegment === "bank"
                  ? "bg-[#1C1C1C] text-white"
                  : "text-zinc-500 hover:text-white hover:bg-white/10"
              }`}
            >
              For Financial Institutions
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`max-w-2xl ${
              activeSegment === "bank" ? "text-white" : "text-zinc-900"
            }`}
          >
            <h1 className="text-6xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
              {activeSegment === "merchant" ? (
                <>
                  <TextType
                    key={`${activeSegment}-commerce`}
                    text="Commerce"
                    typingSpeed={60}
                    loop={false}
                    showCursor={true}
                    hideCursorWhileTyping={false}
                    startOnVisible={false}
                    className="inline"
                    cursorCharacter="_"
                  />
                  <br />
                  <TextType
                    key={`${activeSegment}-reinvented`}
                    text="Reinvented."
                    typingSpeed={60}
                    initialDelay={600}
                    loop={false}
                    showCursor={false}
                    hideCursorWhileTyping={false}
                    startOnVisible={false}
                    cursorCharacter="_"
                    className="inline text-zinc-400"
                  />
                </>
              ) : (
                <>
                  <TextType
                    key={`${activeSegment}-orchestrate`}
                    text="Orchestrate"
                    typingSpeed={60}
                    loop={false}
                    showCursor={true}
                    hideCursorWhileTyping={false}
                    startOnVisible={false}
                    cursorCharacter="_"
                    className="inline"
                  />
                  <br />
                  <TextType
                    key={`${activeSegment}-banking`}
                    text="Digital Banking."
                    typingSpeed={60}
                    initialDelay={1000}
                    loop={false}
                    showCursor={false}
                    hideCursorWhileTyping={false}
                    cursorCharacter="_"
                    startOnVisible={false}
                    className="inline text-gray-400"
                  />
                </>
              )}
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 leading-relaxed ${
                activeSegment === "bank" ? "text-gray-300" : "text-zinc-600"
              }`}
            >
              {activeSegment === "merchant"
                ? "Everything you need to sell, run, and grow your business. One platform, infinite possibilities."
                : "The Engagement Banking Platform that modernizes legacy systems and unifies the customer journey."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className={`px-8 py-4 text-lg font-medium rounded-md transition-all uppercase ${
                  activeSegment === "merchant"
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {activeSegment === "merchant" ? "Start Selling" : "GET STARTED"}
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                src={activeSegment === "merchant" ? "/images/foundry_stars/Main2.png" : "/images/FinanceBackground.png"}
                alt="Foundry Platform"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

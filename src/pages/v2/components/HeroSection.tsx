import React from "react";
import TextType from "@/components/TextType";
import { Globe, Layers, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  activeSegment: string;
  setActiveSegment: (segment: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  activeSegment,
  setActiveSegment,
}) => {
  const navigate = useNavigate();

  return (
    <header
      className={`relative pt-32 md:pt-28 xl:pt-32 pb-16 md:pb-24 xl:pb-32 px-4 md:px-8 overflow-hidden transition-colors duration-700 ${
        activeSegment === "bank"
          ? "bg-[#1C1C1C]"
          : "bg-gradient"
      }`}
    >
      <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
        <div className="flex justify-center mb-8 md:mb-12">
          <div
            className={`p-1 flex gap-1 border rounded-full ${
              activeSegment === "bank"
                ? "bg-white/5 backdrop-blur-sm border-transparent"
                : "bg-white/10 backdrop-blur-sm border-transparent"
            }`}
          >
            <button
              onClick={() => setActiveSegment("merchant")}
              className={`px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 ${
                activeSegment === "merchant"
                  ? "bg-white text-primary-dark"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              For Business
            </button>
            <button
              onClick={() => setActiveSegment("bank")}
              className={`px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                activeSegment === "bank"
                  ? "bg-[#1C1C1C] text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="hidden sm:inline">For </span>
              <span className="">Financial Institutions</span>
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`max-w-2xl mx-auto lg:mx-0 text-center lg:text-left ${
              activeSegment === "bank" ? "text-white" : "text-white"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
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
              className={`text-base sm:text-lg md:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed ${
                activeSegment === "bank" ? "text-gray-300" : "text-white/90"
              }`}
            >
              {activeSegment === "merchant"
                ? "Everything you need to sell, run, and grow your business. One platform, infinite possibilities."
                : "The Engagement Banking Platform that modernizes legacy systems and unifies the customer journey."}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate("/onboarding")}
                className={`px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all shadow-lg hover:shadow-xl ${
                  activeSegment === "merchant"
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {activeSegment === "merchant" ? "Start Selling" : "GET STARTED"}
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[70vh] w-full flex lg:flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {activeSegment === "merchant" ? (
                <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                  {/* Gradient glow effect */}
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-primary/30 blur-3xl"></div> */}

                  {/* Mobile device - Right side */}

                  <img
                    className="w-full h-full object-contain"
                    src={
                      "public/images/v2/foundry_hero.png"                    }
                    alt="Foundry Platform"
                  />
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center scale-75 md:scale-90 lg:scale-100">
                  <div className="absolute inset-0 bg-[#F6851B]/10 blur-3xl animate-pulse"></div>

                  {/* Layer 3: Apps */}
                  <div className="absolute top-4 md:top-10 w-48 md:w-64 p-3 md:p-4 bg-[#24272A]/90 backdrop-blur border border-zinc-800 text-center transform -translate-y-4 shadow-2xl z-30 animate-[bounce_4s_infinite] rounded-md">
                    <div className="text-[10px] md:text-xs text-[#F6851B] font-mono mb-2">
                      OMNI-CHANNEL APPS
                    </div>
                    <div className="flex justify-center gap-2 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-zinc-800 rounded flex items-center justify-center hover:bg-[#F6851B] transition-colors">
                        <Smartphone className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      </div>
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-zinc-800 rounded flex items-center justify-center hover:bg-[#F6851B] transition-colors">
                        <Globe className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Layer 2: Platform */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-64 h-32 md:w-80 md:h-40 bg-gradient-to-r from-[#1C1C1C] to-[#24272A] border border-[#F6851B]/30 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(246,133,27,0.3)] z-20 rounded-md">
                    <Layers className="w-8 h-8 md:w-10 md:h-10 text-[#F6851B] mb-2" />
                    <div className="font-bold text-white tracking-widest text-sm md:text-base">
                      ENGAGEMENT CORE
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400 mt-1">
                      Orchestration Layer
                    </div>
                  </div>

                  {/* Layer 1: Legacy */}
                  <div className="absolute bottom-4 md:bottom-10 w-72 md:w-96 p-4 md:p-6 bg-[#1C1C1C] border border-zinc-800 flex justify-between items-center z-10 opacity-70 rounded-md">
                    <div className="text-[10px] md:text-xs text-zinc-600 font-mono">
                      LEGACY CORE
                    </div>
                    <div className="flex gap-1.5 md:gap-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-1.5 w-6 md:h-2 md:w-8 bg-zinc-800"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Connectors */}
                  <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#F6851B] to-transparent left-1/2 -translate-x-1/2"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

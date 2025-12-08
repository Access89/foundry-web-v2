import React from "react";
import {
  ArrowRight,
  Menu,
  CreditCard,
  Smartphone,
  Globe,
  ShieldCheck,
  BarChart3,
  Layers,
  PieChart,
  Users,
} from "lucide-react";
import { theme } from "../constants";

interface HeroSectionProps {
  activeSegment: string;
  setActiveSegment: (segment: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  activeSegment,
  setActiveSegment,
}) => {
  const currentTheme = theme[activeSegment as keyof typeof theme];

  return (
    <header
      className={`relative pt-32 pb-20 px-6 overflow-hidden transition-colors duration-700 ${currentTheme.heroBg}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Segment Toggle */}
        <div className="flex justify-center mb-12">
          <div
            className={`p-1 flex gap-1 border ${
              activeSegment === "bank"
                ? "bg-white/5 backdrop-blur-sm border-white/10"
                : "bg-zinc-100 border-zinc-200"
            }`}
          >
            <button
              onClick={() => setActiveSegment("merchant")}
              className={`px-6 py-2 text-sm font-semibold transition-all duration-200 ${
                activeSegment === "merchant"
                  ? "bg-white text-black"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              For Business
            </button>
            <button
              onClick={() => setActiveSegment("bank")}
              className={`px-6 py-2 text-sm font-semibold transition-all duration-200 ${
                activeSegment === "bank"
                  ? "bg-[#037DD6] text-white"
                  : "text-zinc-500 hover:text-white hover:bg-white/10"
              }`}
            >
              For Financial Institutions
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`max-w-2xl ${
              activeSegment === "bank" ? "text-white" : "text-zinc-900"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              {activeSegment === "merchant" ? (
                <>
                  Commerce <br />
                  <span className="text-zinc-400">Reinvented.</span>
                </>
              ) : (
                <>
                  Orchestrate <br />
                  <span className="text-indigo-400">Digital Banking.</span>
                </>
              )}
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 leading-relaxed ${
                activeSegment === "bank" ? "text-slate-300" : "text-zinc-500"
              }`}
            >
              {activeSegment === "merchant"
                ? "Everything you need to sell, run, and grow your business. One platform, infinite possibilities."
                : "The Engagement Banking Platform that modernizes legacy systems and unifies the customer journey."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className={`px-8 py-4 text-lg font-semibold transition-all duration-200 hover:-translate-y-1 ${
                  activeSegment === "merchant"
                    ? "bg-black text-white shadow-lg shadow-zinc-500/20 hover:shadow-xl"
                    : "bg-[#037DD6] text-white shadow-lg shadow-blue-500/30 hover:bg-[#0260A4] hover:shadow-xl"
                }`}
              >
                {activeSegment === "merchant"
                  ? "Start Selling"
                  : "Request Demo"}
              </button>
              <button
                className={`px-8 py-4 text-lg font-semibold border-2 flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 ${
                  activeSegment === "bank"
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-zinc-300 text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                View Documentation <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Abstract Visuals */}
          <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center perspective-1000">
            {activeSegment === "merchant" ? (
              // Merchant visual
              <div className="relative w-80 h-[480px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-zinc-900 transform rotate-y-12 transition-all duration-700 hover:rotate-y-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-900 rounded-b-xl"></div>
                <div className="p-6 pt-12 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-8 h-8 bg-zinc-100 flex items-center justify-center">
                      <Menu className="w-4 h-4" />
                    </div>
                    <div className="text-lg font-bold">$240.50</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-auto">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-zinc-50 flex items-center justify-center hover:bg-zinc-100 transition-colors cursor-pointer"
                      >
                        <div
                          className={`w-12 h-12 ${
                            [
                              "bg-orange-100",
                              "bg-blue-100",
                              "bg-purple-100",
                              "bg-green-100",
                            ][i - 1]
                          } flex items-center justify-center`}
                        >
                          {
                            [
                              <PieChart
                                key="pie"
                                className="w-6 h-6 text-orange-500"
                              />,
                              <CreditCard
                                key="card"
                                className="w-6 h-6 text-blue-500"
                              />,
                              <Users
                                key="users"
                                className="w-6 h-6 text-purple-500"
                              />,
                              <BarChart3
                                key="bar"
                                className="w-6 h-6 text-green-500"
                              />,
                            ][i - 1]
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-4 bg-zinc-900 text-white font-bold mt-4">
                    Charge
                  </button>
                </div>
                {/* Floating Elements */}
                <div className="absolute -right-24 top-20 bg-white p-4 shadow-xl animate-bounce duration-[3000ms]">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-green-100 flex items-center justify-center text-green-600">
                      <ShieldCheck />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500">
                        Payment Verified
                      </div>
                      <div className="font-bold text-sm">$42.00</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Bank visual
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-indigo-500/10 blur-3xl animate-pulse"></div>

                {/* Layer 3: Apps */}
                <div className="absolute top-10 w-64 p-4 bg-slate-800/90 backdrop-blur border border-slate-700 text-center transform -translate-y-4 shadow-2xl z-30 animate-[bounce_4s_infinite]">
                  <div className="text-xs text-indigo-400 font-mono mb-2">
                    OMNI-CHANNEL APPS
                  </div>
                  <div className="flex justify-center gap-3">
                    <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-indigo-500 transition-colors">
                      <Smartphone className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-indigo-500 transition-colors">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Layer 2: Platform */}
                <div className="absolute top-1/2 -translate-y-1/2 w-80 h-40 bg-gradient-to-r from-indigo-900 to-blue-900 border border-indigo-500/30 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.3)] z-20">
                  <Layers className="w-10 h-10 text-white mb-2" />
                  <div className="font-bold text-white tracking-widest">
                    ENGAGEMENT CORE
                  </div>
                  <div className="text-xs text-indigo-200 mt-1">
                    Orchestration Layer
                  </div>
                </div>

                {/* Layer 1: Legacy */}
                <div className="absolute bottom-10 w-96 p-6 bg-slate-900 border border-slate-800 flex justify-between items-center z-10 opacity-70">
                  <div className="text-xs text-slate-500 font-mono">
                    LEGACY CORE
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-2 w-8 bg-slate-700"></div>
                    ))}
                  </div>
                </div>

                {/* Connectors */}
                <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent left-1/2 -translate-x-1/2"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

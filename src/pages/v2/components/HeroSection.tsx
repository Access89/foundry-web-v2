import React from "react";
import {
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
      className={`relative pt-40 pb-32 px-8 overflow-hidden transition-colors duration-700 ${
        activeSegment === "bank" ? "bg-[#1C1C1C]" : "bg-white"
      }`}
    >
      <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
        {/* Segment Toggle */}
        <div className="flex justify-center mb-12">
          <div
            className={`p-1 flex gap-1 border rounded-sm ${
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
                  : activeSegment === "bank"
                  ? "text-zinc-400 hover:text-white hover:bg-white/10"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              For Business
            </button>
            <button
              onClick={() => setActiveSegment("bank")}
              className={`px-6 py-2 text-sm font-semibold transition-all duration-200 ${
                activeSegment === "bank"
                  ? "bg-white text-black"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
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
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              {activeSegment === "merchant" ? (
                <>
                  Commerce <br />
                  <span className="text-zinc-400">Reinvented.</span>
                </>
              ) : (
                <>
                  Orchestrate <br />
                  <span className="text-gray-400">Digital Banking.</span>
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
                className={`px-8 py-4 text-lg font-semibold rounded-full transition-all uppercase ${
                  activeSegment === "merchant"
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {activeSegment === "merchant" ? "Start Selling" : "GET STARTED"}
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center">
            {activeSegment === "merchant" ? (
              // Merchant visual - POS Device
              <div className="relative w-80 h-[480px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-zinc-900 transform transition-all duration-700 hover:scale-105">
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
                {/* Floating Payment Verified */}
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
              // Bank visual - 3D Illustration Placeholder (MetaMask style)
              <div className="w-full h-full bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-purple-400/10 to-blue-400/10 animate-pulse"></div>

                {/* Placeholder content */}
                <div className="relative z-10 text-white/70 text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-sm font-medium">3D Illustration</p>
                  <p className="text-xs opacity-50 mt-1">
                    MetaMask Style Visual
                  </p>
                </div>

                {/* Floating elements for visual interest */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-75"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-150"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

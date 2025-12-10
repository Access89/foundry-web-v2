import React from "react";
import {
  Smartphone,
  Globe,
  Users,
  Layout,
  MousePointerClick,
  Monitor,
} from "lucide-react";

const Engagement = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#1C1C1C] text-white">
      <div className="max-w-10xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20 mt-8">
          <div className="inline-block px-3 py-1 bg-zinc-800 text-xs font-bold mb-6">
            ENGAGEMENT PLATFORM
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Re-architect banking
            <br />
            around the customer.
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop patching legacy silos. Implement a unified engagement layer
            that orchestrates every interaction across web, mobile, and branch.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-white text-black rounded-md font-bold hover:opacity-90 transition-opacity">
              Request Platform Demo
            </button>
          </div>
        </div>

        {/* Architecture Visual */}
        <div className="mb-32 relative">
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Top Layer: Channels */}
            <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="p-6 bg-[#24272A] border border-zinc-800 text-center">
                <Smartphone className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="font-bold">Retail App</div>
              </div>
              <div className="p-6 bg-[#24272A] border border-zinc-800 text-center">
                <Globe className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="font-bold">Web Banking</div>
              </div>
              <div className="p-6 bg-[#24272A] border border-zinc-800 text-center">
                <Users className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="font-bold">Employee Hub</div>
              </div>
            </div>

            {/* Arrows */}
            <div className="h-12 w-px bg-zinc-700"></div>

            {/* Middle Layer: Engagement Platform */}
            <div className="w-full max-w-5xl bg-zinc-800 p-1 border border-zinc-700">
              <div className="bg-[#24272A] p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold tracking-widest">
                    ENGAGEMENT BANKING PLATFORM
                  </h3>
                  <p className="text-sm text-gray-400">
                    Orchestration & Experience Layer
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center text-sm font-semibold">
                  <div className="p-4 bg-zinc-800 border border-zinc-700">
                    Identity Mgmt
                  </div>
                  <div className="p-4 bg-zinc-800 border border-zinc-700">
                    Flow Control
                  </div>
                  <div className="p-4 bg-zinc-800 border border-zinc-700">
                    Data Aggregation
                  </div>
                  <div className="p-4 bg-zinc-800 border border-zinc-700">
                    Entitlements
                  </div>
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div className="h-12 w-px bg-zinc-700"></div>

            {/* Bottom Layer: Systems of Record */}
            <div className="w-full max-w-4xl p-6 bg-[#24272A] border border-zinc-800 flex justify-between items-center opacity-60">
              <div className="font-mono text-xs text-gray-500">
                SYSTEMS OF RECORD
              </div>
              <div className="flex gap-4 font-bold text-gray-500">
                <span>Core Banking</span>
                <span>•</span>
                <span>CRM</span>
                <span>•</span>
                <span>Payments Engine</span>
                <span>•</span>
                <span>KYC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-[#24272A] border border-zinc-800 hover:shadow-lg transition-shadow">
            <Layout className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-bold mb-3">Unified Customer View</h3>
            <p className="text-gray-400">
              Break down silos. See every account, interaction, and product
              holding in one dashboard.
            </p>
          </div>
          <div className="p-8 bg-[#24272A] border border-zinc-800 hover:shadow-lg transition-shadow">
            <MousePointerClick className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-bold mb-3">Journey Orchestration</h3>
            <p className="text-gray-400">
              Design and deploy onboarding flows and loan applications without
              writing code.
            </p>
          </div>
          <div className="p-8 bg-[#24272A] border border-zinc-800 hover:shadow-lg transition-shadow">
            <Monitor className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-bold mb-3">Employee Empowerment</h3>
            <p className="text-gray-400">
              Give your tellers and support agents the same view your customers
              see.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagement;

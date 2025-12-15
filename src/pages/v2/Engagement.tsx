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
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <header className="relative pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32 px-4 md:px-8 overflow-hidden bg-[#1C1C1C]">
        <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
            <div className="inline-block px-3 py-1 bg-zinc-800 text-xs font-medium mb-4 md:mb-6 uppercase tracking-wider">
              ENGAGEMENT PLATFORM
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
              Re-architect banking
              <br />
              <span className="text-gray-400">around the customer.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed text-gray-300 max-w-2xl mx-auto">
              Stop patching legacy silos. Implement a unified engagement layer
              that orchestrates every interaction across web, mobile, and
              branch.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-lg transition-all uppercase bg-white text-black hover:bg-gray-100">
                Request Platform Demo
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-10xl mx-auto px-6">
        {/* Architecture Visual */}
        <div className="mb-32 relative">
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Top Layer: Channels */}
            <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="p-6 bg-[#24272A] border border-zinc-800 text-center rounded-xl">
                <Smartphone className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="font-medium">Retail App</div>
              </div>
              <div className="p-6 bg-[#24272A] border border-zinc-800 text-center rounded-xl">
                <Globe className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="font-medium">Web Banking</div>
              </div>
              <div className="p-6 bg-[#24272A] border border-zinc-800 text-center rounded-xl">
                <Users className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="font-medium">Employee Hub</div>
              </div>
            </div>

            {/* Arrows */}
            <div className="h-12 w-px bg-zinc-700"></div>

            {/* Middle Layer: Engagement Platform */}
            <div className="w-full max-w-5xl bg-zinc-800 p-1 border border-zinc-700 rounded-xl">
              <div className="bg-[#24272A] p-8 rounded-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium tracking-widest">
                    ENGAGEMENT BANKING PLATFORM
                  </h3>
                  <p className="text-sm text-gray-400">
                    Orchestration & Experience Layer
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center text-sm font-medium">
                  <div className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg">
                    Identity Mgmt
                  </div>
                  <div className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg">
                    Flow Control
                  </div>
                  <div className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg">
                    Data Aggregation
                  </div>
                  <div className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg">
                    Entitlements
                  </div>
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div className="h-12 w-px bg-zinc-700"></div>

            {/* Bottom Layer: Systems of Record */}
            <div className="w-full max-w-4xl p-6 bg-[#24272A] border border-zinc-800 flex justify-between items-center opacity-60 rounded-xl">
              <div className="font-mono text-xs text-gray-500">
                SYSTEMS OF RECORD
              </div>
              <div className="flex gap-4 font-medium text-gray-500">
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
          <div className="p-8 bg-[#24272A] border border-zinc-800 hover:shadow-lg transition-shadow rounded-xl">
            <Layout className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-medium mb-3">Unified Customer View</h3>
            <p className="text-gray-400">
              Break down silos. See every account, interaction, and product
              holding in one dashboard.
            </p>
          </div>
          <div className="p-8 bg-[#24272A] border border-zinc-800 hover:shadow-lg transition-shadow rounded-xl">
            <MousePointerClick className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-medium mb-3">Journey Orchestration</h3>
            <p className="text-gray-400">
              Design and deploy onboarding flows and loan applications without
              writing code.
            </p>
          </div>
          <div className="p-8 bg-[#24272A] border border-zinc-800 hover:shadow-lg transition-shadow rounded-xl">
            <Monitor className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-medium mb-3">Employee Empowerment</h3>
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

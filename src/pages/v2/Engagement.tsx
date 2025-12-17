import {
  Smartphone,
  Globe,
  Users,
  Layout,
  MousePointerClick,
  Monitor,
} from "lucide-react";

// Page Data
const engagementData = {
  hero: {
    badge: "ENGAGEMENT PLATFORM",
    title: ["Re-architect banking", "around the customer."],
    description:
      "Stop patching legacy silos. Implement a unified engagement layer that orchestrates every interaction across web, mobile, and branch.",
    cta: "Request Platform Demo",
  },
  channels: [
    { icon: Smartphone, label: "Retail App" },
    { icon: Globe, label: "Web Banking" },
    { icon: Users, label: "Employee Hub" },
  ],
  platform: {
    title: "ENGAGEMENT BANKING PLATFORM",
    subtitle: "Orchestration & Experience Layer",
    modules: [
      "Identity Mgmt",
      "Flow Control",
      "Data Aggregation",
      "Entitlements",
    ],
  },
  systemsOfRecord: "SYSTEMS OF RECORD",
  systems: ["Core Banking", "CRM", "Payments Engine", "KYC"],
  features: [
    {
      icon: Layout,
      title: "Unified Customer View",
      description:
        "Break down silos. See every account, interaction, and product holding in one dashboard.",
    },
    {
      icon: MousePointerClick,
      title: "Journey Orchestration",
      description:
        "Design and deploy onboarding flows and loan applications without writing code.",
    },
    {
      icon: Monitor,
      title: "Employee Empowerment",
      description:
        "Give your tellers and support agents the same view your customers see.",
    },
  ],
};

const Engagement = () => {
  const { hero, channels, platform, systemsOfRecord, systems, features } =
    engagementData;
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white pb-20">
      {/* Hero Section */}
      <header className="relative pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32 px-4 md:px-8 overflow-hidden bg-[#1C1C1C]">
        <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
            <div className="inline-block px-3 py-1 bg-zinc-800 text-xs font-medium mb-4 md:mb-6 uppercase tracking-wider">
              {hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
              {hero.title[0]}
              <br />
              <span className="text-gray-400">{hero.title[1]}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed text-gray-300 max-w-2xl mx-auto">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-lg transition-all uppercase bg-white text-black hover:bg-gray-100">
                {hero.cta}
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
              {channels.map((channel, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#24272A] border border-zinc-800 text-center rounded-xl"
                >
                  <channel.icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="font-medium">{channel.label}</div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <div className="h-12 w-px bg-zinc-700"></div>

            {/* Middle Layer: Engagement Platform */}
            <div className="w-full max-w-5xl bg-zinc-800 p-1 border border-zinc-700 rounded-xl">
              <div className="bg-[#24272A] p-8 rounded-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium tracking-widest">
                    {platform.title}
                  </h3>
                  <p className="text-sm text-gray-400">{platform.subtitle}</p>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center text-sm font-medium">
                  {platform.modules.map((module, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg"
                    >
                      {module}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div className="h-12 w-px bg-zinc-700"></div>

            {/* Bottom Layer: Systems of Record */}
            <div className="w-full max-w-4xl p-6 bg-[#24272A] border border-zinc-800 flex justify-between items-center opacity-60 rounded-xl">
              <div className="font-mono text-xs text-gray-500">
                {systemsOfRecord}
              </div>
              <div className="flex gap-4 font-medium text-gray-500">
                {systems.map((system, idx) => (
                  <>
                    <span key={idx}>{system}</span>
                    {idx < systems.length - 1 && <span>•</span>}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#24272A] border border-zinc-800 hover:shadow-lg transition-shadow rounded-xl"
            >
              <feature.icon className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Engagement;

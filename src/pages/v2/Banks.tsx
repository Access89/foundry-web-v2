import { Smartphone, ShieldCheck, PieChart } from "lucide-react";
import { useEffect } from "react";
import { useV2Context } from "./context";

// Page Data
const banksData = {
  hero: {
    badge: "BANKING AS A SERVICE",
    title: ["Digital transformation,", "delivered."],
    description:
      'Modernize your legacy core without the risky "rip and replace". Our orchestration layer sits on top of your mainframe to power modern apps.',
  },
  features: [
    {
      icon: Smartphone,
      title: "White-label Apps",
      description:
        "Launch a 5-star mobile banking app in months, not years. Fully customizable UI.",
    },
    {
      icon: ShieldCheck,
      title: "Legacy Wrapper",
      description:
        "Securely expose your mainframe data via REST APIs. SOC2 compliant.",
    },
    {
      icon: PieChart,
      title: "Wealth Modules",
      description:
        "Plug-and-play investment and wealth management features for your retail customers.",
    },
  ],
};

const Banks = () => {
  const { setActiveSegment } = useV2Context();

  useEffect(() => {
    setActiveSegment("bank");
  }, [setActiveSegment]);

  const { hero, features } = banksData;
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
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
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

export default Banks;

import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  LayoutGrid,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

// Page Data
const corporateBankingData = {
  hero: {
    badge: { icon: Briefcase, text: "Corporate Banking" },
    title: ["Treasury &", "Trade Finance"],
    description:
      "Corporates want visibility into distribution networks and liquidity. Standard platforms view corporates in isolation.",
    ctas: {
      primary: "Get Started",
      secondary: "Back to Home",
    },
  },
  solution: {
    title: "Connect the Corporate to the SME retailer.",
    description:
      "Provide unparalleled visibility into distribution networks and enable automated trade finance.",
  },
  features: [
    {
      title: "Supply Chain Visibility",
      desc: "Give Corporates a view of inventory velocity at the retail level via Foundry POS data.",
      icon: LayoutGrid,
    },
    {
      title: "Distributor Finance",
      desc: "Use invoicing data to automate invoice discounting and trade finance for the network.",
      icon: TrendingUp,
    },
    {
      title: "Automated Reconciliation",
      desc: "Collections automatically reconciled against retailer payments, reducing operational lift.",
      icon: ShieldCheck,
    },
  ],
  benefits: {
    title: "Transform Corporate Banking",
    description:
      "Move beyond isolated corporate relationships to manage entire supply chain ecosystems.",
    list: [
      "End-to-end supply chain visibility for corporate clients",
      "Automated trade finance based on real-time data",
      "Reduced operational costs through intelligent reconciliation",
    ],
    challenges: {
      title: "The Challenge",
      text: "Corporates lack visibility into their distribution networks and liquidity. Standard banking platforms view corporates in isolation.",
    },
    solution: {
      title: "The Solution",
      text: "Foundry connects corporates to their entire distribution network, providing real-time visibility and enabling automated trade finance based on actual inventory and invoice data.",
    },
  },
  cta: {
    title: "Ready to revolutionize corporate banking?",
    description:
      "See how leading banks are transforming treasury and trade finance with Foundry.",
    button: "Schedule a Demo",
  },
};

const CorporateBanking = () => {
  const navigate = useNavigate();
  const { hero, solution, features, benefits, cta } = corporateBankingData;

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6">
            <hero.badge.icon className="w-4 h-4" />
            {hero.badge.text}
          </div>

          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
            {hero.title[0]}
            <br />
            <span className="text-white">{hero.title[1]}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed font-light">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button
              onClick={() => navigate("/onboarding")}
              className="px-8 py-4 bg-white hover:bg-gray-200 text-black rounded-lg font-medium transition-all flex items-center gap-2 group"
            >
              {hero.ctas.primary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 rounded-lg font-medium transition-all"
            >
              {hero.ctas.secondary}
            </button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
              {solution.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl font-light">
              {solution.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#24272A] border border-zinc-800 hover:border-white/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                {benefits.title}
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed font-light">
                {benefits.description}
              </p>
              <div className="space-y-4">
                {benefits.list.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300 font-light">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#24272A] border border-zinc-800 rounded-xl p-8">
              <div className="space-y-6">
                <div className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <h4 className="text-white font-medium">
                      {benefits.challenges.title}
                    </h4>
                  </div>
                  <p className="text-gray-400 italic font-light">
                    "{benefits.challenges.text}"
                  </p>
                </div>

                <div className="p-6 bg-white/5 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <h4 className="text-white font-medium">
                      {benefits.solution.title}
                    </h4>
                  </div>
                  <p className="text-gray-300 font-light">
                    {benefits.solution.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
            {cta.title}
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-light">
            {cta.description}
          </p>
          <button
            onClick={() => navigate("/book-a-demo")}
            className="px-10 py-5 bg-white hover:bg-gray-200 text-black rounded-lg font-medium text-lg transition-all inline-flex items-center gap-2 group"
          >
            {cta.button}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CorporateBanking;

import {
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Lock,
  Users,
  CheckCircle2,
} from "lucide-react";
import { useEffect } from "react";
import { useV2Context } from "./context";
import CountUp from "@/components/CountUp";

// Page Data
const enterpriseData = {
  hero: {
    badge: "ENTERPRISE PLATFORM",
    title: ["Global payments.", "Without the friction."],
    description:
      "Consolidate your payment stack. One API for all your brands, regions, and channels.",
    ctas: {
      primary: "Contact Sales",
      secondary: "View API Docs",
    },
    codeSnippet: [
      "const payment = await foundry.charges.create({",
      "  amount: 2500000,",
      "  currency: 'usd',",
      "  source: 'tok_mastercard_corporate',",
      "  metadata: { order_id: '6735' }",
      "});",
      "// Response 200 OK",
      '"status": "succeeded"',
    ],
  },
  stats: [
    { value: 99.99, suffix: "%", decimals: 2, label: "Uptime SLA" },
    { value: 150, suffix: "+", decimals: 0, label: "Countries Supported" },
    {
      value: 50,
      prefix: "<",
      suffix: "ms",
      decimals: 0,
      label: "API Response Time",
    },
    { value: 24, suffix: "/7", decimals: 0, label: "Enterprise Support" },
  ],
  features: [
    {
      icon: Globe,
      title: "Multi-Region Infrastructure",
      description:
        "Deploy payment processing across multiple regions with automatic failover and data residency compliance.",
    },
    {
      icon: Zap,
      title: "Real-Time Settlement",
      description:
        "Instant fund transfers and same-day settlement across all payment methods and currencies.",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description:
        "SOC 2 Type II certified, PCI DSS Level 1 compliant with advanced fraud detection.",
    },
    {
      icon: TrendingUp,
      title: "Smart Routing",
      description:
        "Intelligent payment routing optimizes for cost, speed, and success rates across providers.",
    },
    {
      icon: Lock,
      title: "Compliance Automation",
      description:
        "Automated KYC, AML screening, and regulatory reporting across all jurisdictions.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description:
        "Dedicated account manager, priority support, and custom integration assistance.",
    },
  ],
  useCases: [
    {
      title: "Marketplace Platforms",
      description:
        "Split payments, escrow, and automated payouts for multi-sided marketplaces.",
      features: [
        "Multi-party splits",
        "Escrow management",
        "Automated disbursement",
      ],
    },
    {
      title: "Global SaaS",
      description:
        "Recurring billing, usage-based pricing, and subscription management worldwide.",
      features: ["Flexible billing", "Multi-currency", "Revenue recognition"],
    },
    {
      title: "Financial Services",
      description:
        "White-label payment infrastructure for banks, fintechs, and financial institutions.",
      features: [
        "Custom branding",
        "Regulatory compliance",
        "Full API control",
      ],
    },
  ],
  cta: {
    title: "Ready to scale globally?",
    description:
      "Join leading enterprises processing billions in payments through Foundry's infrastructure.",
    button: "Schedule a Demo",
  },
};

const Enterprise = () => {
  const { hero, stats, features, useCases, cta } = enterpriseData;
  const { setActiveSegment } = useV2Context();

  useEffect(() => {
    setActiveSegment("bank");
  }, [setActiveSegment]);

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <header className="relative pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32 px-4 md:px-8 overflow-hidden bg-[#1C1C1C]">
        <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-white">
              <div className="inline-block px-3 py-1 bg-zinc-800 text-xs font-medium mb-4 md:mb-6 uppercase tracking-wider">
                {hero.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
                {hero.title[0]}
                <br />
                <span className="text-gray-400">{hero.title[1]}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed text-gray-300">
                {hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => (window.location.href = "/book-a-demo")}
                  className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-lg transition-all uppercase bg-white text-black hover:bg-gray-100"
                >
                  {hero.ctas.primary}
                </button>
                <button className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-lg transition-all uppercase border border-zinc-700 text-white hover:bg-white/5">
                  {hero.ctas.secondary}
                </button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full flex items-center justify-center">
              <div className="bg-[#24272A] p-4 md:p-6 border border-zinc-800 font-mono text-xs md:text-sm shadow-2xl w-full max-w-lg scale-75 md:scale-90 lg:scale-100 rounded-xl">
                <div className="flex gap-2 mb-4 text-gray-500">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  {hero.codeSnippet.slice(0, 6).map((line, idx) => {
                    if (idx === 0) {
                      return (
                        <div key={idx} className="text-purple-400">
                          {line}
                        </div>
                      );
                    } else if (idx === 5) {
                      return (
                        <div key={idx} className="text-purple-400">
                          {line}
                        </div>
                      );
                    } else {
                      const parts = line.split(":");
                      return (
                        <div key={idx} className="pl-4 text-blue-300">
                          {parts[0]}:
                          <span className="text-green-400">
                            {parts.slice(1).join(":").trim()}
                          </span>
                          {idx < 5 ? "," : ""}
                        </div>
                      );
                    }
                  })}
                  <div className="text-gray-500 mt-4">
                    {hero.codeSnippet[6]}
                  </div>
                  <div className="text-green-400">{hero.codeSnippet[7]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 md:py-20 border-y border-zinc-800">
        <div className="max-w-10xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl xl:text-5xl font-medium mb-2">
                  <CountUp
                    end={stat.value}
                    duration={2500}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 lg:px-8">
        <div className="max-w-10xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium mb-4">
              Enterprise-grade infrastructure
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Built for scale, designed for reliability, optimized for
              performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-zinc-900 transition-all rounded-xl"
              >
                <feature.icon className="w-12 h-12 mb-6 text-white" />
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-zinc-900 lg:px-8">
        <div className="max-w-10xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium mb-4">
              Built for your industry
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Flexible infrastructure that adapts to your business model.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#1C1C1C] border border-zinc-800 rounded-xl"
              >
                <h3 className="text-2xl font-medium mb-3">{useCase.title}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <ul className="space-y-3">
                  {useCase.features.map((feat, featIdx) => (
                    <li
                      key={featIdx}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span className="text-gray-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-10xl mx-auto px-4 md:px-6 lg:px-8 pt-20 md:pt-32">
          <div className="bg-zinc-900 border border-zinc-800 p-12 md:p-20 text-center rounded-xl">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium mb-4">
              {cta.title}
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              {cta.description}
            </p>
            <button
              onClick={() => (window.location.href = "/book-a-demo")}
              className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all uppercase text-lg"
            >
              {cta.button}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;

import {
  CreditCard,
  RefreshCw,
  ShieldCheck,
  BookOpen,
  Landmark,
  Lock,
} from "lucide-react";
import ImageHero from "./components/ImageHero";

// Page Data
const baasData = {
  hero: {
    badge: "BANKING PRIMITIVES",
    title: ["Build your own bank.", "One API call at a time."],
    description:
      "Foundry BaaS provides the building blocks to embed financial services into any product. Checking accounts, physical cards, and instant transfers—infrastructure handled.",
    cta: "Start Building",
    codeSnippet: {
      comment: "# Create a Checking Account",
      method: "POST",
      endpoint: "/v1/issuing/accounts",
      payload: [
        { key: "holder_name", value: '"Acme Corp"' },
        { key: "type", value: '"checking"' },
        { key: "currency", value: '"USD"' },
        {
          key: "capabilities",
          value: '["transfers", "cards"]',
        },
      ],
      response: '"account_id": "acc_1234"',
    },
  },
  features: [
    {
      icon: CreditCard,
      title: "Card Issuing",
      description: "Issue virtual and physical debit cards in minutes.",
    },
    {
      icon: RefreshCw,
      title: "Instant Transfers",
      description: "Move money between accounts in real-time.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Built-in",
      description: "KYC, AML, and fraud monitoring included.",
    },
    {
      icon: BookOpen,
      title: "Ledger API",
      description: "Double-entry accounting for every transaction.",
    },
    {
      icon: Landmark,
      title: "Bank Partnerships",
      description: "FDIC-insured accounts through our partner banks.",
    },
    {
      icon: Lock,
      title: "SOC 2 Certified",
      description: "Enterprise-grade security and compliance.",
    },
  ],
  cta: {
    title: "Ready to build?",
    description: "Get API keys and start testing in sandbox mode today.",
    button: "Get API Access",
  },
};

const BaaS = () => {
  const { hero, features, cta } = baasData;
  return (
    <div className="lg:px-8 min-h-screen bg-[#1C1C1C] text-white pb-20">
      <ImageHero
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        cta={hero.cta}
        onCtaClick={() => {}}
        heroImage="/images/FinanceBackground.png"
        heroImageAlt="Financial services infrastructure visualization"
        theme="dark"
      />
      <div className="max-w-10xl mx-auto px-6">
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-8 bg-[#24272A] border border-zinc-800 hover:shadow-lg transition-shadow rounded-xl"
            >
              <div className="text-white mb-6">
                <feature.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-zinc-900 p-12 md:p-20 text-center rounded-xl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              {cta.title}
            </h2>
            <p className="text-gray-400 mb-8">{cta.description}</p>
            <button className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:opacity-90 transition-opacity">
              {cta.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaaS;

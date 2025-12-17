import { Layers, Users, Star, CheckCircle2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import ImageHero from "./components/ImageHero";
import SEO from "@/components/SEO";

// Page Data
const retailData = {
  hero: {
    badge: "RETAIL SOLUTIONS",
    title: ["Sell anywhere.", "Manage everywhere."],
    description:
      "A complete point-of-sale system that works as hard as you do. Sync your online and offline sales in real-time.",
    cta: "Get Started Free",
  },
  features: [
    {
      title: "Inventory Sync",
      desc: "Never oversell. Syncs across store and web automatically.",
      icon: Layers,
    },
    {
      title: "Staff Management",
      desc: "Track hours, performance, and permissions per employee.",
      icon: Users,
    },
    {
      title: "Loyalty Built-in",
      desc: "Turn walk-ins into regulars with automated rewards.",
      icon: Star,
    },
  ],
  wholesale: {
    title: "Built for wholesale too",
    description:
      "Manage bulk orders, tiered pricing, and B2B relationships with the same system. One platform for retail and wholesale.",
    items: [
      "Bulk order management",
      "Custom pricing tiers",
      "Credit terms & invoicing",
    ],
  },
  cta: {
    title: "Start selling today",
    description:
      "Join thousands of retailers who trust Foundry to power their business.",
    button: "Get Started Free",
  },
};

const Retail = () => {
  const { features, wholesale, cta } = retailData;
  const location = useLocation();

  const getHeroContent = () => {
    const path =
      location.pathname.endsWith("/") && location.pathname.length > 1
        ? location.pathname.slice(0, -1)
        : location.pathname;

    const baseHero = retailData.hero;

    switch (path) {
      case "/expenses":
        return {
          ...baseHero,
          badge: "EXPENSE MANAGEMENT",
          title: ["Control spend.", "Empower teams."],
          description:
            "Issue physical and virtual cards with built-in controls. Track every expense in real-time and automate reconciliation.",
          heroImage: "/images/v2/Space_Black.png",
        };
      case "/inventory":
        return {
          ...baseHero,
          badge: "SMART INVENTORY",
          title: ["Real-time tracking.", "Zero stockouts."],
          description:
            "Sync inventory across all your locations and online store instantly. Automate reordering and transfer stock with ease.",
          heroImage: "/images/RetailPage.png",
        };
      case "/staff":
        return {
          ...baseHero,
          badge: "TEAM MANAGEMENT",
          title: ["Schedule smarter.", "Pay faster."],
          description:
            "Manage shifts, track performance, and run payroll in minutes. Keep your team happy and your business compliant.",
          heroImage: "/images/v2/payroll_hero.png",
        };
      default:
        return {
          ...baseHero,
          heroImage: "/images/RetailPage.png",
        };
    }
  };

  const currentHero = getHeroContent();

  const getSEOContent = () => {
    const path =
      location.pathname.endsWith("/") && location.pathname.length > 1
        ? location.pathname.slice(0, -1)
        : location.pathname;

    switch (path) {
      case "/expenses":
        return {
          title: "Expense Management & Corporate Cards",
          description:
            "Issue physical and virtual cards with built-in controls. Track every expense in real-time and automate reconciliation with Foundry's expense management solution.",
          keywords:
            "expense management, corporate cards, business expenses, expense tracking, virtual cards, physical cards",
        };
      case "/inventory":
        return {
          title: "Smart Inventory Management System",
          description:
            "Real-time inventory tracking across all locations. Sync inventory across your store and online automatically. Never oversell with Foundry's smart inventory system.",
          keywords:
            "inventory management, stock tracking, inventory sync, real-time inventory, warehouse management, stock control",
        };
      case "/staff":
        return {
          title: "Team Management & Payroll Solutions",
          description:
            "Manage shifts, track performance, and run payroll in minutes. Automated payroll solution ensuring accurate and timely payments for your team.",
          keywords:
            "payroll management, staff management, team scheduling, employee management, payroll software, HR management",
        };
      default:
        return {
          title: "Retail Solutions - POS & Business Management",
          description:
            "Complete point-of-sale system for retail businesses. Manage sales, inventory, and operations in one platform. Sync online and offline sales in real-time.",
          keywords:
            "retail POS, point of sale, retail management, business operations, inventory management, sales tracking",
        };
    }
  };

  const seoContent = getSEOContent();

  return (
    <div className="min-h-screen bg-white text-zinc-900 md:px-8">
      <SEO
        title={seoContent.title}
        description={seoContent.description}
        keywords={seoContent.keywords}
      />
      <ImageHero
        badge={currentHero.badge}
        title={currentHero.title}
        description={currentHero.description}
        cta={currentHero.cta}
        onCtaClick={() => (window.location.href = "/onboarding")}
        heroImage={currentHero.heroImage}
        heroImageAlt="Foundry specific solution hero"
        theme="light"
      />
      <div className="max-w-10xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-8 bg-zinc-50  hover:shadow-lg transition-shadow rounded-xl"
            >
              <div className="w-12 h-12 bg-white border border-zinc-200 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-zinc-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Wholesale Feature */}
        <div className="bg-zinc-50 p-12 mb-20 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-4">{wholesale.title}</h2>
            <p className="text-lg text-zinc-600 mb-8">
              {wholesale.description}
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {wholesale.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className=" p-12 text-center mb-20 rounded-xl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              {cta.title}
            </h2>
            <p className="text-secondary-black mb-8">{cta.description}</p>
            <button
              onClick={() => (window.location.href = "/onboarding")}
              className="px-8 py-4 bg-primary text-white font-medium hover:opacity-90 transition-opacity rounded-lg"
            >
              {cta.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retail;

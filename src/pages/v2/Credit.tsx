import {
  FileText,
  FileSpreadsheet,
  TrendingUp,
  CheckCircle2,
  Database,
} from "lucide-react";
import ImageHero from "./components/ImageHero";

// Page Data
const creditData = {
  hero: {
    badge: "FOUNDRY CAPITAL",
    title: ["Capital that flows", "as fast as you do."],
    description:
      "No paperwork. No personal guarantees. Access funds based on your sales history and inventory, deposited as soon as tomorrow.",
    cta: "Check Eligibility",
    visual: {
      label: "AVAILABLE CAPITAL",
      amount: "$50,000.00",
      badge: "+12% vs last month",
      chartData: [40, 65, 45, 80, 55, 90, 70],
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  },
  products: [
    {
      icon: FileText,
      title: "Invoice Discounting",
      description:
        "Get paid instantly for outstanding invoices. Advance up to 90% of value.",
      example: {
        number: "#1024",
        amount: "$12,500",
        button: "Advance Now",
      },
      features: [],
    },
    {
      icon: FileSpreadsheet,
      title: "Factoring",
      description:
        "Turn your entire accounts receivable ledger into immediate working capital.",
      features: ["No collection hassle", "Scales with sales"],
    },
    {
      icon: TrendingUp,
      title: "Revenue-Based Financing",
      description:
        "Flexible repayment that scales with your revenue. No fixed monthly obligations.",
      features: ["Auto-repayment from sales", "No equity dilution"],
    },
  ],
  dataSection: {
    icon: Database,
    title: "Powered by your data",
    description:
      "Our AI analyzes your transaction history, inventory turnover, and growth trajectory to offer personalized financing options with transparent terms.",
    cta: "View Your Offers",
  },
  pricingExample: {
    title: "Transparent pricing. No hidden fees.",
    description:
      "One flat fee. Repay automatically as you sell. If you have a slow month, you pay less.",
    details: [
      { label: "Loan Amount", value: "$25,000" },
      { label: "Flat Fee", value: "$1,800" },
      { label: "Repayment", value: "10%", suffix: "/ sale" },
    ],
  },
};

const Credit = () => {
  const { hero, products, dataSection, pricingExample } = creditData;
  return (
    <div className="lg:px-8 min-h-screen bg-white text-zinc-900">
      <ImageHero
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        cta={hero.cta}
        onCtaClick={() => {}}
        heroImage="/images/v2/loan_eligibility.png"
        heroImageAlt="Foundry Capital lending solutions"
        theme="light"
      />
      <div className="max-w-10xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="p-8 bg-white border border-zinc-200 hover:shadow-lg transition-shadow group rounded-xl"
            >
              <div className="w-14 h-14 bg-zinc-100 flex items-center justify-center mb-6">
                <product.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-medium mb-3">{product.title}</h3>
              <p className="text-zinc-600 mb-6 min-h-[48px]">
                {product.description}
              </p>
              {product.example && (
                <div className="bg-zinc-50 p-4 border border-zinc-100 mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">
                      Invoice {product.example.number}
                    </span>
                    <span className="font-medium">
                      {product.example.amount}
                    </span>
                  </div>
                  <button className="w-full py-2 bg-primary text-white text-xs font-medium hover:opacity-90 transition-opacity rounded-lg">
                    {product.example.button}
                  </button>
                </div>
              )}
              {product.features.length > 0 && (
                <ul className="space-y-3 text-sm text-zinc-600 mb-6">
                  {product.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-black" /> {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="bg-zinc-50 p-12 border border-zinc-200 mb-20 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <dataSection.icon className="w-16 h-16 text-black mx-auto mb-6" />
            <h2 className="text-3xl font-medium mb-4">{dataSection.title}</h2>
            <p className="text-lg text-zinc-600 mb-8">
              {dataSection.description}
            </p>
            <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              {dataSection.cta}
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 text-white p-12 md:p-20 text-center relative overflow-hidden mb-20 rounded-xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              {pricingExample.title}
            </h2>
            <p className="text-zinc-400 mb-12">{pricingExample.description}</p>

            <div className="grid grid-cols-3 gap-8 text-left border-t border-zinc-800 pt-8">
              {pricingExample.details.map((detail, idx) => (
                <div key={idx}>
                  <div className="text-sm text-zinc-500 mb-1">
                    {detail.label}
                  </div>
                  <div className="text-2xl font-medium">
                    {detail.value}
                    {detail.suffix && (
                      <span className="text-sm text-zinc-500 font-normal">
                        {" "}
                        {detail.suffix}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;

import React from "react";
import { Star, ArrowUpRight } from "lucide-react";
import { useV2Context } from "./context";
import HeroSection from "./components/HeroSection";
import FeatureGrid from "./components/FeatureGrid";
import KYCSection from "./components/KYCSection";
import CTASection from "./components/CTASection";

const Home = () => {
  const { activeSegment, setActiveSegment } = useV2Context();

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section Component */}
      <HeroSection
        activeSegment={activeSegment}
        setActiveSegment={setActiveSegment}
      />

      {/* Feature Grid Component */}
      <FeatureGrid activeSegment={activeSegment} />

      {/* KYC Section Component (Bank Only) */}
      <KYCSection activeSegment={activeSegment} />

      {/* --- Integration Section - MetaMask Style --- */}
      <section
        className={`py-24 overflow-hidden transition-colors duration-500 ${
          activeSegment === "bank" ? "bg-[#1C1C1C]" : "bg-white"
        }`}
      >
        <div className="max-w-10xl mx-auto px-4 md:px-6 lg:px-8">
          {/* MetaMask style 2-column header */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-end">
            <h2
              className={`text-4xl md:text-5xl font-bold tracking-tight ${
                activeSegment === "bank" ? "text-white" : "text-zinc-900"
              }`}
            >
              Connects with
              <br />
              everything you use.
            </h2>
            <p
              className={`text-lg ${
                activeSegment === "bank" ? "text-gray-400" : "text-zinc-600"
              }`}
            >
              Whether you are a coffee shop using Quickbooks or a Tier 1 Bank
              connecting to a legacy mainframe, Foundry acts as the universal
              translator.
            </p>
          </div>

          {/* Integration cards grid - MetaMask style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Quickbooks",
                desc: "Sync invoices and payments automatically",
                status: "Connected",
              },
              {
                name: "Shopify",
                desc: "Real-time inventory and order sync",
                status: "Active",
              },
              {
                name: "Salesforce",
                desc: "Customer data flows seamlessly",
                status: "Connected",
              },
              {
                name: "Oracle",
                desc: "Enterprise-grade core banking integration",
                status: "Live",
              },
            ].map((app, i) => (
              <div
                key={i}
                className={`p-6 rounded-lg border transition-all hover:scale-[1.02] cursor-pointer ${
                  activeSegment === "bank"
                    ? "bg-[#24272A] border-zinc-800 hover:border-zinc-700"
                    : "bg-zinc-50 border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                      activeSegment === "bank"
                        ? "bg-zinc-800 text-white"
                        : "bg-white border border-zinc-200 text-zinc-600"
                    }`}
                  >
                    {app.name[0]}
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      activeSegment === "bank"
                        ? "bg-green-900/30 text-green-400"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {app.status}
                  </span>
                </div>
                <h3
                  className={`font-bold mb-1 ${
                    activeSegment === "bank" ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {app.name}
                </h3>
                <p
                  className={`text-sm ${
                    activeSegment === "bank" ? "text-gray-400" : "text-zinc-600"
                  }`}
                >
                  {app.desc}
                </p>
              </div>
            ))}
          </div>

          {/* View all link */}
          <div className="mt-8 text-center">
            <a
              href="#"
              className={`inline-flex items-center gap-1 font-medium hover:underline ${
                activeSegment === "bank" ? "text-[#F6851B]" : "text-black"
              }`}
            >
              View all 200+ integrations <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* --- Success Stories Section - MetaMask Style --- */}
      <section
        className={`py-24 transition-colors duration-500 ${
          activeSegment === "bank" ? "bg-[#24272A]" : "bg-zinc-50"
        }`}
      >
        <div className="max-w-10xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote
                className={`text-2xl md:text-3xl font-medium leading-relaxed mb-8 ${
                  activeSegment === "bank" ? "text-white" : "text-zinc-900"
                }`}
              >
                "
                {activeSegment === "merchant"
                  ? "Since switching to Foundry, our cafe's checkout speed increased by 40%, and the inventory sync saves us hours every week."
                  : "Foundry's orchestration layer allowed us to modernize our legacy core without downtime. We launched our new mobile banking app in weeks, not months."}
                "
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                    activeSegment === "bank"
                      ? "bg-zinc-700 text-white"
                      : "bg-zinc-200 text-zinc-700"
                  }`}
                >
                  {activeSegment === "merchant" ? "SJ" : "MC"}
                </div>
                <div>
                  <div
                    className={`font-bold ${
                      activeSegment === "bank" ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {activeSegment === "merchant"
                      ? "Sarah Jenkins"
                      : "Michael Chen"}
                  </div>
                  <div
                    className={`text-sm ${
                      activeSegment === "bank"
                        ? "text-gray-400"
                        : "text-zinc-500"
                    }`}
                  >
                    {activeSegment === "merchant"
                      ? "Owner, Bean & Brew"
                      : "CTO, Horizon Bank"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Stats card */}
            <div
              className={`p-8 rounded-lg ${
                activeSegment === "bank"
                  ? "bg-[#1C1C1C] border border-zinc-800"
                  : "bg-white border border-zinc-200"
              }`}
            >
              <h3
                className={`text-lg font-bold mb-8 ${
                  activeSegment === "bank" ? "text-white" : "text-zinc-900"
                }`}
              >
                {activeSegment === "merchant"
                  ? "Trusted by Main Street"
                  : "Empowering Wall Street"}
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {[
                  {
                    value: activeSegment === "merchant" ? "50K+" : "200+",
                    label:
                      activeSegment === "merchant"
                        ? "Businesses"
                        : "Financial Institutions",
                  },
                  {
                    value: activeSegment === "merchant" ? "$2B+" : "$500B+",
                    label: "Transactions Processed",
                  },
                  {
                    value: "99.99%",
                    label: "Uptime SLA",
                  },
                  {
                    value: activeSegment === "merchant" ? "40%" : "70%",
                    label:
                      activeSegment === "merchant"
                        ? "Faster Checkout"
                        : "Faster Time to Market",
                  },
                ].map((stat, i) => (
                  <div key={i}>
                    <div
                      className={`text-3xl font-bold mb-1 ${
                        activeSegment === "bank"
                          ? "text-[#F6851B]"
                          : "text-black"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`text-sm ${
                        activeSegment === "bank"
                          ? "text-gray-400"
                          : "text-zinc-600"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Component */}
      <CTASection activeSegment={activeSegment} />
    </div>
  );
};

export default Home;

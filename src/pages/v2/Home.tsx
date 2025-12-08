import React from "react";
import { Zap, Star, Users, ShieldCheck } from "lucide-react";
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

      {/* --- Integration Section --- */}
      <section
        className={`py-24 overflow-hidden transition-colors duration-500 ${
          activeSegment === "bank" ? "bg-slate-900" : "bg-zinc-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div
                className={`inline-block px-3 py-1 text-xs font-bold mb-6 tracking-wide ${
                  activeSegment === "bank"
                    ? "bg-indigo-900 text-indigo-300"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                ECOSYSTEM INTEGRATION
              </div>
              <h2
                className={`text-4xl md:text-5xl font-bold mb-6 ${
                  activeSegment === "bank" ? "text-white" : "text-zinc-900"
                }`}
              >
                Connects with everything you use.
              </h2>
              <p
                className={`text-xl mb-8 leading-relaxed ${
                  activeSegment === "bank" ? "text-slate-400" : "text-zinc-600"
                }`}
              >
                Whether you are a coffee shop using Quickbooks or a Tier 1 Bank
                connecting to a legacy mainframe, Foundry acts as the universal
                translator.
              </p>

              <ul className="space-y-4">
                {[
                  "Instant sync with accounting software",
                  "Webhooks for every event",
                  "Pre-built UI components",
                  "99.999% SLA Uptime",
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 font-medium ${
                      activeSegment === "bank"
                        ? "text-slate-300"
                        : "text-zinc-700"
                    }`}
                  >
                    <div className="w-6 h-6 bg-green-500 flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 relative">
              {/* Visualizing "Connection" */}
              <div
                className={`p-8 shadow-2xl border relative z-10 ${
                  activeSegment === "bank"
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-zinc-100"
                }`}
              >
                <div className="flex justify-between items-center mb-8">
                  <div
                    className={`font-bold text-lg flex items-center gap-2 ${
                      activeSegment === "bank" ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    <Zap className="w-5 h-5" /> Foundry Hub
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                    Active
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Shopify Store", status: "Synced", time: "2m ago" },
                    {
                      name: "Oracle Core Banking",
                      status: "Connected",
                      time: "Live",
                    },
                    { name: "Salesforce CRM", status: "Idle", time: "1h ago" },
                  ].map((app, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-4 border transition-colors cursor-pointer ${
                        activeSegment === "bank"
                          ? "bg-slate-900 border-slate-800 hover:border-slate-600"
                          : "bg-zinc-50 border-zinc-100 hover:border-zinc-300"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 shadow-sm flex items-center justify-center font-bold border ${
                            activeSegment === "bank"
                              ? "bg-slate-800 border-slate-700 text-slate-400"
                              : "bg-white border-zinc-100 text-zinc-400"
                          }`}
                        >
                          {app.name[0]}
                        </div>
                        <div>
                          <div
                            className={`font-bold ${
                              activeSegment === "bank"
                                ? "text-slate-200"
                                : "text-zinc-800"
                            }`}
                          >
                            {app.name}
                          </div>
                          <div
                            className={`text-xs ${
                              activeSegment === "bank"
                                ? "text-slate-500"
                                : "text-zinc-400"
                            }`}
                          >
                            {app.time}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-zinc-500">
                        {app.status}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-8 pt-6 border-t text-center ${
                    activeSegment === "bank"
                      ? "border-slate-700"
                      : "border-zinc-100"
                  }`}
                >
                  <button className="text-indigo-600 font-bold text-sm hover:underline">
                    View all 200+ integrations
                  </button>
                </div>
              </div>

              {/* Decoration behind */}
              <div
                className={`absolute top-10 -right-10 w-full h-full -z-10 transform rotate-6 ${
                  activeSegment === "bank" ? "bg-slate-800/50" : "bg-zinc-200"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Success Stories Section --- */}
      <section
        className={`py-20 border-t ${
          activeSegment === "bank"
            ? "bg-slate-950 border-slate-900"
            : "bg-white border-zinc-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3
                className={`text-sm font-bold tracking-widest uppercase mb-4 ${
                  activeSegment === "bank" ? "text-indigo-400" : "text-zinc-500"
                }`}
              >
                Success Stories
              </h3>
              <h2
                className={`text-3xl md:text-4xl font-bold mb-6 ${
                  activeSegment === "bank" ? "text-white" : "text-zinc-900"
                }`}
              >
                {activeSegment === "merchant"
                  ? "Trusted by Main Street."
                  : "Empowering Wall Street."}
              </h2>
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote
                className={`text-xl font-medium leading-relaxed mb-6 ${
                  activeSegment === "bank" ? "text-slate-300" : "text-zinc-700"
                }`}
              >
                "
                {activeSegment === "merchant"
                  ? "Since switching to Foundry, our cafe's checkout speed increased by 40%, and the inventory sync saves us hours every week. It just works."
                  : "Foundry's orchestration layer allowed us to modernize our legacy core without downtime. We launched our new mobile banking app in weeks, not months."}
                "
              </blockquote>
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
                      ? "text-slate-500"
                      : "text-zinc-500"
                  }`}
                >
                  {activeSegment === "merchant"
                    ? "Owner, Bean & Brew"
                    : "CTO, Horizon Bank"}
                </div>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden bg-zinc-100">
              {/* Mock Image Placeholder */}
              <div
                className={`absolute inset-0 flex items-center justify-center ${
                  activeSegment === "bank" ? "bg-slate-800" : "bg-zinc-200"
                }`}
              >
                {activeSegment === "merchant" ? (
                  <div className="text-center opacity-30">
                    <Users className="w-20 h-20 mx-auto mb-2 text-zinc-500" />
                    <div className="font-bold text-2xl text-zinc-900">
                      Cafe Owner
                    </div>
                  </div>
                ) : (
                  <div className="text-center opacity-30">
                    <ShieldCheck className="w-20 h-20 mx-auto mb-2 text-indigo-400" />
                    <div className="font-bold text-2xl text-white">
                      Bank Executive
                    </div>
                  </div>
                )}
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

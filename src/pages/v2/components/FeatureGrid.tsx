import React from "react";
import {
  ArrowRight,
  ShoppingBag,
  Landmark,
  Receipt,
  Truck,
  Briefcase,
  Coins,
  Layers,
  Users,
  UserCheck,
  MessageSquare,
  Cpu,
} from "lucide-react";

interface FeatureGridProps {
  activeSegment: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ activeSegment }) => {
  return (
    <section
      className={`py-24 px-6 transition-colors duration-500 ${
        activeSegment === "bank"
          ? "bg-[#1C1C1C] text-white"
          : "bg-zinc-50 text-zinc-900"
      }`}
    >
      <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-end">
          <h2
            className={`text-4xl md:text-5xl font-bold tracking-tight ${
              activeSegment === "bank" ? "text-white" : "text-zinc-900"
            }`}
          >
            {activeSegment === "merchant"
              ? "Built for your business."
              : "Architected for scale."}
          </h2>
          <p
            className={`text-lg ${
              activeSegment === "bank" ? "text-gray-400" : "text-zinc-600"
            }`}
          >
            {activeSegment === "merchant"
              ? "Powerful software that runs your entire operation. From the first sale to the final reconciliation."
              : "Decouple your customer experience from legacy constraints with a composable architecture."}
          </p>
        </div>

        {activeSegment === "merchant" ? (
          // MERCHANT GRID
          <div className="grid md:grid-cols-3 md:grid-rows-3 gap-6 h-auto">
            {/* 1. SALES */}
            <div className="md:col-span-2 p-8 bg-white border border-zinc-200 relative overflow-hidden group transition-all duration-400 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center mb-6">
                    <ShoppingBag className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Omnichannel Sales</h3>
                  <p className="opacity-70 max-w-sm">
                    Sell in-store, online, and on the go. Inventory syncs
                    automatically across every channel.
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <div className="bg-zinc-50 border border-zinc-100 p-4 flex-1 shadow-sm">
                    <div className="text-xs text-zinc-400 mb-1">Online</div>
                    <div className="font-bold text-lg">$14,203</div>
                    <div className="w-full h-1 bg-zinc-200 mt-2">
                      <div className="w-3/4 h-full bg-black"></div>
                    </div>
                  </div>
                  <div className="bg-zinc-50 border border-zinc-100 p-4 flex-1 shadow-sm">
                    <div className="text-xs text-zinc-400 mb-1">In-Store</div>
                    <div className="font-bold text-lg">$8,450</div>
                    <div className="w-full h-1 bg-zinc-200 mt-2">
                      <div className="w-1/2 h-full bg-black"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. BANKING */}
            <div className="md:row-span-2 p-8 bg-[#24272A] text-white relative overflow-hidden flex flex-col transition-all duration-400 hover:-translate-y-2 hover:shadow-xl border border-zinc-800">
              <div className="mb-6">
                <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center mb-6">
                  <Landmark className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Banking & Reconciliation
                </h3>
                <p className="opacity-70 text-sm">
                  Payments land in your account instantly. Books balance
                  themselves.
                </p>
              </div>
              <div className="flex-1 bg-[#2C2F33] p-4 border border-zinc-800 space-y-3 overflow-hidden relative">
                {[
                  {
                    name: "Coffee Beans Inc",
                    amt: "-$450.00",
                    status: "Auto-Matched",
                  },
                  {
                    name: "Daily Sales Payout",
                    amt: "+$2,100.50",
                    status: "Reconciled",
                  },
                  {
                    name: "Utility Bill",
                    amt: "-$120.00",
                    status: "Auto-Matched",
                  },
                  {
                    name: "Catering Deposit",
                    amt: "+$500.00",
                    status: "Reconciled",
                  },
                ].map((tx, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-xs"
                  >
                    <div>
                      <div className="font-bold">{tx.name}</div>
                      <div className="text-green-400 text-[10px]">
                        {tx.status}
                      </div>
                    </div>
                    <div
                      className={
                        tx.amt.startsWith("+") ? "text-white" : "text-zinc-500"
                      }
                    >
                      {tx.amt}
                    </div>
                  </div>
                ))}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#2C2F33] to-transparent"></div>
              </div>
            </div>

            {/* 3. SPEND */}
            <div className="p-8 bg-white border border-zinc-200 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center mb-4">
                  <Receipt className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Spend Management</h3>
                <p className="text-sm opacity-70 mb-4">
                  Issue corporate cards with custom limits for every employee.
                </p>
                <div className="h-16 bg-zinc-900 w-3/4 shadow-lg relative p-3 flex flex-col justify-between group-hover:scale-105 transition-transform origin-left">
                  <div className="w-6 h-4 bg-zinc-700"></div>
                  <div className="flex justify-between items-end">
                    <div className="text-[8px] text-zinc-400">**** 4242</div>
                    <div className="w-4 h-4 bg-white/20"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. PURCHASES */}
            <div className="p-8 bg-white border border-zinc-200 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Purchases</h3>
                <p className="text-sm opacity-70 mb-4">
                  Manage vendors, create purchase orders, and track deliveries.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold bg-zinc-50 p-2 border border-zinc-100">
                  <div className="w-2 h-2 bg-green-500"></div>
                  PO #8832 • Approved
                </div>
              </div>
            </div>

            {/* 5. STAFF */}
            <div className="p-8 bg-white border border-zinc-200 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Staff Management</h3>
                <p className="text-sm opacity-70">
                  Payroll, scheduling, and permissions fully integrated.
                </p>
                <div className="flex -space-x-2 mt-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-zinc-200 border-2 border-white"
                    ></div>
                  ))}
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs border-2 border-white">
                    +4
                  </div>
                </div>
              </div>
            </div>

            {/* 6. CREDIT */}
            <div className="md:col-span-2 p-8 bg-gradient-to-r from-zinc-100 to-white border border-zinc-200 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center mb-4">
                  <Coins className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Credit & Lending</h3>
                <p className="opacity-70 mb-6">
                  Access capital based on your real-time sales data. No
                  paperwork, just growth.
                </p>
                <button className="text-sm font-bold border-b border-black pb-0.5 hover:opacity-70">
                  View Loan Offers
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-white p-4 shadow-lg border border-zinc-100">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs font-bold text-zinc-500">
                      Available Credit
                    </div>
                    <div className="text-xs text-green-600 font-bold">
                      Ready now
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2">$50,000</div>
                  <div className="w-full bg-zinc-100 h-2 overflow-hidden">
                    <div className="bg-black w-2/3 h-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // BANK GRID
          <div className="grid md:grid-cols-3 md:grid-rows-3 gap-6 h-auto">
            {/* 1. ENGAGEMENT BANKING PLATFORM */}
            <div className="md:col-span-2 md:row-span-1 p-10 relative overflow-hidden group bg-[#24272A] border border-zinc-800">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-zinc-800 text-white flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-3">
                  Engagement Banking Platform
                </h3>
                <p className="opacity-80 mb-6 max-w-lg text-lg">
                  Unify data, business logic, and customer journeys on a single
                  orchestration layer. Replace disconnected silos with a
                  seamless fabric.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs font-bold bg-white/10 px-3 py-1 border border-white/10">
                    Digital Fabric
                  </span>
                  <span className="text-xs font-bold bg-white/10 px-3 py-1 border border-white/10">
                    Data + AI
                  </span>
                  <span className="text-xs font-bold bg-white/10 px-3 py-1 border border-white/10">
                    Integration
                  </span>
                </div>
              </div>
              {/* Decorative Pattern */}
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity">
                <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              </div>
            </div>

            {/* 2. TAILORED SEGMENTS */}
            <div className="md:row-span-2 p-8 bg-[#24272A] border border-zinc-800 relative overflow-hidden flex flex-col">
              <div className="mb-6">
                <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center mb-6 text-white">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Tailored Segments</h3>
                <p className="opacity-60 text-sm">
                  Pre-built journeys for every line of business.
                </p>
              </div>
              <div className="flex-1 space-y-3">
                {[
                  {
                    title: "Retail Banking",
                    desc: "Daily banking & loyalty",
                  },
                  {
                    title: "Business Banking",
                    desc: "SME onboarding & entitlements",
                  },
                  { title: "Corporate", desc: "Treasury & trade finance" },
                  { title: "Wealth", desc: "Advisory & portfolio view" },
                ].map((seg, i) => (
                  <div
                    key={i}
                    className="p-4 bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-colors cursor-pointer group"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-gray-200">
                        {seg.title}
                      </span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                    </div>
                    <div className="text-xs text-gray-500">{seg.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. ONBOARDING & ORIGINATION */}
            <div className="p-8 bg-[#24272A] border border-zinc-800 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center mb-4 text-white">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Onboarding & Origination
                </h3>
                <p className="text-sm opacity-60 mb-4">
                  Digitize the entire lifecycle. From ID verification to product
                  funding in minutes.
                </p>
                <div className="w-full bg-zinc-800 h-1.5 overflow-hidden">
                  <div className="bg-gray-400 w-3/4 h-full"></div>
                </div>
                <div className="text-[10px] text-gray-400 mt-2 font-mono">
                  KYC COMPLETE • ACCOUNT FUNDED
                </div>
              </div>
            </div>

            {/* 4. HUMAN ASSIST */}
            <div className="p-8 bg-[#24272A] border border-zinc-800 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center mb-4 text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-2">Human Assist</h3>
                <p className="text-sm opacity-60 mb-4">
                  Empower employees with a unified dashboard. See exactly what
                  your customer sees.
                </p>
                <div className="flex -space-x-2 opacity-50">
                  <div className="w-6 h-6 bg-zinc-600"></div>
                  <div className="w-6 h-6 bg-zinc-500"></div>
                </div>
              </div>
            </div>

            {/* 5. DATA & AI FABRIC */}
            <div className="md:col-span-3 p-8 bg-[#1C1C1C] border border-zinc-800 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 group">
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center text-white">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Grand Central
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Data & AI Fabric</h3>
                <p className="opacity-60 mb-6 max-w-xl">
                  Drive real-time personalization. Cleanse, aggregate, and
                  enrich legacy data to power agentic AI and predictive
                  insights.
                </p>
                <button className="text-sm font-bold border-b border-white/20 pb-0.5 hover:text-gray-300 hover:border-gray-300 transition-colors">
                  Explore Intelligence
                </button>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 bg-zinc-500/10 blur-3xl"></div>
                <div className="grid grid-cols-2 gap-3 relative z-10 opacity-70 text-xs font-mono">
                  <div className="p-3 border border-zinc-700 bg-zinc-800/50">
                    NEXT_BEST_ACTION
                  </div>
                  <div className="p-3 border border-zinc-700 bg-zinc-800/50">
                    CHURN_RISK: LOW
                  </div>
                  <div className="p-3 border border-zinc-700 bg-zinc-800/50">
                    SPEND_ANALYSIS
                  </div>
                  <div className="p-3 border border-zinc-700 bg-zinc-800/50">
                    LOAN_ELIGIBILITY
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureGrid;

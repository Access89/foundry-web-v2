import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  CreditCard,
  Smartphone,
  Globe,
  ShieldCheck,
  BarChart3,
  Layers,
  PieChart,
  Users,
  ShoppingBag,
  Landmark,
  Receipt,
  Briefcase,
  Coins,
  Truck,
  UserCheck,
  MessageSquare,
  Cpu,
  RefreshCw,
  Zap,
  Star,
} from "lucide-react";
import { useV2Context } from "./context";
import { theme } from "./constants";

const Home = () => {
  const { activeSegment, setActiveSegment } = useV2Context();
  const navigate = useNavigate();
  const currentTheme = theme[activeSegment as keyof typeof theme];

  const handleNavigate = (path: string, segment?: string) => {
    navigate(path);
    if (segment) setActiveSegment(segment);
    window.scrollTo(0, 0);
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <header
        className={`relative pt-32 pb-20 px-6 overflow-hidden transition-colors duration-700 ${currentTheme.heroBg}`}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Segment Toggle */}
          <div className="flex justify-center mb-12">
            <div
              className={`p-1 rounded-full flex gap-1 ${
                activeSegment === "bank"
                  ? "bg-white/10 backdrop-blur-sm border border-white/20"
                  : "bg-zinc-100 border border-zinc-200"
              }`}
            >
              <button
                onClick={() => setActiveSegment("merchant")}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeSegment === "merchant"
                    ? "bg-white shadow-md text-black"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                For Business
              </button>
              <button
                onClick={() => setActiveSegment("bank")}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeSegment === "bank"
                    ? "bg-indigo-500 shadow-md text-white"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                For Financial Institutions
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`max-w-2xl ${
                activeSegment === "bank" ? "text-white" : "text-zinc-900"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                {activeSegment === "merchant" ? (
                  <>
                    Commerce <br />
                    <span className="text-zinc-400">Reinvented.</span>
                  </>
                ) : (
                  <>
                    Orchestrate <br />
                    <span className="text-indigo-400">Digital Banking.</span>
                  </>
                )}
              </h1>
              <p
                className={`text-xl md:text-2xl mb-8 leading-relaxed ${
                  activeSegment === "bank" ? "text-slate-300" : "text-zinc-500"
                }`}
              >
                {activeSegment === "merchant"
                  ? "Everything you need to sell, run, and grow your business. One platform, infinite possibilities."
                  : "The Engagement Banking Platform that modernizes legacy systems and unifies the customer journey."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className={`px-8 py-4 rounded-full text-lg font-bold transition-transform hover:-translate-y-1 ${
                    activeSegment === "merchant"
                      ? "bg-black text-white shadow-lg shadow-zinc-500/20"
                      : "bg-indigo-500 text-white shadow-lg shadow-indigo-500/30"
                  }`}
                >
                  {activeSegment === "merchant"
                    ? "Start Selling"
                    : "Request Demo"}
                </button>
                <button
                  className={`px-8 py-4 rounded-full text-lg font-bold border flex items-center justify-center gap-2 hover:bg-white/5 transition-colors ${
                    activeSegment === "bank"
                      ? "border-white/20 text-white"
                      : "border-zinc-300 text-zinc-900"
                  }`}
                >
                  View Documentation <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Abstract Visuals */}
            <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center perspective-1000">
              {activeSegment === "merchant" ? (
                // Square-style Hardware/UI visual
                <div className="relative w-80 h-[480px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-zinc-900 transform rotate-y-12 transition-all duration-700 hover:rotate-y-0">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-900 rounded-b-xl"></div>
                  <div className="p-6 pt-12 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center">
                        <Menu className="w-4 h-4" />
                      </div>
                      <div className="text-lg font-bold">$240.50</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-auto">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="aspect-square bg-zinc-50 rounded-2xl flex items-center justify-center hover:bg-zinc-100 transition-colors cursor-pointer"
                        >
                          <div
                            className={`w-12 h-12 rounded-full ${
                              [
                                "bg-orange-100",
                                "bg-blue-100",
                                "bg-purple-100",
                                "bg-green-100",
                              ][i - 1]
                            } flex items-center justify-center`}
                          >
                            {
                              [
                                <PieChart
                                  key="pie"
                                  className="w-6 h-6 text-orange-500"
                                />,
                                <CreditCard
                                  key="card"
                                  className="w-6 h-6 text-blue-500"
                                />,
                                <Users
                                  key="users"
                                  className="w-6 h-6 text-purple-500"
                                />,
                                <BarChart3
                                  key="bar"
                                  className="w-6 h-6 text-green-500"
                                />,
                              ][i - 1]
                            }
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="w-full py-4 bg-zinc-900 text-white rounded-xl font-bold mt-4">
                      Charge
                    </button>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute -right-24 top-20 bg-white p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <ShieldCheck />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500">
                          Payment Verified
                        </div>
                        <div className="font-bold text-sm">$42.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Backbase-style Platform Architecture visual
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full animate-pulse"></div>

                  {/* Layer 3: Apps */}
                  <div className="absolute top-10 w-64 p-4 bg-slate-800/90 backdrop-blur border border-slate-700 rounded-xl text-center transform -translate-y-4 shadow-2xl z-30 animate-[bounce_4s_infinite]">
                    <div className="text-xs text-indigo-400 font-mono mb-2">
                      OMNI-CHANNEL APPS
                    </div>
                    <div className="flex justify-center gap-3">
                      <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-indigo-500 transition-colors">
                        <Smartphone className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-indigo-500 transition-colors">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Layer 2: Platform */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-80 h-40 bg-gradient-to-r from-indigo-900 to-blue-900 rounded-xl border border-indigo-500/30 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.3)] z-20">
                    <Layers className="w-10 h-10 text-white mb-2" />
                    <div className="font-bold text-white tracking-widest">
                      ENGAGEMENT CORE
                    </div>
                    <div className="text-xs text-indigo-200 mt-1">
                      Orchestration Layer
                    </div>
                  </div>

                  {/* Layer 1: Legacy */}
                  <div className="absolute bottom-10 w-96 p-6 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center z-10 opacity-70">
                    <div className="text-xs text-slate-500 font-mono">
                      LEGACY CORE
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-2 w-8 bg-slate-700 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Connectors */}
                  <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent left-1/2 -translate-x-1/2"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* --- Feature Grid (Bento Style) --- */}
      <section
        className={`py-24 px-6 transition-colors duration-500 ${
          activeSegment === "bank"
            ? "bg-slate-950 text-white"
            : "bg-zinc-50 text-zinc-900"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              {activeSegment === "merchant"
                ? "Built for your business."
                : "Architected for scale."}
            </h2>
            <p className="text-lg opacity-70">
              {activeSegment === "merchant"
                ? "Powerful software that runs your entire operation. From the first sale to the final reconciliation."
                : "Decouple your customer experience from legacy constraints with a composable architecture."}
            </p>
          </div>

          {activeSegment === "merchant" ? (
            // MERCHANT GRID
            <div className="grid md:grid-cols-3 md:grid-rows-3 gap-6 h-auto">
              {/* 1. SALES */}
              <div className="md:col-span-2 rounded-3xl p-8 bg-white border border-zinc-200 relative overflow-hidden group">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-6">
                      <ShoppingBag className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Omnichannel Sales
                    </h3>
                    <p className="opacity-70 max-w-sm">
                      Sell in-store, online, and on the go. Inventory syncs
                      automatically across every channel.
                    </p>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-4 flex-1 shadow-sm">
                      <div className="text-xs text-zinc-400 mb-1">Online</div>
                      <div className="font-bold text-lg">$14,203</div>
                      <div className="w-full h-1 bg-zinc-200 rounded-full mt-2">
                        <div className="w-3/4 h-full bg-black rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-4 flex-1 shadow-sm">
                      <div className="text-xs text-zinc-400 mb-1">In-Store</div>
                      <div className="font-bold text-lg">$8,450</div>
                      <div className="w-full h-1 bg-zinc-200 rounded-full mt-2">
                        <div className="w-1/2 h-full bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. BANKING */}
              <div className="md:row-span-2 rounded-3xl p-8 bg-black text-white relative overflow-hidden flex flex-col">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6">
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
                <div className="flex-1 bg-zinc-900 rounded-xl p-4 border border-zinc-800 space-y-3 overflow-hidden relative">
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
                          tx.amt.startsWith("+")
                            ? "text-white"
                            : "text-zinc-500"
                        }
                      >
                        {tx.amt}
                      </div>
                    </div>
                  ))}
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                </div>
              </div>

              {/* 3. SPEND */}
              <div className="rounded-3xl p-8 bg-white border border-zinc-200 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4">
                    <Receipt className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Spend Management</h3>
                  <p className="text-sm opacity-70 mb-4">
                    Issue corporate cards with custom limits for every employee.
                  </p>
                  <div className="h-16 bg-zinc-900 rounded-xl w-3/4 shadow-lg relative p-3 flex flex-col justify-between group-hover:scale-105 transition-transform origin-left">
                    <div className="w-6 h-4 bg-zinc-700 rounded-sm"></div>
                    <div className="flex justify-between items-end">
                      <div className="text-[8px] text-zinc-400">**** 4242</div>
                      <div className="w-4 h-4 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. PURCHASES */}
              <div className="rounded-3xl p-8 bg-white border border-zinc-200 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4">
                    <Truck className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Purchases</h3>
                  <p className="text-sm opacity-70 mb-4">
                    Manage vendors, create purchase orders, and track
                    deliveries.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold bg-zinc-50 p-2 rounded-lg border border-zinc-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    PO #8832 • Approved
                  </div>
                </div>
              </div>

              {/* 5. STAFF */}
              <div className="rounded-3xl p-8 bg-white border border-zinc-200 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4">
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
                        className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white"
                      ></div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs border-2 border-white">
                      +4
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. CREDIT */}
              <div className="md:col-span-2 rounded-3xl p-8 bg-gradient-to-r from-zinc-100 to-white border border-zinc-200 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4">
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
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-zinc-100">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs font-bold text-zinc-500">
                        Available Credit
                      </div>
                      <div className="text-xs text-green-600 font-bold">
                        Ready now
                      </div>
                    </div>
                    <div className="text-3xl font-bold mb-2">$50,000</div>
                    <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-black w-2/3 h-full rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // BANK GRID (Backbase Structure)
            <div className="grid md:grid-cols-3 md:grid-rows-3 gap-6 h-auto">
              {/* 1. ENGAGEMENT BANKING PLATFORM (Hero) */}
              <div className="md:col-span-2 md:row-span-1 rounded-3xl p-10 relative overflow-hidden group bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 border border-indigo-500/30">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-6">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">
                    Engagement Banking Platform
                  </h3>
                  <p className="opacity-80 mb-6 max-w-lg text-lg">
                    Unify data, business logic, and customer journeys on a
                    single orchestration layer. Replace disconnected silos with
                    a seamless fabric.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      Digital Fabric
                    </span>
                    <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      Data + AI
                    </span>
                    <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      Integration
                    </span>
                  </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                </div>
              </div>

              {/* 2. TAILORED SEGMENTS (List) */}
              <div className="md:row-span-2 rounded-3xl p-8 bg-slate-900 border border-slate-800 relative overflow-hidden flex flex-col">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 text-indigo-400">
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
                      className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors cursor-pointer group"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-200">
                          {seg.title}
                        </span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                      </div>
                      <div className="text-xs text-slate-500">{seg.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. SALES SUITE (Onboarding) */}
              <div className="rounded-3xl p-8 bg-slate-900 border border-slate-800 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-4 text-green-400">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Onboarding & Origination
                  </h3>
                  <p className="text-sm opacity-60 mb-4">
                    Digitize the entire lifecycle. From ID verification to
                    product funding in minutes.
                  </p>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-green-500 w-3/4 h-full rounded-full"></div>
                  </div>
                  <div className="text-[10px] text-green-400 mt-2 font-mono">
                    KYC COMPLETE • ACCOUNT FUNDED
                  </div>
                </div>
              </div>

              {/* 4. SERVICING SUITE (Human Assist) */}
              <div className="rounded-3xl p-8 bg-slate-900 border border-slate-800 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-4 text-indigo-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Human Assist</h3>
                  <p className="text-sm opacity-60 mb-4">
                    Empower employees with a unified dashboard. See exactly what
                    your customer sees.
                  </p>
                  <div className="flex -space-x-2 opacity-50">
                    <div className="w-6 h-6 rounded-full bg-indigo-500"></div>
                    <div className="w-6 h-6 rounded-full bg-slate-500"></div>
                  </div>
                </div>
              </div>

              {/* 5. INTELLIGENCE (Data & AI) */}
              <div className="md:col-span-3 rounded-3xl p-8 bg-slate-950 border border-slate-900 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 group">
                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-purple-400">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">
                      Grand Central
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Data & AI Fabric</h3>
                  <p className="opacity-60 mb-6 max-w-xl">
                    Drive real-time personalization. Cleanse, aggregate, and
                    enrich legacy data to power agentic AI and predictive
                    insights.
                  </p>
                  <button className="text-sm font-bold border-b border-white/20 pb-0.5 hover:text-purple-400 hover:border-purple-400 transition-colors">
                    Explore Intelligence
                  </button>
                </div>
                <div className="flex-1 w-full relative">
                  <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full"></div>
                  <div className="grid grid-cols-2 gap-3 relative z-10 opacity-70 text-xs font-mono">
                    <div className="p-3 border border-purple-500/30 rounded bg-purple-500/5">
                      NEXT_BEST_ACTION
                    </div>
                    <div className="p-3 border border-purple-500/30 rounded bg-purple-500/5">
                      CHURN_RISK: LOW
                    </div>
                    <div className="p-3 border border-purple-500/30 rounded bg-purple-500/5">
                      SPEND_ANALYSIS
                    </div>
                    <div className="p-3 border border-purple-500/30 rounded bg-purple-500/5">
                      LOAN_ELIGIBILITY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- KYC / AML Section (Bank Only - New) --- */}
      {activeSegment === "bank" && (
        <section className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-16 md:text-center max-w-3xl mx-auto">
              <div className="inline-block px-3 py-1 bg-red-900/30 text-red-400 border border-red-500/30 rounded-full text-xs font-bold mb-6 tracking-wide">
                RISK & COMPLIANCE
              </div>
              <h2 className="text-4xl font-bold mb-4 text-white">
                See risk before it strikes.
              </h2>
              <p className="text-lg text-slate-400">
                Replace manual checks with automated, real-time intelligence.
                Screen against global watchlists, monitor transactions, and
                onboard customers faster.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Visual Interface */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold">
                      JD
                    </div>
                    <div>
                      <div className="text-white font-bold">John Doe</div>
                      <div className="text-xs text-slate-500">ID: 9928381</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/50 rounded text-xs font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    HIGH RISK
                  </div>
                </div>

                {/* Risk Factors */}
                <div className="space-y-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-indigo-400" />
                      <span className="text-sm text-slate-300">
                        PEP Screening
                      </span>
                    </div>
                    <span className="text-xs font-mono text-green-400">
                      CLEAR
                    </span>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-xl border border-red-900/30 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-red-400" />
                      <span className="text-sm text-slate-300">
                        Sanctions List
                      </span>
                    </div>
                    <span className="text-xs font-mono text-red-400">
                      MATCH FOUND
                    </span>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <RefreshCw className="w-5 h-5 text-indigo-400" />
                      <span className="text-sm text-slate-300">
                        Adverse Media
                      </span>
                    </div>
                    <span className="text-xs font-mono text-green-400">
                      CLEAR
                    </span>
                  </div>
                </div>

                {/* Graph Visual */}
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="text-xs text-slate-500 mb-3 font-bold uppercase tracking-wider">
                    Transaction Link Analysis
                  </div>
                  <div className="flex justify-center gap-8 relative h-24 items-center">
                    {/* Node 1 */}
                    <div className="w-8 h-8 bg-slate-700 rounded-full z-10 border-2 border-slate-500"></div>
                    {/* Connector Line */}
                    <div className="absolute h-0.5 bg-slate-700 w-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    {/* Node 2 (Center) */}
                    <div className="w-12 h-12 bg-red-900/50 rounded-full z-10 border-2 border-red-500 flex items-center justify-center text-red-500 font-bold text-xs">
                      !
                    </div>
                    {/* Node 3 */}
                    <div className="w-8 h-8 bg-slate-700 rounded-full z-10 border-2 border-slate-500"></div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-8">
                {[
                  {
                    title: "Global Sanctions & Watchlists",
                    desc: "Live API connections to OFAC, UN, HMT, and 1000+ global enforcement lists. Updates in seconds, not days.",
                  },
                  {
                    title: "AI Transaction Monitoring",
                    desc: "Reduce false positives by 70%. Our behavioral models adapt to new fraud typologies automatically.",
                  },
                  {
                    title: "Automated KYB",
                    desc: "Unwrap corporate structures instantly. Visualize UBOs (Ultimate Beneficial Owners) with interactive graph networks.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex flex-shrink-0 items-center justify-center text-red-400 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
                <button className="mt-4 px-8 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold transition-colors shadow-lg shadow-red-900/20">
                  View Compliance API
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- Split Integration Section --- */}
      <section
        className={`py-24 overflow-hidden transition-colors duration-500 ${
          activeSegment === "bank" ? "bg-slate-900" : "bg-zinc-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-wide ${
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
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
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
                className={`p-8 rounded-3xl shadow-2xl border relative z-10 ${
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
                      className={`flex items-center justify-between p-4 rounded-xl border transition-colors cursor-pointer ${
                        activeSegment === "bank"
                          ? "bg-slate-900 border-slate-800 hover:border-slate-600"
                          : "bg-zinc-50 border-zinc-100 hover:border-zinc-300"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-lg shadow-sm flex items-center justify-center font-bold border ${
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
                className={`absolute top-10 -right-10 w-full h-full rounded-3xl -z-10 transform rotate-6 ${
                  activeSegment === "bank" ? "bg-slate-800/50" : "bg-zinc-200"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Success Stories (New Cohesive Section) --- */}
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
            <div className="relative h-80 rounded-2xl overflow-hidden bg-zinc-100">
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

      {/* --- CTA Section --- */}
      <section
        className={`py-32 px-6 text-center transition-colors duration-700 ${
          activeSegment === "bank"
            ? "bg-gradient-to-b from-indigo-900 to-slate-900 text-white"
            : "bg-black text-white"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">
            Ready to {activeSegment === "merchant" ? "grow?" : "transform?"}
          </h2>
          <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto">
            Join millions of businesses and financial institutions building the
            future of money on Foundry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:scale-105 transition-transform">
              Create free account
            </button>
            <button className="px-10 py-5 border border-white/30 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Code2,
  CreditCard,
  RefreshCw,
  ShieldCheck,
  BookOpen,
  Landmark,
  Lock,
} from "lucide-react";
import { useV2Context } from "./context";

const BaaS = () => {
  const navigate = useNavigate();
  const { setActiveSegment } = useV2Context();

  const handleBack = () => {
    setActiveSegment("bank");
    navigate("/v2");
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-950 text-white animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white font-bold mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-bold mb-6">
              BANKING PRIMITIVES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              Build your own bank.
              <br />
              <span className="text-indigo-400">One API call at a time.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Foundry BaaS provides the building blocks to embed financial
              services into any product. Checking accounts, physical cards, and
              instant transfers—infrastructure handled.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors">
                Start Building
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-50">
                <Code2 className="w-6 h-6 text-slate-500" />
              </div>
              <div className="font-mono text-sm overflow-x-auto">
                <div className="text-slate-500 mb-4">
                  # Create a Checking Account
                </div>
                <div className="text-purple-400">
                  POST <span className="text-white">/v1/issuing/accounts</span>
                </div>
                <div className="text-slate-300 mt-2">{`{`}</div>
                <div className="pl-4 text-blue-300">
                  holder_name:{" "}
                  <span className="text-green-400">"Acme Corp"</span>,
                </div>
                <div className="pl-4 text-blue-300">
                  type: <span className="text-green-400">"checking"</span>,
                </div>
                <div className="pl-4 text-blue-300">
                  currency: <span className="text-green-400">"USD"</span>,
                </div>
                <div className="pl-4 text-blue-300">
                  capabilities: [
                  <span className="text-green-400">"transfers"</span>,{" "}
                  <span className="text-green-400">"card_issuing"</span>]
                </div>
                <div className="text-slate-300">{`}`}</div>

                <div className="mt-6 text-slate-500 mb-2">// Response</div>
                <div className="text-slate-300">{`{`}</div>
                <div className="pl-4 text-blue-300">
                  id: <span className="text-green-400">"acct_1Hh5z..."</span>,
                </div>
                <div className="pl-4 text-blue-300">
                  routing_number:{" "}
                  <span className="text-green-400">"110000000"</span>,
                </div>
                <div className="pl-4 text-blue-300">
                  account_number:{" "}
                  <span className="text-green-400">"987654321"</span>,
                </div>
                <div className="pl-4 text-blue-300">
                  status: <span className="text-green-400">"active"</span>
                </div>
                <div className="text-slate-300">{`}`}</div>
              </div>
              {/* Glowing effect */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Complete Financial Infrastructure
            </h2>
            <p className="text-slate-400">
              Everything you need to run a fintech program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Card Issuing",
                desc: "Instant virtual cards and custom physical cards.",
                icon: <CreditCard className="w-8 h-8 text-indigo-400" />,
              },
              {
                title: "Payment Rails",
                desc: "ACH, Wires, RTP, and FedNow access.",
                icon: <RefreshCw className="w-8 h-8 text-indigo-400" />,
              },
              {
                title: "Compliance",
                desc: "Automated KYC/KYB and fraud monitoring.",
                icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
              },
              {
                title: "Ledgering",
                desc: "Real-time double-entry ledger for all transactions.",
                icon: <BookOpen className="w-8 h-8 text-indigo-400" />,
              },
              {
                title: "Sponsor Banks",
                desc: "Direct relationships with FDIC-insured banks.",
                icon: <Landmark className="w-8 h-8 text-indigo-400" />,
              },
              {
                title: "Data Security",
                desc: "PCI-DSS Level 1 and SOC2 Type II Certified.",
                icon: <Lock className="w-8 h-8 text-indigo-400" />,
              },
            ].map((feat, i) => (
              <div
                key={i}
                className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors"
              >
                <div className="mb-4">{feat.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-400">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Card Issuing Visual */}
        <div className="bg-gradient-to-r from-indigo-900 to-blue-900 rounded-3xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl font-bold mb-4">Issue cards instantly.</h2>
            <p className="text-indigo-200 mb-8 text-lg">
              Create branded virtual and physical cards for your users. Set
              spend controls, manage PINs, and view transactions in real-time.
            </p>
            <ul className="space-y-2 mb-8 text-indigo-100">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div> Apple
                Pay & Google Pay ready
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>{" "}
                Just-in-Time (JIT) Funding
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>{" "}
                Dynamic Spend Controls
              </li>
            </ul>
            <button className="px-6 py-3 bg-white text-indigo-900 font-bold rounded-full">
              Explore Issuing
            </button>
          </div>

          <div className="flex-1 flex justify-center perspective-1000 relative">
            {/* 3D Card Effect */}
            <div className="w-80 h-52 bg-zinc-900 rounded-2xl shadow-2xl transform rotate-y-12 rotate-x-12 border border-zinc-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-white font-bold italic text-2xl">
                FOUNDRY
              </div>
              <div className="absolute bottom-6 left-6 text-zinc-400 font-mono tracking-widest">
                **** **** **** 4242
              </div>
              <div className="absolute bottom-6 right-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/80"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500/80"></div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/30 blur-[80px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaaS;

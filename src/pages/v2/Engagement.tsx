import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Smartphone,
  Globe,
  Users,
  Layout,
  MousePointerClick,
  Monitor,
} from "lucide-react";
import { useV2Context } from "./context";

const Engagement = () => {
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

        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-bold mb-6">
            ENGAGEMENT PLATFORM
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Re-architect banking
            <br />
            <span className="text-indigo-400">around the customer.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Stop patching legacy silos. Implement a unified engagement layer
            that orchestrates every interaction across web, mobile, and branch.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-500">
              Request Platform Demo
            </button>
          </div>
        </div>

        {/* Architecture Visual */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-indigo-900/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Top Layer: Channels */}
            <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center">
                <Smartphone className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="font-bold">Retail App</div>
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center">
                <Globe className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="font-bold">Web Banking</div>
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center">
                <Users className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="font-bold">Employee Hub</div>
              </div>
            </div>

            {/* Arrows */}
            <div className="h-12 w-px bg-slate-700"></div>

            {/* Middle Layer: Engagement Platform */}
            <div className="w-full max-w-5xl bg-gradient-to-r from-indigo-900 to-blue-900 rounded-2xl p-1 border border-indigo-500/50 shadow-[0_0_50px_rgba(79,70,229,0.3)]">
              <div className="bg-slate-950/50 rounded-xl p-8 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold tracking-widest text-indigo-100">
                    ENGAGEMENT BANKING PLATFORM
                  </h3>
                  <p className="text-sm text-indigo-300">
                    Orchestration & Experience Layer
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center text-sm font-semibold">
                  <div className="p-4 bg-indigo-600/20 rounded border border-indigo-500/30">
                    Identity Mgmt
                  </div>
                  <div className="p-4 bg-indigo-600/20 rounded border border-indigo-500/30">
                    Flow Control
                  </div>
                  <div className="p-4 bg-indigo-600/20 rounded border border-indigo-500/30">
                    Data Aggregation
                  </div>
                  <div className="p-4 bg-indigo-600/20 rounded border border-indigo-500/30">
                    Entitlements
                  </div>
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div className="h-12 w-px bg-slate-700"></div>

            {/* Bottom Layer: Systems of Record */}
            <div className="w-full max-w-4xl p-6 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center opacity-60">
              <div className="font-mono text-xs text-slate-500">
                SYSTEMS OF RECORD
              </div>
              <div className="flex gap-4 font-bold text-slate-500">
                <span>Core Banking</span>
                <span>•</span>
                <span>CRM</span>
                <span>•</span>
                <span>Payments Engine</span>
                <span>•</span>
                <span>KYC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
            <Layout className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Unified Customer View</h3>
            <p className="text-slate-400">
              Break down silos. See every account, interaction, and product
              holding in one dashboard.
            </p>
          </div>
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
            <MousePointerClick className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Journey Orchestration</h3>
            <p className="text-slate-400">
              Design and deploy onboarding flows and loan applications without
              writing code.
            </p>
          </div>
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
            <Monitor className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Employee Empowerment</h3>
            <p className="text-slate-400">
              Give your tellers and support agents the same view your customers
              see.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagement;

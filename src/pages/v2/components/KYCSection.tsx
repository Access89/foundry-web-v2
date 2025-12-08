import React from "react";
import { Globe, ShieldCheck, RefreshCw } from "lucide-react";

interface KYCSectionProps {
  activeSegment: string;
}

const KYCSection: React.FC<KYCSectionProps> = ({ activeSegment }) => {
  if (activeSegment !== "bank") return null;

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-red-900/30 text-red-400 border border-red-500/30 text-xs font-bold mb-6 tracking-wide">
            RISK & COMPLIANCE
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            See risk before it strikes.
          </h2>
          <p className="text-lg text-slate-400">
            Replace manual checks with automated, real-time intelligence. Screen
            against global watchlists, monitor transactions, and onboard
            customers faster.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual Interface */}
          <div className="bg-slate-900 border border-slate-800 p-6 shadow-2xl relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 flex items-center justify-center text-slate-300 font-bold">
                  JD
                </div>
                <div>
                  <div className="text-white font-bold">John Doe</div>
                  <div className="text-xs text-slate-500">ID: 9928381</div>
                </div>
              </div>
              <div className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/50 rounded text-xs font-bold flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 animate-pulse"></div>
                HIGH RISK
              </div>
            </div>

            {/* Risk Factors */}
            <div className="space-y-4">
              <div className="p-4 bg-slate-950 border border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm text-slate-300">PEP Screening</span>
                </div>
                <span className="text-xs font-mono text-green-400">CLEAR</span>
              </div>
              <div className="p-4 bg-slate-950 border border-red-900/30 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-red-400" />
                  <span className="text-sm text-slate-300">Sanctions List</span>
                </div>
                <span className="text-xs font-mono text-red-400">
                  MATCH FOUND
                </span>
              </div>
              <div className="p-4 bg-slate-950 border border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm text-slate-300">Adverse Media</span>
                </div>
                <span className="text-xs font-mono text-green-400">CLEAR</span>
              </div>
            </div>

            {/* Graph Visual */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="text-xs text-slate-500 mb-3 font-bold uppercase tracking-wider">
                Transaction Link Analysis
              </div>
              <div className="flex justify-center gap-8 relative h-24 items-center">
                {/* Node 1 */}
                <div className="w-8 h-8 bg-slate-700 z-10 border-2 border-slate-500"></div>
                {/* Connector Line */}
                <div className="absolute h-0.5 bg-slate-700 w-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                {/* Node 2 (Center) */}
                <div className="w-12 h-12 bg-red-900/50 z-10 border-2 border-red-500 flex items-center justify-center text-red-500 font-bold text-xs">
                  !
                </div>
                {/* Node 3 */}
                <div className="w-8 h-8 bg-slate-700 z-10 border-2 border-slate-500"></div>
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
                <div className="w-10 h-10 bg-slate-900 border border-slate-800 flex flex-shrink-0 items-center justify-center text-red-400 font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            <button className="mt-4 px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold transition-colors shadow-lg shadow-red-900/20">
              View Compliance API
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYCSection;

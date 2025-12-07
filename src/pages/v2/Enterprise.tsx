import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useV2Context } from "./context";

const Enterprise = () => {
  const navigate = useNavigate();
  const { setActiveSegment } = useV2Context();

  const handleBack = () => {
    setActiveSegment("bank");
    navigate("/v2");
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-900 text-white animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white font-bold mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-bold mb-6">
              ENTERPRISE PLATFORM
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Global payments.
              <br />
              Without the friction.
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Consolidate your payment stack. One API for all your brands,
              regions, and channels.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-500 transition-colors">
                Contact Sales
              </button>
              <button className="px-8 py-4 border border-slate-600 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-colors">
                View API Docs
              </button>
            </div>
          </div>
          <div className="flex-1 bg-slate-950 p-6 rounded-2xl border border-slate-800 font-mono text-sm shadow-2xl">
            <div className="flex gap-2 mb-4 text-slate-500">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-2">
              <div className="text-purple-400">
                const <span className="text-white">payment</span> = await
                foundry.charges.create({`{`}
              </div>
              <div className="pl-4 text-blue-300">
                amount: <span className="text-green-400">2500000</span>,
              </div>
              <div className="pl-4 text-blue-300">
                currency: <span className="text-green-400">'usd'</span>,
              </div>
              <div className="pl-4 text-blue-300">
                source:{" "}
                <span className="text-green-400">
                  'tok_mastercard_corporate'
                </span>
                ,
              </div>
              <div className="pl-4 text-blue-300">
                metadata: {"{"}{" "}
                <span className="text-green-400">order_id: '6735'</span> {"}"}
              </div>
              <div className="text-purple-400">{`}`});</div>
              <div className="text-slate-500 mt-4">// Response 200 OK</div>
              <div className="text-green-400">"status": "succeeded"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;

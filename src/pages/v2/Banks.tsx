import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Smartphone, ShieldCheck, PieChart } from "lucide-react";
import { useV2Context } from "./context";

const Banks = () => {
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
          <div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 border border-blue-500/30 rounded-full text-xs font-bold mb-6">
            BANKING AS A SERVICE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Digital transformation,
            <br />
            delivered.
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            Modernize your legacy core without the risky "rip and replace". Our
            orchestration layer sits on top of your mainframe to power modern
            apps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
            <Smartphone className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">White-label Apps</h3>
            <p className="text-slate-400">
              Launch a 5-star mobile banking app in months, not years. Fully
              customizable UI.
            </p>
          </div>
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
            <ShieldCheck className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Legacy Wrapper</h3>
            <p className="text-slate-400">
              Securely expose your mainframe data via REST APIs. SOC2 compliant.
            </p>
          </div>
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
            <PieChart className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Wealth Modules</h3>
            <p className="text-slate-400">
              Plug-and-play investment and wealth management features for your
              retail customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banks;

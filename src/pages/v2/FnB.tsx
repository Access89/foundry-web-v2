import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useV2Context } from "./context";

const FnB = () => {
  const navigate = useNavigate();
  const { setActiveSegment } = useV2Context();

  const handleBack = () => {
    setActiveSegment("merchant");
    navigate("/v2");
  };

  return (
    <div className="pt-24 min-h-screen bg-white text-zinc-900 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-zinc-500 hover:text-black font-bold mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-6">
            FOOD & BEVERAGE
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Serve faster. Turnover more.
          </h1>
          <p className="text-xl text-zinc-500 mb-8">
            From quick-service cafes to full-service fine dining, keep your
            front and back of house in perfect sync.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-zinc-900 text-white p-10 rounded-3xl flex flex-col justify-between h-96 overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">
                Kitchen Display System
              </h3>
              <p className="opacity-70">
                Replace paper tickets with smart screens.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <div className="flex-1 bg-zinc-800 p-4 rounded-xl border-l-4 border-green-500">
                <div className="text-xs opacity-50 mb-1">Table 4 • 2m ago</div>
                <div className="font-bold">2x Burger</div>
                <div className="font-bold">1x Fries</div>
              </div>
              <div className="flex-1 bg-zinc-800 p-4 rounded-xl border-l-4 border-yellow-500">
                <div className="text-xs opacity-50 mb-1">Table 2 • 5m ago</div>
                <div className="font-bold">1x Salad</div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-10 rounded-3xl border border-orange-100 flex flex-col justify-between h-96 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2 text-orange-900">
                QR Ordering
              </h3>
              <p className="text-orange-800/70">
                Let guests order and pay from their phone.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-white rounded-tl-[3rem] shadow-xl p-6 flex flex-col items-center justify-center">
              <div className="w-32 h-32 bg-zinc-900 rounded-xl mb-4 flex items-center justify-center text-white font-mono text-xs">
                QR CODE
              </div>
              <div className="font-bold text-sm">Scan to Order</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FnB;

import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Layers, Users, Star, CheckCircle2 } from "lucide-react";
import { useV2Context } from "./context";

const Retail = () => {
  const navigate = useNavigate();
  const { setActiveSegment } = useV2Context();

  const handleBack = () => {
    setActiveSegment("merchant");
    navigate("/v2");
  };

  return (
    <div className="pt-24 min-h-screen bg-white text-zinc-900 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb / Back */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-zinc-500 hover:text-black font-bold mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-block px-3 py-1 bg-zinc-100 rounded-full text-xs font-bold mb-6">
              RETAIL SOLUTIONS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Sell anywhere.
              <br />
              Manage everywhere.
            </h1>
            <p className="text-xl text-zinc-500 mb-8 leading-relaxed">
              A complete point-of-sale system that works as hard as you do. Sync
              your online and offline sales in real-time.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Get Started Free
            </button>
          </div>
          <div className="relative h-[500px] bg-zinc-50 rounded-3xl border border-zinc-200 shadow-xl overflow-hidden flex items-center justify-center">
            {/* Mockup of POS */}
            <div className="w-64 h-[400px] bg-white border-8 border-zinc-900 rounded-[2rem] shadow-2xl flex flex-col">
              <div className="h-8 bg-zinc-100 border-b border-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-400">
                Foundry POS
              </div>
              <div className="flex-1 p-4 grid grid-cols-2 gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-zinc-100 rounded-lg"></div>
                ))}
              </div>
              <div className="p-4 border-t border-zinc-100">
                <div className="flex justify-between font-bold mb-2">
                  <span>Total</span>
                  <span>$142.50</span>
                </div>
                <div className="w-full h-10 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
                  Charge
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Inventory Sync",
              desc: "Never oversell. Syncs across store and web automatically.",
              icon: <Layers className="w-6 h-6" />,
            },
            {
              title: "Staff Management",
              desc: "Track hours, performance, and permissions per employee.",
              icon: <Users className="w-6 h-6" />,
            },
            {
              title: "Loyalty Built-in",
              desc: "Turn walk-ins into regulars with automated rewards.",
              icon: <Star className="w-6 h-6" />,
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-zinc-300 transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-zinc-500">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Wholesale Feature */}
        <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100 flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4">
              NEW
            </div>
            <h2 className="text-3xl font-bold mb-4">Unified Wholesale</h2>
            <p className="text-zinc-500 mb-6 text-lg">
              Manage B2B and B2C inventory in one place. Set custom price lists
              for wholesale clients, offer Net 30 terms, and send digital
              invoices instantly.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 font-medium text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Custom
                Catalog Pricing
              </li>
              <li className="flex items-center gap-3 font-medium text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Bulk Order
                Portal
              </li>
              <li className="flex items-center gap-3 font-medium text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Automated
                Invoicing
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-zinc-100 w-full max-w-md">
            <div className="flex justify-between items-center mb-6 border-b border-zinc-100 pb-4">
              <div className="font-bold">Wholesale Invoice #4492</div>
              <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded font-bold">
                Net 30
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">20x Espresso Blend (5lb)</span>
                <span className="font-bold">$900.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">50x Ceramic Mugs</span>
                <span className="font-bold">$250.00</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t border-zinc-100">
                <span className="font-bold">Total Due</span>
                <span className="font-bold text-lg">$1,150.00</span>
              </div>
            </div>
            <button className="w-full py-3 bg-black text-white rounded-lg font-bold text-sm">
              Send Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retail;

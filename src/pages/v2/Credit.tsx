import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  FileSpreadsheet,
  TrendingUp,
  CheckCircle2,
  Database,
} from "lucide-react";
import { useV2Context } from "./context";

const Credit = () => {
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

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold mb-6">
              FOUNDRY CAPITAL
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Capital that flows
              <br />
              <span className="text-emerald-500">as fast as you do.</span>
            </h1>
            <p className="text-xl text-zinc-500 mb-8 leading-relaxed">
              No paperwork. No personal guarantees. Access funds based on your
              sales history and inventory, deposited as soon as tomorrow.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Check Eligibility
              </button>
            </div>
          </div>

          <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 shadow-xl relative overflow-hidden">
            <div className="flex justify-between items-end mb-8">
              <div>
                <div className="text-sm text-zinc-500 font-bold mb-1">
                  AVAILABLE CAPITAL
                </div>
                <div className="text-4xl font-bold text-zinc-900">
                  $50,000.00
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                  +12% vs last month
                </div>
              </div>
            </div>

            <div className="h-48 flex items-end justify-between gap-2 mb-6">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-zinc-200 rounded-t-sm relative group"
                >
                  <div
                    style={{ height: `${h}%` }}
                    className="absolute bottom-0 w-full bg-emerald-500 rounded-t-sm transition-all duration-500 group-hover:bg-emerald-400"
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-zinc-400 font-bold uppercase tracking-wider">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-white border border-zinc-200 rounded-3xl hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Invoice Discounting</h3>
            <p className="text-zinc-500 mb-6 min-h-[48px]">
              Get paid instantly for outstanding invoices. Advance up to 90% of
              value.
            </p>
            <div className="bg-zinc-50 p-4 rounded-xl mb-6 border border-zinc-100">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold">Invoice #1024</span>
                <span className="font-bold">$12,500</span>
              </div>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-500">
                Advance Now
              </button>
            </div>
          </div>

          <div className="p-8 bg-white border border-zinc-200 rounded-3xl hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <FileSpreadsheet className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Factoring</h3>
            <p className="text-zinc-500 mb-6 min-h-[48px]">
              Turn your entire accounts receivable ledger into immediate working
              capital.
            </p>
            <ul className="space-y-3 text-sm text-zinc-600 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-500" /> No
                collection hassle
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-500" /> Scales with
                sales
              </li>
            </ul>
          </div>

          <div className="p-8 bg-white border border-zinc-200 rounded-3xl hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Revenue-Based Financing</h3>
            <p className="text-zinc-500 mb-6 min-h-[48px]">
              Flexible repayment that scales with your revenue. No fixed monthly
              obligations.
            </p>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
                Auto-repayment from sales
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> No equity
                dilution
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-white rounded-3xl p-12 border border-emerald-100">
          <div className="max-w-3xl mx-auto text-center">
            <Database className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Powered by your data</h2>
            <p className="text-lg text-zinc-600 mb-8">
              Our AI analyzes your transaction history, inventory turnover, and
              growth trajectory to offer personalized financing options with
              transparent terms.
            </p>
            <button className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-500 transition-colors">
              View Your Offers
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 text-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
               <div className="relative z-10 max-w-2xl mx-auto">
                   <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent pricing. No hidden fees.</h2>
                   <p className="text-zinc-400 mb-12">One flat fee. Repay automatically as you sell. If you have a slow month, you pay less.</p>
                   
                   <div className="grid grid-cols-3 gap-8 text-left border-t border-zinc-800 pt-8">
                       <div>
                           <div className="text-sm text-zinc-500 mb-1">Loan Amount</div>
                           <div className="text-2xl font-bold">$25,000</div>
                       </div>
                       <div>
                           <div className="text-sm text-zinc-500 mb-1">Flat Fee</div>
                           <div className="text-2xl font-bold">$1,800</div>
                       </div>
                       <div>
                           <div className="text-sm text-zinc-500 mb-1">Repayment</div>
                           <div className="text-2xl font-bold">10% <span className="text-sm text-zinc-500 font-normal">/ sale</span></div>
                       </div>
                   </div>
               </div>
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zinc-800 to-transparent opacity-20 pointer-events-none"></div>
           </div>
      </div>
    </div>
  );
};

export default Credit;

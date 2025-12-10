import React from "react";
import {
  FileText,
  FileSpreadsheet,
  TrendingUp,
  CheckCircle2,
  Database,
} from "lucide-react";

const Credit = () => {
  return (
    <div className="pt-24 min-h-screen bg-white text-zinc-900">
      <div className="max-w-10xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 mt-8">
          <div>
            <div className="inline-block px-3 py-1 bg-zinc-100 text-xs font-bold mb-6">
              FOUNDRY CAPITAL
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Capital that flows
              <br />
              as fast as you do.
            </h1>
            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
              No paperwork. No personal guarantees. Access funds based on your
              sales history and inventory, deposited as soon as tomorrow.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-md font-bold text-lg hover:opacity-90 transition-opacity">
                Check Eligibility
              </button>
            </div>
          </div>

          <div className="bg-zinc-50 p-8 border border-zinc-200 shadow-lg relative overflow-hidden">
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
                <div className="text-xs font-bold text-black bg-zinc-200 px-2 py-1">
                  +12% vs last month
                </div>
              </div>
            </div>

            <div className="h-48 flex items-end justify-between gap-2 mb-6">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="w-full bg-zinc-200 relative group">
                  <div
                    style={{ height: `${h}%` }}
                    className="absolute bottom-0 w-full bg-black transition-all duration-500 group-hover:opacity-80"
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
          <div className="p-8 bg-white border border-zinc-200 hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-zinc-100 flex items-center justify-center mb-6">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Invoice Discounting</h3>
            <p className="text-zinc-600 mb-6 min-h-[48px]">
              Get paid instantly for outstanding invoices. Advance up to 90% of
              value.
            </p>
            <div className="bg-zinc-50 p-4 border border-zinc-100 mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold">Invoice #1024</span>
                <span className="font-bold">$12,500</span>
              </div>
              <button className="w-full py-2 bg-primary text-white text-xs font-bold hover:opacity-90 transition-opacity">
                Advance Now
              </button>
            </div>
          </div>

          <div className="p-8 bg-white border border-zinc-200 hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-zinc-100 flex items-center justify-center mb-6">
              <FileSpreadsheet className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Factoring</h3>
            <p className="text-zinc-600 mb-6 min-h-[48px]">
              Turn your entire accounts receivable ledger into immediate working
              capital.
            </p>
            <ul className="space-y-3 text-sm text-zinc-600 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black" /> No collection
                hassle
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black" /> Scales with
                sales
              </li>
            </ul>
          </div>

          <div className="p-8 bg-white border border-zinc-200 hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 bg-zinc-100 flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Revenue-Based Financing</h3>
            <p className="text-zinc-600 mb-6 min-h-[48px]">
              Flexible repayment that scales with your revenue. No fixed monthly
              obligations.
            </p>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black" /> Auto-repayment
                from sales
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black" /> No equity
                dilution
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-zinc-50 p-12 border border-zinc-200 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <Database className="w-16 h-16 text-black mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Powered by your data</h2>
            <p className="text-lg text-zinc-600 mb-8">
              Our AI analyzes your transaction history, inventory turnover, and
              growth trajectory to offer personalized financing options with
              transparent terms.
            </p>
            <button className="px-8 py-4 bg-primary text-white rounded-md font-bold hover:opacity-90 transition-opacity">
              View Your Offers
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 text-white p-12 md:p-20 text-center relative overflow-hidden mb-20">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transparent pricing. No hidden fees.
            </h2>
            <p className="text-zinc-400 mb-12">
              One flat fee. Repay automatically as you sell. If you have a slow
              month, you pay less.
            </p>

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
                <div className="text-2xl font-bold">
                  10%{" "}
                  <span className="text-sm text-zinc-500 font-normal">
                    / sale
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;

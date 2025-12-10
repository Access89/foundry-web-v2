import { Icon } from "@iconify/react/dist/iconify.js";
import {
  ShoppingBag,
  Landmark,
  Receipt,
  Truck,
  Briefcase,
  Coins,
} from "lucide-react";

const GreenSection = () => {
  return (
    <section className="p-5 md:p-10 w-full mt-6 lg:mt-0 bg-white">
      <div className="max-w-10xl" id="greensection">
        <div className="mt-10">
          {/* Section Header */}
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 tracking-tight text-[#010101]">
              Built for your business.
            </h2>
            <p className="text-lg opacity-70 text-[#575757]">
              Powerful software that runs your entire operation. From the first
              sale to the final reconciliation.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 md:grid-rows-3 gap-6 h-auto">
            {/* 1. SALES - Large Card */}
            <div className="md:col-span-2 p-8 bg-[#16232A] text-white relative overflow-hidden group transition-all duration-400 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Omnichannel Sales</h3>
                  <p className="opacity-70 max-w-sm">
                    Sell in-store, online, and on the go. Inventory syncs
                    automatically across every channel.
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <div className="bg-white/5 border border-white/10 p-4 flex-1 shadow-sm">
                    <div className="text-xs text-white/50 mb-1">Online</div>
                    <div className="font-bold text-lg">$14,203</div>
                    <div className="w-full h-1 bg-white/20 mt-2">
                      <div className="w-3/4 h-full bg-[#075056]"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 flex-1 shadow-sm">
                    <div className="text-xs text-white/50 mb-1">In-Store</div>
                    <div className="font-bold text-lg">$8,450</div>
                    <div className="w-full h-1 bg-white/20 mt-2">
                      <div className="w-1/2 h-full bg-[#075056]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. BANKING - Tall Card */}
            <div className="md:row-span-2 p-8 bg-[#075056] text-white relative overflow-hidden flex flex-col transition-all duration-400 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6">
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
              <div className="flex-1 bg-white/5 p-4 border border-white/10 space-y-3 overflow-hidden relative">
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
                        tx.amt.startsWith("+") ? "text-white" : "text-white/50"
                      }
                    >
                      {tx.amt}
                    </div>
                  </div>
                ))}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#075056] to-transparent"></div>
              </div>
            </div>

            {/* 3. SPEND */}
            <div className="p-8 bg-[#E4EEF0] relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white flex items-center justify-center mb-4 shadow-sm">
                  <Receipt className="w-5 h-5 text-[#075056]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">
                  Spend Management
                </h3>
                <p className="text-sm opacity-70 mb-4 text-black">
                  Issue corporate cards with custom limits for every employee.
                </p>
                <div className="h-16 bg-[#075056] w-3/4 shadow-lg relative p-3 flex flex-col justify-between group-hover:scale-105 transition-transform origin-left">
                  <div className="w-6 h-4 bg-white/20 rounded-sm"></div>
                  <div className="flex justify-between items-end">
                    <div className="text-[8px] text-white/60">**** 4242</div>
                    <div className="w-4 h-4 bg-white/20"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. PURCHASES */}
            <div className="p-8 bg-[#E4EEF0] relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white flex items-center justify-center mb-4 shadow-sm">
                  <Truck className="w-5 h-5 text-[#075056]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">Purchases</h3>
                <p className="text-sm opacity-70 mb-4 text-black">
                  Manage vendors, create purchase orders, and track deliveries.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold bg-white p-2 shadow-sm">
                  <div className="w-2 h-2 bg-green-500"></div>
                  PO #8832 • Approved
                </div>
              </div>
            </div>

            {/* 5. STAFF */}
            <div className="p-8 bg-[#E4EEF0] relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white flex items-center justify-center mb-4 shadow-sm">
                  <Briefcase className="w-5 h-5 text-[#075056]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">
                  Staff Management
                </h3>
                <p className="text-sm opacity-70 text-black">
                  Payroll, scheduling, and permissions fully integrated.
                </p>
                <div className="flex -space-x-2 mt-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-[#075056]/20 border-2 border-white"
                    ></div>
                  ))}
                  <div className="w-8 h-8 bg-[#075056] text-white flex items-center justify-center text-xs border-2 border-white">
                    +4
                  </div>
                </div>
              </div>
            </div>

            {/* 6. CREDIT - Wide Card */}
            <div className="md:col-span-2 p-8 bg-gradient-to-r from-[#16232A] to-[#075056] text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center mb-4">
                  <Coins className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Credit & Lending</h3>
                <p className="opacity-70 mb-6">
                  Access capital based on your real-time sales data. No
                  paperwork, just growth.
                </p>
                <button className="text-sm font-bold border-b border-white/50 pb-0.5 hover:opacity-70 transition-opacity">
                  View Loan Offers
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-white/10 p-4 backdrop-blur-sm border border-white/20">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs font-bold text-white/70">
                      Available Credit
                    </div>
                    <div className="text-xs text-green-400 font-bold">
                      Ready now
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2">$50,000</div>
                  <div className="w-full bg-white/20 h-2 overflow-hidden">
                    <div className="bg-white w-2/3 h-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenSection;

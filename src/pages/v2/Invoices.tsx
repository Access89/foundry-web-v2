import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  RefreshCw,
  FileText,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { useV2Context } from "./context";

const Invoices = () => {
  const navigate = useNavigate();
  const { setActiveSegment } = useV2Context();

  const handleBack = () => {
    setActiveSegment("merchant");
    navigate("/v2");
  };

  return (
    <div className="pt-24 min-h-screen bg-white text-zinc-900 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-zinc-500 hover:text-black font-bold mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-6">
              SMART INVOICING
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Professional invoices,
              <br />
              <span className="text-blue-600">paid instantly.</span>
            </h1>
            <p className="text-xl text-zinc-500 mb-8 leading-relaxed">
              Create, send, and track custom invoices in seconds. Let clients
              pay by card, ACH, or Apple Pay directly from the email.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Create Invoice
              </button>
            </div>
          </div>

          {/* Interactive Invoice Visual */}
          <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 shadow-xl relative">
            <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6 max-w-sm mx-auto">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-zinc-100 rounded-lg"></div>
                <div className="text-right">
                  <div className="text-xs font-bold text-zinc-400">INVOICE</div>
                  <div className="font-mono">#INV-2024-001</div>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b border-zinc-50 pb-2">
                  <div>
                    <div className="font-bold text-sm">Web Design Service</div>
                    <div className="text-xs text-zinc-400">
                      10 hours @ $150/hr
                    </div>
                  </div>
                  <div className="font-bold">$1,500.00</div>
                </div>
                <div className="flex justify-between border-b border-zinc-50 pb-2">
                  <div>
                    <div className="font-bold text-sm">Hosting (Annual)</div>
                    <div className="text-xs text-zinc-400">Premium Plan</div>
                  </div>
                  <div className="font-bold">$240.00</div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4">
                <div className="text-zinc-500 text-sm">Total Due</div>
                <div className="text-2xl font-bold">$1,740.00</div>
              </div>
              <button className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-bold">
                Pay Invoice
              </button>
            </div>

            {/* Floating Status Notification */}
            <div className="absolute top-1/2 -right-4 bg-white p-3 rounded-lg shadow-lg border border-zinc-100 flex items-center gap-3 animate-bounce">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="text-xs font-bold">Paid by Client</div>
                <div className="text-[10px] text-zinc-400">Just now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
            <RefreshCw className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold mb-3">Recurring Billing</h3>
            <p className="text-zinc-500">
              Set it and forget it. Automatically charge cards for subscriptions
              or retainers on a schedule.
            </p>
          </div>
          <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
            <FileText className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold mb-3">Estimates to Invoices</h3>
            <p className="text-zinc-500">
              Send estimates for approval. One click converts them into a
              payable invoice upon acceptance.
            </p>
          </div>
          <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
            <Activity className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold mb-3">Real-time Tracking</h3>
            <p className="text-zinc-500">
              Know exactly when invoices are viewed, paid, or overdue. Automated
              reminders keep cash flowing.
            </p>
          </div>
        </div>

         <div className="bg-zinc-900 text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
               <h2 className="text-3xl font-bold mb-6">Automate your accounts receivable.</h2>
               <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">1</div>
                     <div>
                        <h4 className="font-bold mb-1">Send</h4>
                        <p className="text-zinc-400 text-sm">Email or text a secure link to your customer.</p>
                     </div>
                  </div>
                  <div className="h-8 w-px bg-zinc-800 ml-4"></div>
                  <div className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">2</div>
                     <div>
                        <h4 className="font-bold mb-1">Remind</h4>
                        <p className="text-zinc-400 text-sm">Foundry automatically sends reminders 3 days before due date.</p>
                     </div>
                  </div>
                  <div className="h-8 w-px bg-zinc-800 ml-4"></div>
                  <div className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-sm">3</div>
                     <div>
                        <h4 className="font-bold mb-1">Reconcile</h4>
                        <p className="text-zinc-400 text-sm">Payment is instantly matched to the invoice in your ledger.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Invoices;

import { RefreshCw, FileText, Activity, CheckCircle2 } from "lucide-react";

const Invoices = () => {
  return (
    <div className="pt-24 min-h-screen bg-white text-zinc-900">
      <div className="max-w-10xl mx-auto px-6">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 mt-8">
          <div>
            <div className="inline-block px-3 py-1 bg-zinc-100 text-xs font-medium mb-6">
              SMART INVOICING
            </div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
              Professional invoices,
              <br />
              paid instantly.
            </h1>
            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
              Create, send, and track custom invoices in seconds. Let clients
              pay by card, ACH, or Apple Pay directly from the email.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-md font-medium text-lg hover:opacity-90 transition-opacity">
                Create Invoice
              </button>
            </div>
          </div>

          {/* Interactive Invoice Visual */}
          <div className="bg-zinc-50 p-8 border border-zinc-200 shadow-lg relative">
            <div className="bg-white shadow-sm border border-zinc-100 p-6 max-w-sm mx-auto">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-zinc-100"></div>
                <div className="text-right">
                  <div className="text-xs font-medium text-zinc-400">INVOICE</div>
                  <div className="font-mono">#INV-2024-001</div>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b border-zinc-50 pb-2">
                  <div>
                    <div className="font-medium text-sm">Web Design Service</div>
                    <div className="text-xs text-zinc-400">
                      10 hours @ $150/hr
                    </div>
                  </div>
                  <div className="font-medium">$1,500.00</div>
                </div>
                <div className="flex justify-between border-b border-zinc-50 pb-2">
                  <div>
                    <div className="font-medium text-sm">Hosting (Annual)</div>
                    <div className="text-xs text-zinc-400">Premium Plan</div>
                  </div>
                  <div className="font-medium">$240.00</div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4">
                <div className="text-zinc-500 text-sm">Total Due</div>
                <div className="text-2xl font-medium">$1,740.00</div>
              </div>
              <button className="w-full mt-6 py-3 bg-primary text-white font-medium hover:opacity-90 transition-opacity">
                Pay Invoice
              </button>
            </div>

            {/* Floating Status Notification */}
            <div className="absolute top-1/2 -right-4 bg-white p-3 shadow-lg border border-zinc-100 flex items-center gap-3">
              <div className="w-8 h-8 bg-zinc-100 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium">Paid by Client</div>
                <div className="text-[10px] text-zinc-400">Just now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-zinc-50 border border-zinc-200">
            <RefreshCw className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-medium mb-3">Recurring Billing</h3>
            <p className="text-zinc-600">
              Set it and forget it. Automatically charge cards for subscriptions
              or retainers on a schedule.
            </p>
          </div>
          <div className="p-8 bg-zinc-50 border border-zinc-200">
            <FileText className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-medium mb-3">Estimates to Invoices</h3>
            <p className="text-zinc-600">
              Send estimates for approval. One click converts them into a
              payable invoice upon acceptance.
            </p>
          </div>
          <div className="p-8 bg-zinc-50 border border-zinc-200">
            <Activity className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-medium mb-3">Real-time Tracking</h3>
            <p className="text-zinc-600">
              Know exactly when invoices are viewed, paid, or overdue. Automated
              reminders keep cash flowing.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 text-white p-12 relative overflow-hidden mb-20">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-medium mb-6">
              Automate your accounts receivable.
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-medium text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-medium mb-1">Send</h4>
                  <p className="text-zinc-400 text-sm">
                    Email or text a secure link to your customer.
                  </p>
                </div>
              </div>
              <div className="h-8 w-px bg-zinc-800 ml-4"></div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-medium text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-medium mb-1">Remind</h4>
                  <p className="text-zinc-400 text-sm">
                    Foundry automatically sends reminders 3 days before due
                    date.
                  </p>
                </div>
              </div>
              <div className="h-8 w-px bg-zinc-800 ml-4"></div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-medium text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-medium mb-1">Reconcile</h4>
                  <p className="text-zinc-400 text-sm">
                    Payment is instantly matched to the invoice in your ledger.
                  </p>
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

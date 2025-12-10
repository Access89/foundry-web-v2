import {
  Code2,
  CreditCard,
  RefreshCw,
  ShieldCheck,
  BookOpen,
  Landmark,
  Lock,
} from "lucide-react";

const BaaS = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 mt-8">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 bg-zinc-800 text-xs font-medium mb-6">
              BANKING PRIMITIVES
            </div>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6 leading-tight">
              Build your own bank.
              <br />
              One API call at a time.
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Foundry BaaS provides the building blocks to embed financial
              services into any product. Checking accounts, physical cards, and
              instant transfers—infrastructure handled.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black rounded-md font-medium text-lg hover:opacity-90 transition-opacity">
                Start Building
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-[#24272A] border border-zinc-800 p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-50">
                <Code2 className="w-6 h-6 text-gray-500" />
              </div>
              <div className="font-mono text-sm overflow-x-auto">
                <div className="text-gray-500 mb-4">
                  # Create a Checking Account
                </div>
                <div className="text-purple-400">
                  POST <span className="text-white">/v1/issuing/accounts</span>
                </div>
                <div className="text-gray-300 mt-2">{`{`}</div>
                <div className="pl-4 text-blue-300">
                  holder_name:{" "}
                  <span className="text-green-400">"Acme Corp"</span>,
                </div>
                <div className="pl-4 text-blue-300">
                  type: <span className="text-green-400">"checking"</span>,
                </div>
                <div className="pl-4 text-blue-300">
                  currency: <span className="text-green-400">"USD"</span>,
                </div>
                <div className="pl-4 text-blue-300">
                  capabilities: [
                  <span className="text-green-400">"transfers"</span>,{" "}
                  <span className="text-green-400">"cards"</span>]
                </div>
                <div className="text-gray-300">{`}`}</div>
                <div className="text-gray-500 mt-4"># Response 201 Created</div>
                <div className="text-green-400">"account_id": "acc_1234"</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <CreditCard className="w-10 h-10" />,
              title: "Card Issuing",
              desc: "Issue virtual and physical debit cards in minutes.",
            },
            {
              icon: <RefreshCw className="w-10 h-10" />,
              title: "Instant Transfers",
              desc: "Move money between accounts in real-time.",
            },
            {
              icon: <ShieldCheck className="w-10 h-10" />,
              title: "Compliance Built-in",
              desc: "KYC, AML, and fraud monitoring included.",
            },
            {
              icon: <BookOpen className="w-10 h-10" />,
              title: "Ledger API",
              desc: "Double-entry accounting for every transaction.",
            },
            {
              icon: <Landmark className="w-10 h-10" />,
              title: "Bank Partnerships",
              desc: "FDIC-insured accounts through our partner banks.",
            },
            {
              icon: <Lock className="w-10 h-10" />,
              title: "SOC 2 Certified",
              desc: "Enterprise-grade security and compliance.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 bg-[#24272A] border border-zinc-800 hover:shadow-lg transition-shadow"
            >
              <div className="text-white mb-6">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-zinc-900 p-12 md:p-20 text-center mb-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Ready to build?
            </h2>
            <p className="text-gray-400 mb-8">
              Get API keys and start testing in sandbox mode today.
            </p>
            <button className="px-8 py-4 bg-white text-black font-medium rounded-md hover:opacity-90 transition-opacity">
              Get API Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaaS;

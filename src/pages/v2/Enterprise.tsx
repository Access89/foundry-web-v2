import React from "react";

const Enterprise = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#1C1C1C] text-white">
      <div className="max-w-10xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20 mt-8">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-zinc-800 text-xs font-bold mb-6">
              ENTERPRISE PLATFORM
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Global payments.
              <br />
              Without the friction.
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Consolidate your payment stack. One API for all your brands,
              regions, and channels.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black rounded-md font-bold text-lg hover:opacity-90 transition-opacity">
                Contact Sales
              </button>
              <button className="px-8 py-4 border border-zinc-700 text-white rounded-md font-bold text-lg hover:bg-white/5 transition-colors">
                View API Docs
              </button>
            </div>
          </div>
          <div className="flex-1 bg-[#24272A] p-6 border border-zinc-800 font-mono text-sm shadow-2xl">
            <div className="flex gap-2 mb-4 text-gray-500">
              <div className="w-3 h-3 bg-red-500"></div>
              <div className="w-3 h-3 bg-yellow-500"></div>
              <div className="w-3 h-3 bg-green-500"></div>
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
                metadata: {"{"}
                <span className="text-green-400">order_id: '6735'</span> {"}"}
              </div>
              <div className="text-purple-400">{`}`});</div>
              <div className="text-gray-500 mt-4">// Response 200 OK</div>
              <div className="text-green-400">"status": "succeeded"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <header className="relative pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32 px-4 md:px-8 overflow-hidden bg-[#1C1C1C]">
        <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-white">
              <div className="inline-block px-3 py-1 bg-zinc-800 text-xs font-medium mb-4 md:mb-6 uppercase tracking-wider">
                ENTERPRISE PLATFORM
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
                Global payments.
                <br />
                <span className="text-gray-400">Without the friction.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed text-gray-300">
                Consolidate your payment stack. One API for all your brands,
                regions, and channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <button className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-md transition-all uppercase bg-white text-black hover:bg-gray-100">
                  Contact Sales
                </button>
                <button className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-md transition-all uppercase border border-zinc-700 text-white hover:bg-white/5">
                  View API Docs
                </button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full flex items-center justify-center">
              <div className="bg-[#24272A] p-4 md:p-6 border border-zinc-800 font-mono text-xs md:text-sm shadow-2xl w-full max-w-lg scale-75 md:scale-90 lg:scale-100">
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
                    <span className="text-green-400">
                      order_id: '6735'
                    </span>{" "}
                    {"}"}
                  </div>
                  <div className="text-purple-400">{`}`});</div>
                  <div className="text-gray-500 mt-4">// Response 200 OK</div>
                  <div className="text-green-400">"status": "succeeded"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Enterprise;

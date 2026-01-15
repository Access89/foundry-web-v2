import React from "react";

interface CTASectionProps {
  activeSegment: string;
}

const CTASection: React.FC<CTASectionProps> = ({ activeSegment }) => {
  return (
    <section
      className={`pt-12 md:pt-24 transition-colors duration-700 ${
        activeSegment === "bank" ? "bg-[#D6ECFF]" : "bg-primary-light"
      }`}
    >
      <div className="">
        {/* MetaMask style - 2 column layout with code editor */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="pb-12 md:pb-20 lg:pb-28 lg:pt-16 px-8 lg:px-16 max-w-[768px] ml-auto">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-black">
              Start building
              <br />
              with a free Foundry
              <br />
              developer account
            </h2>
            <p className="text-lg mb-8 text-zinc-700">
              {activeSegment === "merchant"
                ? "Deploy your business operations with Foundry's merchant-first platform. Get started in minutes."
                : "Deploy your smart contracts and banking integrations with Foundry's enterprise APIs. Get started for free."}
            </p>

            <button
              onClick={() => (window.location.href = "/pricing")}
              className="px-8 py-4 bg-black text-white rounded-lg font-medium uppercase text-sm hover:bg-gray-800 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Right - Code Editor Mockup */}
          <div className="hidden lg:block h-full bg-[#24272A] overflow-hidden shadow-2xl border border-zinc-700 rounded-tl-xl w-full">
            {/* Window controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1C1C1C] border-b border-zinc-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center gap-2 ml-4 text-sm text-gray-400">
                <span className="px-3 py-1 bg-[#24272A]">🔒</span>
                <span>Deploy to Foundry</span>
              </div>
            </div>

            {/* Editor content */}
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-40 bg-[#1C1C1C] border-r border-zinc-800 p-3">
                <div className="text-xs text-gray-500 mb-2">Deploy ▾</div>
                <div className="flex items-center gap-2 text-sm text-white bg-zinc-800 px-2 py-1 rounded-lg">
                  <span className="text-blue-400">📄</span> intro.js
                </div>
              </div>

              {/* Code area */}
              <div className="flex-1 p-4 font-mono text-sm overflow-hidden">
                {[
                  {
                    num: 1,
                    code: (
                      <>
                        <span className="text-purple-400">import</span> {"{"}{" "}
                        <span className="text-yellow-400">deploy</span> {"}"}{" "}
                        <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">'./foundry-sdk'</span>
                      </>
                    ),
                  },
                  { num: 2, code: "" },
                  {
                    num: 3,
                    code: (
                      <>
                        <span className="text-blue-400">(async</span> () ={">"}{" "}
                        {"{"} <span className="text-purple-400">try</span> {"{"}
                      </>
                    ),
                  },
                  {
                    num: 4,
                    code: (
                      <span className="pl-4">
                        <span className="text-purple-400">const</span> result ={" "}
                        <span className="text-purple-400">await</span>{" "}
                        <span className="text-yellow-400">deploy</span>(
                        <span className="text-green-400">'MerchantStore'</span>,
                        [])
                      </span>
                    ),
                  },
                  {
                    num: 5,
                    code: (
                      <span className="pl-4">
                        console.<span className="text-yellow-400">log</span>(
                        <span className="text-green-400">`address: </span>
                        <span className="text-cyan-400">
                          ${"{"}result.address{"}"}
                        </span>
                        <span className="text-green-400">`</span>)
                      </span>
                    ),
                  },
                  {
                    num: 6,
                    code: (
                      <>
                        {"}"} <span className="text-purple-400">catch</span> (e){" "}
                        {"{"}
                      </>
                    ),
                  },
                  {
                    num: 7,
                    code: (
                      <span className="pl-4">
                        console.<span className="text-yellow-400">log</span>
                        (e.message)
                      </span>
                    ),
                  },
                  { num: 8, code: "}" },
                  { num: 9, code: <>{"})()"}</> },
                  { num: 10, code: "" },
                  { num: 11, code: "" },
                  { num: 12, code: "" },
                ].map((line) => (
                  <div key={line.num} className="flex gap-4 leading-6">
                    <span className="text-gray-600 select-none w-6 text-right">
                      {line.num}
                    </span>
                    <span className="text-gray-300">{line.code}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

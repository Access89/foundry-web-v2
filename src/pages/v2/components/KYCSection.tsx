import React from "react";

interface KYCSectionProps {
  activeSegment: string;
}

const KYCSection: React.FC<KYCSectionProps> = ({ activeSegment }) => {
  if (activeSegment !== "bank") return null;

  return (
    <section className="py-24 bg-[#1C1C1C] relative overflow-hidden">
      <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
        {/* Section Header - MetaMask 2-column style */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-end">
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
            Develop with
            <br />
            Foundry
          </h2>
          <div>
            <p className="text-gray-400 text-lg mb-6">
              A comprehensive set of developer tools, products and services for
              onboarding and engaging with Foundry users.
            </p>
            <button
              onClick={() => (window.location.href = "/onboarding")}
              className="px-6 py-3 bg-white text-black rounded-md font-medium text-sm hover:bg-gray-100 transition-colors uppercase"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Code Block - MetaMask style */}
        <div className="bg-[#24272A] border border-zinc-800 overflow-hidden mb-16">
          {/* Tab bar */}
          <div className="flex items-center gap-0 border-b border-zinc-800 px-4">
            <div className="flex items-center gap-2 py-3 mr-4">
              <div className="w-3 h-3 bg-red-500"></div>
              <div className="w-3 h-3 bg-yellow-500"></div>
              <div className="w-3 h-3 bg-green-500"></div>
            </div>
            {[
              "risk_check",
              "sanctions",
              "kyb_verify",
              "monitoring",
              "alerts",
            ].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-3 text-sm font-mono ${
                  i === 0
                    ? "text-white bg-zinc-800/50 border-b-2 border-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Code content */}
          <div className="p-6 font-mono text-sm">
            <div className="text-gray-500">1</div>
            <div className="flex gap-4">
              <span className="text-gray-500 select-none w-6">1</span>
              <span>
                <span className="text-purple-400">await</span>{" "}
                <span className="text-blue-400">foundry</span>.
                <span className="text-yellow-400">risk</span>.
                <span className="text-green-400">check</span>({"{"}
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 select-none w-6">2</span>
              <span className="pl-4">
                <span className="text-cyan-400">"entity_id"</span>:{" "}
                <span className="text-orange-400">"cust_9928381"</span>,
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 select-none w-6">3</span>
              <span className="pl-4">
                <span className="text-cyan-400">"checks"</span>: [
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 select-none w-6">4</span>
              <span className="pl-8">
                <span className="text-orange-400">"pep_screening"</span>,
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 select-none w-6">5</span>
              <span className="pl-8">
                <span className="text-orange-400">"sanctions_list"</span>,
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 select-none w-6">6</span>
              <span className="pl-8">
                <span className="text-orange-400">"adverse_media"</span>
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 select-none w-6">7</span>
              <span className="pl-4">]</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 select-none w-6">8</span>
              <span>{"}"});</span>
            </div>
          </div>
        </div>

        {/* Feature Grid - Clean Bento Style */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-8 bg-[#24272A] border border-zinc-800 rounded-lg hover:shadow-xl transition-all group">
            <h3 className="text-xl font-medium mb-3 text-white group-hover:text-[#F6851B] transition-colors">
              Global Sanctions & Watchlists
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Live API connections to OFAC, UN, HMT, and 1000+ global
              enforcement lists. Updates in seconds, not days.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-[#24272A] border border-zinc-800 rounded-lg hover:shadow-xl transition-all group">
            <h3 className="text-xl font-medium mb-3 text-white group-hover:text-[#F6851B] transition-colors">
              AI Transaction Monitoring
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Reduce false positives by 70%. Our behavioral models adapt to new
              fraud typologies automatically.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-[#24272A] border border-zinc-800 rounded-lg hover:shadow-xl transition-all group">
            <h3 className="text-xl font-medium mb-3 text-white group-hover:text-[#F6851B] transition-colors">
              Automated KYB
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Unwrap corporate structures instantly. Visualize UBOs with
              interactive graph networks.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 bg-[#24272A] border border-zinc-800 rounded-lg hover:shadow-xl transition-all group">
            <h3 className="text-xl font-medium mb-3 text-white group-hover:text-[#F6851B] transition-colors">
              Real-time Alerts
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Get notified instantly when risk profiles change. Configurable
              webhooks for your compliance workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYCSection;

import { Layers, Users, Star, CheckCircle2 } from "lucide-react";

const Retail = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <header className="min-h-screen relative pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32 px-4 md:px-8 overflow-hidden bg-white">
        <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-zinc-900">
              <div className="inline-block px-3 py-1 bg-zinc-100 text-xs font-medium mb-4 md:mb-6 uppercase tracking-wider">
                RETAIL SOLUTIONS
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
                Sell anywhere.
                <br />
                <span className="text-zinc-400">Manage everywhere.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed text-zinc-600">
                A complete point-of-sale system that works as hard as you do.
                Sync your online and offline sales in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => (window.location.href = "/onboarding")}
                  className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-lg transition-all uppercase bg-primary text-white hover:bg-primary-dark"
                >
                  Get Started Free
                </button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center bg-zinc-50 border border-zinc-200 shadow-lg overflow-hidden">
                {/* Mockup of POS */}
                <div className="w-48 md:w-64 h-[300px] md:h-[400px] bg-white border-4 md:border-8 border-zinc-900 flex flex-col scale-75 md:scale-90 lg:scale-100">
                  <div className="h-8 bg-zinc-100 border-b border-zinc-200 flex items-center justify-center text-[10px] font-medium text-zinc-400">
                    Foundry POS
                  </div>
                  <div className="flex-1 p-4 grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="bg-zinc-100"></div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-zinc-100">
                    <div className="flex justify-between font-medium mb-2">
                      <span>Total</span>
                      <span>$142.50</span>
                    </div>
                    <div className="w-full h-10 bg-black text-white flex items-center justify-center text-sm font-medium">
                      Charge
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-10xl mx-auto px-6">
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Inventory Sync",
              desc: "Never oversell. Syncs across store and web automatically.",
              icon: <Layers className="w-6 h-6" />,
            },
            {
              title: "Staff Management",
              desc: "Track hours, performance, and permissions per employee.",
              icon: <Users className="w-6 h-6" />,
            },
            {
              title: "Loyalty Built-in",
              desc: "Turn walk-ins into regulars with automated rewards.",
              icon: <Star className="w-6 h-6" />,
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 bg-zinc-50 border border-zinc-200 hover:shadow-lg transition-shadow rounded-xl"
            >
              <div className="w-12 h-12 bg-white border border-zinc-200 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-zinc-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Wholesale Feature */}
        <div className="bg-zinc-50 p-12 border border-zinc-200 mb-20 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-4">
              Built for wholesale too
            </h2>
            <p className="text-lg text-zinc-600 mb-8">
              Manage bulk orders, tiered pricing, and B2B relationships with the
              same system. One platform for retail and wholesale.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "Bulk order management",
                "Custom pricing tiers",
                "Credit terms & invoicing",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-black text-white p-12 md:p-20 text-center mb-20 rounded-xl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Start selling today
            </h2>
            <p className="text-zinc-400 mb-8">
              Join thousands of retailers who trust Foundry to power their
              business.
            </p>
            <button
              onClick={() => (window.location.href = "/onboarding")}
              className="px-8 py-4 bg-primary text-white font-medium hover:opacity-90 transition-opacity rounded-lg"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retail;

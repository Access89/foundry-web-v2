import React from "react";
import { Star } from "lucide-react";

interface CTASectionProps {
  activeSegment: string;
}

const CTASection: React.FC<CTASectionProps> = ({ activeSegment }) => {
  return (
    <section
      className={`py-32 px-6 text-center transition-colors duration-700 ${
        activeSegment === "bank"
          ? "bg-gradient-to-b from-indigo-900 to-slate-900 text-white"
          : "bg-black text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          {activeSegment === "merchant"
            ? "Ready to transform your business?"
            : "Ready to modernize your bank?"}
        </h2>
        <p className="text-xl mb-10 opacity-80 max-w-2xl mx-auto">
          {activeSegment === "merchant"
            ? "Join thousands of businesses already running on Foundry. Start selling in minutes."
            : "Join leading financial institutions leveraging Foundry's engagement platform."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className={`px-10 py-5 text-lg font-bold transition-all hover:-translate-y-1 ${
              activeSegment === "merchant"
                ? "bg-white text-black hover:bg-zinc-100"
                : "bg-indigo-500 text-white hover:bg-indigo-400"
            }`}
          >
            {activeSegment === "merchant"
              ? "Get Started Free"
              : "Schedule Demo"}
          </button>
          <button className="px-10 py-5 border-2 border-white/20 text-white text-lg font-bold hover:bg-white/10 transition-all">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

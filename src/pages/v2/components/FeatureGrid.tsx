import React from "react";
import {
  ArrowUpRight,
  ShoppingBag,
  Landmark,
  Receipt,
  Truck,
  Briefcase,
  Coins,
  Layers,
  Users,
  UserCheck,
  MessageSquare,
  Cpu,
} from "lucide-react";

interface FeatureGridProps {
  activeSegment: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ activeSegment }) => {
  return (
    <section
      className={`py-24 transition-colors duration-500 ${
        activeSegment === "bank"
          ? "bg-[#1C1C1C] text-white"
          : "bg-zinc-50 text-zinc-900"
      }`}
    >
      <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto">
        {/* Section Header - MetaMask style */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-end">
          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${
            activeSegment === "bank" ? "text-white" : "text-zinc-900"
          }`}>
            {activeSegment === "merchant"
              ? "Built for your business."
              : "Architected for scale."}
          </h2>
          <p className={`text-lg ${
            activeSegment === "bank" ? "text-gray-400" : "text-zinc-600"
          }`}>
            {activeSegment === "merchant"
              ? "Powerful software that runs your entire operation. From the first sale to the final reconciliation."
              : "Decouple your customer experience from legacy constraints with a composable architecture."}
          </p>
        </div>

        {activeSegment === "merchant" ? (
          // MERCHANT GRID - Light theme with MetaMask-style cards
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Sales */}
            <div className="p-8 bg-white border border-zinc-200 rounded-lg hover:border-zinc-300 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-900">
                Omnichannel Sales
              </h3>
              <p className="text-zinc-600 mb-6">
                Sell in-store, online, and on the go. Inventory syncs automatically across every channel.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-black font-medium hover:underline">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 2: Banking */}
            <div className="p-8 bg-white border border-zinc-200 rounded-lg hover:border-zinc-300 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-900">
                Built-in Banking
              </h3>
              <p className="text-zinc-600 mb-6">
                Manage money, pay bills, and access capital directly in your dashboard.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-black font-medium hover:underline">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 3: Spend */}
            <div className="p-8 bg-white border border-zinc-200 rounded-lg hover:border-zinc-300 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Receipt className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-900">
                Spend Management
              </h3>
              <p className="text-zinc-600 mb-6">
                Track expenses, manage budgets, and automate reimbursements.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-black font-medium hover:underline">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 4: Purchases */}
            <div className="p-8 bg-white border border-zinc-200 rounded-lg hover:border-zinc-300 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-900">
                Inventory Tracking
              </h3>
              <p className="text-zinc-600 mb-6">
                Real-time stock levels, automated reordering, and supplier management.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-black font-medium hover:underline">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 5: Staff */}
            <div className="p-8 bg-white border border-zinc-200 rounded-lg hover:border-zinc-300 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-900">
                Team Management
              </h3>
              <p className="text-zinc-600 mb-6">
                Scheduling, permissions, and performance tracking for your entire team.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-black font-medium hover:underline">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 6: Credit */}
            <div className="p-8 bg-white border border-zinc-200 rounded-lg hover:border-zinc-300 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Coins className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-900">
                Business Credit
              </h3>
              <p className="text-zinc-600 mb-6">
                Access working capital and flexible financing options as you grow.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-black font-medium hover:underline">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ) : (
          // BANK GRID - Dark theme MetaMask style
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Engagement Platform - Large with illustration */}
            <div className="md:row-span-2 p-8 bg-[#24272A] border border-zinc-800 rounded-lg relative overflow-hidden group hover:border-zinc-700 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[#F6851B]">
                Engagement Platform
              </h3>
              <p className="text-gray-400 mb-6 max-w-sm">
                Our API-first platform sits above your core, orchestrating omnichannel experiences without disrupting legacy systems.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-white font-medium hover:underline">
                Documentation <ArrowUpRight className="w-4 h-4" />
              </a>
              
              {/* Geometric illustration */}
              <div className="absolute bottom-8 left-8 w-32 h-32">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 border-2 border-pink-500 transform rotate-12"></div>
                  <div className="absolute inset-4 border-2 border-green-400 transform -rotate-6"></div>
                  <div className="absolute inset-8 border-2 border-purple-500 transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Card 2: Tailored Segments */}
            <div className="p-8 bg-[#24272A] border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Tailored Segments
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Deliver personalized products to SMEs, millennials, or the underbanked with segment-specific modules.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-gray-300 text-sm hover:text-white transition-colors">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 3: Onboarding */}
            <div className="p-8 bg-[#24272A] border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Digital Onboarding
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Reduce drop-off with guided, mobile-first account opening flows.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-gray-300 text-sm hover:text-white transition-colors">
                Documentation <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 4: Smart Accounts - Large with illustration */}
            <div className="md:row-span-2 p-8 bg-[#24272A] border border-zinc-800 rounded-lg relative overflow-hidden group hover:border-zinc-700 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[#F6851B]">
                Human Assist Layer
              </h3>
              <p className="text-gray-400 mb-6 max-w-sm">
                Seamlessly escalate to human agents when AI reaches its limits, with full context preserved.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-white font-medium hover:underline">
                Sign up for waitlist <ArrowUpRight className="w-4 h-4" />
              </a>
              
              {/* Geometric illustration */}
              <div className="absolute bottom-8 right-8 w-40 h-40">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 border-2 border-cyan-400 transform -rotate-12 rounded-lg"></div>
                  <div className="absolute inset-6 border-2 border-pink-500 transform rotate-6 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Card 5: Data & AI */}
            <div className="p-8 bg-[#24272A] border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Data & AI Fabric
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Unified data layer with real-time analytics and predictive insights.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-gray-300 text-sm hover:text-white transition-colors">
                Documentation <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 6: Messaging */}
            <div className="p-8 bg-[#24272A] border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Omnichannel Messaging
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Reach customers on SMS, WhatsApp, push, and email from one platform.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-gray-300 text-sm hover:text-white transition-colors">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureGrid;

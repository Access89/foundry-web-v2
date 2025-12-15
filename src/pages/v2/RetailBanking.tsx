import { useNavigate } from "react-router-dom";
import {
  Users,
  CreditCard,
  TrendingUp,
  FileText,
  ArrowRight,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const RetailBanking = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Employee Banking Integration",
      desc: "Open accounts for SME employees via Payroll in 'Books', capturing deposits at the source.",
      icon: CreditCard,
    },
    {
      title: "Instant Digital Lending",
      desc: "Offer micro-loans, Earned Wage Access, and overdrafts directly through the employer app, managed by our LMP.",
      icon: TrendingUp,
    },
    {
      title: "Personal Financial Management",
      desc: "Blur the line between personal and business for sole traders. Toggle views instantly.",
      icon: FileText,
    },
  ];

  const benefits = [
    "Low-cost deposit acquisition through SME partnerships",
    "Early financial journey engagement with customers",
    "Reduced customer acquisition costs via employer channels",
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6">
            <Users className="w-4 h-4" />
            Retail Banking
          </div>

          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
            Daily Banking &<br />
            <span className="text-white">Loyalty (B2B2C)</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed font-light">
            Banks are fighting for low-cost deposits and trying to acquire
            customers earlier in their financial journey.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button
              onClick={() => navigate("/onboarding")}
              className="px-8 py-4 bg-white hover:bg-gray-200 text-black rounded-lg font-medium transition-all flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 rounded-lg font-medium transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
              Turn your SME clients into acquisition channels.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl font-light">
              Leverage employer relationships to acquire retail customers at
              scale with minimal friction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#24272A] border border-zinc-800 hover:border-white/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                The B2B2C Advantage
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed font-light">
                Transform your SME clients into distribution channels for retail
                banking products and services.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300 font-light">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#24272A] border border-zinc-800 rounded-xl p-8">
              <div className="space-y-6">
                <div className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <h4 className="text-white font-medium">The Challenge</h4>
                  </div>
                  <p className="text-gray-400 italic font-light">
                    "Traditional retail banking has high customer acquisition
                    costs and struggles to engage customers early in their
                    financial journey."
                  </p>
                </div>

                <div className="p-6 bg-white/5 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <h4 className="text-white font-medium">The Solution</h4>
                  </div>
                  <p className="text-gray-300 font-light">
                    Foundry enables banks to acquire retail customers through
                    existing SME relationships, reducing costs and increasing
                    engagement through integrated payroll and lending products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
            Ready to scale retail banking?
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-light">
            See how financial institutions are transforming customer acquisition
            with Foundry.
          </p>
          <button
            onClick={() => navigate("/book-a-demo")}
            className="px-10 py-5 bg-white hover:bg-gray-200 text-black rounded-lg font-medium text-lg transition-all inline-flex items-center gap-2 group"
          >
            Schedule a Demo
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default RetailBanking;

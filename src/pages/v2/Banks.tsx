import { Smartphone, ShieldCheck, PieChart } from "lucide-react";

const Banks = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20 mt-8">
          <div className="inline-block px-3 py-1 bg-zinc-800 text-xs font-medium mb-6">
            BANKING AS A SERVICE
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
            Digital transformation,
            <br />
            delivered.
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Modernize your legacy core without the risky "rip and replace". Our
            orchestration layer sits on top of your mainframe to power modern
            apps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 bg-[#24272A] border border-zinc-800 hover:shadow-lg transition-shadow">
            <Smartphone className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-medium mb-3">White-label Apps</h3>
            <p className="text-gray-400">
              Launch a 5-star mobile banking app in months, not years. Fully
              customizable UI.
            </p>
          </div>
          <div className="p-8 bg-[#24272A] border border-zinc-800 hover:shadow-lg transition-shadow">
            <ShieldCheck className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-medium mb-3">Legacy Wrapper</h3>
            <p className="text-gray-400">
              Securely expose your mainframe data via REST APIs. SOC2 compliant.
            </p>
          </div>
          <div className="p-8 bg-[#24272A] border border-zinc-800 hover:shadow-lg transition-shadow">
            <PieChart className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-medium mb-3">Wealth Modules</h3>
            <p className="text-gray-400">
              Plug-and-play investment and wealth management features for your
              retail customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banks;

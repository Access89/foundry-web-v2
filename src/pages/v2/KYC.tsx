import React from "react";
import {
  ScanFace,
  Globe,
  ShieldCheck,
  FileBadge,
  Fingerprint,
  CheckCircle2,
  Code2,
} from "lucide-react";

const KYC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white text-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 mt-8">
          <div>
            <div className="inline-block px-3 py-1 bg-zinc-100 text-xs font-bold mb-6">
              IDENTITY VERIFICATION
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Trust is your
              <br />
              currency.
            </h1>
            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
              Verify users in seconds, not days. Prevent fraud with biometric
              authentication and global document checks.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-md font-bold text-lg hover:opacity-90 transition-opacity">
              Start Verifying
            </button>
          </div>

          {/* Interactive KYC Demo */}
          <div className="bg-zinc-50 border border-zinc-200 p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
            <div className="relative w-64 h-[450px] bg-white border-8 border-zinc-900 shadow-2xl flex flex-col overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-900 z-20"></div>

              {/* Screen Content */}
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-zinc-100 flex items-center justify-center mb-6">
                  <ScanFace className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Identity Verified</h3>
                <p className="text-sm text-zinc-500 mb-6">
                  Match confirmed. Liveness check passed.
                </p>

                <div className="w-full bg-zinc-50 p-3 text-left mb-2 flex items-center gap-3">
                  <FileBadge className="w-5 h-5 text-black" />
                  <div className="text-xs">
                    <div className="font-bold">Document</div>
                    <div className="text-zinc-400">Driver's License</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-black ml-auto" />
                </div>
                <div className="w-full bg-zinc-50 p-3 text-left flex items-center gap-3">
                  <Fingerprint className="w-5 h-5 text-black" />
                  <div className="text-xs">
                    <div className="font-bold">Biometrics</div>
                    <div className="text-zinc-400">99.8% Match</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-black ml-auto" />
                </div>
              </div>

              <div className="p-4 bg-black text-white text-center font-bold text-sm">
                Access Granted
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-zinc-50 border border-zinc-200 hover:shadow-lg transition-shadow">
            <ScanFace className="w-12 h-12 text-black mb-6" />
            <h3 className="text-xl font-bold mb-3">Liveness Detection</h3>
            <p className="text-zinc-600">
              Stop deepfakes and bots. Our AI analyzes micro-movements to ensure
              the user is physically present.
            </p>
          </div>
          <div className="p-8 bg-zinc-50 border border-zinc-200 hover:shadow-lg transition-shadow">
            <Globe className="w-12 h-12 text-black mb-6" />
            <h3 className="text-xl font-bold mb-3">Global Coverage</h3>
            <p className="text-zinc-600">
              Support for 12,000+ document types across 200+ countries and
              territories.
            </p>
          </div>
          <div className="p-8 bg-zinc-50 border border-zinc-200 hover:shadow-lg transition-shadow">
            <ShieldCheck className="w-12 h-12 text-black mb-6" />
            <h3 className="text-xl font-bold mb-3">AML Screening</h3>
            <p className="text-zinc-600">
              Automatically screen users against PEPs, sanctions, and adverse
              media lists during onboarding.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 p-10 text-white font-mono text-sm relative overflow-hidden mb-20">
          <div className="relative z-10">
            <div className="text-gray-500 mb-4">
              # Initialize Verification Flow
            </div>
            <div className="text-purple-400">
              const <span className="text-white">verification</span> = await
              foundry.identity.verify({`{`}
            </div>
            <div className="pl-4 text-blue-300">
              type: <span className="text-green-400">'document'</span>,
            </div>
            <div className="pl-4 text-blue-300">
              user_id: <span className="text-green-400">'usr_8923...'</span>,
            </div>
            <div className="pl-4 text-blue-300">
              requirements: [
              <span className="text-green-400">'face_match'</span>,{" "}
              <span className="text-green-400">'liveness'</span>]
            </div>
            <div className="text-purple-400">{`}`});</div>
          </div>
          <div className="absolute right-0 top-0 p-10 opacity-20">
            <Code2 className="w-24 h-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYC;

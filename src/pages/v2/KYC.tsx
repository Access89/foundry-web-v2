import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ScanFace,
  Globe,
  ShieldCheck,
  FileBadge,
  Fingerprint,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { useV2Context } from "./context";

const KYC = () => {
  const navigate = useNavigate();
  const { setActiveSegment } = useV2Context();

  const handleBack = () => {
    setActiveSegment("merchant");
    navigate("/v2");
  };

  return (
    <div className="pt-24 min-h-screen bg-white text-zinc-900 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-zinc-500 hover:text-black font-bold mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-6">
              IDENTITY VERIFICATION
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Trust is your
              <br />
              currency.
            </h1>
            <p className="text-xl text-zinc-500 mb-8 leading-relaxed">
              Verify users in seconds, not days. Prevent fraud with biometric
              authentication and global document checks.
            </p>
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-500 transition-colors">
              Start Verifying
            </button>
          </div>

          {/* Interactive KYC Demo */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
            <div className="relative w-64 h-[450px] bg-white rounded-[2.5rem] border-8 border-zinc-900 shadow-2xl flex flex-col overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-900 rounded-b-xl z-20"></div>

              {/* Screen Content */}
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-500">
                  <ScanFace className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Identity Verified</h3>
                <p className="text-sm text-zinc-500 mb-6">
                  Match confirmed. Liveness check passed.
                </p>

                <div className="w-full bg-zinc-50 rounded-xl p-3 text-left mb-2 flex items-center gap-3">
                  <FileBadge className="w-5 h-5 text-indigo-500" />
                  <div className="text-xs">
                    <div className="font-bold">Document</div>
                    <div className="text-zinc-400">Driver's License</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
                </div>
                <div className="w-full bg-zinc-50 rounded-xl p-3 text-left flex items-center gap-3">
                  <Fingerprint className="w-5 h-5 text-indigo-500" />
                  <div className="text-xs">
                    <div className="font-bold">Biometrics</div>
                    <div className="text-zinc-400">99.8% Match</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
                </div>
              </div>

              <div className="p-4 bg-green-500 text-white text-center font-bold text-sm">
                Access Granted
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-indigo-200 transition-colors">
            <ScanFace className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-bold mb-3">Liveness Detection</h3>
            <p className="text-zinc-500">
              Stop deepfakes and bots. Our AI analyzes micro-movements to ensure
              the user is physically present.
            </p>
          </div>
          <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-indigo-200 transition-colors">
            <Globe className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-bold mb-3">Global Coverage</h3>
            <p className="text-zinc-500">
              Support for 12,000+ document types across 200+ countries and
              territories.
            </p>
          </div>
          <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-indigo-200 transition-colors">
            <ShieldCheck className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-bold mb-3">AML Screening</h3>
            <p className="text-zinc-500">
              Automatically screen users against PEPs, sanctions, and adverse
              media lists during onboarding.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-10 text-white font-mono text-sm relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-zinc-500 mb-4">
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

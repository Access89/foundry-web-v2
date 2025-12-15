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
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <header className="relative pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32 px-4 md:px-8 overflow-hidden bg-white">
        <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-zinc-900">
              <div className="inline-block px-3 py-1 bg-zinc-100 text-xs font-medium mb-4 md:mb-6 uppercase tracking-wider">
                IDENTITY VERIFICATION
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
                Trust is your
                <br />
                <span className="text-zinc-400">currency.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed text-zinc-600">
                Verify users in seconds, not days. Prevent fraud with biometric
                authentication and global document checks.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <button className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-lg transition-all uppercase bg-primary text-white hover:bg-primary-dark">
                  Start Verifying
                </button>
              </div>
            </div>

            {/* Interactive KYC Demo */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full flex items-center justify-center">
              <div className="bg-zinc-50 border border-zinc-200 p-6 md:p-8 relative overflow-hidden flex flex-col items-center justify-center w-full h-full rounded-xl">
                <div className="relative w-64 h-[450px] bg-white border-8 border-zinc-900 shadow-2xl flex flex-col overflow-hidden rounded-3xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-900 z-20"></div>

                  {/* Screen Content */}
                  <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-zinc-100 flex items-center justify-center mb-6">
                      <ScanFace className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      Identity Verified
                    </h3>
                    <p className="text-sm text-zinc-500 mb-6">
                      Match confirmed. Liveness check passed.
                    </p>

                    <div className="w-full bg-zinc-50 p-3 text-left mb-2 flex items-center gap-3">
                      <FileBadge className="w-5 h-5 text-primary" />
                      <div className="text-xs">
                        <div className="font-medium">Document</div>
                        <div className="text-zinc-400">Driver's License</div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-primary ml-auto" />
                    </div>
                    <div className="w-full bg-zinc-50 p-3 text-left flex items-center gap-3">
                      <Fingerprint className="w-5 h-5 text-primary" />
                      <div className="text-xs">
                        <div className="font-medium">Biometrics</div>
                        <div className="text-zinc-400">99.8% Match</div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-primary ml-auto" />
                    </div>
                  </div>

                  <div className="p-4 bg-primary text-white text-center font-medium text-sm">
                    Access Granted
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-10xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-zinc-50 border border-zinc-200 hover:shadow-lg transition-shadow rounded-xl">
            <ScanFace className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-medium mb-3">Liveness Detection</h3>
            <p className="text-zinc-600">
              Stop deepfakes and bots. Our AI analyzes micro-movements to ensure
              the user is physically present.
            </p>
          </div>
          <div className="p-8 bg-zinc-50 border border-zinc-200 hover:shadow-lg transition-shadow rounded-xl">
            <Globe className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-medium mb-3">Global Coverage</h3>
            <p className="text-zinc-600">
              Support for 12,000+ document types across 200+ countries and
              territories.
            </p>
          </div>
          <div className="p-8 bg-zinc-50 border border-zinc-200 hover:shadow-lg transition-shadow rounded-xl">
            <ShieldCheck className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-medium mb-3">AML Screening</h3>
            <p className="text-zinc-600">
              Automatically screen users against PEPs, sanctions, and adverse
              media lists during onboarding.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 p-10 text-white font-mono text-sm relative overflow-hidden mb-20 rounded-xl">
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

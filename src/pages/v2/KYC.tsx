import {
  ScanFace,
  Globe,
  ShieldCheck,
  FileBadge,
  Fingerprint,
  Code2,
} from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import ImageHero from "./components/ImageHero";
import { useV2Context } from "./context";

// Page Data
const kycData = {
  hero: {
    badge: "IDENTITY VERIFICATION",
    title: ["Trust is your", "currency."],
    description:
      "Verify users in seconds, not days. Prevent fraud with biometric authentication and global document checks.",
    cta: "Start Verifying",
    verification: {
      title: "Identity Verified",
      subtitle: "Match confirmed. Liveness check passed.",
      checks: [
        {
          icon: FileBadge,
          title: "Document",
          subtitle: "Driver's License",
        },
        {
          icon: Fingerprint,
          title: "Biometrics",
          subtitle: "99.8% Match",
        },
      ],
      status: "Access Granted",
    },
  },
  features: [
    {
      icon: ScanFace,
      title: "Liveness Detection",
      description:
        "Stop deepfakes and bots. Our AI analyzes micro-movements to ensure the user is physically present.",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description:
        "Support for 12,000+ document types across 200+ countries and territories.",
    },
    {
      icon: ShieldCheck,
      title: "AML Screening",
      description:
        "Automatically screen users against PEPs, sanctions, and adverse media lists during onboarding.",
    },
  ],
  codeExample: {
    comment: "# Initialize Verification Flow",
    code: [
      "const verification = await foundry.identity.verify({",
      "  type: 'document',",
      "  user_id: 'usr_8923...',",
      "  requirements: ['face_match', 'liveness']",
      "});",
    ],
  },
};

const KYC = () => {
  const { hero, features, codeExample } = kycData;
  const { setActiveSegment } = useV2Context();

  useEffect(() => {
    setActiveSegment("merchant");
  }, [setActiveSegment]);

  return (
    <div className="lg:px-8 min-h-screen bg-white text-zinc-900">
      <SEO
        title="Identity Verification & KYC Solutions"
        description="Verify users in seconds with biometric authentication and global document checks. Prevent fraud with Foundry's comprehensive KYC and identity verification platform."
        keywords="KYC, identity verification, biometric authentication, document verification, fraud prevention, compliance, AML, know your customer"
      />
      <ImageHero
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        cta={hero.cta}
        onCtaClick={() => {}}
        heroImage="/images/v2/score.png"
        heroImageAlt="Identity verification and KYC solutions"
        theme="light"
      />
      <div className="max-w-10xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 bg-zinc-50 border border-zinc-200 hover:shadow-lg transition-shadow rounded-xl"
            >
              <feature.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 p-10 text-white font-mono text-sm relative overflow-hidden mb-20 rounded-xl">
          <div className="relative z-10">
            <div className="text-gray-500 mb-4">{codeExample.comment}</div>
            {codeExample.code.map((line, idx) => (
              <div
                key={idx}
                className={idx === 0 ? "text-purple-400" : "pl-4 text-blue-300"}
              >
                {line}
              </div>
            ))}
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

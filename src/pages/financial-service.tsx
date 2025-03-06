/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomButton } from "@/components/shared/shared_customs";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FinancialServiceExpansion = () => {
  const nav = useNavigate();
  const data: Record<string, any> = {
    "digital-onboarding": {
      title: "Digital Onboarding Solutions",
      description:
        "Transform your customer onboarding experience with our state-of-the-art digital solutions.",
      "video-link": "https://youtube.com",
      "features-description":
        "Discover how our digital onboarding solution can transform your business",
      "core-features": [
        {
          icon: "lucide:user-round",
          title: "Digital Account Opening",
          description:
            "Streamlined account creation process with instant verification and approval."
        },
        {
          icon: "mage:id-card",
          title: "Ghana Card Integration",
          description:
            "Seamless integration with Ghana Card for instant identity verification."
        },
        {
          icon: "bx:user-check",
          title: "KYC Management",
          description:
            "Comprehensive KYC process with automated verification and compliance checks."
        },
        {
          icon: "ant-design:rise-outlined",
          title: "Risk Rating",
          description:
            "Advanced risk assessment algorithms for accurate customer profiling."
        },
        {
          icon: "la:pen-nib",
          title: "E-Signature",
          description:
            "Secure digital signature capabilities for document authentication."
        },
        {
          icon: "mynaui:upload",
          title: "Document Uploading",
          description:
            "Easy document upload system with automatic validation and processing."
        }
      ]
    },
    "loan-origination": {
      title: "Loan Origination Solutions",
      description:
        "Transform your loan processing with our comprehensive, automated loan origination system.",
      "video-link": "https://youtube.com",
      "features-description":
        "Discover how our loan origination solution can transform your lending business",
      "core-features": [
        {
          icon: "solar:document-outline",
          title: "Digital Loan Application",
          description:
            "Streamlined digital loan application process with real-time validation and status tracking."
        },
        {
          icon: "mage:id-card",
          title: "Ghana Card Integration",
          description:
            "Seamless integration with Ghana Card for instant identity verification."
        },
        {
          icon: "tabler:building",
          title: "Credit Bureau Integration",
          description:
            "Real-time credit checks and scoring through multiple bureau integrations."
        },
        {
          icon: "mingcute:safe-shield-2-line",
          title: "Decision Module",
          description:
            "Automated loan decisioning with configurable rules and risk assessment."
        },
        {
          icon: "mdi-light:settings",
          title: "Fees Configuration",
          description:
            "Flexible fee structure setup with automated calculations and charges."
        },

        {
          icon: "la:pen-nib",
          title: "E-Signature",
          description:
            "Secure digital signature capabilities for loan documentation."
        },
        {
          icon: "mynaui:users",
          title: "Workflow Management",
          description:
            "Customizable workflow engine for loan processing and approvals."
        },

        {
          icon: "solar:wallet-linear",
          title: "Disbursement Management",
          description:
            "Automated loan disbursement with multiple payment channel support."
        },
        {
          icon: "solar:document-linear",
          title: "Document Generation",
          description:
            "Automated generation of loan offers and agreement documents."
        },
        {
          icon: "ant-design:rise-outlined",
          title: "Credit Scoring",
          description:
            "Advanced credit scoring models with customizable parameters."
        },

        {
          icon: "solar:calculator-broken",
          title: "Loan Calculator",
          description:
            "Interactive loan calculator with multiple repayment scenarios."
        },
        {
          icon: "iconoir:attachment",
          title: "Document Uploading",
          description:
            "Secure document upload system with automated validation."
        }
      ]
    },
    "credit-scoring": {
      title: "Credit Scoring Solutions",
      description:
        "Transform your credit risk assessment with our advanced, AI-powered credit scoring system.",
      "video-link": "https://youtube.com",
      "features-description":
        "Discover how our credit scoring solution can transform your risk assessment process",
      "core-features": [
        {
          icon: "lucide:user-round",
          title: "Automated Risk Assessment",
          description:
            "Advanced algorithms for comprehensive risk evaluation with real-time processing."
        },
        {
          icon: "mage:id-card",
          title: "Real-Time Credit Scoring",
          description:
            "Instant credit score generation using multiple data points and advanced analytics."
        },
        {
          icon: "bx:user-check",
          title: "Predictive Analytics",
          description:
            "AI-powered predictive models to forecast credit behavior and risk patterns."
        },
        {
          icon: "ant-design:rise-outlined",
          title: "Decision Engine",
          description:
            "Automated credit decisions based on configurable rules and risk policies."
        },
        {
          icon: "la:pen-nib",
          title: "Customizable Scorecards",
          description:
            "Flexible scorecard creation with adjustable parameters and weightings."
        },
        {
          icon: "mynaui:upload",
          title: "Credit Bureau Integration",
          description:
            "Seamless connection with multiple credit bureaus for comprehensive checks."
        },
        {
          icon: "bx:user-check",
          title: "Data Aggregation",
          description:
            "Unified data collection from multiple sources for enhanced accuracy."
        },
        {
          icon: "ant-design:rise-outlined",
          title: "Risk Rating",
          description:
            "Sophisticated risk classification system with detailed rating explanations."
        },
        {
          icon: "la:pen-nib",
          title: "Portfolio Monitoring",
          description:
            "Real-time monitoring of credit portfolio performance and trends."
        },
        {
          icon: "mynaui:upload",
          title: "Compliance Tracking",
          description:
            "Automated compliance monitoring and reporting for regulatory requirements."
        }
      ]
    },
    "mobile-banking": {
      title: "Digital Onboarding Solutions",
      description:
        "Transform your customer onboarding experience with our state-of-the-art digital solutions.",
      "video-link": "https://youtube.com",
      "features-description":
        "Discover how our digital onboarding solution can transform your business",
      "core-features": [
        {
          icon: "lucide:user-round",
          title: "Digital Account Opening",
          description:
            "Streamlined account creation process with instant verification and approval."
        },
        {
          icon: "mage:id-card",
          title: "Ghana Card Integration",
          description:
            "Seamless integration with Ghana Card for instant identity verification."
        },
        {
          icon: "bx:user-check",
          title: "KYC Management",
          description:
            "Comprehensive KYC process with automated verification and compliance checks."
        },
        {
          icon: "ant-design:rise-outlined",
          title: "Risk Rating",
          description:
            "Advanced risk assessment algorithms for accurate customer profiling."
        },
        {
          icon: "la:pen-nib",
          title: "E-Signature",
          description:
            "Secure digital signature capabilities for document authentication."
        },
        {
          icon: "mynaui:upload",
          title: "Document Uploading",
          description:
            "Easy document upload system with automatic validation and processing."
        }
      ]
    },
    sentinel: {
      title: "Sentinel Security Solutions",
      description:
        "Protect your financial operations with our advanced security and compliance system.",
      "video-link": "https://youtube.com",
      "features-description":
        "Discover how our security solution can protect your financial operations",
      "core-features": [
        {
          icon: "lucide:user-round",
          title: "Anti-Money Laundering (AML)",
          description:
            "Advanced AML monitoring system with real-time transaction screening and automated alerts."
        },
        {
          icon: "mage:id-card",
          title: "Fraud Detection",
          description:
            "AI-powered fraud detection system that identifies suspicious patterns and anomalies."
        },
        {
          icon: "bx:user-check",
          title: "Sanctions Screening",
          description:
            "Comprehensive sanctions screening against global watchlists and regulatory databases."
        },
        {
          icon: "ant-design:rise-outlined",
          title: "Risk Rating",
          description:
            "Dynamic risk assessment system with configurable risk scoring models."
        },
        {
          icon: "la:pen-nib",
          title: "Report Generation",
          description:
            "Automated generation of compliance reports and regulatory filings."
        }
      ]
    },
    agency: {
      title: "Agency Banking Solutions",
      description:
        "Extend your financial services reach through our comprehensive agency banking platform, bringing banking services closer to communities.",
      "video-link": "https://youtube.com",
      "features-description":
        "Comprehensive tools and services for successful agency banking operations",
      "core-features": [
        {
          icon: "lucide:user-round",
          title: "Agent Onboarding",
          description:
            "Streamlined process for registering and onboarding new banking agents"
        },
        {
          icon: "mage:id-card",
          title: "Transaction Services",
          description: "Comprehensive suite of financial transaction services"
        },
        {
          icon: "bx:user-check",
          title: "Payment Solutions",
          description: "Various payment and transfer options for customers"
        },
        {
          icon: "ant-design:rise-outlined",
          title: "Transaction Monitoring",
          description:
            "Real-time monitoring of all agent transactions for security and compliance"
        },
        {
          icon: "la:pen-nib",
          title: "Agent Dashboard",
          description:
            "Comprehensive dashboard for managing agent operations and performance"
        },
        {
          icon: "mynaui:upload",
          title: "Real-Time Reporting",
          description: "Detailed analytics and reporting for business insights"
        },
        {
          icon: "ant-design:rise-outlined",
          title: "Security Protocols",
          description:
            "Advanced security measures to protect transactions and data"
        },
        {
          icon: "la:pen-nib",
          title: "Account Management",
          description: "Tools for managing customer accounts and services"
        },
        {
          icon: "mynaui:upload",
          title: "Service Monitoring",
          description: "Track and optimize service delivery and performance"
        }
      ]
    }
  };
  const { pathname } = useLocation();
  const module: string = pathname.split("/")[2];
  const current = data?.[module];

  useEffect(() => {
    if (!Object.keys(data).includes(module)) {
      return nav("/financial-services");
    }
  }, []);
  return (
    <main className="container">
      <section className="flex items-center  flex-col justify-between gap-10 py-20   rounded-xl bg-primary/10   ">
        {/* <p className="text-sm text-foundry-secondary font-medium uppercase mb-5">
          {current?.title}
        </p> */}
        <div className="px-6 ">
          <h1 className="font-medium text-center text-3xl  md:text-4xl lg:text-5xl md:pr-0 mb-10 md:mb-0">
            {current?.title}
          </h1>
          <p className="text-primary lg:text-[1.2rem] text-center  my-5 lg:w-[70%] mx-auto">
            {current?.description}
          </p>
        </div>
        {current?.["video-link"] && (
          <CustomButton
            className="bg-primary text-white font-medium px-5 "
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=PpPci8gGRoE",
                "_blank"
              );
            }}
          >
            <Icon icon="si:video-line" fontSize={20} />
            Watch Video
          </CustomButton>
        )}
      </section>

      <section className="py-10 pt-28 lg:pt-20">
        <div className="text-center">
          <h2 className="font-medium text-3xl md:text-4xl ">Core Services</h2>
          <p className="text-primary lg:text-[1.2rem]  my-5">
            {current?.["features-description"]}
          </p>
        </div>
        <div className="md:grid md:grid-cols-auto-fill-300 gap-5 space-y-5 md:space-y-0 mt-10">
          {current?.["core-features"]?.map((e: any) => {
            return (
              <InfoCard
                title={e.title}
                icon={e.icon}
                description={e.description}
                key={e.title}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

const InfoCard = ({
  icon,
  title,
  description
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-secondary-light rounded-2xl p-4 lg:px-6 lg:py-6 w-full flex flex-col justify-between gap-6 hover:scale-[1.02] duration-700 hover:shadow-lg cursor-pointer">
      <div className="flex flex-col gap-y-3 bg-primary/80 w-fit p-2 rounded-md">
        <Icon icon={icon} fontSize={24} className="text-white" />
      </div>

      <div>
        <h4 className="text-xl font-medium">{title}</h4>
        <p className="text-[#575757] text-[0.9rem] leading-6 font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FinancialServiceExpansion;

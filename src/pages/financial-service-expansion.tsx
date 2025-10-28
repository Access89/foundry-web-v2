/* eslint-disable @typescript-eslint/no-explicit-any */
import InfoSectionWithGoals from "@/components/reusable/info_section_with_goals";
import InfoSectionWithVideo from "@/components/reusable/info_section_with_videos";
import SuccessStories, {
  SuccessStoriesProps
} from "@/components/reusable/success-stories-section";
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
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Lorem Ipsum Dolor",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
        {
          icon: "lucide:gauge",
          title: "Vestibulum Ante Ipsum",
          description:
            "Suspendisse potenti. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo."
        },
        {
          icon: "mdi:protected-outline",
          title: "Curabitur Ligula Sapien",
          description:
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
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
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Lorem Ipsum Dolor",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
        {
          icon: "lucide:gauge",
          title: "Vestibulum Ante Ipsum",
          description:
            "Suspendisse potenti. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo."
        },
        {
          icon: "mdi:protected-outline",
          title: "Curabitur Ligula Sapien",
          description:
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
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
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Lorem Ipsum Dolor",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
        {
          icon: "lucide:gauge",
          title: "Vestibulum Ante Ipsum",
          description:
            "Suspendisse potenti. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo."
        },
        {
          icon: "mdi:protected-outline",
          title: "Curabitur Ligula Sapien",
          description:
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
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
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Lorem Ipsum Dolor",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
        {
          icon: "lucide:gauge",
          title: "Vestibulum Ante Ipsum",
          description:
            "Suspendisse potenti. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo."
        },
        {
          icon: "mdi:protected-outline",
          title: "Curabitur Ligula Sapien",
          description:
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
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
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Lorem Ipsum Dolor",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
        {
          icon: "lucide:gauge",
          title: "Vestibulum Ante Ipsum",
          description:
            "Suspendisse potenti. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo."
        },
        {
          icon: "mdi:protected-outline",
          title: "Curabitur Ligula Sapien",
          description:
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
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
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Lorem Ipsum Dolor",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
        {
          icon: "lucide:gauge",
          title: "Vestibulum Ante Ipsum",
          description:
            "Suspendisse potenti. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo."
        },
        {
          icon: "mdi:protected-outline",
          title: "Curabitur Ligula Sapien",
          description:
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }
      ]
    },
    "foundry-e-channels": {
      title: "Foundry E-channels",
      description:
        "Our digital banking solutions, including internet banking, mobile banking, and USSD platforms, designed to provide customers with seamless and secure access to financial services anytime, anywhere.",
      "video-link": "https://youtube.com",
      "features-description":
        "Comprehensive tools and services for Foundry E-channels",
      "core-features": [
        {
          icon: "lucide:user-round",
          title: "Internet Banking",
          description:
            "Secure online banking platform accessible from any web browser",
          checklist: [
            "24/7 Account Access",
            "Real-Time Transactions",
            "Bill Payments",
            "Funds Transfer"
          ]
        },
        {
          icon: "mage:id-card",
          title: "Mobile Banking",
          description: "Feature-rich mobile app for banking on the go",
          checklist: [
            "Biometric Authentication",
            "Quick Balance Check",
            "Mobile Check Deposit",
            "Push Notifications"
          ]
        },
        {
          icon: "bx:user-check",
          title: "USSD Banking",
          description: "Banking services accessible via basic mobile phones",
          checklist: [
            "No Internet Required",
            "Balance Enquiry",
            "Mini Statements",
            "Airtime Purchase"
          ]
        }
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Lorem Ipsum Dolor",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
        {
          icon: "lucide:gauge",
          title: "Vestibulum Ante Ipsum",
          description:
            "Suspendisse potenti. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo."
        },
        {
          icon: "mdi:protected-outline",
          title: "Curabitur Ligula Sapien",
          description:
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }
      ]
    },
    "foundry-back-office": {
      title: "Foundry Back Office",
      description:
        "Complete digital banking solution with web and mobile interfaces for employees enable rapid customer service and case resolution, reducing reliance on branches",
      "video-link": "https://youtube.com",
      "features-description":
        "Comprehensive tools and services for Foundry back office system",
      "core-features": [
        {
          icon: "lucide:user-round",
          title: "Request Management",
          description:
            "Efficiently handle and track customer requests with automated workflows and real-time status updates."
          // checklist: [
          //   "Request Management",
          //   "Real-Time Transactions",
          //   "Bill Payments",
          //   "Funds Transfer"
          // ]
        },
        {
          icon: "mage:id-card",
          title: "Customer Management",
          description:
            "Comprehensive customer profiles with complete transaction history and interaction tracking."
          // checklist: [
          //   "Biometric Authentication",
          //   "Quick Balance Check",
          //   "Mobile Check Deposit",
          //   "Push Notifications"
          // ]
        },
        {
          icon: "bx:user-check",
          title: "Complaint Management",
          description:
            "Streamlined complaint resolution with automated routing and escalation procedures."
        },
        {
          icon: "bx:user-check",
          title: "Workflow Management",
          description:
            "Customizable workflows to automate and optimize back office processes."
        },
        {
          icon: "bx:user-check",
          title: "Disbursement/Repayment Management",
          description:
            "Automated processing of disbursements and repayments with real-time tracking."
        },
        {
          icon: "bx:user-check",
          title: "Report Management",
          description:
            "Generate comprehensive reports with customizable templates and automated scheduling."
        }
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Lorem Ipsum Dolor",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
        {
          icon: "lucide:gauge",
          title: "Vestibulum Ante Ipsum",
          description:
            "Suspendisse potenti. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo."
        },
        {
          icon: "mdi:protected-outline",
          title: "Curabitur Ligula Sapien",
          description:
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }
      ]
    },
    "customized-platform": {
      title: "Customized Platform",
      description:
        "Tailored financial technology solutions for your specific needs.",
      "video-link": "https://youtube.com",
      "features-description":
        "Comprehensive tools and services for Foundry back office system",
      "core-features": [
        {
          icon: "lucide:user-round",
          title: "Lorem Ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
        {
          icon: "mage:id-card",
          title: "Dolor Sit Amet",
          description:
            "Suspendisse potenti. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo."
        },
        {
          icon: "bx:user-check",
          title: "Consectetur Adipiscing",
          description:
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Lorem Ipsum Dolor",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
        },
        {
          icon: "lucide:gauge",
          title: "Vestibulum Ante Ipsum",
          description:
            "Suspendisse potenti. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo."
        },
        {
          icon: "mdi:protected-outline",
          title: "Curabitur Ligula Sapien",
          description:
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
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
    <main>
      <section className="container">
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
                  checklist={e.checklist}
                />
              );
            })}
          </div>
        </section>

        <section className=" lg:mt-8 lg:pt-5  ">
          <InfoSectionWithGoals
            sectionTitle={current?.title}
            sectionDescription={current?.description}
            goalsTitle="Your Business Goals"
            solutionTitle="How to Solve It with Foundry"
            goals={current?.goals?.map(
              (item: { title: string; description: string }) => ({
                title: item.title,
                desc: [item.description]
              })
            )}
          />
        </section>

        <section className=" lg:mt-8 lg:pt-5 ">
          <SuccessStories {...exampleData} />
        </section>
      </section>

      <InfoSectionWithVideo
        videoElement={
          <div className="bg-[#D9D9D9]/30 flex justify-center items-center h-[25rem]">
            <img src="/icons/camera.svg" alt="camera" className="w-[5rem]" />
          </div>
        }
      />
    </main>
  );
};

// Example usage
const exampleData: SuccessStoriesProps = {
  title: "Finance Success Stories",
  links: [
    { title: "Read Foundry Reviews", link: "/foundry-reviews" },
    { title: "View all Testimonials", link: "/testimonials" }
  ],
  cards: [
    {
      type: "text",
      content:
        '"Stock loss has reduced and sales are booming. Foundry has grown and helped us implement all these different parts."',
      author: "Cecilia Dekyi, Cepodek",
      // buttonText: "Read the case study"
    },
    {
      type: "image",
      imageSrc: "/images/LS_4.webp", // Update to the correct image URL
      imageAlt: "Afro woman in beauty store",
      overlayText: "The importance of data to WeNaturals",
      overlayIcon: "/icons/play.svg"
    },
    {
      type: "stats",
      title: "SHIELD Microfinance",
      stats: [
        { value: "47%", label: "revenue increase year over year" },
        { value: "30,000", label: "transactions per month" }
      ],
      buttonText: "See their Foundry Setup"
    }
  ]
};

const InfoCard = ({
  icon,
  title,
  description,
  checklist
}: {
  icon: string;
  title: string;
  description: string;
  checklist: string[];
}) => {
  return (
    <div className="bg-secondary-light rounded-2xl p-4 lg:px-6 lg:py-6 w-full flex flex-col justify-between gap-6 ">
      <div className="flex flex-col gap-y-3 bg-primary/80 w-fit p-2 rounded-md">
        <Icon icon={icon} fontSize={24} className="text-white" />
      </div>

      <div>
        <h4 className="text-xl font-medium">{title}</h4>
        <p className="text-[#575757] text-[0.9rem] leading-6 font-light">
          {description}
        </p>
      </div>
      {checklist && (
        <div>
          {checklist?.map((item, index) => (
            <p key={index} className="flex items-center gap-1 text-sm">
              <Icon
                icon="material-symbols:shield-outline"
                className="text-primary"
              />
              <span>{item}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FinancialServiceExpansion;

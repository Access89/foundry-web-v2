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

const BusinessExpansion = () => {
  const nav = useNavigate();
  const data: Record<string, any> = {
    "foundry-terminal": {
      title: "Foundry Terminal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
      "video-link": "https://youtube.com",
      "features-description":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "core-features": [
        {
          icon: "lucide:user-plus",
          title: "Lorem Ipsum Feature 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          icon: "mdi:card-account-details",
          title: "Lorem Ipsum Feature 2",
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          icon: "bx:shield-quarter",
          title: "Lorem Ipsum Feature 3",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          icon: "ant-design:alert-outlined",
          title: "Lorem Ipsum Feature 4",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          icon: "fluent:document-signature-24-regular",
          title: "Lorem Ipsum Feature 5",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          icon: "material-symbols:cloud-upload",
          title: "Lorem Ipsum Feature 6",
          description:
            "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio."
        }
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Seamless Onboarding and Loan Origination",
          description:
            "Enable fast account openings and smooth loan applications with document upload functionality for a quick, paperless experience."
        },
        {
          icon: "lucide:gauge",
          title: "Efficient, Scalable Operations",
          description:
            "Achieve real-time transaction processing, automated compliance checks, and a scalable infrastructure designed for flexible growth."
        },
        {
          icon: "mdi:protected-outline",
          title: "Enhanced Security and Global Accessibility",
          description:
            "Leverage advanced fraud detection, multi-currency support, and secure global transactions to support international operations."
        }
      ]
    },

    pos: {
      title: "Point of Sale",
      description:
        "Enhance your retail and sales operations with our seamless Point of Sale system, designed for efficiency and ease of use.",
      "video-link": "https://youtube.com",
      "features-description":
        "Discover how our POS solution can streamline your sales and inventory management.",
      "core-features": [
        {
          icon: "lucide:shopping-cart",
          title: "Sales Processing",
          description:
            "Fast and secure transaction processing with multiple payment options."
        },
        {
          icon: "tabler:credit-card",
          title: "Multi-Payment Support",
          description:
            "Accept payments via cash, card, mobile money, and digital wallets."
        },
        {
          icon: "mdi:barcode-scan",
          title: "Barcode & QR Code Scanning",
          description:
            "Integrated barcode and QR code scanning for quick product lookup."
        },
        {
          icon: "mingcute:receipt-line",
          title: "E-Receipts & Printing",
          description:
            "Generate digital receipts and print invoices seamlessly."
        },
        {
          icon: "solar:box-outline",
          title: "Inventory Management",
          description:
            "Real-time stock tracking with automated low-stock alerts."
        },
        {
          icon: "mdi-light:settings",
          title: "Custom Pricing & Discounts",
          description:
            "Flexible pricing rules, discounts, and promotional offers."
        },
        {
          icon: "mynaui:users",
          title: "User Roles & Permissions",
          description:
            "Granular access control for cashiers, managers, and admins."
        },
        {
          icon: "solar:store-linear",
          title: "Multi-Store Support",
          description:
            "Manage multiple retail locations from a single platform."
        },
        {
          icon: "solar:chart-linear",
          title: "Sales & Performance Analytics",
          description:
            "Detailed reports on sales trends, revenue, and employee performance."
        }
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Seamless Onboarding and Loan Origination",
          description:
            "Enable fast account openings and smooth loan applications with document upload functionality for a quick, paperless experience."
        },
        {
          icon: "lucide:gauge",
          title: "Efficient, Scalable Operations",
          description:
            "Achieve real-time transaction processing, automated compliance checks, and a scalable infrastructure designed for flexible growth."
        },
        {
          icon: "mdi:protected-outline",
          title: "Enhanced Security and Global Accessibility",
          description:
            "Leverage advanced fraud detection, multi-currency support, and secure global transactions to support international operations."
        }
      ]
    },

    "supply-chain": {
      title: "Supply Chain, Manufacturing & Procurement",
      description:
        "Optimize your supply chain operations with our end-to-end digital management solution, ensuring efficiency and visibility across procurement, inventory, and logistics.",
      "video-link": "https://youtube.com",
      "features-description":
        "Discover how our supply chain solution can enhance your procurement, inventory, and logistics management.",
      "core-features": [
        {
          icon: "solar:box-outline",
          title: "Inventory Management",
          description:
            "Track stock levels in real-time with automated restocking alerts."
        },
        {
          icon: "mingcute:truck-line",
          title: "Logistics & Fleet Tracking",
          description:
            "Monitor deliveries, optimize routes, and track fleet movements."
        },
        {
          icon: "tabler:building",
          title: "Supplier & Vendor Management",
          description:
            "Streamlined supplier onboarding, contract management, and vendor performance tracking."
        },
        {
          icon: "lucide:shopping-bag",
          title: "Procurement Automation",
          description:
            "Automated purchase order generation and approval workflows."
        },
        {
          icon: "solar:store-linear",
          title: "Warehouse Management",
          description:
            "Optimize warehouse operations with smart storage allocation and order fulfillment."
        },
        {
          icon: "mingcute:document-line",
          title: "Order Processing & Fulfillment",
          description:
            "Seamless order tracking from request to delivery with automated notifications."
        },
        {
          icon: "mdi-light:settings",
          title: "Demand Forecasting",
          description:
            "AI-powered demand prediction to prevent overstocking or stockouts."
        },
        {
          icon: "solar:chart-linear",
          title: "Supply Chain Analytics",
          description:
            "Comprehensive reports on procurement, logistics, and inventory performance."
        }
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Seamless Onboarding and Loan Origination",
          description:
            "Enable fast account openings and smooth loan applications with document upload functionality for a quick, paperless experience."
        },
        {
          icon: "lucide:gauge",
          title: "Efficient, Scalable Operations",
          description:
            "Achieve real-time transaction processing, automated compliance checks, and a scalable infrastructure designed for flexible growth."
        },
        {
          icon: "mdi:protected-outline",
          title: "Enhanced Security and Global Accessibility",
          description:
            "Leverage advanced fraud detection, multi-currency support, and secure global transactions to support international operations."
        }
      ]
    },

    payroll: {
      title: "Payroll",
      description:
        "Automate your payroll processing with our comprehensive solution, ensuring timely salary payments, tax compliance, and seamless employee benefits management.",
      "video-link": "https://youtube.com",
      "features-description":
        "Discover how our payroll solution simplifies salary processing, tax deductions, and compliance management.",
      "core-features": [
        {
          icon: "solar:money-bag-linear",
          title: "Automated Salary Processing",
          description:
            "Seamlessly calculate and process employee salaries with automated tax and deduction handling."
        },
        {
          icon: "mingcute:document-line",
          title: "Payslip Generation",
          description:
            "Instant payslip generation and distribution with detailed breakdowns of earnings and deductions."
        },
        {
          icon: "lucide:banknote",
          title: "Tax & Compliance Management",
          description:
            "Automated tax calculations, filings, and compliance with local regulations."
        },
        {
          icon: "solar:wallet-linear",
          title: "Direct Bank Transfers",
          description:
            "Secure integration with multiple banks for seamless salary disbursements."
        },
        {
          icon: "mingcute:chart-line",
          title: "Employee Benefits Management",
          description:
            "Easily manage bonuses, allowances, insurance, and retirement contributions."
        },
        {
          icon: "mdi:calendar-clock",
          title: "Leave & Attendance Integration",
          description:
            "Syncs with attendance systems for accurate salary adjustments based on leave and overtime."
        },
        {
          icon: "solar:chart-linear",
          title: "Payroll Reporting & Analytics",
          description:
            "Generate payroll reports with insights into salary trends, expenses, and compliance."
        }
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Seamless Onboarding and Loan Origination",
          description:
            "Enable fast account openings and smooth loan applications with document upload functionality for a quick, paperless experience."
        },
        {
          icon: "lucide:gauge",
          title: "Efficient, Scalable Operations",
          description:
            "Achieve real-time transaction processing, automated compliance checks, and a scalable infrastructure designed for flexible growth."
        },
        {
          icon: "mdi:protected-outline",
          title: "Enhanced Security and Global Accessibility",
          description:
            "Leverage advanced fraud detection, multi-currency support, and secure global transactions to support international operations."
        }
      ]
    },
    "advanced-tools": {
      title: "Advanced Tools",
      description:
        "Enhance security, compliance, and risk management with our AI-driven financial security tools.",
      "video-link": "https://youtube.com",
      "features-description":
        "Discover how our security and compliance solutions protect your financial operations.",
      "core-features": [
        {
          icon: "lucide:shield-alert",
          title: "Anti-Money Laundering (AML)",
          description:
            "Real-time AML monitoring with automated alerts to detect and prevent financial crimes."
        },
        {
          icon: "mage:eye-scan",
          title: "Fraud Detection",
          description:
            "AI-powered fraud detection system that analyzes transaction patterns for anomalies."
        },
        {
          icon: "bx:list-check",
          title: "Sanctions Screening",
          description:
            "Automated screening against global sanctions lists for compliance with financial regulations."
        },
        {
          icon: "ant-design:fund-view-outlined",
          title: "Risk Rating",
          description:
            "Dynamic risk assessment engine with configurable risk scoring models."
        },
        {
          icon: "lucide:file-text",
          title: "Regulatory Report Generation",
          description:
            "Automated compliance reporting for regulatory audits and financial oversight."
        }
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Seamless Onboarding and Loan Origination",
          description:
            "Enable fast account openings and smooth loan applications with document upload functionality for a quick, paperless experience."
        },
        {
          icon: "lucide:gauge",
          title: "Efficient, Scalable Operations",
          description:
            "Achieve real-time transaction processing, automated compliance checks, and a scalable infrastructure designed for flexible growth."
        },
        {
          icon: "mdi:protected-outline",
          title: "Enhanced Security and Global Accessibility",
          description:
            "Leverage advanced fraud detection, multi-currency support, and secure global transactions to support international operations."
        }
      ]
    },

    "advanced-analytics": {
      title: "Advanced Analytics",
      description:
        "Unlock powerful insights with AI-driven analytics for financial performance, customer behavior, and risk management.",
      "video-link": "https://youtube.com",
      "features-description":
        "Explore how our analytics tools provide deep insights into financial trends and decision-making.",
      "core-features": [
        {
          icon: "lucide:bar-chart-3",
          title: "Real-Time Data Insights",
          description:
            "Access live dashboards with financial, operational, and risk analytics."
        },
        {
          icon: "solar:graph-up-bold",
          title: "Predictive Analytics",
          description:
            "AI-driven forecasting to anticipate financial risks and opportunities."
        },
        {
          icon: "bx:trend-up",
          title: "Customer Behavior Analysis",
          description:
            "Analyze spending patterns, preferences, and engagement metrics."
        },
        {
          icon: "ant-design:dashboard-outlined",
          title: "Executive Dashboards",
          description:
            "Interactive dashboards for decision-makers with customizable metrics."
        },
        {
          icon: "lucide:database",
          title: "Data Aggregation & Processing",
          description:
            "Unified data collection from multiple sources for comprehensive reporting."
        },
        {
          icon: "mynaui:pie-chart",
          title: "KPI Tracking",
          description:
            "Monitor key performance indicators (KPIs) for financial health and growth."
        },
        {
          icon: "solar:document-text-linear",
          title: "Automated Reporting",
          description:
            "Generate scheduled and on-demand reports with advanced filtering options."
        },
        {
          icon: "lucide:check-circle",
          title: "Compliance & Risk Analytics",
          description:
            "Ensure regulatory compliance with detailed risk assessments and audit tracking."
        }
      ],
      goals: [
        {
          icon: "uil:user",
          title: "Seamless Onboarding and Loan Origination",
          description:
            "Enable fast account openings and smooth loan applications with document upload functionality for a quick, paperless experience."
        },
        {
          icon: "lucide:gauge",
          title: "Efficient, Scalable Operations",
          description:
            "Achieve real-time transaction processing, automated compliance checks, and a scalable infrastructure designed for flexible growth."
        },
        {
          icon: "mdi:protected-outline",
          title: "Enhanced Security and Global Accessibility",
          description:
            "Leverage advanced fraud detection, multi-currency support, and secure global transactions to support international operations."
        }
      ]
    }
  };
  const { pathname } = useLocation();
  const module: string = pathname.split("/")[2];
  const current = data?.[module];

  console.log(current);

  useEffect(() => {
    if (!Object.keys(data).includes(module)) {
      return nav("/financial-services");
    }
  }, []);
  return (
    <main>
      <section className="section">
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
            {current?.["core-features"]?.map((e: any, index: number) => {
              // Alternate between primary and secondary colors
              const variant = index % 2 === 0 ? "primary" : "secondary";
              
              return (
                <InfoCard
                  title={e.title}
                  icon={e.icon}
                  description={e.description}
                  variant={variant}
                  key={e.title}
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
  title: "Business Success Stories",
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
      link:'https://www.linkedin.com/feed/update/urn:li:activity:7374049585800941568',
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
  variant = "primary"
}: {
  icon: string;
  title: string;
  description: string;
  variant?: "primary" | "secondary";
}) => {
  // Define color schemes based on variant
  const getColorScheme = (variant: string) => {
    if (variant === "secondary") {
      return {
        containerBg: "bg-#075056",
        iconBg: "bg-blue-500",
        iconColor: "text-white"
      };
    } else {
      return {
        containerBg: "bg-#16232A",
        iconBg: "bg-primary/80",
        iconColor: "text-white"
      };
    }
  };

  const colors = getColorScheme(variant);

  return (
    <div className={`${colors.containerBg} rounded-2xl p-4 lg:px-6 lg:py-6 w-full flex flex-col justify-between gap-6 hover:scale-[1.02] duration-700 hover:shadow-lg cursor-pointer`}>
      <div className={`flex flex-col gap-y-3 ${colors.iconBg} w-fit p-2 rounded-md`}>
        <Icon icon={icon} fontSize={24} className={colors.iconColor} />
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

export default BusinessExpansion;

import { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";
import { gsap } from "gsap";

interface SubComponent {
  title: string;
  description: string;
  icon: string;
  learn_more?: any[];
}

interface MadeForItem {
  title: string;
  bg: string;
  titleColor?: string;
  backgroundcolor?: string;
  backgroundsize?: string;
  bgPosition?: string;
  titlePosition?: string;
  description?: string;
  detailedDescription?: string;
  product_image?: string;
  sub_components_title?: string;
  sub_components?: SubComponent[];
  features?: any[];
  why_foundry?: any[];
}

interface MadeForSectionProps {
  activeSegment: string;
}

const MadeForSection = ({ activeSegment }: MadeForSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<MadeForItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const businessData: MadeForItem[] = [
    {
      title: "Expense Management",
      titleColor: "text-[#F9F9F9]",
      titlePosition: "-mt-5 md:mt-4 lg:-mt-6",
      // titlePosition: '-mt-8 md:mt-4 lg:-mt-6',
      bg: "/images/v2/hand_trans.png",
      backgroundsize: "contain",
      description: "Automate and track business expenses with ease.",
      // link: '/our-platforms/business/expense-management',
      detailedDescription: `Foundry Expense Management gives businesses real-time control over every cedi spent. It centralizes expense capture, approvals, spending limits, and reporting into one intelligent system that fits seamlessly within the Foundry ecosystem, ensuring complete accuracy without manual effort.`,
      product_image: "",
      sub_components_title: "Core Features",
      sub_components: [
        {
          title: "Automated Expense Capture",
          description:
            "From mobile money and card transactions to receipts and supplier payments, Foundry automatically records, categorizes, and reconciles every expense with complete accuracy.",
          icon: "lucide:scan",
          learn_more: [],
        },
        {
          title: "Approval Workflows & Budget Control",
          description:
            "Streamline team spending with digital approvals, project and department budgets, automated reimbursements, and instant policy enforcement across all business units.",
          icon: "tabler:checklist",
          learn_more: [],
        },
        {
          title: "Real-time Visibility & Reporting",
          description:
            "Managers get real-time visibility, finance teams close faster with clean data, and insightful dashboards show where money is going, helping leaders make better decisions every day.",
          icon: "lucide:bar-chart-3",
          learn_more: [],
        },
      ],
    },
    {
      title: "Point of Sale",
      titleColor: "text-[black]",
      titlePosition: "-mt-6 md:mt-4 lg:-mt-6",
      // titlePosition: '-mt-6 md:mt-4 lg:-mt-6',
      bg: "/images/POS.png",
      description: "Sell smarter with real-time inventory and sales tracking.",
      // link: '/our-platforms/business/point-of-sale',
      detailedDescription: `Foundry Point of Sale is a unified sales, inventory, and payments engine designed for modern African retail and distribution businesses. It brings together checkout, stock management, customer insights, multi-branch visibility, and real-time financial reporting into one seamless system.`,
      sub_components_title: "Core Features",
      sub_components: [
        {
          title: "Sales & Checkout",
          description:
            "Process sales in-store, via mobile, or through field agents with barcode scanning, catalog management, discounts, and secure digital receipts—supported by cash, card, and mobile money payment options.",
          icon: "tabler:shopping-cart",
          learn_more: [],
        },
        {
          title: "Inventory Management",
          description:
            "Monitor inventory across multiple locations with automated stock alerts, price controls, role permissions, and real-time tracking to prevent stock loss and ensure optimal stock levels.",
          icon: "lucide:package",
          learn_more: [],
        },
        {
          title: "Multi-channel Integration",
          description:
            "Every transaction syncs instantly into Foundry Business and Foundry Books, eliminating manual errors. Finance teams benefit from automatic posting and reconciliation, accelerating the month-end close.",
          icon: "lucide:git-merge",
          learn_more: [],
        },
      ],
      backgroundsize: "90%",
      backgroundcolor: "#E4EEF0 ",
    },
    {
      title: "Foundry Terminal",

      titleColor: "text-black",
      titlePosition: "-mt-5 md:mt-4 lg:-mt-6",
      // titlePosition: '-mt-8 md:mt-4 lg:-mt-6',
      bg: "/images/v2/terminal.png",
      backgroundsize: "contain",
      description:
        "One terminal for managing all business operations centrally.",
      // link: '/our-platforms/business/foundry-terminal',
      detailedDescription: `Foundry Terminal is the unified interface that brings Foundry's financial and operational services directly to the point of interaction with customers, agents, and merchants. It acts as the operational bridge between in-person commerce and your backend systems—ensuring clean data, instant reporting, and seamless reconciliation.`,
      sub_components_title: "Core Features",
      sub_components: [
        {
          title: "Payment Processing",
          description:
            "Enable fast, secure payments across mobile money, card, and digital wallets while synchronizing every transaction into the Foundry platform in real-time.",
          icon: "tabler:credit-card",
          learn_more: [],
        },
        {
          title: "Customer Services",
          description:
            "Support value-added capabilities such as customer onboarding, identity verification, balance inquiries, collections, bill payments, and cash-in/cash-out operations.",
          icon: "lucide:user-check",
          learn_more: [],
        },
        {
          title: "Operations Management",
          description:
            "Intuitive UI with offline resilience and multi-user access controls. Each activity is logged with audit trails and real-time notifications, reducing fraud and strengthening operational oversight.",
          icon: "lucide:settings",
          learn_more: [],
        },
      ],
    },
    {
      title: "Invoice Management",
      titleColor: "text-black",
      titlePosition: "-mt-5 md:mt- 4 lg:-mt-6 lg:md:whitespace-nowrap ",
      bg: "/images/v2/invoice.png",
      backgroundsize: "contain",
      bgPosition: "mb-6",

      description: "Send, track, and reconcile invoices effortlessly.",
      // link: '/our-platforms/business/invoice-management',
      detailedDescription: `Foundry Invoice Management gives businesses a complete, integrated system for creating, sending, tracking, and reconciling invoices with unmatched accuracy and speed. Designed for SMEs and fast-growing enterprises, it automates the entire invoicing lifecycle and syncs seamlessly with Foundry Books and Foundry Finance.`,
      sub_components_title: "Core Features",
      sub_components: [
        {
          title: "Invoice Lifecycle Automation",
          description:
            "Automate quotation, invoice generation, customer reminders, payment collection, and ledger posting. Supports digital invoices, recurring billing, and multi-branch operations.",
          icon: "lucide:file-text",
          learn_more: [],
        },
        {
          title: "Payment Collection & Tracking",
          description:
            "Track invoice status in real time with automated payment links across mobile money, bank transfer, and card. Smart reminders and customer notifications reduce late payments.",
          icon: "tabler:cash",
          learn_more: [],
        },
        {
          title: "Financial Integration & Compliance",
          description:
            "Every invoice syncs seamlessly eliminating manual data entry. Audit trails, approval workflows, and role-based access maintain compliance and reduce risk across the invoicing process.",
          icon: "lucide:shield-check",
          learn_more: [],
        },
      ],
    },

    {
      title: "Manage Payroll",
      bg: "/images/v2/payroll.png",
      titlePosition: "-mt-5 md:mt-4 lg:-mt-6",

      backgroundsize: " 90%",
      backgroundcolor: "#E4EEF0 ",
      bgPosition: "ml-4",
      description:
        "Automated payroll solution ensuring accurate and timely payments.",
      // link: '/our-platforms/business/procurement',
      detailedDescription: `Foundry Manage Payroll is a complete, automated payroll solution that ensures your employees are paid accurately and on time, every time. It handles salary computation, deductions, allowances, taxes, and benefits while integrating seamlessly with Foundry Books and Foundry Finance.`,
      product_image: "/images/our-platforms/new/procure.png",
      sub_components_title: "Core Features",
      sub_components: [
        {
          title: "Payroll Automation",
          description:
            "Automate salary computation, deductions, allowances, taxes, and benefits. Reduces errors, saves time, and provides a single source of truth for all payroll data.",
          icon: "tabler:calculator",
          learn_more: [],
        },
        {
          title: "Compliance & Reporting",
          description:
            "Multi-branch operations, role-based approvals, statutory compliance, and local tax regulations. Real-time dashboards show payroll costs, department-wise expenses, and projected liabilities.",
          icon: "lucide:file-check",
          learn_more: [],
        },
        {
          title: "Employee Self-Service & Disbursement",
          description:
            "Employees access payslips digitally. Integration with bank and mobile money systems enables instant salary disbursements and simplifies reconciliation.",
          icon: "lucide:user-circle",
          learn_more: [],
        },
      ],
    },
    {
      title: "Business Loans",
      bg: "/images/v2/business_loans.png",
      titlePosition: "-mt-5 md:mt-4 lg:-mt-6",
      product_image: "/images/our-platforms/new/hr.png",
      description: "Streamline employee data, benefits, and HR processes.",
      // link: '/our-platforms/business/hr',
      detailedDescription: `Business Loans provides SMEs with fast, flexible, and transparent access to the capital they need to grow. Integrated within the Foundry Finance ecosystem, it simplifies loan application, approval, disbursement, and repayment, all in one seamless platform without cumbersome paperwork.`,
      sub_components_title: "Core Features",
      sub_components: [
        {
          title: "Loan Application & Approval",
          description:
            "Access working capital, expansion loans, or short-term financing without cumbersome paperwork. Foundry automates credit assessment and compliance checks to reduce risk.",
          icon: "lucide:file-check-2",
          learn_more: [],
        },
        {
          title: "Data-Driven Credit Assessment",
          description:
            "Leverages data from sales, expenses, invoices, and repayment history to offer personalized loan terms, track repayment schedules, and provide real-time insights on outstanding obligations.",
          icon: "tabler:chart-dots",
          learn_more: [],
        },
        {
          title: "Disbursement & Repayment",
          description:
            "Digital disbursement and repayment options—including bank transfers and mobile money—ensure funds move quickly and securely, while automated reminders keep borrowers on track.",
          icon: "tabler:arrows-exchange",
          learn_more: [],
        },
      ],
      backgroundsize: "cover",
      titleColor: "text-white",
      // backgroundcolor: '#E4EEF0 ',
    },
    {
      title: "  Trust Score   ",
      bg: "/images/v2/score.png",
      titlePosition: "-mt-5 md:mt-4 lg:-mt-6",
      // description: 'Turn your data into actionable insights with powerful dashboards.',
      // link: '/our-platforms/business/analytics',
      backgroundsize: "contain",
      bgPosition: "mb-6",
      detailedDescription: `Foundry Trust Score is a dynamic risk and credibility scoring system that helps businesses make smarter financial and operational decisions. By analyzing transactional history, payment behavior, compliance records, and operational data, it generates a reliable, real-time score that reflects trustworthiness.`,
      sub_components_title: "Core Features",
      sub_components: [
        {
          title: "Risk Assessment & Scoring",
          description:
            "Analyzes transactional history, payment behavior, compliance records, and operational data to generate reliable, real-time scores that reflect the trustworthiness of customers, suppliers, or partners.",
          icon: "lucide:shield-alert",
          learn_more: [],
        },
        {
          title: "Real-time Score Updates",
          description:
            "Continuously updates scores as new data becomes available, enabling businesses to identify high-risk partners, assess creditworthiness, and optimize lending or procurement decisions.",
          icon: "tabler:refresh",
          learn_more: [],
        },
        {
          title: "Integration & Insights",
          description:
            "Integrates with onboarding workflows, vendor management, and loan applications, ensuring every relationship is evaluated with accuracy and transparency. Provides actionable insights that reduce risk.",
          icon: "lucide:network",
          learn_more: [],
        },
      ],
    },
    {
      title: "Business APIs",
      bg: "/images/v2/API.png",
      backgroundsize: "contain",
      titlePosition: "-mt-5 md:mt-4 lg:-mt-6",
      bgPosition: "ml-12",
      description: "Easily integrate third-party tools and automate workflows.",
      // link: '/our-platforms/business/business-apis',
      detailedDescription: ``,
      sub_components_title: "",
      sub_components: [],
    },
  ];

  const financeData: MadeForItem[] = [
    {
      title: "Onboarding",
      titleColor: "text-white",
      bg: "/images/v2/onboarding.png",
      backgroundcolor: "white",
      backgroundsize: "cover",
      // bgPosition: "mt-6",
      product_image: "/images/our-platforms/view/MExpense.png",
      description: "Transform the customer onboarding experience.",
      // pdfLink: '/Documents/Onboarding.pdf', // Add this line - replace with your actual PDF path
      sub_components: [
        {
          title: "KYC/KYB & Risk Rating",
          description:
            "Embedded Know Your Customer (and Business) checks plus automated risk scoring to ensure regulatory compliance and informed decisions.",
          icon: "lucide:user-check",
          learn_more: [],
        },
        {
          title: "Document Collection",
          description:
            "Effortlessly submit and defer essential documents (IDs, utility bills, financials) and securely store and track them within the system",
          icon: "heroicons-outline:folder-open",
          learn_more: [],
        },
        {
          title: "E-Signature",
          description:
            "Secure, digital signing of loan agreements, no paperwork or in-person visits needed.",
          icon: "mdi:signature",
          learn_more: [],
        },
      ],
      features: [
        {
          title: "Personal Account",
          goal: "Open Account in less than 5mins",
          steps: [
            "Take Selfie for ID Verification",
            "Enter Required details",
            "Select account type while our system runs a real-time risk analysis",
            "Submit documents (e.g. utility bill, ID) and sign digitally",
            "Make a quick deposit and your account is live",
          ],
        },
        {
          title: "Joint Account",
          goal: "Open Account in less than 5mins",
          steps: [
            "Take Selfie for ID Verification",
            "Enter Required details",
            "Select account type while our system runs a real-time risk analysis",
            "Submit documents (e.g. utility bill, ID) and sign digitally with co-applicant",
            "Make a quick deposit and your account is live",
          ],
        },
        {
          title: "Business Account",
          goal: "Open Account in less than 5mins",
          steps: [
            "Take Selfie for ID Verification (Key Contact Person / Signatory)",
            "Enter Required details",
            "Select account type while our system runs a real-time risk analysis",
            "Submit documents (e.g. utility bill, ID) and sign digitally with co-signatories",
            "Make a quick deposit and your account is live",
          ],
        },
      ],
      why_foundry: [
        {
          title: "Unified Platform",
          description:
            "Consolidates fragmented systems and manual workflows into a single, streamlined platform.",
        },
        {
          title: "Unified Platform",
          description:
            "Consolidates fragmented systems and manual workflows into a single, streamlined platform.",
        },
        {
          title: "Unified Platform",
          description:
            "Consolidates fragmented systems and manual workflows into a single, streamlined platform.",
        },
        {
          title: "Unified Platform",
          description:
            "Consolidates fragmented systems and manual workflows into a single, streamlined platform.",
        },
      ],
    },

    {
      title: "Digital Banking",
      bg: "/images/v2/digital_banking.png",
      // backgroundsize: "100%",
      // bgPosition: "ml-4",
      backgroundcolor: "#dedcdf",
      product_image: "/images/v2/lending.png",
      description: "Deliver seamless mobile and online banking experiences.",
      // link: '/our-platforms/finance/digital-banking',
      detailedDescription: `The Foundry Digital Platform makes banking a few taps away, putting your institution in the palm of your customers' hands. This all-in-one solution provides a seamless suite of services from fast digital loans and secure savings to investments and insurance, all accessible through a single, intuitive interface on their mobile phone, whether it's a smartphone or a basic feature phone. It's the strategic platform you need to drive growth, enhance customer loyalty, and lead the way in digital finance.`,
      sub_components_title: "",
      sub_components: [
        {
          title: "Digital Savings",
          description:
            "Empower your customers to take control of their financial future. Our digital savings module lets them open accounts, set goals, and make secure deposits with a few taps via USSD or a powerful mobile app. It's a seamless way to build wealth and track progress, all without stepping into a branch.",
          icon: "lucide:piggy-bank",
          learn_more: [],
        },
        {
          title: "Digital Lending",
          description:
            "Remove the friction from borrowing. Our digital lending platform provides a fast, paperless loan experience from start to finish. Customers can apply, get assessed, and receive funds via a simple USSD menu or a feature-rich mobile app, giving them instant access to the credit they need, when they need it",
          icon: "tabler:hand-coin",
          learn_more: [],
        },
        {
          title: "Insurance",
          description:
            "Make insurance simple and accessible. Our digital insurance module integrates the entire policy lifecycle into your platform. Customers can browse, purchase, and manage policies or file claims digitally via a secure mobile app and basic USSD prompts, giving them peace of mind and protection with unprecedented convenience.",
          icon: "lucide:shield-check",
          learn_more: [],
        },
        {
          title: "Investment",
          description:
            "Democratize investments for everyone. We lower the barrier to entry by putting investment products directly on your customers' devices. Whether they're using a feature phone or a smartphone, they can explore options, manage portfolios, and track returns through a user-friendly mobile app and simplified USSD prompts",
          icon: "tabler:trending-up",
          learn_more: [],
        },
      ],
    },
    {
      title: "Digital Lending",
      bg: "/images/v2/lending.png",
      backgroundsize: "cover",
      backgroundcolor: "#dedce9",
      product_image: "/images/our-platforms/view/MExpense.png",
      description: "Simplify loan origination, approvals, and repayments.",

      // pdfLink: '/Documents/Lending.pdf',
      // link: '/our-platforms/finance/lending',
      detailedDescription: `Foundry's fully digital, end-to-end platform empowers lending institutions, from personal to SME and commercial. Accelerate loan applications with high-speed lead capture and pre-populated intake. Our AI-driven hybrid underwriting and credit scoring, complete with full auditability, centralize document and e-signature workflows. Enjoy rapid ACH or Mobile Wallet disbursements, seamless repayment collections, configurable workflows, risk-based pricing, and automated borrower communications. Built on a scalable microservices architecture, Foundry drastically cuts turnaround times and reduces operational costs by up to 40%.`,
      sub_components_title: "",
      sub_components: [
        {
          title: "Omnichannel Origination",
          description:
            "Applying for a loan has never been simpler. Whether you prefer our intuitive self-service portal, or require personalized assistance from a field agent at your location, our platform lets you submit applications with ease via Mobile app, USSD and Web Portal – no physical presence require",
          icon: "tabler:app-window",
          learn_more: [],
        },
        {
          title: "Credit scoring",
          description:
            "Assess borrower creditworthiness in real-time with our AI-powered scoring engine. We combine traditional credit data with rich alternative sources like payment and behavioral history to deliver fast, consistent, and explainable risk ratings, helping you make smarter lending choices.",
          icon: "lucide:bar-chart-2",
          learn_more: [],
        },
        {
          title: "Underwriting",
          description:
            "Streamline your lending decisions with our sophisticated underwriting module. It leverages advanced algorithms and configurable rules to automate risk assessment, ensuring consistent, data-driven decisions while maintaining human oversight where needed.",
          icon: "tabler:scale",
          learn_more: [],
        },
        {
          title: "Disbursement Management",
          description:
            "Our platform offers single or bulk approval for disbursements, handles scheduled payments, and ensures smooth operations through robust bank and payment system integrations. Get your funds where they need to go, efficiently and on time.",
          icon: "tabler:cash",
          learn_more: [],
        },
        {
          title: "Repayment Management",
          description:
            "Simplify collections with comprehensive repayment management. Process single or bulk repayments, enjoy precise repayment tracking, and access detailed reports and reconciliation tools to keep your finances clear and accurate",
          icon: "mdi:cash-return",
          learn_more: [],
        },
        {
          title: "Approval Management",
          description:
            "Take control of your loan decisions with intuitive approval management. Configure multi-level approval workflows that fit your specific policies, allowing for efficient review, secure decision-making, and clear audit trails for every application",
          icon: "tabler:checklist",
          learn_more: [],
        },
      ],
    },

    {
      title: "Compliance and Risk Management",

      backgroundcolor: "#253137",
      backgroundsize: "100%",
      bg: "/images/v2/SentinelCard.png",
      titleColor: "white",
      // backgroundsize: '125% ',
      product_image: "/images/our-platforms/view/MExpense.png",
      description: "",
      // link: '/our-platforms/finance/sentinel',
      detailedDescription: `Fortify your institution with Foundry Sentinel, a holistic compliance and risk management platform that continuously analyzes transactions in real time to identify anomalies and protect you from fraud and financial crime. By reducing false positives by up to 95%, our intelligent platform turns noisy alerts into actionable intelligence, empowering your compliance team to focus on genuine threats and streamline their response efforts within a single, unified interface.`,
      sub_components_title: "",
      sub_components: [
        {
          title: "Watch (Real-Time Transaction Monitoring)",
          description:
            " Proactively detects suspicious activities and fraud with real-time transaction monitoring against defined rules and patterns.",
          icon: "lucide:scan-line",
          learn_more: [],
        },
        {
          title: "Verify (KYC/KYB & Identity Verification)",
          description:
            "Integrates with external APIs for instant KYC/KYB checks, AML, and sanction screening.",
          icon: "lucide:badge-check",
          learn_more: [],
        },
        {
          title: "Assure (Reconciliation Intelligence)",
          description:
            "Provides automated reconciliation workflows to quickly detect mismatches and discrepancies across different financial systems.",
          icon: "tabler:exchange",
          learn_more: [],
        },
        {
          title: "Case (Compliance Case Management)",
          description:
            " Streamlines the investigation and resolution of compliance-related incidents with structured workflows and escalation paths.",
          icon: "lucide:folder-search",
          learn_more: [],
        },
      ],
    },
    {
      title: "Core Banking",
      bg: "/images/v2/core_banking.png",
      bgPosition: "ml-4", 
      product_image: "/images/our-platforms/view/MExpense.png",
      description:
        "Robust backend system to manage accounts, transactions, and ledgers.",
      // link: '/our-platforms/finance/core-banking',
      detailedDescription: `Take full control of your institution's core functions through a unified platform that brings together everything; from account opening, deposits, withdrawals, loans, and other customer transactions to key internal functions like accounting, HR, CRM, procurement, and workflows into one centralized platform. With real-time dashboards, operational analytics, and audit-ready logs, you gain full operational transparency, enhanced compliance, and the agility to run with efficiency and scale.`,
      sub_components_title: "",
      sub_components: [
        {
          title: "Core Banking",
          description:
            "Gives you the foundational power of modern finance. Manage all your core banking activities- from account management and customer master data to ledgering, transaction processing, and fixed deposit management—with a single, robust platform that ensures security, accuracy, and compliance at every step.",
          icon: "tabler:building-bank",
          learn_more: [],
        },
        {
          title: "Business and Finance Automation (Internal Engine)",
          description:
            "Streamline your internal operations with Foundry's comprehensive automation suite. Our platform integrates Accounting, HRMS, Payroll, Inventory & Procurement, and CMS/CRM into one powerful system. This eliminates fragmented data and manual work, providing a single source of truth that drives efficiency and reduces administrative costs",
          icon: "lucide:settings",
          learn_more: [],
        },
        {
          title: "Workflow Management",
          description:
            "Bring order to your operations with our dynamic Workflow Management. Design, automate, and track every request and task with customizable workflows. From service requests to complaints, you can ensure that nothing falls through the cracks, leading to faster resolutions, greater accountability, and superior service delivehere needed.",
          icon: "lucide:workflow",
          learn_more: [],
        },
        {
          title: "Management Portal",
          description:
            "Gain complete oversight with our intuitive Management Portal. This central hub provides an executive view of your entire institution, displaying key performance dashboards, real-time reports, and critical data insights. It's the ultimate tool for strategic decision-making, giving you a clear, comprehensive picture of your business at all times",
          icon: "lucide:layout-dashboard",
          learn_more: [],
        },
        {
          title: "Reminders and Notifications",
          description:
            "Ensure your team and customers are always in the loop with our automated Reminders & Notification system. Set up and send timely alerts for important tasks, deadlines, and customer communications. This keeps everyone informed and engaged, helping you stay ahead of your schedule and maintain a high level of service.",
          icon: "lucide:bell",
          learn_more: [],
        },
        {
          title: "Reports and Data Analytics",
          description:
            "Turn your raw data into a strategic asset with our advanced Reports & Data Analytics engine. Generate detailed financial, operational, and customer reports, and gain valuable insights into your institution's performance. With the ability to visualize and analyze data, you can make smarter, more informed decisions that drive sustainable growth",
          icon: "tabler:chart-dots-3",
          learn_more: [],
        },
      ],
    },
    {
      title: "Banking as a Service",
      // titleColor: 'white',
      bg: "/images/v2/baas.png",
      backgroundsize: "cover",
      backgroundcolor: "#378790",
      product_image: "/images/our-platforms/view/MExpense.png",
      description:
        "Launch and scale banking products with ready-to-integrate APIs.",
      // link: '/our-platforms/finance/banking-as-a-service',
      detailedDescription: `Tap into new revenue and innovation by offering your financial services—from payments and lending to digital wallets as a service to fintechs and businesses. Our API-first infrastructure allows partners to seamlessly embed your licensed banking capabilities into their own products, without them needing a banking charter. Foundry BaaS isn't just a service; it's your strategic launchpad into embedded finance, enabling you to monetize your banking stack and lead in the digital economy.`,
      sub_components_title: "",
      sub_components: [],
    },
  ];

  const data = activeSegment === "merchant" ? businessData : financeData;

  // Compute scroll step based on actual card width and container gap
  const getCardStep = () => {
    if (!scrollRef.current) return 320;
    const firstCard = scrollRef.current.querySelector(
      "[data-card]"
    ) as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth || 300;
    const styles = window.getComputedStyle(scrollRef.current);
    const gapStr = styles.columnGap || styles.gap || "20";
    const gap = parseInt(gapStr, 10);
    return cardWidth + (Number.isNaN(gap) ? 20 : gap);
  };

  // Auto-advance slider
  useEffect(() => {
    if (!scrollRef.current || !data.length) return;

    const interval = setInterval(() => {
      if (!scrollRef.current || !data.length) return;

      const container = scrollRef.current;
      const totalCards = data.length;
      const step = getCardStep();

      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= totalCards) {
          container.scrollTo({ left: 0, behavior: "smooth" });
          return 0;
        }

        const scrollPosition = nextIndex * step;
        container.scrollTo({ left: scrollPosition, behavior: "smooth" });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [data]);

  // Reset index when segment changes
  useEffect(() => {
    setCurrentIndex(0);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0 });
    }
  }, [activeSegment]);

  // Handle modal open animation
  useEffect(() => {
    if (selectedItem && overlayRef.current && contentRef.current) {
      // Animate overlay
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Animate content
      gsap.fromTo(
        contentRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  }, [selectedItem]);

  const handleCardClick = (item: MadeForItem) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    if (overlayRef.current && contentRef.current) {
      // Animate out
      gsap.to(contentRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setSelectedItem(null);
          document.body.style.overflow = "unset";
        },
      });
    }
  };

  return (
    <section
      className={`py-24 transition-colors duration-500 ${
        activeSegment === "bank" ? "bg-[#1C1C1C]" : "bg-white"
      }`}
    >
      <div className="px-4 md:px-6 lg:px-8">
        {/* Title - matching FeatureGrid layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 md:mb-20 items-end">
          <h2
            className={`text-4xl md:text-5xl font-medium tracking-tight ${
              activeSegment === "bank" ? "text-white" : "text-zinc-900"
            }`}
          >
            <span
              className={
                activeSegment === "bank" ? "text-gray-400" : "text-zinc-600"
              }
            >
              Products Made
            </span>{" "}
            <span>for</span>{" "}
            <span className="text-[#075056] capitalize">
              {activeSegment === "merchant" ? "Business" : "Finance"}
            </span>
          </h2>
          <p
            className={`text-lg ${
              activeSegment === "bank" ? "text-gray-400" : "text-zinc-600"
            }`}
          >
            {activeSegment === "merchant"
              ? "Complete solutions designed to streamline your business operations and drive growth."
              : "Banking products and services built for the digital age, enabling seamless customer experiences."}
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden relative">
          <div
            className="flex gap-6 px-1 transition-transform duration-300 ease-in-out items-stretch justify-start overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            ref={scrollRef}
          >
            {data.map((item, idx) => (
              <div
                data-card
                key={idx}
                onClick={() => handleCardClick(item)}
                className={`snap-start cursor-pointer min-w-[340px] lg:max-w-[360px] lg:min-w-[360px] h-[32rem] md:h-[34rem] lg:h-[34rem]
                  ${
                    activeSegment === "bank"
                      ? "bg-[#24272A] border border-zinc-800 text-white"
                      : "bg-primary-light/40 text-zinc-900"
                  } flex flex-col justify-between
                  shadow-sm transition-all duration-300 ease-in-out rounded-2xl overflow-hidden`}
              >
                {/* Upper text content */}
                <div className="space-y-2 p-6">
                  <h3
                    className={`text-lg md:text-xl font-semibold tracking-tight ${
                      activeSegment === "bank" ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p
                      className={`text-xs md:text-sm ${
                        activeSegment === "bank"
                          ? "text-gray-400"
                          : "text-zinc-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(item);
                    }}
                    className={`pt-2 inline-flex items-center text-sm font-medium ${
                      activeSegment === "bank"
                        ? "text-gray-300 hover:text-white"
                        : "text-zinc-800 hover:text-black"
                    }`}
                  >
                    Learn more
                    <span className="ml-1">→</span>
                  </button>
                </div>

                {/* Media area */}
                <div className={`mt-6 w-full h-[18rem] md:h-[20rem] lg:h-[22rem] bg-transparent overflow-hidden  ${item.bgPosition}`}>
                  <div
                    className="w-full h-full bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${item.bg})`,
                      backgroundSize: item.backgroundsize || "cotain",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Nav buttons */}
          <button
            aria-label="Previous"
            className={`hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full shadow ${
              activeSegment === "bank"
                ? "bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700"
                : "bg-white/90 border border-zinc-200 text-zinc-700 hover:bg-white"
            }`}
            onClick={() => {
              const c = scrollRef.current;
              if (!c) return;
              const step = getCardStep();
              c.scrollBy({ left: -step, behavior: "smooth" });
              setCurrentIndex((i) => Math.max(0, i - 1));
            }}
          >
            ‹
          </button>
          <button
            aria-label="Next"
            className={`hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full shadow ${
              activeSegment === "bank"
                ? "bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700"
                : "bg-white/90 border border-zinc-200 text-zinc-700 hover:bg-white"
            }`}
            onClick={() => {
              const c = scrollRef.current;
              if (!c) return;
              const step = getCardStep();
              c.scrollBy({ left: step, behavior: "smooth" });
              setCurrentIndex((i) => i + 1);
            }}
          >
            ›
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {data.map((_, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (!scrollRef.current) return;
                  const step = getCardStep();
                  scrollRef.current.scrollTo({
                    left: idx * step,
                    behavior: "smooth",
                  });
                  setCurrentIndex(idx);
                }}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? activeSegment === "bank"
                      ? "bg-[#F6851B] scale-110"
                      : "bg-black scale-110"
                    : "bg-gray-400"
                } transition-all duration-300`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          {/* Overlay */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <div
            ref={contentRef}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide rounded-xl shadow-2xl ${
              activeSegment === "bank"
                ? "bg-[#24272A] text-white"
                : "bg-white text-zinc-900"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${
                activeSegment === "bank"
                  ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                  : "bg-zinc-100 hover:bg-zinc-200 text-zinc-900"
              }`}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header Image */}
            <div
              className="w-full h-48 bg-cover bg-center rounded-t-xl"
              style={{
                backgroundImage: `url(${selectedItem.bg})`,
                backgroundColor: selectedItem.backgroundcolor || "#36413E",
              }}
            >
              <div className="w-full h-full bg-gradient-to-b from-transparent to-black/50 flex items-end p-8">
                <h2 className="text-4xl font-bold text-white">
                  {selectedItem.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {selectedItem.description && (
                <p
                  className={`text-lg mb-6 ${
                    activeSegment === "bank" ? "text-gray-300" : "text-zinc-600"
                  }`}
                >
                  {selectedItem.description}
                </p>
              )}

              {selectedItem.detailedDescription && (
                <div className="mb-8">
                  <h3
                    className={`text-2xl font-semibold mb-4 ${
                      activeSegment === "bank" ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    Overview
                  </h3>
                  <p
                    className={`text-base leading-relaxed ${
                      activeSegment === "bank"
                        ? "text-gray-300"
                        : "text-zinc-600"
                    }`}
                  >
                    {selectedItem.detailedDescription}
                  </p>
                </div>
              )}

              {selectedItem.sub_components &&
                selectedItem.sub_components.length > 0 && (
                  <div className="mb-8">
                    <h3
                      className={`text-2xl font-semibold mb-6 ${
                        activeSegment === "bank"
                          ? "text-white"
                          : "text-zinc-900"
                      }`}
                    >
                      {selectedItem.sub_components_title || "Features"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedItem.sub_components.map((component, idx) => (
                        <div
                          key={idx}
                          className={`p-6 rounded ${
                            activeSegment === "bank"
                              ? "bg-[#1C1C1C] border-zinc-800"
                              : "bg-zinc-50 border-zinc-200"
                          }`}
                        >
                          <h4
                            className={`text-lg font-semibold mb-2 ${
                              activeSegment === "bank"
                                ? "text-white"
                                : "text-black"
                            }`}
                          >
                            {component.title}
                          </h4>
                          <p
                            className={`text-sm ${
                              activeSegment === "bank"
                                ? "text-gray-400"
                                : "text-zinc-600"
                            }`}
                          >
                            {component.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {selectedItem.features && selectedItem.features.length > 0 && (
                <div className="mb-8">
                  <h3
                    className={`text-2xl font-semibold mb-6 ${
                      activeSegment === "bank" ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    Account Types
                  </h3>
                  <div className="space-y-6">
                    {selectedItem.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`p-6 rounded ${
                          activeSegment === "bank"
                            ? "bg-[#1C1C1C] border-zinc-800"
                            : "bg-zinc-50 border-zinc-200"
                        }`}
                      >
                        <h4
                          className={`text-lg font-semibold mb-2 ${
                            activeSegment === "bank"
                              ? "text-white"
                              : "text-black"
                          }`}
                        >
                          {feature.title}
                        </h4>
                        <p
                          className={`text-sm mb-4 ${
                            activeSegment === "bank"
                              ? "text-gray-400"
                              : "text-zinc-600"
                          }`}
                        >
                          {feature.goal}
                        </p>
                        <ul className="space-y-2">
                          {feature.steps?.map(
                            (step: string, stepIdx: number) => (
                              <li
                                key={stepIdx}
                                className={`text-sm flex items-start ${
                                  activeSegment === "bank"
                                    ? "text-gray-300"
                                    : "text-zinc-600"
                                }`}
                              >
                                <span
                                  className={`mr-2 ${
                                    activeSegment === "bank"
                                      ? "text-white"
                                      : "text-black"
                                  }`}
                                >
                                  •
                                </span>
                                {step}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MadeForSection;

export const financePlatformData = {
  key: 'finance',
  link: '/our-platforms/finance',
  title: 'The Digital Core for Mordern Financial Institutions',
  icon: 'material-symbols-light:money-bag-outline',
  images: '/images/FinanceBackground.png',
  imageSize: '110%',
  marginTop: '20rem',
  description:
    'Foundry Financial Services empowers institutions to simplify operations, enhance compliance, and deliver world-class customer experiences. With integrated modules that connect front, middle, and back-office processes, Foundry eliminates silos and accelerates growth.',

  subitems: [

         
    {
      title: "Onboarding",
      bg: '/images/our-platforms/view/MExpense.png',
      product_image: '/images/our-platforms/view/MExpense.png',
      description: 'Transform the customer onboarding experience.',
      pdfLink: '/Documents/Onboarding.pdf', // Add this line - replace with your actual PDF path
      sub_components: [
        {
          title: "KYC/KYB & Risk Rating",
          description: "Embedded Know Your Customer (and Business) checks plus automated risk scoring to ensure regulatory compliance and informed decisions.",
          icon: "lucide:user-check",
          learn_more: []
        },
        {
          title: "Document Collection",
          description: "Effortlessly submit and defer essential documents (IDs, utility bills, financials) and securely store and track them within the system",
          icon: "heroicons-outline:folder-open",
          learn_more: []
        },
        {
          title: "E-Signature",
          description: "Secure, digital signing of loan agreements, no paperwork or in-person visits needed.",
          icon: 'mdi:signature',
          learn_more: []
        }
      ],
      features: [
        {
          title: 'Personal Account',
          goal: "Open Account in less than 5mins",
          steps: [
            'Take Selfie for ID Verification',
            'Enter Required details',
            'Select account type while our system runs a real-time risk analysis',
            'Submit documents (e.g. utility bill, ID) and sign digitally',
            'Make a quick deposit and your account is live',
          ],
        },
        {
          title: 'Joint Account',
          goal: "Open Account in less than 5mins",
          steps: [
            'Take Selfie for ID Verification',
            'Enter Required details',
            'Select account type while our system runs a real-time risk analysis',
            'Submit documents (e.g. utility bill, ID) and sign digitally with co-applicant',
            'Make a quick deposit and your account is live',
          ],
        },
        {
          title: 'Business Account',
          goal: "Open Account in less than 5mins",
          steps: [
            'Take Selfie for ID Verification (Key Contact Person / Signatory)',
            'Enter Required details',
            'Select account type while our system runs a real-time risk analysis',
            'Submit documents (e.g. utility bill, ID) and sign digitally with co-signatories',
            'Make a quick deposit and your account is live',
          ],
        },
      ],
      why_foundry: [
        {
          title: 'Unified Platform',
          description: 'Consolidates fragmented systems and manual workflows into a single, streamlined platform.',
        },
        {
          title: 'Unified Platform',
          description: 'Consolidates fragmented systems and manual workflows into a single, streamlined platform.',
        },
        {
          title: 'Unified Platform',
          description: 'Consolidates fragmented systems and manual workflows into a single, streamlined platform.',
        },
        {
          title: 'Unified Platform',
          description: 'Consolidates fragmented systems and manual workflows into a single, streamlined platform.',
        }
      ]
    },
    {
      title: 'Core Banking',
      bg: '/images/our-platforms/view/MExpense.png',
      product_image: '/images/our-platforms/view/MExpense.png',
      description: 'Robust backend system to manage accounts, transactions, and ledgers.',
      // link: '/our-platforms/finance/core-banking',
      detailedDescription: `Take full control of your institution's core functions through a unified platform that brings together everything; from account opening, deposits, withdrawals, loans, and other customer transactions to key internal functions like accounting, HR, CRM, procurement, and workflows into one centralized platform. With real-time dashboards, operational analytics, and audit-ready logs, you gain full operational transparency, enhanced compliance, and the agility to run with efficiency and scale.`,
      sub_components_title: "",
      sub_components: [
        {
          title: "Core Banking",
          description: "Gives you the foundational power of modern finance. Manage all your core banking activities- from account management and customer master data to ledgering, transaction processing, and fixed deposit management—with a single, robust platform that ensures security, accuracy, and compliance at every step.",
          icon: "tabler:building-bank",
          learn_more: []
        },
        {
          title: "Business and Finance Automation (Internal Engine)",
          description: "Streamline your internal operations with Foundry's comprehensive automation suite. Our platform integrates Accounting, HRMS, Payroll, Inventory & Procurement, and CMS/CRM into one powerful system. This eliminates fragmented data and manual work, providing a single source of truth that drives efficiency and reduces administrative costs",
          icon: "lucide:settings",
          learn_more: []
        },
        {
          title: "Workflow Management",
          description: "Bring order to your operations with our dynamic Workflow Management. Design, automate, and track every request and task with customizable workflows. From service requests to complaints, you can ensure that nothing falls through the cracks, leading to faster resolutions, greater accountability, and superior service delivehere needed.",
          icon: "lucide:workflow",
          learn_more: []
        },
        {
          title: "Management Portal",
          description: "Gain complete oversight with our intuitive Management Portal. This central hub provides an executive view of your entire institution, displaying key performance dashboards, real-time reports, and critical data insights. It's the ultimate tool for strategic decision-making, giving you a clear, comprehensive picture of your business at all times",
          icon: "lucide:layout-dashboard",
          learn_more: []
        },
        {
          title: "Reminders and Notifications",
          description: "Ensure your team and customers are always in the loop with our automated Reminders & Notification system. Set up and send timely alerts for important tasks, deadlines, and customer communications. This keeps everyone informed and engaged, helping you stay ahead of your schedule and maintain a high level of service.",
          icon: "lucide:bell",
          learn_more: []
        },
        {
          title: "Reports and Data Analytics",
          description: "Turn your raw data into a strategic asset with our advanced Reports & Data Analytics engine. Generate detailed financial, operational, and customer reports, and gain valuable insights into your institution's performance. With the ability to visualize and analyze data, you can make smarter, more informed decisions that drive sustainable growth",
          icon: "tabler:chart-dots-3",
          learn_more: []
        }
      ]
    },
    {
      title: 'Digital Banking',
      bg: '/images/DigitalBanking.png',
      backgroundsize: 'cover',
      product_image: '/images/our-platforms/view/MExpense.png',
      description: 'Deliver seamless mobile and online banking experiences.',
      // link: '/our-platforms/finance/digital-banking',
      detailedDescription: `The Foundry Digital Platform makes banking a few taps away, putting your institution in the palm of your customers' hands. This all-in-one solution provides a seamless suite of services from fast digital loans and secure savings to investments and insurance, all accessible through a single, intuitive interface on their mobile phone, whether it's a smartphone or a basic feature phone. It's the strategic platform you need to drive growth, enhance customer loyalty, and lead the way in digital finance.`,
      sub_components_title: "",
      sub_components: [
        {
          title: "Digital Savings",
          description: "Empower your customers to take control of their financial future. Our digital savings module lets them open accounts, set goals, and make secure deposits with a few taps via USSD or a powerful mobile app. It's a seamless way to build wealth and track progress, all without stepping into a branch.",
          icon: "lucide:piggy-bank",
          learn_more: []
        },
        {
          title: "Digital Lending",
          description: "Remove the friction from borrowing. Our digital lending platform provides a fast, paperless loan experience from start to finish. Customers can apply, get assessed, and receive funds via a simple USSD menu or a feature-rich mobile app, giving them instant access to the credit they need, when they need it",
          icon: "tabler:hand-coin",
          learn_more: []
        },
        {
          title: "Insurance",
          description: "Make insurance simple and accessible. Our digital insurance module integrates the entire policy lifecycle into your platform. Customers can browse, purchase, and manage policies or file claims digitally via a secure mobile app and basic USSD prompts, giving them peace of mind and protection with unprecedented convenience.",
          icon: "lucide:shield-check",
          learn_more: []
        },
        {
          title: "Investment",
          description: "Democratize investments for everyone. We lower the barrier to entry by putting investment products directly on your customers' devices. Whether they're using a feature phone or a smartphone, they can explore options, manage portfolios, and track returns through a user-friendly mobile app and simplified USSD prompts",
          icon: "tabler:trending-up",
          learn_more: []
        }
      ]
    },
    {
      title: 'Banking as a Service',
      bg: '/images/our-platforms/view/MExpense.png',
      product_image: '/images/our-platforms/view/MExpense.png',
      description: 'Launch and scale banking products with ready-to-integrate APIs.',
      // link: '/our-platforms/finance/banking-as-a-service',
      detailedDescription: `Tap into new revenue and innovation by offering your financial services—from payments and lending to digital wallets as a service to fintechs and businesses. Our API-first infrastructure allows partners to seamlessly embed your licensed banking capabilities into their own products, without them needing a banking charter. Foundry BaaS isn't just a service; it's your strategic launchpad into embedded finance, enabling you to monetize your banking stack and lead in the digital economy.`,
      sub_components_title: "",
      sub_components: []
    },
    {
      title: 'Lending',
      bg: '/images/LendingCard.png',
      backgroundsize: '210% 100% ',
      // backgroundcolor: 'white',
      product_image: '/images/our-platforms/view/MExpense.png',
      description: 'Simplify loan origination, approvals, and repayments.',

      pdfLink: '/Documents/Lending.pdf',
      // link: '/our-platforms/finance/lending',
      detailedDescription: `Foundry's fully digital, end-to-end platform empowers lending institutions, from personal to SME and commercial. Accelerate loan applications with high-speed lead capture and pre-populated intake. Our AI-driven hybrid underwriting and credit scoring, complete with full auditability, centralize document and e-signature workflows. Enjoy rapid ACH or Mobile Wallet disbursements, seamless repayment collections, configurable workflows, risk-based pricing, and automated borrower communications. Built on a scalable microservices architecture, Foundry drastically cuts turnaround times and reduces operational costs by up to 40%.`,
      sub_components_title: "",
      sub_components: [
        {
          title: "Omnichannel Origination",
          description: "Applying for a loan has never been simpler. Whether you prefer our intuitive self-service portal, or require personalized assistance from a field agent at your location, our platform lets you submit applications with ease via Mobile app, USSD and Web Portal – no physical presence require",
          icon: "tabler:app-window",
          learn_more: []
        },
        {
          title: "Credit scoring",
          description: "Assess borrower creditworthiness in real-time with our AI-powered scoring engine. We combine traditional credit data with rich alternative sources like payment and behavioral history to deliver fast, consistent, and explainable risk ratings, helping you make smarter lending choices.",
          icon: "lucide:bar-chart-2",
          learn_more: []
        },
        {
          title: "Underwriting",
          description: "Streamline your lending decisions with our sophisticated underwriting module. It leverages advanced algorithms and configurable rules to automate risk assessment, ensuring consistent, data-driven decisions while maintaining human oversight where needed.",
          icon: "tabler:scale",
          learn_more: []
        },
        {
          title: "Disbursement Management",
          description: "Our platform offers single or bulk approval for disbursements, handles scheduled payments, and ensures smooth operations through robust bank and payment system integrations. Get your funds where they need to go, efficiently and on time.",
          icon: "tabler:cash",
          learn_more: []
        },
        {
          title: "Repayment Management",
          description: "Simplify collections with comprehensive repayment management. Process single or bulk repayments, enjoy precise repayment tracking, and access detailed reports and reconciliation tools to keep your finances clear and accurate",
          icon: "mdi:cash-return",
          learn_more: []
        },
        {
          title: "Approval Management",
          description: "Take control of your loan decisions with intuitive approval management. Configure multi-level approval workflows that fit your specific policies, allowing for efficient review, secure decision-making, and clear audit trails for every application",
          icon: "tabler:checklist",
          learn_more: []
        }
      ]
    },
    {
      title: 'Sentinel',
      bg: '/images/our-platforms/view/MExpense.png',
      product_image: '/images/our-platforms/view/MExpense.png',
      description: '',
      // link: '/our-platforms/finance/sentinel',
      detailedDescription: `Fortify your institution with Foundry Sentinel, a holistic compliance and risk management platform that continuously analyzes transactions in real time to identify anomalies and protect you from fraud and financial crime. By reducing false positives by up to 95%, our intelligent platform turns noisy alerts into actionable intelligence, empowering your compliance team to focus on genuine threats and streamline their response efforts within a single, unified interface.`,
      sub_components_title: "",
      sub_components: [
        {
          title: "Watch (Real-Time Transaction Monitoring)",
          description: " Proactively detects suspicious activities and fraud with real-time transaction monitoring against defined rules and patterns.",
          icon: "lucide:scan-line",
          learn_more: []
        },
        {
          title: "Verify (KYC/KYB & Identity Verification)",
          description: "Integrates with external APIs for instant KYC/KYB checks, AML, and sanction screening.",
          icon: "lucide:badge-check",
          learn_more: []
        },
        {
          title: "Assure (Reconciliation Intelligence)",
          description: "Provides automated reconciliation workflows to quickly detect mismatches and discrepancies across different financial systems.",
          icon: "tabler:exchange",
          learn_more: []
        },
        {
          title: "Case (Compliance Case Management)",
          description: " Streamlines the investigation and resolution of compliance-related incidents with structured workflows and escalation paths.",
          icon: "lucide:folder-search",
          learn_more: []
        }
      ]
    }
  ]
};

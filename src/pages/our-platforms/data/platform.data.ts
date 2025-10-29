  export const main_platform_data = [
    {
      key: 'business',
      link: '/our-platforms/business',
      title: 'Accelerate Business Growth',
      icon: 'streamline-cyber:business-chart-4',
      description:
        'Take full control of your enterprise with integrated tools for seamless accounting, intelligent inventory management, effortless payroll, and powerful real-time analytics.',
      subitems: [
            {
                title: 'Expense Management',
                bg: '/images/our-platforms/view/MExpense.png',
                description: 'Automate and track business expenses with ease.',
                link: '/our-platforms/business/expense-management',
                detailedDescription: ``,
                product_image: "",
                sub_components_title: "",
                sub_components: []
            },
            {
                title: 'HR',
                bg: '/images/our-platforms/view/MExpense.png',
                product_image: "/images/our-platforms/new/hr.png",


                description:
                'Streamline employee data, benefits, and HR processes.',
                link: '/our-platforms/business/hr',
                detailedDescription: ``,
                sub_components_title: "",
                sub_components: []

            },
            {
                title: 'Procurement',
                bg: '/images/our-platforms/view/MExpense.png',
                description:
                'Manage purchasing workflows and vendor interactions efficiently.',
                link: '/our-platforms/business/procurement',
                detailedDescription: `Foundry procuremnet eliminates waste and provides visibility. From requisitions to approvals, purchase nd distribution of inventory to desired sections of your business`,
                product_image: "/images/our-platforms/new/procure.png",
                sub_components_title: "Core Features",
                sub_components: [
                  {
                    title: "Purchase",
                    description: "Streamline requisition, approval, and ordering processes with a digital-first procurement experience.",
                    icon: "tabler:shopping-cart-check", // Symbolizes purchasing and requisitions
                    learn_more: [
                      {
                        title: "Smart Requisition Forms",
                        description: "Pre-filled, role-aware forms that guide employees through item selection, quantity, justification, and urgency tagging."
                      },
                      {
                        title: "Approval Routing",
                        description: "Multi-level approval routing based on amount, category, or department with real-time status tracking."
                      },
                      {
                        title: "Order & Delivery Tracking",
                        description: "Monitor the lifecycle of each purchase from request to vendor confirmation, fulfillment, and delivery with integrated alerts."
                      }
                    ]
                  },
                  {
                    title: "Spend",
                    description: "Track, control, and optimize company spending across departments and vendors with real-time visibility and approval workflows.",
                    icon: "ph:chart-bar", // Better represents analytics and spend tracking
                    learn_more: [
                      {
                        title: "Spend Analytics",
                        description: "Gain insight into spending patterns across teams, suppliers, and categories to make data-driven decisions and reduce waste."
                      },
                      {
                        title: "Budget Controls",
                        description: "Define spending limits, auto-flag overages, and route requests through customizable approval flows."
                      }
                    ]
                  },
                  {
                    title: "Manage",
                    description: "Maintain centralized control over vendors, contracts, and internal purchasing policies with intelligent automation.",
                    icon: "mdi:account-cog", // Represents vendor/policy management well
                    learn_more: [
                      {
                        title: "Vendor Management",
                        description: "Onboard and rate vendors, track compliance and contract performance, and consolidate all vendor data in one place."
                      },
                      {
                        title: "Policy Enforcement",
                        description: "Enforce procurement rules through automated validations, approval chains, and role-based permissions."
                      }
                    ]
                  }
             
                ]
                


            },
            {
                title: 'Analytics',
                bg: '/images/our-platforms/view/MExpense.png',
                description:
                'Turn your data into actionable insights with powerful dashboards.',
                link: '/our-platforms/business/analytics',
                detailedDescription: ``,
                sub_components_title: "",
                sub_components: []

            },
            {
                title: 'Business APIs',
                bg: '/images/our-platforms/view/MExpense.png',
                description:
                'Easily integrate third-party tools and automate workflows.',
                link: '/our-platforms/business/business-apis',
                detailedDescription: ``,
                sub_components_title: "",
                sub_components: []

            },
            {
                title: 'Point of Sale',
                bg: '/images/our-platforms/view/PointOfSale.png',
                description:
                'Sell smarter with real-time inventory and sales tracking.',
                link: '/our-platforms/business/point-of-sale',
                detailedDescription: ``,
                sub_components_title: "",
                sub_components: []

            },
            {
                title: 'Foundry Terminal',
                bg: '/images/our-platforms/view/FTerminal.png',
                description:
                'One terminal for managing all business operations centrally.',
                link: '/our-platforms/business/foundry-terminal',
                detailedDescription: ``,
                sub_components_title: "",
                sub_components: []

            },
            {
                title: 'Invoice Management',
                bg: '/images/our-platforms/view/MExpense.png',
                description: 'Send, track, and reconcile invoices effortlessly.',
                link: '/our-platforms/business/invoice-management',
                detailedDescription: ``,
                sub_components_title: "",
                sub_components: []

            },
            {
                title: 'Reconcile Transactions',
                bg: '/images/our-platforms/view/MExpense.png',
                description:
                'Match transactions automatically and reduce reconciliation time.',
                link: '/our-platforms/business/reconcile-transactions',
                detailedDescription: ``,
                sub_components_title: "",
                sub_components: []

            },
            // {
            //     title: 'ERP',
            //     bg: '/images/our-platforms/view/MExpense.png',
            //     description:
            //     'An integrated suite for finance, operations, and compliance.',
            //     link: '/our-platforms/business/erp',
            //     detailedDescription: ``,
            //     sub_components_title: "",
            //     sub_components: []
            // },
    ],
    },
    {
      key: 'finance',
      link: '/our-platforms/finance',
      title: 'Empower Financial Flow',
      icon: 'material-symbols-light:money-bag-outline',
      description:
        'Secure essential working capital, automate and manage all your payments, and integrate advanced financial functionalities directly within your existing ecosystem.',
      subitems: [
            {
              title: 'Onboarding',
              bg: '/images/our-platforms/view/MExpense.png',
              product_image: '/images/our-platforms/view/MExpense.png',
              description:
                'Automate customer identity verification and compliance checks.',
              link: '/our-platforms/finance/onboarding',
              detailedDescription: `When onboarding stalls, whether you're dealing with individuals, joint accounts, small businesses, or commercial clients, costs rise and customers leave. Disconnected systems and manual steps make it hard to deliver a fast, seamless experience for prospects. Foundry Onboarding changes the game by unifying all essential touchpoints into a streamlined end-to-end flow`,
              sub_components_title: "Harness the power of unified platform",
              sub_components: [
                {
                    title: "Digital Account Opening Form",
                    description:" Digital Account Opening Form. A clean, intuitive interface that enables new customers to begin the application seamlessly.",
                    icon: "heroicons-outline:document-text",
                    learn_more: [
                      {
                        title: "",
                        description: "Subscribe now to experience our Self Service and Assisted Service (Agent Portal)"
                      }
                    ]

                },
                {
                    title: "KYC/KYB & Risk Rating",
                    description:"Embedded Know Your Customer (and Business) checks plus automated risk scoring to ensure regulatory compliance and informed decisions.",
                    icon: "lucide:user-check",
                    learn_more: [
                      {
                        title: `Identity Verification & Validation`,
                        description: `Automated identity checks powered by OCR-based document extraction and AI-driven facial recognition with passive and active liveness detection, ensuring rapid and secure verification of government-issued ID documents and biometric identity in real time`
                      },
                      {
                        title: `KYB Business Checks`,
                        description: `Comprehensive checks on businesses including registration verification, ownership structure, ultimate beneficial owner (UBO) screening, and global watchlist screening (e.g. sanctions, PEPs`
                      }
                    ]

                },
                {
                    title: "Document Collection",
                    description:"Effortlessly submit and defer essential documents (IDs, utility bills, financials) and securely store and track them within the system",
                    icon: "heroicons-outline:folder-open",
                    learn_more: [
                      {
                        title: 'Document Upload',
                        description: 'Easily submit required documents (e.g., IDs, utility bills, financial statements) via web or mobile. Each file is securely routed and stored in the appropriate customer folder.',
                      },
                      {
                        title: "Document Tracker",
                        description:" Real-time tracking of document status, automated reminders for pending submissions, and comprehensive version and audit history ensuring nothing gets missed and everything stays compliant and organized"
                      },
                      {
                        title: "Document Request",
                        description: "Seamlessly invite customers to submit necessary files, track their fulfilment status in real time, send automated reminders for overdue items, and manage periodic document reviews"
                      }
                    ]

                },
                {
                    title: "E-Signature",
                    description:"Secure, digital signing of loan agreements, no paperwork or in-person visits needed.",
                    icon: 'mdi:signature',
                    learn_more: []

                },
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
                    // 'Collect Co-applicant’s details',
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
                    // 'Collect other Directors/signatories details',
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
              description:
                'Robust backend system to manage accounts, transactions, and ledgers.',
              link: '/our-platforms/finance/core-banking',
              detailedDescription: `Take full control of your institution’s core functions through a unified platform that brings together everything; from account opening, deposits, withdrawals, loans, and other customer transactions to key internal functions like accounting, HR, CRM, procurement, and workflows into one centralized platform. With real-time dashboards, operational analytics, and audit-ready logs, you gain full operational transparency, enhanced compliance, and the agility to run with efficiency and scale.`,
              sub_components_title: "",
              sub_components: [
                {
                  title: "Core Banking",
                  description:"Gives you the foundational power of modern finance. Manage all your core banking activities- from account management and customer master data to ledgering, transaction processing, and fixed deposit management—with a single, robust platform that ensures security, accuracy, and compliance at every step.",
                  icon: "tabler:building-bank", // Represents formal core banking infrastructure
                  learn_more: []
                },
                {
                  title: "Business and Finance Automation (Internal Engine)",
                  description:"Streamline your internal operations with Foundry's comprehensive automation suite. Our platform integrates Accounting, HRMS, Payroll, Inventory & Procurement, and CMS/CRM into one powerful system. This eliminates fragmented data and manual work, providing a single source of truth that drives efficiency and reduces administrative costs",
                  icon: "lucide:settings", // Represents automation/configuration engine
                  learn_more: []
                },
                {
                  title: "Workflow Management",
                  description:"Bring order to your operations with our dynamic Workflow Management. Design, automate, and track every request and task with customizable workflows. From service requests to complaints, you can ensure that nothing falls through the cracks, leading to faster resolutions, greater accountability, and superior service delivehere needed.",
                  icon: "lucide:workflow", // Represents processes and customizable workflows
                  learn_more: []
                },
                {
                  title: "Management Portal",
                  description:"Gain complete oversight with our intuitive Management Portal. This central hub provides an executive view of your entire institution, displaying key performance dashboards, real-time reports, and critical data insights. It’s the ultimate tool for strategic decision-making, giving you a clear, comprehensive picture of your business at all times",
                  icon: "lucide:layout-dashboard", // Dashboards and executive view
                  learn_more: []
                },
                {
                  title: "Reminders and Notifications",
                  description:"Ensure your team and customers are always in the loop with our automated Reminders & Notification system. Set up and send timely alerts for important tasks, deadlines, and customer communications. This keeps everyone informed and engaged, helping you stay ahead of your schedule and maintain a high level of service.",
                  icon: "lucide:bell", // Alerts and notifications
                  learn_more: []
                },
                {
                  title: "Reports and Data Analytics",
                  description:"Turn your raw data into a strategic asset with our advanced Reports & Data Analytics engine. Generate detailed financial, operational, and customer reports, and gain valuable insights into your institution's performance. With the ability to visualize and analyze data, you can make smarter, more informed decisions that drive sustainable growth",
                  icon: "tabler:chart-dots-3", // Analytics and performance insight
                  learn_more: []
                },
              ]
            },
            {
              title: 'Digital Banking',
              bg: '/images/our-platforms/view/MExpense.png',
              product_image: '/images/our-platforms/view/MExpense.png',
              description:
                'Deliver seamless mobile and online banking experiences.',
              link: '/our-platforms/finance/digital-banking',
              detailedDescription: `The Foundry Digital Platform makes banking a few taps away, putting your institution in the palm of your customers' hands. This all-in-one solution provides a seamless suite of services from fast digital loans and secure savings to investments and insurance, all accessible through a single, intuitive interface on their mobile phone, whether it's a smartphone or a basic feature phone. It's the strategic platform you need to drive growth, enhance customer loyalty, and lead the way in digital finance.`,
              sub_components_title: "",
              sub_components: [
                {
                  title: "Digital Savings",
                  description:"Empower your customers to take control of their financial future. Our digital savings module lets them open accounts, set goals, and make secure deposits with a few taps via USSD or a powerful mobile app. It's a seamless way to build wealth and track progress, all without stepping into a branch.",
                  icon: "lucide:piggy-bank", // Represents savings, goal setting, deposits
                  learn_more: []
                },
                {
                  title: "Digital Lending",
                  description:"Remove the friction from borrowing. Our digital lending platform provides a fast, paperless loan experience from start to finish. Customers can apply, get assessed, and receive funds via a simple USSD menu or a feature-rich mobile app, giving them instant access to the credit they need, when they need it",
                  icon: "tabler:hand-coin", // Lending/borrowing metaphor
                  learn_more: []
                },
                {
                  title: "Insurance",
                  description:"Make insurance simple and accessible. Our digital insurance module integrates the entire policy lifecycle into your platform. Customers can browse, purchase, and manage policies or file claims digitally via a secure mobile app and basic USSD prompts, giving them peace of mind and protection with unprecedented convenience.",
                  icon: "lucide:shield-check", // Protection and policy assurance
                  learn_more: []
                },
                {
                  title: "Investment",
                  description:"Democratize investments for everyone. We lower the barrier to entry by putting investment products directly on your customers' devices. Whether they're using a feature phone or a smartphone, they can explore options, manage portfolios, and track returns through a user-friendly mobile app and simplified USSD prompts",
                  icon: "tabler:trending-up", // Represents investment growth
                  learn_more: []
                },
              ]

            },
            {
              title: 'Banking as a Service',
              bg: '/images/our-platforms/view/MExpense.png',
              product_image: '/images/our-platforms/view/MExpense.png',
              description:
                'Launch and scale banking products with ready-to-integrate APIs.',
              link: '/our-platforms/finance/banking-as-a-service',
              detailedDescription: `Tap into new revenue and innovation by offering your financial services—from payments and lending to digital wallets as a service to fintechs and businesses. Our API-first infrastructure allows partners to seamlessly embed your licensed banking capabilities into their own products, without them needing a banking charter. Foundry BaaS isn't just a service; it's your strategic launchpad into embedded finance, enabling you to monetize your banking stack and lead in the digital economy.`,
              sub_components_title: "",
              sub_components: []
            },
            {
              title: 'Lending',
              bg: '/images/our-platforms/view/MExpense.png',
              product_image: '/images/our-platforms/view/MExpense.png',
              description:
                'Simplify loan origination, approvals, and repayments.',
              link: '/our-platforms/finance/lending',
              detailedDescription: `Foundry's fully digital, end-to-end platform empowers lending institutions, from personal to SME and commercial. Accelerate loan applications with high-speed lead capture and pre-populated intake. Our AI-driven hybrid underwriting and credit scoring, complete with full auditability, centralize document and e-signature workflows. Enjoy rapid ACH or Mobile Wallet disbursements, seamless repayment collections, configurable workflows, risk-based pricing, and automated borrower communications. Built on a scalable microservices architecture, Foundry drastically cuts turnaround times and reduces operational costs by up to 40%.`,
              sub_components_title: "",
              sub_components: [
                {
                    title: "Omnichannel Origination",
                    description:"Applying for a loan has never been simpler. Whether you prefer our intuitive self-service portal, or require personalized assistance from a field agent at your location, our platform lets you submit applications with ease via Mobile app, USSD and Web Portal – no physical presence require",
                    icon: "tabler:app-window", // or "heroicons-outline:paper-airplane"
                    learn_more: []


                },
                {
                    title: "Credit scoring",
                    description:"Assess borrower creditworthiness in real-time with our AI-powered scoring engine. We combine traditional credit data with rich alternative sources like payment and behavioral history to deliver fast, consistent, and explainable risk ratings, helping you make smarter lending choices.",
                    icon: "lucide:bar-chart-2", // or "heroicons-outline:chart-bar"
                    learn_more: []


                },
                {
                    title: "Underwriting",
                    description:"Streamline your lending decisions with our sophisticated underwriting module. It leverages advanced algorithms and configurable rules to automate risk assessment, ensuring consistent, data-driven decisions while maintaining human oversight where needed.",
                    icon: "tabler:scale", // or "lucide:settings"
                    learn_more: []


                },
                {
                    title: "Disbursement Management",
                    description:"Our platform offers single or bulk approval for disbursements, handles scheduled payments, and ensures smooth operations through robust bank and payment system integrations. Get your funds where they need to go, efficiently and on time.",
                    icon: "tabler:cash", // or "lucide:wallet"
                    learn_more: []

                },
                {
                    title: "Repayment Management",
                    description:"Simplify collections with comprehensive repayment management. Process single or bulk repayments, enjoy precise repayment tracking, and access detailed reports and reconciliation tools to keep your finances clear and accurate",
                    icon: "mdi:cash-return", // or "lucide:repeat"
                    learn_more: []

                },
                {
                    title: "Approval Management",
                    description:"Take control of your loan decisions with intuitive approval management. Configure multi-level approval workflows that fit your specific policies, allowing for efficient review, secure decision-making, and clear audit trails for every application",
                    icon: "tabler:checklist", // or "heroicons-outline:check-circle"
                    learn_more: []

                },
              
              ],
             

            },
            {
              title: 'Sentinel',
              bg: '/images/our-platforms/view/MExpense.png',
              product_image: '/images/our-platforms/view/MExpense.png',
              description:
                '',
              link: '/our-platforms/finance/sentinel',
              detailedDescription: `Fortify your institution with Foundry Sentinel, a holistic compliance and risk management platform that continuously analyzes transactions in real time to identify anomalies and protect you from fraud and financial crime. By reducing false positives by up to 95%, our intelligent platform turns noisy alerts into actionable intelligence, empowering your compliance team to focus on genuine threats and streamline their response efforts within a single, unified interface.`,
              sub_components_title: "",
              sub_components: [
                {
                  title: "Watch (Real-Time Transaction Monitoring)",
                  description: " Proactively detects suspicious activities and fraud with real-time transaction monitoring against defined rules and patterns.",
                  icon: "lucide:scan-line", // Surveillance + analysis
                  learn_more: []
                
                }, 
                {
                  title: "Verify (KYC/KYB & Identity Verification)",
                  description: "Integrates with external APIs for instant KYC/KYB checks, AML, and sanction screening.",
                  icon: "lucide:badge-check", // Identity verification / trusted badge
                  learn_more: []
                
                },
                {
                  title: "Assure (Reconciliation Intelligence)",
                  description: "Provides automated reconciliation workflows to quickly detect mismatches and discrepancies across different financial systems.",
                  icon: "tabler:exchange", // Two-way reconciliation & comparison
                  learn_more: []
                
                },
                {
                  title: "Case (Compliance Case Management)",
                  description: " Streamlines the investigation and resolution of compliance-related incidents with structured workflows and escalation paths.",
                  icon: "lucide:folder-search", // Investigating files/cases
                  learn_more: []
                
                },
              ]
             

            },
      ]
    },
    {
      key: 'trade',
      link: '/our-platforms/trade',
      title: 'Connected Commerce Network',
      icon: 'mdi-light:truck',
      description:
        'Digitize and accelerate your procurement cycles, gain real-time visibility into logistics, and execute B2B transactions with unprecedented speed and confidence.',
      subitems: [
            {
              title: 'Logistics',
              bg: '/images/our-platforms/view/MExpense.png',
              product_image: '/images/our-platforms/view/MExpense.png',
              description:
                'Optimize delivery routes, fleet management, and shipment tracking.',
              link: '/our-platforms/trade/logistics',
              detailedDescription: ``,
              sub_components_title: "",
              sub_components: []

            },
            {
              title: 'FX access and conversion',
              bg: '/images/our-platforms/view/MExpense.png',
              product_image: '/images/our-platforms/view/MExpense.png',
              description:
                'Manage inventory levels, storage, and dispatch operations efficiently.',
              link: '/our-platforms/trade/warehousing',
              detailedDescription: ``,
              sub_components_title: "",
              sub_components: []


            },
            // {
            //   title: 'Make Payments',
            //   bg: '/images/our-platforms/view/MExpense.png',
            //   product_image: '/images/our-platforms/view/MExpense.png',
            //   description:
            //     'Enable secure, real-time business payments and disbursements.',
            //   link: '/our-platforms/trade/make-payments',
            //   detailedDescription: ``,
            //   sub_components_title: "",
            //   sub_components: []


            // },
            {
              title: 'Track Orders',
              bg: '/images/our-platforms/view/MExpense.png',
              product_image: '/images/our-platforms/view/MExpense.png',
              description:
                'Monitor order status and delivery in real-time across channels.',
              link: '/our-platforms/trade/track-orders',
              detailedDescription: ``,
              sub_components_title: "",
              sub_components: []


            },
            {
              title: 'Compliance',
              bg: '/images/our-platforms/view/MExpense.png',
              product_image: '/images/our-platforms/view/MExpense.png',
              description:
                'Centralized control tower for business workflows and integrations.',
              link: '/our-platforms/trade/foundry-hub',
              detailedDescription: ``,
              sub_components_title: "",
              sub_components: []


            },
            {
              title: 'Cornershop',
              bg: '/images/our-platforms/view/MExpense.png',
              product_image: '/images/our-platforms/view/MExpense.png',
              description:
                'Launch and manage microstores for hyperlocal commerce.',
              link: '/our-platforms/trade/cornershop',
              detailedDescription: ``,
              sub_components_title: "",
              sub_components: []


            

            },
            // {
            //   title: 'FX',
            //   bg: '/images/our-platforms/view/MExpense.png',
            //   description:
            //     'Access competitive foreign exchange rates and real-time currency conversions.',
            //     link: '/our-platforms/trade/fx',
            // },
            // {
            //   title: 'Treasury',
            //   bg: '/images/our-platforms/view/MExpense.png',
            //   description:
            //     'Oversee liquidity, investments, and enterprise cash flow management.',
            //   link: '/our-platforms/trade/treasury',
            // },
     ],
    },
  ];
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
                detailedDescription: ``

            },
            {
                title: 'HR',
                bg: '/images/our-platforms/view/MExpense.png',
                description:
                'Streamline employee data, benefits, and HR processes.',
                link: '/our-platforms/business/hr',
                detailedDescription: ``

            },
            {
                title: 'Procurement',
                bg: '/images/our-platforms/view/MExpense.png',
                description:
                'Manage purchasing workflows and vendor interactions efficiently.',
                link: '/our-platforms/business/procurement',
                detailedDescription: ``

            },
            {
                title: 'Analytics',
                bg: '/images/our-platforms/view/MExpense.png',
                description:
                'Turn your data into actionable insights with powerful dashboards.',
                link: '/our-platforms/business/analytics',
                detailedDescription: ``

            },
            {
                title: 'Business APIs',
                bg: '/images/our-platforms/view/MExpense.png',
                description:
                'Easily integrate third-party tools and automate workflows.',
                link: '/our-platforms/business/business-apis',
                detailedDescription: ``

            },
            {
                title: 'Point of Sale',
                bg: '/images/our-platforms/view/MExpense.png',
                description:
                'Sell smarter with real-time inventory and sales tracking.',
                link: '/our-platforms/business/point-of-sale',
                detailedDescription: ``

            },
            {
                title: 'Foundry Terminal',
                bg: '/images/our-platforms/view/FTerminal.png',
                description:
                'One terminal for managing all business operations centrally.',
                link: '/our-platforms/business/foundry-terminal',
                detailedDescription: ``

            },
            {
                title: 'Invoice Management',
                bg: '/images/our-platforms/view/MExpense.png',
                description: 'Send, track, and reconcile invoices effortlessly.',
                link: '/our-platforms/business/invoice-management',
                detailedDescription: ``

            },
            {
                title: 'Reconcile Transactions',
                bg: '/images/our-platforms/view/MExpense.png',
                description:
                'Match transactions automatically and reduce reconciliation time.',
                link: '/our-platforms/business/reconcile-transactions',
                detailedDescription: ``

            },
            {
                title: 'ERP',
                bg: '/images/our-platforms/view/MExpense.png',
                description:
                'An integrated suite for finance, operations, and compliance.',
                link: '/our-platforms/business/erp',
                detailedDescription: ``

            },
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
              description:
                'Robust backend system to manage accounts, transactions, and ledgers.',
              link: '/our-platforms/finance/core-banking',
              detailedDescription: ``
            },
            {
              title: 'Digital Banking',
              bg: '/images/our-platforms/view/MExpense.png',
              description:
                'Deliver seamless mobile and online banking experiences.',
              link: '/our-platforms/finance/digital-banking',
              detailedDescription: ``

            },
            {
              title: 'Banking as a Service',
              bg: '/images/our-platforms/view/MExpense.png',
              description:
                'Launch and scale banking products with ready-to-integrate APIs.',
              link: '/our-platforms/finance/banking-as-a-service',
              detailedDescription: ``
            },
            {
              title: 'Lending',
              bg: '/images/our-platforms/view/MExpense.png',
              description:
                'Simplify loan origination, approvals, and repayments.',
              link: '/our-platforms/finance/lending',
              detailedDescription: ``

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
              description:
                'Optimize delivery routes, fleet management, and shipment tracking.',
              link: '/our-platforms/trade/logistics',
              detailedDescription: ``

            },
            {
              title: 'Warehousing',
              bg: '/images/our-platforms/view/MExpense.png',
              description:
                'Manage inventory levels, storage, and dispatch operations efficiently.',
              link: '/our-platforms/trade/warehousing',
              detailedDescription: ``

            },
            {
              title: 'Make Payments',
              bg: '/images/our-platforms/view/MExpense.png',
              description:
                'Enable secure, real-time business payments and disbursements.',
              link: '/our-platforms/trade/make-payments',
              detailedDescription: ``

            },
            {
              title: 'Track Orders',
              bg: '/images/our-platforms/view/MExpense.png',
              description:
                'Monitor order status and delivery in real-time across channels.',
              link: '/our-platforms/trade/track-orders',
              detailedDescription: ``

            },
            {
              title: 'Foundry Hub',
              bg: '/images/our-platforms/view/MExpense.png',
              description:
                'Centralized control tower for business workflows and integrations.',
              link: '/our-platforms/trade/foundry-hub',
              detailedDescription: ``

            },
            {
              title: 'Cornershop',
              bg: '/images/our-platforms/view/MExpense.png',
              description:
                'Launch and manage microstores for hyperlocal commerce.',
              link: '/our-platforms/trade/cornershop',
              detailedDescription: ``

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
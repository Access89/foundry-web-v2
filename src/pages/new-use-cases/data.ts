/* eslint-disable @typescript-eslint/no-explicit-any */

// import { image } from "@nextui-org/react";

export const UsecaseData: Record<string, any> = {
    retail: {
          title: 'Retail',
          description: 'Transform the retail experience with digital storefronts, personalized customer engagement, and intelligent supply chains.',
          images: 'image/retail.jpg',
  
          'video-link': 'https://youtube.com',
          'features-description': 'From inventory optimization to omnichannel commerce, drive efficiency and engagement.',
          'core-features': [
            { icon: 'mdi:warehouse', title: 'Inventory Management', description: 'Automate stock tracking and reorder workflows.' },
            { icon: 'mdi:credit-card-outline', title: 'Integrated POS', description: 'Process orders and payments from any device.' },
            { icon: 'mdi:chart-line', title: 'Sales Analytics', description: 'Understand performance metrics and customer behaviors in real-time.' },
            { icon: 'eos-icons:ai', title: 'AI Powered Business Insights', description: 'Understand performance metrics and customer behaviors in real-time.' },
          ],
          goals: [
            { icon: 'mdi:account-group', title: 'Customer Engagement', description: 'Offer loyalty programs and personalized promotions.' },
            { icon: 'mdi:storefront', title: 'Smarter Operations', description: 'Connect POS, backend, and fulfillment systems seamlessly.' },
            { icon: 'mdi:security', title: 'Secure Payments', description: 'Protect transactions with PCI-DSS-compliant infrastructure.' },
          ],
        },
      
        'financial-services': {
          title: 'Financial Services',
          description: 'Digital customer experiences and modernize core banking processes.',
          images: '/images/FinancialUseCase.png',
          'video-link': 'https://youtube.com',
          'features-description': 'Automate compliance, improve agility, and enhance security in finance.',
          'core-features': [
            { icon: 'mdi:bank', title: 'Core Banking Automation', description: 'Streamline account management and loan processing.' },
            { icon: 'mdi:file-certificate', title: 'Regulatory Compliance', description: 'Ensure alignment with financial regulations through automation.' },
            { icon: 'mdi:shield-lock', title: 'Fraud Detection', description: 'Use AI to monitor and flag suspicious activity in real-time.' },
          ],
          goals: [
            { icon: 'mdi:account-plus', title: 'Frictionless Onboarding', description: 'Enable fast KYC and account setup.' },
            { icon: 'mdi:cash-multiple', title: 'Financial Product Innovation', description: 'Quickly launch credit, savings, and investment products.' },
            { icon: 'mdi:cloud-lock', title: 'Secure Infrastructure', description: 'Maintain data privacy and resilience in the cloud.' },
          ],
        },
      
        manufacturing: {
          title: 'Manufacturing',
          description: 'Optimize production, supply chain, and operations with data-driven solutions.',
          'video-link': 'https://youtube.com',
          'features-description': 'Leverage IoT and automation to enable smart manufacturing.',
          'core-features': [
            { icon: 'mdi:robot-industrial', title: 'Smart Factory Automation', description: 'Integrate robotics and machine telemetry.' },
            { icon: 'mdi:chart-areaspline', title: 'Production Analytics', description: 'Monitor KPIs and predict downtime.' },
            { icon: 'mdi:truck-fast', title: 'Supply Chain Visibility', description: 'Track parts and products from order to delivery.' },
          ],
          goals: [
            { icon: 'mdi:cog-outline', title: 'Lean Operations', description: 'Reduce waste and increase output with agile practices.' },
            { icon: 'mdi:clipboard-check-outline', title: 'Quality Assurance', description: 'Ensure compliance and minimize defects.' },
            { icon: 'mdi:chart-box-outline', title: 'Real-time Reporting', description: 'Empower teams with dashboards and alerts.' },
          ],
        },
      
        fintech: {
          title: 'Fintech',
          description: 'Build agile financial products with secure, scalable APIs and digital experiences.',
          'video-link': 'https://youtube.com',
          'features-description': 'From wallets to credit engines, create modern fintech apps.',
          'core-features': [
            { icon: 'mdi:wallet', title: 'Digital Wallets', description: 'Enable peer-to-peer transfers and in-app payments.' },
            { icon: 'mdi:credit-card-plus', title: 'Loan Origination', description: 'Automate scoring, approval, and disbursal.' },
            { icon: 'mdi:api', title: 'Open Banking APIs', description: 'Integrate with partners and banks using secure standards.' },
          ],
          goals: [
            { icon: 'mdi:cash-clock', title: 'Faster Go-To-Market', description: 'Ship new financial products faster.' },
            { icon: 'mdi:cellphone-lock', title: 'User Security', description: 'Protect identities with biometrics and 2FA.' },
            { icon: 'mdi:finance', title: 'Monetization Flexibility', description: 'Support freemium, SaaS, and transaction-based models.' },
          ],
        },
      
        'ev-charging': {
          title: 'KYC and Compliance',        
          description: 'Embedded Know Your Customer and Business checks plus automated risk scoring to ensure regulatory compliance and informed decisions.',
          'video-link': 'https://youtube.com',
          'features-description': 'Verification, risk management, and compliance with ease.',
          'core-features': [
            { icon: 'mdi:ev-station', title: 'Verify (KYC/KYB & Identity Verification)', description: 'Integrates with external APIs for instant KYC/KYB checks, AML, and sanction screening.' },
            { icon: 'mdi:map-marker-radius', title: 'Watch (Real-Time Transaction Monitoring)', description: 'Proactively detects suspicious activities and fraud with real-time transaction monitoring against defined rules and patterns.' },
            { icon: 'mdi:currency-usd', title: 'Assure (Reconciliation Intelligence)', description: 'Provides automated reconciliation workflows to quickly detect mismatches and discrepancies across different financial systems.' },
          ],
          goals: [
            { icon: 'mdi:battery-charging', title: 'Scale Charging Infrastructure', description: 'Add and onboard stations quickly.' },
            { icon: 'mdi:cloud-check-outline', title: 'Uptime & Monitoring', description: 'Ensure availability and real-time maintenance alerts.' },
            { icon: 'mdi:leaf', title: 'Sustainability Insights', description: 'Report on carbon offsets and usage.' },
          ],
        },
      
        restaurant: {
          title: 'Restaurant',
          description: 'Digitize your restaurant operations and elevate customer experiences.',
          'video-link': 'https://youtube.com',
          'features-description': 'Handle orders, reservations, and payments with integrated tools.',
          'core-features': [
            { icon: 'mdi:food', title: 'Menu Management', description: 'Update items and pricing in real-time.' },
            { icon: 'mdi:table-chair', title: 'Reservation System', description: 'Allow customers to book and manage tables.' },
            { icon: 'mdi:monitor-dashboard', title: 'Kitchen Display System', description: 'Streamline kitchen operations by displaying orders digitally in real-time.' },
            { icon: 'mdi:credit-card-outline', title: 'Integrated POS', description: 'Process orders and payments from any device.' },
          ],
          goals: [
            { icon: 'mdi:customer-service', title: 'Improved Guest Experience', description: 'Enable faster service and personalized offers.' },
            { icon: 'mdi:chart-bar-stacked', title: 'Operational Insights', description: 'Track orders, staff performance, and food cost.' },
            { icon: 'mdi:truck-delivery-outline', title: 'Delivery Enablement', description: 'Integrate with delivery apps and services.' },
          ],
        },
      
        logistics: {
          title: 'Logistics and Supply Chain',
          description: 'Streamline fulfillment, fleet, and inventory with unified logistics solutions.',
          images:'/images/LogisticsPage.png',
          'video-link': 'https://youtube.com',
          'features-description': 'Get end-to-end visibility and automation across your supply chain.',
          'core-features': [
            { icon: 'mdi:truck', title: 'Fleet Management', description: 'Track deliveries and driver routes in real-time.' },
            { icon: 'mdi:package-variant-closed', title: 'Inventory Sync', description: 'Keep warehouse data in sync across systems.' },
            { icon: 'mdi:map-clock', title: 'Route Optimization', description: 'Plan the fastest, most cost-efficient delivery routes.' },
          ],
          goals: [
            { icon: 'mdi:chart-bar', title: 'Operational Efficiency', description: 'Automate manual tasks and reduce delays.' },
            { icon: 'mdi:map-marker-path', title: 'Supply Chain Visibility', description: 'Know where everything is—at all times.' },
            { icon: 'mdi:truck-cargo-container', title: 'Integrated Logistics', description: 'Connect third-party logistics seamlessly.' },
          ],
        },
      
        'fund-management': {
          title: 'Fund Management',
          description: 'Digitize portfolio, investor, and fund operations on one platform.',
          images: '/images/FundManagementImage.png',
          // imageSize:'50%',
          'video-link': 'https://youtube.com',
          'features-description': 'Increase efficiency, transparency, and compliance in fund operations.',
          'core-features': [
            { icon: 'mdi:chart-pie', title: 'Portfolio Dashboards', description: 'Track fund and asset performance in real-time.' },
            { icon: 'mdi:file-document-outline', title: 'Investor Reporting', description: 'Automate quarterly reports and statementsm' },
            { icon: 'mdi:shield-account', title: 'Compliance Workflows', description: 'Ensure regulatory alignment across jurisdictions.' },
          ],
          goals: [
            { icon: 'mdi:account-multiple-plus', title: 'Investor Experience', description: 'Provide clear reporting and access to investment data.' },
            { icon: 'mdi:cash-refund', title: 'Capital Efficiency', description: 'Optimize drawdowns and cash deployment.' },
            { icon: 'mdi:chart-donut-variant', title: 'Fund Oversight', description: 'Centralize fund, fees, and performance monitoring.' },
          ],
        },
      };
      




// const data: Record<string, any> = {
//   retail: {
//     title: 'Retail',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     'video-link': 'https://youtube.com',
//     'features-description':
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     'core-features': [
//       {
//         icon: 'lucide:user-round',
//         title: 'Lorem Ipsum Feature 1',
//         description:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       },
//       {
//         icon: 'mage:id-card',
//         title: 'Lorem Ipsum Feature 2',
//         description:
//           'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       },
//       {
//         icon: 'bx:user-check',
//         title: 'Lorem Ipsum Feature 3',
//         description:
//           'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       },
//       {
//         icon: 'ant-design:rise-outlined',
//         title: 'Lorem Ipsum Feature 4',
//         description:
//           'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//       },
//       {
//         icon: 'la:pen-nib',
//         title: 'Lorem Ipsum Feature 5',
//         description:
//           'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       },
//       {
//         icon: 'mynaui:upload',
//         title: 'Lorem Ipsum Feature 6',
//         description:
//           'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
//       },
//     ],
//     goals: [
//       {
//         icon: 'uil:user',
//         title: 'Seamless Onboarding and Loan Origination',
//         description:
//           'Enable fast account openings and smooth loan applications with document upload functionality for a quick, paperless experience.',
//       },
//       {
//         icon: 'lucide:gauge',
//         title: 'Efficient, Scalable Operations',
//         description:
//           'Achieve real-time transaction processing, automated compliance checks, and a scalable infrastructure designed for flexible growth.',
//       },
//       {
//         icon: 'mdi:protected-outline',
//         title: 'Enhanced Security and Global Accessibility',
//         description:
//           'Leverage advanced fraud detection, multi-currency support, and secure global transactions to support international operations.',
//       },
//     ],
//   },
//   'operating-model-design': {
//     title: 'Operating Model Design',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     'video-link': 'https://youtube.com',
//     'features-description':
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     'core-features': [
//       {
//         icon: 'solar:document-outline',
//         title: 'Lorem Ipsum Feature 1',
//         description:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       },
//       {
//         icon: 'mage:id-card',
//         title: 'Lorem Ipsum Feature 2',
//         description:
//           'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       },
//       {
//         icon: 'tabler:building',
//         title: 'Lorem Ipsum Feature 3',
//         description:
//           'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       },
//       {
//         icon: 'mingcute:safe-shield-2-line',
//         title: 'Lorem Ipsum Feature 4',
//         description:
//           'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//       },
//       {
//         icon: 'mdi-light:settings',
//         title: 'Lorem Ipsum Feature 5',
//         description:
//           'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       },
//       {
//         icon: 'la:pen-nib',
//         title: 'Lorem Ipsum Feature 6',
//         description:
//           'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
//       },
//       {
//         icon: 'mynaui:users',
//         title: 'Lorem Ipsum Feature 7',
//         description: 'Suspendisse potenti. In facilisis feugiat consequat.',
//       },
//       {
//         icon: 'solar:wallet-linear',
//         title: 'Lorem Ipsum Feature 8',
//         description: 'Vestibulum id ligula porta felis euismod semper.',
//       },
//       {
//         icon: 'solar:document-linear',
//         title: 'Lorem Ipsum Feature 9',
//         description:
//           'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
//       },
//       {
//         icon: 'ant-design:rise-outlined',
//         title: 'Lorem Ipsum Feature 10',
//         description: 'Curabitur blandit tempus porttitor.',
//       },
//       {
//         icon: 'solar:calculator-broken',
//         title: 'Lorem Ipsum Feature 11',
//         description:
//           'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
//       },
//       {
//         icon: 'iconoir:attachment',
//         title: 'Lorem Ipsum Feature 12',
//         description: 'Nulla vitae elit libero, a pharetra augue.',
//       },
//     ],
//     goals: [
//       {
//         icon: 'uil:user',
//         title: 'Seamless Onboarding and Loan Origination',
//         description:
//           'Enable fast account openings and smooth loan applications with document upload functionality for a quick, paperless experience.',
//       },
//       {
//         icon: 'lucide:gauge',
//         title: 'Efficient, Scalable Operations',
//         description:
//           'Achieve real-time transaction processing, automated compliance checks, and a scalable infrastructure designed for flexible growth.',
//       },
//       {
//         icon: 'mdi:protected-outline',
//         title: 'Enhanced Security and Global Accessibility',
//         description:
//           'Leverage advanced fraud detection, multi-currency support, and secure global transactions to support international operations.',
//       },
//     ],
//   },
//   'digital-transformation': {
//     title: 'Digital Transformation',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     'video-link': 'https://youtube.com',
//     'features-description':
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     'core-features': [
//       {
//         icon: 'lucide:user-round',
//         title: 'Lorem Ipsum Feature 1',
//         description:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       },
//       {
//         icon: 'mage:id-card',
//         title: 'Lorem Ipsum Feature 2',
//         description:
//           'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       },
//       {
//         icon: 'bx:user-check',
//         title: 'Lorem Ipsum Feature 3',
//         description:
//           'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       },
//       {
//         icon: 'ant-design:rise-outlined',
//         title: 'Lorem Ipsum Feature 4',
//         description:
//           'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//       },
//       {
//         icon: 'la:pen-nib',
//         title: 'Lorem Ipsum Feature 5',
//         description:
//           'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       },
//       {
//         icon: 'mynaui:upload',
//         title: 'Lorem Ipsum Feature 6',
//         description:
//           'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
//       },
//       {
//         icon: 'bx:user-check',
//         title: 'Lorem Ipsum Feature 7',
//         description: 'Suspendisse potenti. In facilisis feugiat consequat.',
//       },
//       {
//         icon: 'ant-design:rise-outlined',
//         title: 'Lorem Ipsum Feature 8',
//         description: 'Vestibulum id ligula porta felis euismod semper.',
//       },
//       {
//         icon: 'la:pen-nib',
//         title: 'Lorem Ipsum Feature 9',
//         description:
//           'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
//       },
//       {
//         icon: 'mynaui:upload',
//         title: 'Lorem Ipsum Feature 10',
//         description: 'Curabitur blandit tempus porttitor.',
//       },
//     ],
//     goals: [
//       {
//         icon: 'uil:user',
//         title: 'Seamless Onboarding and Loan Origination',
//         description:
//           'Enable fast account openings and smooth loan applications with document upload functionality for a quick, paperless experience.',
//       },
//       {
//         icon: 'lucide:gauge',
//         title: 'Efficient, Scalable Operations',
//         description:
//           'Achieve real-time transaction processing, automated compliance checks, and a scalable infrastructure designed for flexible growth.',
//       },
//       {
//         icon: 'mdi:protected-outline',
//         title: 'Enhanced Security and Global Accessibility',
//         description:
//           'Leverage advanced fraud detection, multi-currency support, and secure global transactions to support international operations.',
//       },
//     ],
//   },
// };

  
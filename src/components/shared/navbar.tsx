/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  cn,
  useDisclosure,
} from '@nextui-org/react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CustomButton } from './shared_customs';
import CustomModal from './modal';
import SignUp from '../../pages/sign_up';
import CustomeDropdownDesktop from './custom-dropdown';
import CustomMobileDropdown from './custom-dropdown-mobile';

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpenChange } = useDisclosure();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // dropdown mobile

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      position="static"
      {...{
        ariaLabel: 'Foundry Navbar',
        shouldHideOnScroll: false,
        isInverted: true,
      }}
      maxWidth="full"
      className="bg-white w-full relative"
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <CustomModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        header="Register/Sign up"
        body={<SignUp />}
      />

      <NavbarContent className="lg:hidden pr-3" justify="center">
        <NavbarBrand as={Link} to="/" className="flex gap-x-3">
          <img src="/icons/logo.svg" className="w-[1.3rem]" alt="logo" />
          <p className="font-bold text-inherit uppercase">foundry</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent
        className="hidden lg:flex gap-4 justify-between w-full ml-[5vw]"
        justify="start"
      >
        <NavbarBrand as={Link} to="/" className="flex gap-x-3">
          <img src="/icons/logo.svg" className="w-[1.3rem]" alt="logo" />
          <p className="font-bold text-inherit uppercase">foundry</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex gap-4 justify-between w-full "
        justify="center"
      >
        <div className="flex mx-auto gap-x-8 items-center ">
          {menuItems.map((item, index) =>
            item.subItems ? (
              <CustomeDropdownDesktop key={index} item={item as any} />
            ) : (
              <NavbarItem key={index}>
                <Link
                  target={item?.external ? '_blank' : '_self'}
                  to={item?.link as string}
                  className={cn(
                    'flex gap-1 items-center cursor-pointer text-base  hover:text-[#1A1A1A]',
                    pathname.includes(item?.link as string) && 'text-[#1A1A1A]',
                  )}
                >
                  {item.title}
                </Link>
              </NavbarItem>
            ),
          )}
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="gap-x-3 hidden lg:flex mr-[5vw]">
          <CustomButton
            onPress={() => navigate('/onboarding')}
            className="bg-primary text-white hidden md:flex"
          >
            Sign up
          </CustomButton>
          <CustomButton
            className="bg-[#EDF2EE] border-2 border-secondary text-primary"
            onPress={() =>
              window.open('https://foundry-platform.com', '_blank')
            }
          >
            Log In
          </CustomButton>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white p-5">
        {menuItems.map((item, index) =>
          item.subItems ? (
            <CustomMobileDropdown
              closeMenu={() => setIsMenuOpen(false)}
              key={index}
              item={item}
            />
          ) : (
            <NavbarMenuItem key={index}>
              <Link
                to={item.link as string}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'w-full text-base ',
                  pathname.includes(item?.link as string) && 'text-[#1A1A1A]',
                )}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ),
        )}
        <div className="flex gap-x-4">
          <CustomButton
            onPress={() => navigate('/onboarding')}
            className="bg-primary text-white"
          >
            Sign up
          </CustomButton>
          <CustomButton
            className="bg-[#EDF2EE] border-2 border-secondary text-primary"
            onPress={() =>
              window.open('https://foundry-platform.com', '_blank')
            }
          >
            Log In
          </CustomButton>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}

const menuItems = [
  // {
  //   title: 'Solutions',
  //   subItems: [
  //     {
  //       heading: 'Finance',
  //       subs: [
  //         {
  //           link: '/financial-services',
  //           title: 'Morden Banking Platform',
  //           icon: 'oui:dot',
  //         },
  //         {
  //           link: '/financial-service/loan-origination',
  //           title: 'Lending',
  //           icon: 'oui:dot',
  //         },
  //         {
  //           link: '/financial-service/agency',
  //           title: 'Banking as a Service',
  //           icon: 'oui:dot',
  //         },
  //         {
  //           link: '/financial-service/credit-scoring',
  //           title: 'Credit Scoring',
  //           icon: 'oui:dot',
  //         },
  //         {
  //           link: '/financial-service/sentinel',
  //           title: 'KYC / AML ',
  //           icon: 'oui:dot',
  //         },
  //         {
  //           link: '/financial-service/foundry-e-channels',
  //           title: 'Foundry E-channels ',
  //           icon: 'oui:dot',
  //         },
  //         {
  //           link: '/financial-service/foundry-back-office',
  //           title: 'Foundry Back Office',
  //           icon: 'oui:dot',
  //         },
  //         {
  //           link: '/financial-service/customized-platform',
  //           title: 'Customized Platform',
  //           icon: 'oui:dot',
  //         },
  //       ],
  //     },
  //     {
  //       heading: 'Business',
  //       subs: [
  //         {
  //           link: '/business/pos',
  //           title: 'Point of Sale',
  //           icon: 'oui:dot',
  //         },
  //         {
  //           link: '/business/supply-chain',
  //           title: 'Supply chain, manufacturing & procurement',
  //           icon: 'oui:dot',
  //         },
  //         {
  //           link: '/business/foundry-terminal',
  //           title: 'Foundry Terminal',
  //           icon: 'oui:dot',
  //         },
  //         { link: '/business/payroll', title: 'Payroll', icon: 'oui:dot' },
  //         {
  //           link: '/business/advanced-tools',
  //           title: 'Advanced Accounting tools',
  //           icon: 'oui:dot',
  //         },
  //         {
  //           link: '/business/advanced-analytics',
  //           title: 'Advanced Analytics',
  //           icon: 'oui:dot',
  //         },
  //       ],
  //     },
  //     {
  //       heading: 'Operations',
  //       subs: [
  //         {
  //           link: '/operations/process-improvement',
  //           title: 'Process Improvement',
  //           icon: 'oui:dot',
  //         },
  //         {
  //           link: '/operations/operating-model-design',
  //           title: 'Operating Model Design',
  //           icon: 'oui:dot',
  //         },
  //         {
  //           link: '/operations/digital-transformation',
  //           title: 'Digital Transformation',
  //           icon: 'oui:dot',
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    title: 'Our Platforms',
    link: '/our-platforms',
    is_green_card: true,
    subItems: [
      {
        link: '/our-platforms/business',
        title: 'Business',
        // icon: '/images/our-platforms/new/business-main.webp',
        icon: 'streamline-cyber:business-chart-4',
        description:
          'Optimize operations with tools for inventory, payroll, and analytics to run your business.',
      },
      {
        link: '/our-platforms/finance',
        title: 'Finance',
        // icon: '/images/homepage/finance.png',
        icon: 'material-symbols-light:money-bag-outline',
        description:
          'Access credit, manage disbursements, and embed financial services.',
      },
      {
        link: '/our-platforms/trade',
        title: 'Trade',
        // icon: '/images/homepage/trade.png',
        icon: 'mdi-light:truck',
        description:
          'Streamline procurement, logistics, and B2B transactions end-to-end.',
      },
    ],
  },
  {
    link: '/use-cases',
    title: 'Use Cases',
    subItems: [
      {
        link: '/use-cases/retail',
        title: 'Retail',
        icon: 'https://www.shutterstock.com/image-photo/female-retail-worker-standing-store-600nw-2487354813.jpg',
        core_features: [
          {
            icon: 'mdi:warehouse',
            title: 'Inventory Management',
            description: 'Automate stock tracking and reorder workflows.',
          },
          {
            icon: 'mdi:credit-card-outline',
            title: 'Integrated POS',
            description: 'Process orders and payments from any device.',
          },
          {
            icon: 'mdi:chart-line',
            title: 'Sales Analytics',
            description:
              'Understand performance metrics and customer behaviors in real-time.',
          },
          {
            icon: 'eos-icons:ai',
            title: 'AI Powered Business Insights',
            description:
              'Understand performance metrics and customer behaviors in real-time.',
          },
        ],
      },
      {
        link: '/use-cases/financial-services',
        title: 'Financial services',
        icon: 'https://st5.depositphotos.com/6338242/68514/i/450/depositphotos_685142928-stock-photo-financial-service-concept-businessman-using.jpg',
        core_features: [
          {
            icon: 'mdi:bank',
            title: 'Core Banking Automation',
            description: 'Streamline account management and loan processing.',
          },
          {
            icon: 'mdi:file-certificate',
            title: 'Regulatory Compliance',
            description:
              'Ensure alignment with financial regulations through automation.',
          },
          {
            icon: 'mdi:shield-lock',
            title: 'Fraud Detection',
            description:
              'Use AI to monitor and flag suspicious activity in real-time.',
          },
        ],
      },

      {
        link: '/use-cases/ev-charging',
        title: 'Electric Vehicle Charging Platform',
        icon: 'https://www.powermag.com/wp-content/uploads/2020/03/fig-1-car-charging-electric-vehicle-ev-electrification.jpg',
        core_features: [
          {
            icon: 'mdi:ev-station',
            title: 'Charger Network Management',
            description: 'Monitor and control station performance.',
          },
          {
            icon: 'mdi:map-marker-radius',
            title: 'Location Services',
            description: 'Let users find available chargers nearby.',
          },
          {
            icon: 'mdi:currency-usd',
            title: 'Billing Integration',
            description:
              'Enable subscriptions, pay-per-use, and energy tariffs.',
          },
        ],
      },
      {
        link: '/use-cases/fund-management',
        title: 'Fund Management',
        icon: 'https://www.shutterstock.com/image-photo/real-estate-professionals-clients-discussing-600nw-2175050111.jpg',
        core_features: [
          {
            icon: 'mdi:chart-pie',
            title: 'Portfolio Dashboards',
            description: 'Track fund and asset performance in real-time.',
          },
          {
            icon: 'mdi:file-document-outline',
            title: 'Investor Reporting',
            description: 'Automate quarterly reports and statements.',
          },
          {
            icon: 'mdi:shield-account',
            title: 'Compliance Workflows',
            description: 'Ensure regulatory alignment across jurisdictions.',
          },
        ],
      },
      {
        link: '/use-cases/restaurant',
        title: 'Restaurant',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREjXOIxAb4w_BSxoO-qwRhAbHxZqO5hLfo4g&s',
        core_features: [
          {
            icon: 'mdi:food',
            title: 'Menu Management',
            description: 'Update items and pricing in real-time.',
          },
          {
            icon: 'mdi:table-chair',
            title: 'Reservation System',
            description: 'Allow customers to book and manage tables.',
          },
          {
            icon: 'mdi:monitor-dashboard',
            title: 'Kitchen Display System',
            description:
              'Streamline kitchen operations by displaying orders digitally in real-time.',
          },
          {
            icon: 'mdi:credit-card-outline',
            title: 'Integrated POS',
            description: 'Process orders and payments from any device.',
          },
        ],
      },
      {
        link: '/use-cases/logistics',
        title: 'Logistics and Supply Chain',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3X-6CPkdk9U9ERuKoQFlVitTop64hRVwtx_-aWPkN32t69uLGh0rmFxm0of2AwNxImkg&usqp=CAU',
        core_features: [
          {
            icon: 'mdi:truck',
            title: 'Fleet Management',
            description: 'Track deliveries and driver routes in real-time.',
          },
          {
            icon: 'mdi:package-variant-closed',
            title: 'Inventory Sync',
            description: 'Keep warehouse data in sync across systems.',
          },
          {
            icon: 'mdi:map-clock',
            title: 'Route Optimization',
            description:
              'Plan the fastest, most cost-efficient delivery routes.',
          },
        ],
      },

      {
        link: '/use-cases/manufacturing',
        title: 'Manufacturing',
        icon: 'https://freedesignfile.com/upload/2017/11/Cargo-transport-logistics-warehouse-Stock-Photo-10.jpg',
        core_features: [
          {
            icon: 'mdi:robot-industrial',
            title: 'Smart Factory Automation',
            description: 'Integrate robotics and machine telemetry.',
          },
          {
            icon: 'mdi:chart-areaspline',
            title: 'Production Analytics',
            description: 'Monitor KPIs and predict downtime.',
          },
          {
            icon: 'mdi:truck-fast',
            title: 'Supply Chain Visibility',
            description: 'Track parts and products from order to delivery.',
          },
        ],
      },
      {
        link: '/use-cases/fintech',
        title: 'Fintech',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvGHmylHthm7eKZ3bAvUmzvKCk8UFwsL2dw&s',
        core_features: [
          {
            icon: 'mdi:wallet',
            title: 'Digital Wallets',
            description: 'Enable peer-to-peer transfers and in-app payments.',
          },
          {
            icon: 'mdi:credit-card-plus',
            title: 'Loan Origination',
            description: 'Automate scoring, approval, and disbursal.',
          },
          {
            icon: 'mdi:api',
            title: 'Open Banking APIs',
            description:
              'Integrate with partners and banks using secure standards.',
          },
        ],
      },
    ],
  },
  // {
  //   link: '/hub/track-order',
  //   title: 'Track My Order',
  //   subItems: [],
  // },
  {
    title: 'Developer',
    link: 'https://developer.access89.com',
    external: true,
  },
];

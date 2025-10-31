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
        <div className="flex mx-auto gap-x-4  items-center ">
          {menuItems.map((item, index) =>
            item.subItems ? (
              <CustomeDropdownDesktop key={index} item={item as any} />
            ) : (
              <NavbarItem key={index}>
                <Link
                  target={item?.external ? '_blank' : '_self'}
                  to={item?.link as string}
                  className={cn(
                    'flex gap-1 items-center cursor-pointer   text-base font-medium  text-[#434343]',
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
            className="bg-[#EDF2EE] border-2 border-primary text-primary"
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

type MenuItem = {
  title: string;
  link: string;
  is_green_card?: boolean;
  subItems?: any[];
  external?: boolean;
};

const menuItems: MenuItem[] = [
  {
    title: 'Home',
    link: '/',
  },
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
          'Optimize operations with tools for accounting, inventory, payroll, and analytics to run your business.',
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
        title: 'Retail & Wholesale',
        icon: 'https://www.shutterstock.com/image-photo/female-retail-worker-standing-store-600nw-2487354813.jpg',
        core_features: [
          {
            icon: 'mdi:warehouse',
            title: 'Unified inventory, sales, and procurement dashboard',
            description: 'Automate stock tracking and reorder workflows.',
          },
          {
            icon: 'mdi:credit-card-outline',
            title: 'POS integration with real-time analytics',
            description: 'Process orders and payments from any device.',
          },
          {
            icon: 'mdi:chart-line',
            title: 'Supplier and buyer management via Foundry Hub',
            description:
              'Understand performance metrics and customer behaviors in real-time.',
          },
          {
            icon: 'eos-icons:ai',
            title: 'Automated order and restock workflows',
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
            title: 'Digital onboarding and credit scoring (Foundry Finance)',
            description: 'Streamline account management and loan processing.',
          },
          {
            icon: 'mdi:file-certificate',
            title: 'Loan origination and repayment automation',
            description:
              'Ensure alignment with financial regulations through automation.',
          },
          {
            icon: 'mdi:shield-lock',
            title: 'Transaction monitoring and AML screening (Sentinel)',
            description:
              'Use AI to monitor and flag suspicious activity in real-time.',
          },
        ],
      },

      {
        link: '/use-cases/kyc-and-compliance',
        image: '/images/KYCAndCompliance.png',
        title: 'KYC & Compliance',
        icon: '/images/KYCAndCompliance.png',
        core_features: [
          {
            icon: 'mdi:shield-check',
            title: 'Identity verification and document validation',
            description: 'Integrates with external APIs for instant KYC/KYB checks, AML, and sanction screening.',
          },
          {
            icon: 'mdi:eye-check',
            title: 'Continuous AML screening and sanctions monitoring',
            description: 'Proactively detects suspicious activities and fraud with real-time transaction monitoring.',
          },
          {
            icon: 'mdi:file-document-check',
            title: 'Risk-based scoring and alert management',
            description: 'Provides automated reconciliation workflows to quickly detect mismatches and discrepancies.',
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
            title: 'Investor onboarding and KYC automation',
            description: 'Track fund and asset performance in real-time.',
          },
          {
            icon: 'mdi:file-document-outline',
            title: 'Portfolio and asset performance dashboards',
            description: 'Automate quarterly reports and statements.',
          },
          {
            icon: 'mdi:shield-account',
            title: 'Automated NAV calculations and fund accounting',
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
            title: 'Smart POS and kitchen order management',
            description: 'Update items and pricing in real-time.',
          },
          {
            icon: 'mdi:table-chair',
            title: 'Inventory tracking with supplier auto-replenishment',
            description: 'Allow customers to book and manage tables.',
          },
          {
            icon: 'mdi:monitor-dashboard',
            title: 'Expense and revenue analytics in Foundry Books',
            description:
              'Streamline kitchen operations by displaying orders digitally in real-time.',
          },
          {
            icon: 'mdi:credit-card-outline',
            title: 'Staff performance and payroll management',
            description: 'Process orders and payments from any device.',
          },
        ],
      },
      {
        link: '/use-cases/logistics',
        title: 'Logistics & Supply Chain',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3X-6CPkdk9U9ERuKoQFlVitTop64hRVwtx_-aWPkN32t69uLGh0rmFxm0of2AwNxImkg&usqp=CAU',
        core_features: [
          {
            icon: 'mdi:truck',
            title: 'End-to-end shipment visibility and tracking',
            description: 'Track deliveries and driver routes in real-time.',
          },
          {
            icon: 'mdi:package-variant-closed',
            title: 'Route optimization and delivery management',
            description: 'Keep warehouse data in sync across systems.',
          },
          {
            icon: 'mdi:map-clock',
            title: 'Integrated order-to-payment workflows',
            description:
              'Plan the fastest, most cost-efficient delivery routes.',
          },
        ],
      },

      // {
      //   link: '/use-cases/manufacturing',
      //   title: 'Manufacturing',
      //   icon: 'https://freedesignfile.com/upload/2017/11/Cargo-transport-logistics-warehouse-Stock-Photo-10.jpg',
      //   core_features: [
      //     {
      //       icon: 'mdi:robot-industrial',
      //       title: 'Smart Factory Automation',
      //       description: 'Integrate robotics and machine telemetry.',
      //     },
      //     {
      //       icon: 'mdi:chart-areaspline',
      //       title: 'Production Analytics',
      //       description: 'Monitor KPIs and predict downtime.',
      //     },
      //     {
      //       icon: 'mdi:truck-fast',
      //       title: 'Supply Chain Visibility',
      //       description: 'Track parts and products from order to delivery.',
      //     },
      //   ],
      // },
    
    ],
  },
  // {
  //   link: '/hub/track-order',
  //   title: 'Track My Order',
  //   subItems: [],
  // },
  // {
  //   title: 'Developer',
  //   link: 'https://developer.access89.com',
  //   external: true,
  // },
  {
    title: 'Pricing',
    link: '/pricing',
  },
// {
//     title: 'About us ',
//     link: '/about', 
// },
];

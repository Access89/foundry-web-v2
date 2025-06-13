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
              <CustomeDropdownDesktop key={index} item={item} />
            ) : (
              <NavbarItem key={index}>
                <Link
                  target={item?.external ? '_blank' : '_self'}
                  to={item?.link as string}
                  className={cn(
                    'flex gap-1 items-center cursor-pointer text-sm  hover:text-[#1A1A1A]',
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
                  'w-full text-sm ',
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
    subItems: [
      {
        link: '/our-platforms',
        title: 'Manage',
        icon: 'https://koronapos.com/wp-content/uploads/2022/07/Hardware-Group-with-KORONA-POS-Software8-1200x675.png.webp',
        // icon: 'https://placehold.co/600x400',
      },
      {
        link: '/our-platforms',
        title: 'Finance',
        icon: '/images/homepage/finance.png',
      },
      {
        link: '/our-platforms',
        title: 'Trade',
        icon: '/images/homepage/trade.png',
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
      },
      {
        link: '/use-cases/financial-services',
        title: 'Financial services',
        icon: 'https://st5.depositphotos.com/6338242/68514/i/450/depositphotos_685142928-stock-photo-financial-service-concept-businessman-using.jpg',
      },

      {
        link: '/use-cases/ev-charging',
        title: 'Electric Vehicle Charging Platform',
        icon: 'https://www.powermag.com/wp-content/uploads/2020/03/fig-1-car-charging-electric-vehicle-ev-electrification.jpg',
      },
      {
        link: '/use-cases/fund-management',
        title: 'Fund Management',
        icon: 'https://www.shutterstock.com/image-photo/real-estate-professionals-clients-discussing-600nw-2175050111.jpg',
      },
      {
        link: '/use-cases/restaurant',
        title: 'Restaurant',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREjXOIxAb4w_BSxoO-qwRhAbHxZqO5hLfo4g&s',
      },
      {
        link: '/use-cases/logistics',
        title: 'Logistics and Supply Chain',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3X-6CPkdk9U9ERuKoQFlVitTop64hRVwtx_-aWPkN32t69uLGh0rmFxm0of2AwNxImkg&usqp=CAU',
      },

      {
        link: '/use-cases/manufacturing',
        title: 'Manufacturing',
        icon: 'https://freedesignfile.com/upload/2017/11/Cargo-transport-logistics-warehouse-Stock-Photo-10.jpg',
      },
      {
        link: '/use-cases/fintech',
        title: 'Fintech',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvGHmylHthm7eKZ3bAvUmzvKCk8UFwsL2dw&s',
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

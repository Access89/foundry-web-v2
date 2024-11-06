import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  cn,
} from '@nextui-org/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CustomButton } from '../shared_customs';

export default function NavbarComponent() {
  const menuItems = [
    {
      link: '/business-automation',
      title: 'Business Automation',
    },
    {
      link: '/financial-services',
      title: 'Financial Services',
    },
    {
      link: '/logistics-supply-chain',
      title: 'Logistics & Supply Chain',
    },
    {
      link: '/products',
      title: 'Products',
    },
    {
      link: '/use-cases',
      title: 'Use Cases',
    },
    {
      link: '/pricing',
      title: 'Pricing',
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname } = useLocation();

  const isUseCase = pathname.includes('use-cases');

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        isBordered
        // position="static"
        {...{
          ariaLabel: 'Foundry Navbar',
          shouldHideOnScroll: isUseCase ? false : true,
          isInverted: true,
          position: isUseCase ? 'static' : 'sticky',
        }}
        maxWidth="2xl"
        className="bg-white w-full"
      >
        <NavbarContent className="lg:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </NavbarContent>

        <NavbarContent className="lg:hidden pr-3" justify="center">
          <NavbarBrand as={Link} to="/" className="flex gap-x-3">
            <img src="/icons/logo.svg" className="w-[1.3rem]" alt="logo" />
            <p className="font-bold text-inherit uppercase">foundry</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent
          className="hidden lg:flex gap-4  justify-between w-full "
          justify="center"
        >
          <NavbarBrand as={Link} to="/" className="flex gap-x-3 ">
            <img src="/icons/logo.svg" className="w-[1.3rem]" alt="logo" />
            <p className="font-bold text-inherit uppercase">foundry</p>
          </NavbarBrand>
          <div className="flex w-[87%] gap-x-5 justify-center items-center">
            {menuItems.map((item, index) => (
              <NavbarItem key={`${item}-${index}`}>
                <Link
                  to={item.link}
                  // onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'w-full text-sm text-[#808080]',
                    pathname.includes(item.link) && 'text-[#1A1A1A]'
                  )}
                >
                  {item.title}
                </Link>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <CustomButton className="bg-[#EDF2EE] border-2 border-foundry-secondary text-foundry-primary">
              Log In
            </CustomButton>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-white">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                to={item.link}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'w-full text-sm text-[#808080]',
                  pathname.includes(item.link) && 'text-[#1A1A1A]'
                )}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}

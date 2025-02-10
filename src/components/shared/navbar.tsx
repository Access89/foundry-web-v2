/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  cn,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CustomButton } from "./shared_customs";
import CustomModal from "./modal";
import SignUp from "../../pages/sign_up";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpenChange } = useDisclosure();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      position="static"
      {...{
        ariaLabel: "Foundry Navbar",
        shouldHideOnScroll: false,
        isInverted: true,
      }}
      maxWidth="2xl"
      className="bg-white w-full"
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
        className="hidden lg:flex gap-4 justify-between w-full"
        justify="center"
      >
        <NavbarBrand as={Link} to="/" className="flex gap-x-3">
          <img src="/icons/logo.svg" className="w-[1.3rem]" alt="logo" />
          <p className="font-bold text-inherit uppercase">foundry</p>
        </NavbarBrand>

        <div className="flex w-[87%] gap-x-5 justify-center items-center">
          {menuItems.map((item, index) =>
            item.subItems ? (
              <Dropdown key={index}>
                <DropdownTrigger>
                  <NavbarItem
                    className={cn(
                      "flex gap-1 items-center cursor-pointer text-xs text-[#808080] hover:text-[#1A1A1A]",
                      pathname.includes(item.title.toLowerCase()) &&
                        "text-[#1A1A1A]"
                    )}
                  >
                    {item.title} <Icon icon="majesticons:chevron-down" />
                  </NavbarItem>
                </DropdownTrigger>
                <DropdownMenu>
                  {item.subItems.map((subItem: any, subIndex) => (
                    <DropdownItem key={subIndex} as={Link}>
                      <Link to={subItem.link as string}>{subItem.title}</Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem key={index}>
                <Link
                  target={item?.external ? "_blank" : "_self"}
                  to={item?.link as string}
                  className={cn(
                    "w-full text-xs text-[#808080]",
                    pathname.includes(item?.link as string) && "text-[#1A1A1A]"
                  )}
                >
                  {item.title}
                </Link>
              </NavbarItem>
            )
          )}
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="gap-x-3 hidden lg:flex">
          <CustomButton
            onPress={() => navigate("/onboarding")}
            className="bg-primary text-white hidden md:flex"
          >
            Sign up
          </CustomButton>
          <CustomButton
            className="bg-[#EDF2EE] border-2 border-secondary text-primary"
            onPress={() =>
              window.open("https://foundry-platform.com", "_blank")
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
            <CustomDropdown key={index} item={item} />
          ) : (
            <NavbarMenuItem key={index}>
              <Link
                to={item.link as string}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "w-full text-sm text-[#808080]",
                  pathname.includes(item?.link as string) && "text-[#1A1A1A]"
                )}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          )
        )}
        <div className="flex gap-x-4">
          <CustomButton
            onPress={() => navigate("/onboarding")}
            className="bg-primary text-white"
          >
            Sign up
          </CustomButton>
          <CustomButton
            className="bg-[#EDF2EE] border-2 border-secondary text-primary"
            onPress={() =>
              window.open("https://foundry-platform.com", "_blank")
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
  {
    title: "Solutions",
    subItems: [
      { link: "/finance/morden-banking", title: "Modern Banking Platform" },
      { link: "/finance/morden-banking", title: "Modern Banking Platform" },
    ],
  },
  {
    title: "Industry",
    subItems: [],
  },
  {
    link: "/use-cases",
    title: "Use Cases",
  },
  {
    link: "/hub/track-order",
    title: "Track My Order",
    subItems: [],
  },
  {
    title: "Developer",
    link: "https://developer.access89.com",
    external: true,
  },
];

// {
//     link: "/business-automation",
//     title: "Business Automation",
//   },
//   {
//     link: "/financial-services",
//     title: "Financial Services",
//   },
//   {
//     link: "/logistics-supply-chain",
//     title: "Logistics & Supply Chain",
//   },
//   {
//     // link: '/products',
//     title: "Marketplace",
//     link: "https://hub.foundry-platform.app",
//   },
//   {
//     link: "/use-cases",
//     title: "Use Cases",
//   },
//   {
//     link: "/pricing",
//     title: "Pricing",
//   },

const CustomDropdown = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Dropdown Trigger */}
      <div
        className="flex justify-between items-center cursor-pointer text-sm text-[#808080] hover:text-[#1A1A1A]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.title}
        <Icon
          icon="majesticons:chevron-down"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-1 w-full max-w-xs bg-white shadow-lg rounded-md border border-gray-200 z-50"
          >
            {item.subItems.map((subItem: any, subIndex: number) => (
              <Link
                key={subIndex}
                to={subItem.link as string}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {subItem.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

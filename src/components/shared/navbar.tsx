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
} from "@nextui-org/react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CustomButton } from "./shared_customs";
import CustomModal from "./modal";
import SignUp from "../../pages/sign_up";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from "./custom-dropdown";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpenChange } = useDisclosure();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // dropdown mobile
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
              className="absolute left-0 mt-1 w-[90vw] p-3 bg-white shadow-lg rounded-md border border-gray-200 z-50"
            >
              {item.subItems.map((subItem: any, subIndex: number) => (
                // <Link
                //   key={subIndex}
                //   to={subItem.link as string}
                //   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                //   onClick={() => setIsOpen(false)}
                // >
                //   {subItem.title}
                // </Link>
                <div key={subIndex} className="">
                  <p
                    className={`font-bold ${
                      subIndex && "pt-2 pb-1"
                    } text-sm text-[#000000]`}
                  >
                    {subItem.heading}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {subItem.subs.map((linkItem: any, linkIndex: any) => (
                      <Link
                        key={linkIndex}
                        to={linkItem.link}
                        onClick={() => {
                          setIsOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center "
                      >
                        <Icon
                          className="text-[#4C7F64]/50"
                          fontSize={20}
                          icon={linkItem.icon}
                        />
                        <p className="text-xs font-medium text-[#000000] hover:text-gray-500">
                          {linkItem.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

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
              // <Dropdown key={index}>
              //   <NavbarItem>
              //     <DropdownTrigger>
              //       <div className="flex gap-1 items-center cursor-pointer text-xs text-[#808080] hover:text-[#1A1A1A]">
              //         {item.title} <Icon icon="majesticons:chevron-down" />
              //       </div>
              //     </DropdownTrigger>
              //   </NavbarItem>
              //   <DropdownMenu className="w-[500px] p-4">
              //     {item.subItems.map((subItem, subIndex) => (
              //       <DropdownSection
              //         key={subIndex}
              //         title={subItem.heading}
              //         classNames={{
              //           heading: ["font-bold", "text-lg", "text-[#000000]"],
              //           base: ["grid grid-cols-2", "w-fit"],
              //         }}
              //       >
              //         {subItem.subs.map((linkItem, linkIndex) => (
              //           <DropdownItem
              //             key={linkIndex}
              //             as="a"
              //             className="text-sm font-medium text-[#000000]"
              //             href={linkItem.link}
              //           >
              //             {linkItem.title}
              //           </DropdownItem>
              //         ))}
              //       </DropdownSection>
              //     ))}
              //   </DropdownMenu>
              // </Dropdown>
              <Dropdown key={index} item={item} />
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
      {
        heading: "Finance",
        subs: [
          {
            link: "/finance/morden-banking",
            title: "Morden Banking Platform",
            icon: "oui:dot",
          },
          { link: "/finance/lending", title: "Lending", icon: "oui:dot" },
          {
            link: "/finance/banking-as-a-service",
            title: "Banking as a Service",
            icon: "oui:dot",
          },
          {
            link: "/finance/credit-scoring",
            title: "Credit Scoring",
            icon: "oui:dot",
          },
          { link: "/finance/kyc", title: "KYC / AML ", icon: "oui:dot" },
        ],
      },
      {
        heading: "Business",
        subs: [
          { link: "/business/pos", title: "Point of Sale", icon: "oui:dot" },
          {
            link: "/business/supply-chain",
            title: "Supply chain, manufacturing & procurement",
            icon: "oui:dot",
          },
          {
            link: "/business/foundry-terminal",
            title: "Foundry Terminal",
            icon: "oui:dot",
          },
          { link: "/business/payroll", title: "Payroll", icon: "oui:dot" },
          {
            link: "/business/advanced-tools",
            title: "Advanced Accounting tools",
            icon: "oui:dot",
          },
          {
            link: "/business/advanced-analytics",
            title: "Advanced Analytics",
            icon: "oui:dot",
          },
        ],
      },
      {
        heading: "Operations",
        subs: [
          {
            link: "/operations/process-improvement",
            title: "Process Improvement",
            icon: "oui:dot",
          },
          {
            link: "/operations/operating-model-design",
            title: "Operating Model Design",
            icon: "oui:dot",
          },
          {
            link: "/operations/digital-transformation",
            title: "Digital Transformation",
            icon: "oui:dot",
          },
        ],
      },
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

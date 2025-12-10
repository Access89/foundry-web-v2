import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSegment: string;
  setActiveSegment: (segment: string) => void;
  hoveredNav: string | null;
  setHoveredNav: (nav: string | null) => void;
  navData: Record<string, unknown>;
}

const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSegment,
  setActiveSegment,
  hoveredNav,
  setHoveredNav,
  navData,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path: string, segment?: string) => {
    navigate(path);
    if (segment) setActiveSegment(segment);
    setIsMenuOpen(false);
    setHoveredNav(null);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-6"
      }`}
      onMouseLeave={() => setHoveredNav(null)}
    >
      <div className="max-w-10xl mx-auto px-8">
        {/* White container */}
        <div
          className={`bg-white px-6 py-3 flex justify-between items-center relative border border-zinc-200 transition-all duration-300 ${
            isScrolled ? "shadow-xl" : "shadow-lg"
          }`}
        >
          {/* Logo - Links to Merchant */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => {
              setActiveSegment("merchant");
              handleNavigate("/v2");
            }}
          >
            <img src="/icons/logo.svg" className="w-[1.3rem]" alt="logo" />
            <p className="font-bold text-black uppercase text-lg tracking-tight">
              foundry
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-4 items-center mx-auto">
            {/* Segment Links */}
            <button
              onClick={() => {
                setActiveSegment("merchant");
                handleNavigate("/v2");
              }}
              className={`text-base font-medium transition-colors ${
                activeSegment === "merchant" && location.pathname === "/v2"
                  ? "text-[#1A1A1A]"
                  : "text-[#434343] hover:text-[#1A1A1A]"
              }`}
            >
              For Business
            </button>
            <button
              onClick={() => {
                setActiveSegment("bank");
                handleNavigate("/v2");
              }}
              className={`text-base font-medium transition-colors ${
                activeSegment === "bank" && location.pathname === "/v2"
                  ? "text-[#1A1A1A]"
                  : "text-[#434343] hover:text-[#1A1A1A]"
              }`}
            >
              For Banks
            </button>

            {/* V2 Navigation Dropdowns */}
            {Object.keys(navData).map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => setHoveredNav(item)}
              >
                <button
                  className={`flex items-center gap-1 text-base font-medium transition-colors ${
                    hoveredNav === item
                      ? "text-[#1A1A1A]"
                      : "text-[#434343] hover:text-[#1A1A1A]"
                  }`}
                >
                  {item}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      hoveredNav === item ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 p-2 shadow-xl border bg-white backdrop-blur-md transition-all duration-300 origin-top ${
                    hoveredNav === item
                      ? "opacity-100 scale-100 translate-y-0 visible"
                      : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                  } ${
                    (navData[item as keyof typeof navData] as any).type ===
                    "categorized"
                      ? "w-[700px]"
                      : "w-80"
                  }`}
                >
                  {(navData[item as keyof typeof navData] as any).type ===
                  "categorized" ? (
                    <div className="flex p-2 gap-8">
                      {(
                        navData[item as keyof typeof navData] as any
                      ).sections.map((section: any, idx: number) => (
                        <div key={idx} className="flex-1">
                          <div className="text-xs font-bold uppercase tracking-wider mb-4 px-2 text-zinc-400">
                            {section.title}
                          </div>
                          <div className="flex flex-col gap-1">
                            {section.items.map(
                              (subItem: any, subIdx: number) => (
                                <button
                                  key={subIdx}
                                  onClick={() => {
                                    if (subItem.action) subItem.action();
                                    setIsMenuOpen(false);
                                    setHoveredNav(null);
                                  }}
                                  className="flex items-start text-left gap-4 p-3 transition-colors hover:bg-zinc-50 group w-full"
                                >
                                  <div className="mt-1 p-2 bg-zinc-100 text-zinc-900">
                                    {subItem.icon}
                                  </div>
                                  <div>
                                    <div className="font-bold text-sm text-zinc-900">
                                      {subItem.title}
                                    </div>
                                    <div className="text-xs mt-0.5 text-zinc-500">
                                      {subItem.desc}
                                    </div>
                                  </div>
                                </button>
                              )
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1">
                      {(navData[item as keyof typeof navData] as any[]).map(
                        (subItem, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (subItem.action) subItem.action();
                              setIsMenuOpen(false);
                              setHoveredNav(null);
                            }}
                            className="flex items-start text-left gap-4 p-3 transition-colors hover:bg-zinc-50 group w-full"
                          >
                            <div className="mt-1 p-2 bg-zinc-100 text-zinc-900">
                              {subItem.icon}
                            </div>
                            <div>
                              <div className="font-bold text-sm text-zinc-900">
                                {subItem.title}
                              </div>
                              <div className="text-xs mt-0.5 text-zinc-500">
                                {subItem.desc}
                              </div>
                            </div>
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Pricing Link */}
            <Link
              to="/pricing"
              className={`text-base font-medium text-[#434343] hover:text-[#1A1A1A] transition-colors ${
                location.pathname === "/pricing" ? "text-[#1A1A1A]" : ""
              }`}
            >
              Pricing
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex gap-3 items-center">
            <button
              onClick={() => navigate("/onboarding")}
              className="bg-primary text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Sign up
            </button>
            <button
              onClick={() =>
                window.open("https://foundry-platform.com", "_blank")
              }
              className="bg-[#EDF2EE] border-2 border-primary text-primary px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-primary hover:text-white transition-all"
            >
              Log In
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

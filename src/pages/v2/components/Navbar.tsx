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
      className={`fixed w-full z-50 bg-white border-b border-zinc-200 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      onMouseLeave={() => setHoveredNav(null)}
    >
      <div className="max-w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => {
              setActiveSegment("bank");
              handleNavigate("/");
            }}
          >
            <img src="/icons/logo.svg" className="w-[1.3rem]" alt="logo" />
            <p className="font-bold text-inherit uppercase">foundry</p>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex gap-6 items-center mx-auto">
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
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 shadow-xl border border-zinc-200 bg-white transition-all duration-300 origin-top rounded-lg ${
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
                          <div className="text-xs font-medium uppercase tracking-wider mb-4 px-2 text-zinc-400">
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
                                  className="flex items-start text-left gap-3 p-3 rounded-md transition-colors hover:bg-zinc-50 group w-full"
                                >
                                  <div className="mt-1 p-2 bg-zinc-100 text-zinc-900 rounded">
                                    {subItem.icon}
                                  </div>
                                  <div>
                                    <div className="font-medium text-sm text-zinc-900">
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
                            className="flex items-start text-left gap-3 p-3 rounded-md transition-colors hover:bg-zinc-50 group w-full"
                          >
                            <div className="mt-1 p-2 bg-zinc-100 text-zinc-900 rounded">
                              {subItem.icon}
                            </div>
                            <div>
                              <div className="font-medium text-sm text-zinc-900">
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
              onClick={() =>
                window.open("https://foundry-platform.com", "_blank")
              }
              className="text-primary border-2 border-transparent hover:border-primary duration-300 px-6 py-2.5 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/onboarding")}
              className="border-2 bg-primary border-primary text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-primary-dark hover:text-white transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-black"
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

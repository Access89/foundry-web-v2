import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSegment: string;
  setActiveSegment: (segment: string) => void;
  hoveredNav: string | null;
  setHoveredNav: (nav: string | null) => void;
  navData: any;
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

  const handleNavigate = (path: string, segment?: string) => {
    navigate(path);
    if (segment) setActiveSegment(segment);
    setIsMenuOpen(false);
    setHoveredNav(null);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className="fixed w-full z-50 py-6"
      onMouseLeave={() => setHoveredNav(null)}
    >
      <div className="max-w-10xl mx-auto px-8">
        {/* White container */}
        <div className="bg-white px-6 py-3 flex justify-between items-center shadow-lg relative">
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
          <div className="hidden md:flex gap-1 font-medium text-black items-center">
            {/* Segment Links */}
            <button
              onClick={() => {
                setActiveSegment("merchant");
                handleNavigate("/v2");
              }}
              className={`px-4 py-2 transition-opacity ${
                activeSegment === "merchant" ? "font-bold" : "hover:opacity-70"
              }`}
            >
              For Business
            </button>
            <button
              onClick={() => {
                setActiveSegment("bank");
                handleNavigate("/v2");
              }}
              className={`px-4 py-2 transition-opacity ${
                activeSegment === "bank" ? "font-bold" : "hover:opacity-70"
              }`}
            >
              For Banks
            </button>
            <div className="w-px h-6 bg-zinc-200 mx-2"></div>
            {Object.keys(navData).map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => setHoveredNav(item)}
              >
                <button
                  className={`px-4 py-2 flex items-center gap-1 hover:opacity-70 transition-opacity ${
                    hoveredNav === item ? "opacity-70" : ""
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

            {/* GET STARTED Button */}
            <button
              onClick={() => navigate("/onboarding")}
              className="bg-black text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-gray-800 transition-colors ml-4"
            >
              GET STARTED
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

import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { theme, getNavData } from "./constants";
import { V2Context } from "./context";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState("merchant"); // 'merchant' or 'bank'
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navigate = useNavigate();

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTheme = theme[activeSegment as keyof typeof theme];
  const navData = getNavData(navigate, setActiveSegment);

  const handleNavigate = (path: string, segment?: string) => {
    navigate(path);
    if (segment) setActiveSegment(segment);
    setIsMenuOpen(false);
    setHoveredNav(null);
    window.scrollTo(0, 0);
  };

  return (
    <V2Context.Provider value={{ activeSegment, setActiveSegment }}>
      <div
        className={`min-h-screen font-sans transition-colors duration-500 ${
          activeSegment === "bank"
            ? "bg-slate-900 text-slate-100"
            : "bg-white text-zinc-900"
        }`}
      >
        {/* --- Navigation --- */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 bg-white border-b ${
            scrolled ? "shadow-sm border-zinc-200" : "border-transparent"
          }`}
          onMouseLeave={() => setHoveredNav(null)}
        >
          <div className="max-w-[1636px] mx-auto px-8 lg:px-12 py-4 flex justify-between items-center relative">
            {/* Logo - from old navbar */}
            <div
              className="flex items-center gap-3 cursor-pointer z-50"
              onClick={() => handleNavigate("/v2")}
            >
              <img src="/icons/logo.svg" className="w-[1.3rem]" alt="logo" />
              <p className="font-bold text-[#1A1A1A] text-inherit uppercase text-xl tracking-tight">
                foundry
              </p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-1 font-medium text-[#434343]">
              {Object.keys(navData).map((item) => (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => setHoveredNav(item)}
                >
                  <button
                    className={`px-4 py-2 flex items-center gap-1 hover:text-[#1A1A1A] transition-colors ${
                      hoveredNav === item ? "text-[#1A1A1A]" : "text-[#434343]"
                    }`}
                  >
                    {item}{" "}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        hoveredNav === item ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 p-2 rounded-2xl shadow-xl border backdrop-blur-md transition-all duration-300 origin-top ${
                      hoveredNav === item
                        ? "opacity-100 scale-100 translate-y-0 visible"
                        : "opacity-0 scale-95 -translate-y-2 invisible"
                    } ${currentTheme.dropdownBg} ${
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
                            <div
                              className={`text-xs font-bold uppercase tracking-wider mb-4 px-2 ${
                                activeSegment === "bank"
                                  ? "text-slate-500"
                                  : "text-zinc-400"
                              }`}
                            >
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
                                    className={`flex items-start text-left gap-4 p-3 rounded-xl transition-colors group w-full ${currentTheme.dropdownHover}`}
                                  >
                                    <div
                                      className={`mt-1 p-2 rounded-lg ${
                                        activeSegment === "bank"
                                          ? "bg-white/10 text-indigo-400"
                                          : "bg-zinc-100 text-zinc-900"
                                      }`}
                                    >
                                      {subItem.icon}
                                    </div>
                                    <div>
                                      <div
                                        className={`font-bold text-sm ${
                                          activeSegment === "bank"
                                            ? "text-white"
                                            : "text-zinc-900"
                                        }`}
                                      >
                                        {subItem.title}
                                      </div>
                                      <div
                                        className={`text-xs mt-0.5 ${
                                          activeSegment === "bank"
                                            ? "text-slate-400"
                                            : "text-zinc-500"
                                        }`}
                                      >
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
                              className={`flex items-start text-left gap-4 p-3 rounded-xl transition-colors group w-full ${currentTheme.dropdownHover}`}
                            >
                              <div
                                className={`mt-1 p-2 rounded-lg ${
                                  activeSegment === "bank"
                                    ? "bg-white/10 text-indigo-400"
                                    : "bg-zinc-100 text-zinc-900"
                                }`}
                              >
                                {subItem.icon}
                              </div>
                              <div>
                                <div
                                  className={`font-bold text-sm ${
                                    activeSegment === "bank"
                                      ? "text-white"
                                      : "text-zinc-900"
                                  }`}
                                >
                                  {subItem.title}
                                </div>
                                <div
                                  className={`text-xs mt-0.5 ${
                                    activeSegment === "bank"
                                      ? "text-slate-400"
                                      : "text-zinc-500"
                                  }`}
                                >
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
            </div>

            <div className="hidden md:flex gap-4 z-50 py-2">
              <button
                onClick={() => navigate("/onboarding")}
                className="px-6 py-2 bg-primary text-white font-semibold transition-all hover:opacity-90"
              >
                Sign up
              </button>
              <button
                onClick={() =>
                  window.open("https://foundry-platform.com", "_blank")
                }
                className="px-6 py-2 bg-[#EDF2EE] border-2 border-primary text-primary font-semibold transition-all hover:bg-primary hover:text-white"
              >
                Log In
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden z-50 text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu (Theme Aware) */}
          {isMenuOpen && (
            <div
              className={`absolute top-0 left-0 w-full min-h-screen pt-24 px-6 flex flex-col gap-6 md:hidden z-40 animate-in slide-in-from-top-5 overflow-y-auto pb-10 transition-colors duration-500 ${currentTheme.mobileMenuBg}`}
            >
              {Object.keys(navData).map((item) => (
                <div
                  key={item}
                  className={`border-b pb-4 ${
                    activeSegment === "bank"
                      ? "border-slate-800"
                      : "border-zinc-100"
                  }`}
                >
                  <div className="text-xl font-bold mb-4">{item}</div>
                  {(navData[item as keyof typeof navData] as any).type ===
                  "categorized" ? (
                    <div className="space-y-6">
                      {(
                        navData[item as keyof typeof navData] as any
                      ).sections.map((section: any, sectionIdx: number) => (
                        <div key={sectionIdx}>
                          <div
                            className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                              activeSegment === "bank"
                                ? "text-slate-500"
                                : "text-zinc-400"
                            }`}
                          >
                            {section.title}
                          </div>
                          <div className="grid grid-cols-1 gap-4 pl-2">
                            {section.items.map((subItem: any, idx: number) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  if (subItem.action) subItem.action();
                                  setIsMenuOpen(false);
                                }}
                                className="flex items-center gap-3 text-left w-full"
                              >
                                <div
                                  className={
                                    activeSegment === "bank"
                                      ? "text-indigo-400"
                                      : "text-zinc-400"
                                  }
                                >
                                  {subItem.icon}
                                </div>
                                <div>
                                  <div className="font-semibold text-sm">
                                    {subItem.title}
                                  </div>
                                  <div
                                    className={`text-xs ${
                                      activeSegment === "bank"
                                        ? "text-slate-400"
                                        : "text-zinc-500"
                                    }`}
                                  >
                                    {subItem.desc}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4 pl-2">
                      {(navData[item as keyof typeof navData] as any[]).map(
                        (subItem, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (subItem.action) subItem.action();
                              setIsMenuOpen(false);
                            }}
                            className="flex items-center gap-3 text-left w-full"
                          >
                            <div
                              className={
                                activeSegment === "bank"
                                  ? "text-indigo-400"
                                  : "text-zinc-400"
                              }
                            >
                              {subItem.icon}
                            </div>
                            <div>
                              <div className="font-semibold text-sm">
                                {subItem.title}
                              </div>
                              <div
                                className={`text-xs ${
                                  activeSegment === "bank"
                                    ? "text-slate-400"
                                    : "text-zinc-500"
                                }`}
                              >
                                {subItem.desc}
                              </div>
                            </div>
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => navigate("/onboarding")}
                className="w-full py-4 bg-primary text-white font-bold mt-4 shadow-lg"
              >
                Sign up
              </button>
              <button
                onClick={() =>
                  window.open("https://foundry-platform.com", "_blank")
                }
                className="w-full py-4 bg-[#EDF2EE] border-2 border-primary text-primary font-bold"
              >
                Log In
              </button>
            </div>
          )}
        </nav>

        <Outlet />

        {/* --- Footer (Theme Aware) --- */}
        <footer
          className={`pt-20 pb-10 border-t transition-colors duration-500 ${currentTheme.footerBg} ${currentTheme.footerText}`}
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div
                className={`flex items-center gap-2 font-bold text-2xl mb-6 ${
                  activeSegment === "bank" ? "text-white" : "text-black"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeSegment === "bank" ? "bg-indigo-600" : "bg-black"
                  }`}
                >
                  <Zap className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                Foundry
              </div>
              <p className="text-sm mb-6 max-w-xs opacity-80">
                The operating system for modern finance. Bridging the gap
                between merchant agility and banking scale.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div
                  className={`w-8 h-8 rounded-full ${
                    activeSegment === "bank"
                      ? "bg-slate-800 hover:bg-slate-700"
                      : "bg-zinc-200 hover:bg-zinc-300"
                  } transition-colors`}
                ></div>
                <div
                  className={`w-8 h-8 rounded-full ${
                    activeSegment === "bank"
                      ? "bg-slate-800 hover:bg-slate-700"
                      : "bg-zinc-200 hover:bg-zinc-300"
                  } transition-colors`}
                ></div>
                <div
                  className={`w-8 h-8 rounded-full ${
                    activeSegment === "bank"
                      ? "bg-slate-800 hover:bg-slate-700"
                      : "bg-zinc-200 hover:bg-zinc-300"
                  } transition-colors`}
                ></div>
              </div>
            </div>

            <div>
              <h4
                className={`font-bold mb-6 ${
                  activeSegment === "bank" ? "text-white" : "text-black"
                }`}
              >
                Products
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button
                    onClick={() => handleNavigate("/v2", "merchant")}
                    className="hover:underline text-left"
                  >
                    Payments
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("/v2/baas", "bank")}
                    className="hover:underline text-left"
                  >
                    Banking as a Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("/v2/engagement", "bank")}
                    className="hover:underline text-left"
                  >
                    Engagement Platform
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("/v2/hardware", "merchant")}
                    className="hover:underline text-left"
                  >
                    Terminal Hardware
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={`font-bold mb-6 ${
                  activeSegment === "bank" ? "text-white" : "text-black"
                }`}
              >
                Resources
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={`font-bold mb-6 ${
                  activeSegment === "bank" ? "text-white" : "text-black"
                }`}
              >
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Legal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`max-w-7xl mx-auto px-6 border-t pt-8 flex flex-col md:flex-row justify-between text-sm opacity-60 ${
              activeSegment === "bank" ? "border-slate-800" : "border-zinc-200"
            }`}
          >
            <div>© 2024 Foundry Inc.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </V2Context.Provider>
  );
};

export default Layout;

import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { theme, getNavData } from "./constants";
import { V2Context } from "./context";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState("merchant");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navigate = useNavigate();

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
      <div className="min-h-screen font-sans bg[#1C1C1C]">
        {/* --- Navigation (MetaMask Style with Original Nav Links) --- */}
        <nav
          className="fixed w-full z-50 py-6"
          onMouseLeave={() => setHoveredNav(null)}
        >
          <div className="max-w-10xl mx-auto px-8">
            {/* White rounded container */}
            <div className="bg-white rounded px-6 py-3 flex justify-between items-center shadow-lg relative">
              {/* Logo */}
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => handleNavigate("/v2")}
              >
                <img src="/icons/logo.svg" className="w-[1.3rem]" alt="logo" />
                <p className="font-bold text-black uppercase text-lg tracking-tight">
                  foundry
                </p>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex gap-1 font-medium text-black items-center">
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
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 p-2 rounded-2xl shadow-xl border bg-white backdrop-blur-md transition-all duration-300 origin-top ${
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
                                      className="flex items-start text-left gap-4 p-3 rounded-xl transition-colors hover:bg-zinc-50 group w-full"
                                    >
                                      <div className="mt-1 p-2 rounded-lg bg-zinc-100 text-zinc-900">
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
                                className="flex items-start text-left gap-4 p-3 rounded-xl transition-colors hover:bg-zinc-50 group w-full"
                              >
                                <div className="mt-1 p-2 rounded-lg bg-zinc-100 text-zinc-900">
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
                  className="bg-black text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors ml-4"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white pt-24 px-8 overflow-y-auto">
            <div className="flex flex-col gap-6 pb-10">
              {Object.keys(navData).map((item) => (
                <div key={item} className="border-b border-zinc-100 pb-4">
                  <div className="text-xl font-bold mb-4 text-black">
                    {item}
                  </div>
                  {(navData[item as keyof typeof navData] as any).type ===
                  "categorized" ? (
                    <div className="space-y-6">
                      {(
                        navData[item as keyof typeof navData] as any
                      ).sections.map((section: any, sectionIdx: number) => (
                        <div key={sectionIdx}>
                          <div className="text-xs font-bold uppercase tracking-wider mb-3 text-zinc-400">
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
                                <div className="text-zinc-400">
                                  {subItem.icon}
                                </div>
                                <div>
                                  <div className="font-semibold text-sm text-black">
                                    {subItem.title}
                                  </div>
                                  <div className="text-xs text-zinc-500">
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
                            <div className="text-zinc-400">{subItem.icon}</div>
                            <div>
                              <div className="font-semibold text-sm text-black">
                                {subItem.title}
                              </div>
                              <div className="text-xs text-zinc-500">
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
                className="bg-black text-white px-6 py-3 rounded-full font-semibold mt-4"
              >
                GET STARTED
              </button>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main>
          <Outlet />
        </main>

        {/* --- Footer (MetaMask Style) --- */}
        <footer className="pt-16 pb-8 bg-[#1C1C1C] text-white border-t border-zinc-800">
          {/* Breadcrumb */}
          <div className="max-w-10xl mx-auto px-8 mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>🏠</span>
              <span>›</span>
              <span className="text-white">Home</span>
            </div>
          </div>

          {/* Main footer content */}
          <div className="max-w-10xl mx-auto px-8 grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {/* Logo column */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col gap-1 mb-6">
                <span className="text-3xl font-bold">Foundry</span>
              </div>
            </div>

            {/* Foundry column */}
            <div>
              <h4 className="font-bold mb-4 text-gray-300">Foundry</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button
                    onClick={() => handleNavigate("/v2", "merchant")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Get Foundry
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("/v2", "merchant")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Payments
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("/v2", "merchant")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Commerce
                  </button>
                </li>
                <li className="flex items-center gap-2">
                  <button
                    onClick={() => handleNavigate("/v2", "bank")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Banking
                  </button>
                  <span className="px-2 py-0.5 bg-[#A6F44C] text-black text-xs font-bold rounded">
                    NEW
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <button
                    onClick={() => handleNavigate("/v2", "bank")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Credit
                  </button>
                  <span className="px-2 py-0.5 bg-[#A6F44C] text-black text-xs font-bold rounded">
                    NEW
                  </span>
                </li>
              </ul>
            </div>

            {/* Products column */}
            <div>
              <h4 className="font-bold mb-4 text-gray-300">Products</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    POS Terminal
                  </a>
                  <span className="px-2 py-0.5 bg-[#A6F44C] text-black text-xs font-bold rounded">
                    NEW
                  </span>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("/v2/baas", "bank")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Banking as a Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("/v2/engagement", "bank")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Engagement Platform
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    KYC & Compliance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Learn
                  </a>
                </li>
              </ul>
            </div>

            {/* Developer column */}
            <div>
              <h4 className="font-bold mb-4 text-gray-300">Developer</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    View the Docs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Developer Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Foundry SDK
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Webhooks
                  </a>
                </li>
              </ul>
            </div>

            {/* About column */}
            <div>
              <h4 className="font-bold mb-4 text-gray-300">About</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Language and social icons */}
          <div className="max-w-10xl mx-auto px-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Language selector */}
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>🌐</span>
                <span>English</span>
              </div>

              {/* Social icons */}
              <div className="flex gap-3">
                {["𝕏", "GitHub", "▶", "📷", "💬", "🎧", "♪", "RSS"].map(
                  (icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center cursor-pointer transition-colors text-xs"
                    >
                      {icon === "RSS" ? (
                        <span className="text-[10px] font-bold">RSS</span>
                      ) : (
                        <span className="text-gray-400">{icon}</span>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bottom legal links */}
          <div className="max-w-10xl mx-auto px-8 pt-8 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Consensys
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors underline"
                >
                  Terms of Use
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors underline"
                >
                  Contributor License Agreement
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors underline"
                >
                  Sitemap
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors underline"
                >
                  Accessibility
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors underline"
                >
                  Manage Cookies
                </a>
              </div>
              <div className="text-xs text-gray-500">
                ©2025 Foundry • An Access89 Formation
              </div>
            </div>
          </div>
        </footer>
      </div>
    </V2Context.Provider>
  );
};

export default Layout;

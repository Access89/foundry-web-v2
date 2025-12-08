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

        {/* --- Footer --- */}
        <footer className="pt-20 pb-10 border-t border-zinc-800 bg-[#1C1C1C] text-white">
          <div className="max-w-10xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 font-bold text-2xl mb-6">
                <img src="/icons/logo.svg" className="w-8 h-8" alt="logo" />
                Foundry
              </div>
              <p className="text-sm mb-6 max-w-xs opacity-80">
                The operating system for modern finance. Bridging the gap
                between merchant agility and banking scale.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer"></div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Products</h4>
              <ul className="space-y-3 text-sm opacity-80">
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
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="space-y-3 text-sm opacity-80">
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
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-sm opacity-80">
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

          <div className="max-w-10xl mx-auto px-8 border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between text-sm opacity-60">
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

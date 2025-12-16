import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSegment: string;
  setActiveSegment: (segment: string) => void;
  navData: any;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSegment,
  navData,
}) => {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const isDark = activeSegment === "bank";

  if (!isMenuOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[100%] max-w-md transform transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${isDark ? "bg-[#1C1C1C]" : "bg-white"} shadow-2xl`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between p-4 ${
            isDark ? "border-zinc-800" : "border-zinc-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <img
              src={isDark ? "/icons/logo_white.svg" : "/icons/logo.svg"}
              className="w-5"
              alt="logo"
            />
            <p
              className={`font-bold uppercase text-sm ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              foundry
            </p>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? "hover:bg-zinc-800 text-white"
                : "hover:bg-zinc-100 text-black"
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="overflow-y-auto h-[calc(100vh-180px)] p-4">
          <div className="space-y-1">
            {Object.keys(navData).map((item, index) => (
              <div
                key={item}
                style={{ animationDelay: `${index * 50}ms` }}
                className="animate-slideIn"
              >
                <button
                  onClick={() =>
                    setExpandedSection(expandedSection === item ? null : item)
                  }
                  className={`flex items-center justify-between w-full px-3 py-3 rounded-lg transition-all duration-200 ${
                    isDark
                      ? "hover:bg-zinc-800 text-white"
                      : "hover:bg-zinc-50 text-black"
                  }`}
                >
                  <span className="font-medium text-base">{item}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-all duration-300 ease-out ${
                      expandedSection === item ? "rotate-180" : ""
                    } ${isDark ? "text-gray-400" : "text-zinc-500"}`}
                  />
                </button>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedSection === item
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {(navData[item as keyof typeof navData] as any).type ===
                  "categorized" ? (
                    <div className="pl-3 pt-2 space-y-4">
                      {(
                        navData[item as keyof typeof navData] as any
                      ).sections.map((section: any, sectionIdx: number) => (
                        <div key={sectionIdx}>
                          <div
                            className={`text-[13px] font-medium uppercase tracking-wider mb-2 px-2 transition-all duration-200 ${
                              isDark ? "text-gray-500" : "text-zinc-400"
                            }`}
                          >
                            {section.title}
                          </div>
                          <div className="space-y-0.5">
                            {section.items.map((subItem: any, idx: number) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  if (subItem.action) subItem.action();
                                  setIsMenuOpen(false);
                                }}
                                style={{
                                  animationDelay: `${idx * 30}ms`,
                                }}
                                className={`flex items-center justify-start px-3 py-2.5 rounded-lg transition-all duration-200 w-full text-left group animate-fadeIn ${
                                  isDark
                                    ? "hover:bg-zinc-800 hover:translate-x-1"
                                    : "hover:bg-zinc-50 hover:translate-x-1"
                                }`}
                              >
                                <div
                                  className={`font-medium text-sm transition-colors ${
                                    isDark ? "text-white" : "text-zinc-900"
                                  }`}
                                >
                                  {subItem.title}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="pl-3 pt-2 space-y-0.5">
                      {(navData[item as keyof typeof navData] as any[]).map(
                        (subItem, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (subItem.action) subItem.action();
                              setIsMenuOpen(false);
                            }}
                            style={{
                              animationDelay: `${idx * 30}ms`,
                            }}
                            className={`flex items-center justify-start px-3 py-2.5 rounded-lg transition-all duration-200 w-full text-left group animate-fadeIn ${
                              isDark
                                ? "hover:bg-zinc-800 hover:translate-x-1"
                                : "hover:bg-zinc-50 hover:translate-x-1"
                            }`}
                          >
                            <div
                              className={`font-medium text-sm transition-colors ${
                                isDark ? "text-white" : "text-zinc-900"
                              }`}
                            >
                              {subItem.title}
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
            <button
              onClick={() => {
                navigate("/pricing");
                setIsMenuOpen(false);
              }}
              style={{
                animationDelay: `${Object.keys(navData).length * 50}ms`,
              }}
              className={`flex items-center justify-between w-full px-3 py-3 rounded-lg transition-all duration-200 animate-slideIn ${
                isDark
                  ? "hover:bg-zinc-800 text-white"
                  : "hover:bg-zinc-50 text-black"
              }`}
            >
              <span className="font-medium text-base">Pricing</span>
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 ${
            isDark ? "border-zinc-800 bg-[#1C1C1C]" : "border-zinc-200 bg-white"
          }`}
        >
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                navigate("/onboarding");
                setIsMenuOpen(false);
              }}
              className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                !isDark
                  ? "bg-primary text-white hover:opacity-90"
                  : "bg-white text-black hover:opacity-90"
              }`}
            >
              Get Started
            </button>
            <button
              onClick={() => {
                window.open("https://business.foundry-platform.app/", "_blank");
              }}
              className={`w-full py-3 px-4 rounded-lg font-medium text-sm border-2 transition-colors ${
                isDark
                  ? "border-zinc-700 text-white hover:bg-zinc-800"
                  : "border-zinc-200 text-black hover:bg-zinc-50"
              }`}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

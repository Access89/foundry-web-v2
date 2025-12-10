import React from "react";
import { useNavigate } from "react-router-dom";

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
  setActiveSegment,
  navData,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string, segment?: string) => {
    navigate(path);
    if (segment) setActiveSegment(segment);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-white pt-24 px-8 overflow-y-auto">
      <div className="flex flex-col gap-6 pb-10">
        {/* Segment Links */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => {
              setActiveSegment("merchant");
              handleNavigate("/v2");
            }}
            className={`flex-1 py-3 rounded-md font-semibold transition-colors ${
              activeSegment === "merchant"
                ? "bg-black text-white"
                : "bg-zinc-100 text-black"
            }`}
          >
            For Business
          </button>
          <button
            onClick={() => {
              setActiveSegment("bank");
              handleNavigate("/v2");
            }}
            className={`flex-1 py-3 rounded-md font-semibold transition-colors ${
              activeSegment === "bank"
                ? "bg-black text-white"
                : "bg-zinc-100 text-black"
            }`}
          >
            For Banks
          </button>
        </div>
        {Object.keys(navData).map((item) => (
          <div key={item} className="border-b border-zinc-100 pb-4">
            <div className="text-xl font-bold mb-4 text-black">{item}</div>
            {(navData[item as keyof typeof navData] as any).type ===
            "categorized" ? (
              <div className="space-y-6">
                {(navData[item as keyof typeof navData] as any).sections.map(
                  (section: any, sectionIdx: number) => (
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
                        ))}
                      </div>
                    </div>
                  )
                )}
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
          className="bg-black text-white px-6 py-3 rounded-md font-semibold mt-4"
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;

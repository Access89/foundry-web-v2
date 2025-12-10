import React from "react";
import { useNavigate } from "react-router-dom";

interface FooterProps {
  activeSegment: string;
  setActiveSegment: (segment: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSegment }) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string, segment?: string) => {
    navigate(path);
    if (segment) setActiveSegment(segment);
    window.scrollTo(0, 0);
  };

  return (
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
            <span className="text-3xl font-medium">Foundry</span>
          </div>
        </div>

        {/* Foundry column */}
        <div>
          <h4 className="font-medium mb-4 text-gray-300">Foundry</h4>
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
              <span className="px-2 py-0.5 bg-[#A6F44C] text-black text-xs font-medium rounded-md">
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
              <span className="px-2 py-0.5 bg-[#A6F44C] text-black text-xs font-medium rounded-md">
                NEW
              </span>
            </li>
          </ul>
        </div>

        {/* Products column */}
        <div>
          <h4 className="font-medium mb-4 text-gray-300">Products</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                POS Terminal
              </a>
              <span className="px-2 py-0.5 bg-[#A6F44C] text-black text-xs font-medium rounded-md">
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
          <h4 className="font-medium mb-4 text-gray-300">Developer</h4>
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
          <h4 className="font-medium mb-4 text-gray-300">About</h4>
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
                  className="w-8 h-8 bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center cursor-pointer transition-colors text-xs"
                >
                  {icon === "RSS" ? (
                    <span className="text-[10px] font-medium">RSS</span>
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
  );
};

export default Footer;

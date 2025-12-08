import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { V2Context } from "./context";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState("merchant");
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <V2Context.Provider value={{ activeSegment, setActiveSegment }}>
      <div className="min-h-screen font-sans bg-[#1C1C1C]">
        {/* --- Navigation (MetaMask Style) --- */}
        <nav className="fixed w-full z-50 py-6 bg-[#1C1C1C]">
          <div className="max-w-10xl mx-auto px-8">
            {/* White rounded pill container */}
            <div className="bg-white rounded px-6 py-3 flex justify-between items-center shadow-lg">
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
              <div className="hidden md:flex gap-8 font-medium text-black items-center">
                <button
                  onClick={() => handleNavigate("/v2")}
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  Features
                </button>
                <button
                  onClick={() => handleNavigate("/v2")}
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  Developer
                </button>
                <button
                  onClick={() => handleNavigate("/v2")}
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  Products
                </button>

                {/* GET STARTED Button */}
                <button
                  onClick={() => navigate("/onboarding")}
                  className="bg-black text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors"
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
          <div className="fixed inset-0 z-40 bg-white pt-24 px-8">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleNavigate("/v2")}
                className="text-lg font-medium text-black hover:opacity-70 text-left"
              >
                Features
              </button>
              <button
                onClick={() => handleNavigate("/v2")}
                className="text-lg font-medium text-black hover:opacity-70 text-left"
              >
                Developer
              </button>
              <button
                onClick={() => handleNavigate("/v2")}
                className="text-lg font-medium text-black hover:opacity-70 text-left"
              >
                Products
              </button>
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
      </div>
    </V2Context.Provider>
  );
};

export default Layout;

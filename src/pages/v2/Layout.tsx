import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getNavData } from "./constants";
import { V2Context } from "./context";
import { usePageTracking } from "@/hooks/usePageTracking";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState("merchant");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navigate = useNavigate();

  // Track page views with Google Analytics
  usePageTracking();

  const navData = getNavData(navigate, setActiveSegment);

  return (
    <V2Context.Provider value={{ activeSegment, setActiveSegment }}>
      <div className="min-h-screen font-sans bg[#1C1C1C]">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSegment={activeSegment}
          setActiveSegment={setActiveSegment}
          hoveredNav={hoveredNav}
          setHoveredNav={setHoveredNav}
          navData={navData}
        />

        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSegment={activeSegment}
          setActiveSegment={setActiveSegment}
          navData={navData}
        />

        {/* Main Content */}
        <main>
          <Outlet />
        </main>

        <Footer
          activeSegment={activeSegment}
          setActiveSegment={setActiveSegment}
        />
      </div>
    </V2Context.Provider>
  );
};

export default Layout;

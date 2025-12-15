import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { useV2Context } from "./context";
import HeroSection from "./components/HeroSection";
import FeatureGrid from "./components/FeatureGrid";
import KYCSection from "./components/KYCSection";
import CTASection from "./components/CTASection";
import MadeForSection from "./components/MadeForSection";
import PartnersSection from "@/components/reusable/partners-section";

const Home = () => {
  const { activeSegment, setActiveSegment } = useV2Context();
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Force min load time of 2s for the branding loop
    const minLoadTime = new Promise((resolve) => setTimeout(resolve, 2000));

    // Preload hero image
    const imgLoad = new Promise((resolve) => {
      const img = new Image();
      img.src = "/images/v2/v2_hero.png";
      img.onload = resolve;
      img.onerror = resolve;
    });

    Promise.all([minLoadTime, imgLoad]).then(() => {
      setIsLoading(false);
      setTimeout(() => setShowLoading(false), 700);
    });
  }, []);

  return (
    <>
      {showLoading && (
        <div
          className={`fixed inset-0 z-[100] transition-opacity duration-700 ${
            isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <LoadingScreen />
        </div>
      )}
      <div className="animate-in fade-in duration-500">
        {/* Hero Section Component */}
        <HeroSection
          activeSegment={activeSegment}
          setActiveSegment={setActiveSegment}
        />
        <PartnersSection />

        {/* Feature Grid Component */}
        <FeatureGrid activeSegment={activeSegment} />

        {/* Made for Business/Finance Section Component */}
        <MadeForSection activeSegment={activeSegment} />

        {/* KYC Section Component (Bank Only) */}
        <KYCSection activeSegment={activeSegment} />

        {/* CTA Section Component */}
        <CTASection activeSegment={activeSegment} />
      </div>
    </>
  );
};

export default Home;

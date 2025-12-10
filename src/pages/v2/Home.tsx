import { useV2Context } from "./context";
import HeroSection from "./components/HeroSection";
import FeatureGrid from "./components/FeatureGrid";
import KYCSection from "./components/KYCSection";
import CTASection from "./components/CTASection";
import MadeForSection from "./components/MadeForSection";
import PartnersSection from "@/components/reusable/partners-section";

const Home = () => {
  const { activeSegment, setActiveSegment } = useV2Context();

  return (
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
  );
};

export default Home;

import Hero from "@/components/hero";
import {
  FeatureCards,
  MissionSection,
  VisionSection,
  PurposeSection,
  TeamSection
} from "../components/sections";
import { aboutData } from "../data/aboutData";



export default function AboutUs() {
  return (
   
    <main className="overflow-x-hidden">
      <Hero title={aboutData.hero.title}
      image={aboutData.hero.image} 
      description={aboutData.hero.description} />
      
    
      <FeatureCards features={aboutData.features} />
      
      <MissionSection data={aboutData.mission} />
      
      <VisionSection data={aboutData.vision} />
      
      <PurposeSection data={aboutData.purpose} />

      <TeamSection teamMembers={aboutData.team} />
    </main>
  );
}

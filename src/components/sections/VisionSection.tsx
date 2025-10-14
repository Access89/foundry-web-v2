import React from "react";
import { VisionData } from "../../data/aboutData";

interface VisionSectionProps {
  data: VisionData;
}

const VisionSection: React.FC<VisionSectionProps> = ({ data }) => {
  return (
    <section className="py-16 px-8 bg-background text-center mt-20 container">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bold text-3xl lg:text-5xl mb-4 text-primary">{data.title}</h2>
        <p className="text-secondary-black leading-relaxed">
          {data.description}
        </p>
      </div>
    </section>
  );
};

export default VisionSection;

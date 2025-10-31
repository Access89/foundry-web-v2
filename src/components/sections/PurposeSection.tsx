import React from "react";
import { PurposeData } from "../../data/aboutData";

interface PurposeSectionProps {
  data: PurposeData;
}

const PurposeSection: React.FC<PurposeSectionProps> = ({ data }) => {
  return (
    <section className="min-h-[80vh] mx-auto flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden bg-background container ">
      <div className="flex-1">
        <h2 className="font-bold text-6xl leading-tight mb-4 text-primary">
          {data.title}
        </h2>
        <p className="text-base leading-relaxed text-secondary-black mb-6 w-[85%]">
          {data.description}
        </p>
      </div>

      <div className="flex-1 relative -top-30 ml-8 rounded-2xl overflow-hidden shadow-lg mt-20">
        <img
          src={data.image}
          alt={data.imageAlt}
          className="rounded-2xl w-[550px] h-[500px] object-cover"
        />
      </div>
    </section>
  );
};

export default PurposeSection;

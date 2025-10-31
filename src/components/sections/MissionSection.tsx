import React from "react";
import { MissionData } from "../../data/aboutData";

interface MissionSectionProps {
  data: MissionData;
}

const MissionSection: React.FC<MissionSectionProps> = ({ data }) => {
  return (
     <section className="min-h-[80vh] mx-auto flex flex-col lg:flex-row-reverse items-center gap-10 relative overflow-hidden bg-background container text-right ">
      <div className="flex-1 mt-10  ">
        <h2 className="font-bold  text-6xl leading-tight mb-4 text-primary">
          {data.title}
        </h2>
        <p className="text-base leading-relaxed text-secondary-black mb-6 w-[85%] ml-auto  text-right">  
          {data.description1}
        </p>
        {/* <p className="text-base leading-relaxed text-secondary-black mb-6 w-[85%] ">
          {data.description2}
        </p> */}
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

export default MissionSection;

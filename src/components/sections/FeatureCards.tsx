import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FeatureCard } from "../../data/aboutData";

interface FeatureCardsProps {
  features: FeatureCard[];
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ features }) => {
  return (
    <section className="w-full bg-background py-20 px-8 container">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-background border border-primary-light rounded-2xl p-8 shadow-lg hover:shadow-2xl  transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  icon={item.icon}
                  className="text-primary-white text-2xl"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-bold text-xl text-primary-black group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-secondary-black leading-relaxed group-hover:text-primary-black transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;

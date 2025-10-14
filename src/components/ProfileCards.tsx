import React from "react";

interface ChairSectionProps {
  imageSrc: string;
  title: string;
  name: string;
  paragraphs: string[];
  reverse?: boolean;
}

const ProfileCards: React.FC<ChairSectionProps> = ({
  imageSrc,
  title,
  name,
  paragraphs,
  reverse = false, // ✅ default value added
}) => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start justify-center bg-gray-50 min-h-screen p-8">
      {/* ✅ FIXED: Remove backticks around the className and make it dynamic */}
      <div
        className={`max-w-6xl w-full flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } bg-white rounded-2xl shadow-lg overflow-hidden`}
      >
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center items-center bg-[#4F46E5] p-8">
          <img
            src={imageSrc}
            alt={name}
            className="rounded-2xl object-cover w-72 h-72 md:w-80 md:h-80"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 p-8 text-gray-800">
          <p className="text-gray-500 font-medium mb-2">{title}</p>
          <h1 className="text-4xl font-bold mb-6">{name}</h1>

          {paragraphs.map((text, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileCards;

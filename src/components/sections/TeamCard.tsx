import React from "react";
import { TeamMember } from "../../data/aboutData";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 bg-primary-light flex items-center justify-center">
        <img
          src={member.imageSrc}
          alt={member.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-primary-white shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="font-bold text-xl text-primary-black mb-2">
          {member.name}
        </h3>
        <p className="text-secondary text-lg font-medium">
          {member.title}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;

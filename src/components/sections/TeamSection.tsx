import React from "react";
import TeamCard from "./TeamCard";
import { TeamMember } from "../../data/aboutData";

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  return (
    <section className="w-full  py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl lg:text-5xl text-primary mb-4">
            Meet our Team
          </h1>
          <p className="text-secondary-black text-lg max-w-2xl mx-auto">
            The passionate individuals driving innovation and growth at Access 89
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

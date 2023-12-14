import React from "react";
import experience from "@/constants/experience.json";
import ExperienceChunk from "@/components/ExperienceChunk";

const ExperienceCard = () => (
  <div>
    <div className="flex flex-col sm:mt-0 mt-6 sm:gap-8 gap-12">
      {experience.map((experienceChunk, index) => (
        <ExperienceChunk key={index} {...experienceChunk} />
      ))}
    </div>
  </div>
);

export default ExperienceCard;

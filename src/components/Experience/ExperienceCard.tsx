import React from "react";
import experiences from "@/constants/experiences.json";
import ExperienceChunk from "@/components/Experience/ExperienceChunk";
import { Experience } from "@/types/types";

const ExperienceCard = () => (
  <div className="flex flex-col sm:gap-8 gap-12">
    {experiences.map((experience: Experience, index) => (
      <ExperienceChunk key={index} experience={experience} />
    ))}
  </div>
);

export default ExperienceCard;

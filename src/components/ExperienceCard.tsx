import React from "react";
import experience from "@/constants/experience.json";
import ExperienceChunk from "@/components/ExperienceChunk";

const ExperienceCard = () => (
  <div>
    <h2 className="text-small">Experience</h2>
    <div className="flex flex-col gap-8">
      {experience.map((experienceChunk, index) => (
        <ExperienceChunk
          key={index}
          fromDate={experienceChunk.fromDate}
          toDate={experienceChunk.toDate}
          role={experienceChunk.role}
          company={experienceChunk.company}
          description={experienceChunk.description}
          skills={experienceChunk.skills}
        />
      ))}
    </div>
  </div>
);

export default ExperienceCard;

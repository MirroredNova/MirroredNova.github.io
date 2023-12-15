import { Experience } from "@/types/types";
import React from "react";

type Props = {
  experience: Experience;
};

const ExperienceChunk = ({ experience }: Props) => (
  <div className="text-default-500 flex sm:flex-row flex-col sm:gap-4 gap-1">
    <div className="whitespace-nowrap min-w-[128px]">
      {`${experience.fromDate} - ${experience.toDate}`}
    </div>
    <div className="gap-2 flex flex-col">
      <div>
        <h3 className="font-extrabold text-default-600">
          {experience.company}
        </h3>
        <h4 className="text-small font-medium text-default-300">
          {experience.role}
        </h4>
      </div>
      <p>{experience.description}</p>
      <ul className="flex flex-row flex-wrap gap-4 font-light text-default-400">
        {experience.skills.map((skill, index) => (
          <li key={index} className="text-small">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ExperienceChunk;

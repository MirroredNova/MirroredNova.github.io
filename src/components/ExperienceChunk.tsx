import React from "react";

type Props = {
  fromDate: string;
  toDate: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
};

const ExperienceChunk = ({
  fromDate,
  toDate,
  role,
  company,
  description,
  skills,
}: Props) => (
  <div className="text-default-500 flex sm:flex-row flex-col sm:gap-4 gap-1">
    <div className="whitespace-nowrap min-w-[128px]">{`${fromDate} - ${toDate}`}</div>
    <div className="gap-2 flex flex-col">
      <div>
        <h3 className="font-bold">{company}</h3>
        <h4 className="text-small">{role}</h4>
      </div>
      <p>{description}</p>
      <ul className="flex flex-row gap-4 font-light text-default-400">
        {skills.map((skill, index) => (
          <li key={index} className="text-small">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ExperienceChunk;

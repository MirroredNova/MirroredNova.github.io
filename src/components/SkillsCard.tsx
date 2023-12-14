import React from "react";
import skills from "../constants/skills.json";

const SkillsCard = () => (
  <div className="text-default-500 flex flex-col gap-8">
    {skills.map((skill) => (
      <div key={skill.group} className="gap-4 flex flex-col">
        <div>
          <h3 className="font-bold">{skill.group}</h3>
          <p className="font-extralight pt-1">{skill.description}</p>
        </div>
        <div className="flex flex-row flex-wrap gap-4">
          {skill.skills.map((item) => (
            <div key={item} className="bg-default-100 rounded-md p-2">
              {item}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default SkillsCard;

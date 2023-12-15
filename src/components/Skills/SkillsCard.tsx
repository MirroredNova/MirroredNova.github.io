import React from "react";
import skills from "../../constants/skills.json";

const SkillsCard = () => (
  <div className="text-default-500 flex flex-col gap-8">
    {skills.map((skill) => (
      <div key={skill.group} className="gap-4 flex flex-col">
        <div>
          <h3 className="font-extrabold text-default-600">{skill.group}</h3>
          <p className="pt-1">{skill.description}</p>
        </div>
        <div className="flex flex-row flex-wrap gap-4">
          {skill.skills.map((item) => (
            <div
              key={item}
              className="border border-default-100 rounded-md px-2 py-1 font-light"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default SkillsCard;

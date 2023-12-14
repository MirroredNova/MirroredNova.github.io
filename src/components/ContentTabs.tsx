"use client";

import { Tabs, Tab } from "@nextui-org/react";
import React, { useState } from "react";
import { tabs } from "@/constants/constants";
import ContactCard from "./ContactCard";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import ProjectsCard from "./ProjectsCard";
import SkillsCard from "./SkillsCard";

export const components = {
  Experience: <ExperienceCard />,
  Education: <EducationCard />,
  Skills: <SkillsCard />,
  Projects: <ProjectsCard />,
  Contact: <ContactCard />,
};

const ContentTabs = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selected, setSelected] = useState<any>("Experience");

  return (
    <Tabs
      selectedKey={selected}
      onSelectionChange={setSelected}
      variant="underlined"
      disableAnimation
      classNames={{
        tabList: "p-0 flex flex-row gap-8",
        tab: "p-0 after:w-full",
        panel: "py-2",
      }}
    >
      {tabs.map((tab) => (
        <Tab key={tab.title} title={tab.title}>
          {components[tab.title as keyof typeof components]}
        </Tab>
      ))}
    </Tabs>
  );
};

export default ContentTabs;

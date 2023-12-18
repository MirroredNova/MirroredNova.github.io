"use client";

import { Tabs, Tab } from "@nextui-org/react";
import React, { useState } from "react";
import { tabs } from "@/constants/constants";
import ContactCard from "./Contact/ContactCard";
import EducationCard from "./Education/EducationCard";
import ExperienceCard from "./Experience/ExperienceCard";
import ProjectsCard from "./Project/ProjectsCard";
import SkillsCard from "./Skills/SkillsCard";

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
        tabList: "p-0 flex flex-row gap-2 sm:gap-8",
        tab: "p-0 after:w-full text-sm sm:text-base",
        panel: "p-0",
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

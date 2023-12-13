"use client";

import { Tabs, Tab } from "@nextui-org/react";
import React, { useState } from "react";
import { tabs } from "@/constants/constants";

const ContentTabs = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selected, setSelected] = useState<any>("Experience");

  return (
    <Tabs
      selectedKey={selected}
      onSelectionChange={setSelected}
      variant="underlined"
      disableAnimation
    >
      {tabs.map((tab) => (
        <Tab key={tab.title} title={tab.title}>
          {tab.component}
        </Tab>
      ))}
    </Tabs>
  );
};

export default ContentTabs;

import ExperienceCard from "@/components/ExperienceCard";
import { Tabs } from "@/types/types";

export const tabs: Tabs[] = [
  {
    title: "Experience",
    component: ExperienceCard(),
  },
  {
    title: "Education",
    component: ExperienceCard(),
  },
  {
    title: "Skills",
    component: ExperienceCard(),
  },
  {
    title: "Projects",
    component: ExperienceCard(),
  },
  {
    title: "Contact",
    component: ExperienceCard(),
  },
];

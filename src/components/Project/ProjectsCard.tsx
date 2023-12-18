import React from "react";
import { Project } from "@/types/types";
import projects from "../../constants/projects.json";
import ProjectChunk from "./ProjectChunk";

const ProjectsCard = () => (
  <div className="text-default-500 flex flex-col gap-4">
    <p>
      While this list isn&apos;t exhaustive, it highlights some of my most
      recent and pertinent personal projects. These projects serve as a
      testament to my current capabilities and reflect the depth of my
      experience in the field. I&apos;m continually exploring and contributing
      to innovative initiatives, and the following projects stand out as
      noteworthy examples of my recent work.
    </p>
    <div className="flex flex-col gap-12">
      {projects.map((project: Project, index) => (
        <ProjectChunk key={index} project={project} />
      ))}
    </div>
  </div>
);

export default ProjectsCard;

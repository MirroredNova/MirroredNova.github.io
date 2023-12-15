import React from "react";
import { Project } from "@/types/types";
import projects from "../../constants/projects.json";
import ProjectChunk from "./ProjectChunk";

const ProjectsCard = () => (
  <div className="flex flex-col gap-12">
    {projects.map((project: Project, index) => (
      <ProjectChunk key={index} project={project} />
    ))}
  </div>
);

export default ProjectsCard;

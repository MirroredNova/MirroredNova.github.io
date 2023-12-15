import { Project } from "@/types/types";
import Link from "next/link";
import React from "react";

type Props = {
  project: Project;
};

const ProjectChunk = ({ project }: Props) => (
  <div className="text-default-500 flex flex-col gap-3">
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <h2 className="font-extrabold text-default-600">{project.title}</h2>
        <h3 className="text-small font-medium text-default-300">
          {project.relation}
        </h3>
      </div>
      <div className="flex items-center">
        <h3 className="font-extralight">{project.status}</h3>
      </div>
    </div>
    <p>{project.description}</p>
    <div>
      <h3>Relevant Links:</h3>
      <ul className="list-disc text-small text-default-300">
        {project.links.map((link, index) => (
          <li key={index} className="ml-4">
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProjectChunk;

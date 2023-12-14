import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

type Props = {
  name: string;
  semester: string;
  description: string;
};

const CourseChunk = ({ name, semester, description }: Props) => (
  <Accordion isCompact className="px-0">
    <AccordionItem
      title={<span className="text-default-500">{name}</span>}
      subtitle={<span className="font-extralight">{semester}</span>}
      classNames={{
        trigger: "py-0",
        content: "px-4 py-2",
      }}
      textValue={description}
    >
      <p className="text-default-500 font-light">{description}</p>
    </AccordionItem>
  </Accordion>
);

export default CourseChunk;

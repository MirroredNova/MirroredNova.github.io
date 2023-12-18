import { Course } from "@/types/types";
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

type Props = {
  course: Course;
};

const CourseChunk = ({ course }: Props) => (
  <Accordion isCompact className="px-0">
    <AccordionItem
      title={
        <span className="text-default-500">
          {course.name}: {course.number}
        </span>
      }
      subtitle={<span className="font-extralight">{course.semester}</span>}
      classNames={{
        trigger: "py-0",
        content: "px-4 py-2",
      }}
      textValue={course.description}
    >
      <p className="text-default-500 font-light">{course.description}</p>
    </AccordionItem>
  </Accordion>
);

export default CourseChunk;

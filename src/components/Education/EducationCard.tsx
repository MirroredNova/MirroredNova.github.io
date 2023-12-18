import React from "react";
import { Course } from "@/types/types";
import courses from "../../constants/courses.json";
import CourseChunk from "./CourseChunk";

const EducationCard = () => (
  <div className="text-default-500 flex flex-col">
    <div className="gap-4 flex flex-col">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="font-extrabold text-default-600">
            University of Wisconsin - Madison
          </h2>
          <h3 className="text-small font-medium text-default-300">
            Bachelor of Science in Computer Science and Mathematics
          </h3>
        </div>
        <div className="flex items-center">
          <h3 className="font-extralight">2018 - 2022</h3>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          I took many courses throughout college. Here are the courses that are
          relevant to my field. I did not include courses for my Mathematics
          major.
        </p>
        <h3 className="font-extrabold text-default-600">Courses:</h3>
        <div className="flex flex-col gap-4">
          {courses.map((course: Course) => (
            <CourseChunk key={course.name} course={course} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default EducationCard;

import React from "react";
import courses from "../constants/courses.json";
import CourseChunk from "./CourseChunk";

const EducationCard = () => (
  <div className="text-default-500 flex flex-col">
    <div className="gap-4 flex flex-col">
      <div>
        <h3 className="font-bold text-xl">University of Wisconsin - Madison</h3>
        <h4 className="text-small font-medium">
          Bachelor of Science in Computer Science and Mathematics
        </h4>
        <p className="font-extralight pt-1">2018 - 2022</p>
      </div>
      <div>
        <h3 className="font-bold">Courses:</h3>
        <div className="flex flex-col gap-4">
          {courses.map((course) => (
            <CourseChunk key={course.name} {...course} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default EducationCard;

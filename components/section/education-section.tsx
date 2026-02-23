import React from "react";
import Title from "../ui/title";
import { GraduationCap, BookOpen } from "lucide-react";
import { education } from "@/lib/data";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="flex flex-col w-full max-w-4xl items-center"
    >
      <Title
        title="Education"
        subtitle="Academic background"
        className="mb-6 md:mb-12"
      />
      <div className="grid grid-cols-1 gap-4 md:gap-6 w-full">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg border-2 overflow-hidden w-full shadow-sm"
          >
            <div className="flex w-full items-center p-3 md:p-4 gap-x-3 bg-muted border-b">
              <div className="flex bg-sky-100 text-blue-400 border-sky-200 p-1.5 border rounded-md">
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col gap-y-0.5 flex-1">
                <p className="text-xs md:text-sm font-medium text-foreground">
                  {edu.institution}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap gap-x-2 gap-y-0.5">
                  <p className="text-[10px] md:text-xs text-muted-foreground">
                    {edu.degree}
                  </p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">
                    {edu.duration}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 md:p-4 flex flex-col gap-y-3 bg-white dark:bg-popover">
              <p className="text-xs md:text-sm text-foreground font-medium">
                CGPA: {edu.cgpa}
              </p>
              <div className="flex flex-col gap-y-1.5">
                <div className="flex items-center gap-x-2 text-xs md:text-sm text-foreground font-medium">
                  <BookOpen className="w-3.5 h-3.5 shrink-0" />
                  <span>Relevant Coursework</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course, i) => (
                    <span
                      key={i}
                      className="text-[10px] md:text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md border"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

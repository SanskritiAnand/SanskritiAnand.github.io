import React from "react";
import ExperienceCard from "../component/experience-card";
import Title from "../ui/title";
import { Briefcase, Code } from "lucide-react";
import { experience } from "@/lib/data";

const experienceIcons = [Briefcase, Code];

const ServiceSection = () => {
  return (
    <section className="flex flex-col w-full max-w-4xl items-center" id="services">
      <Title
        title="Experience"
        subtitle="Where I've worked"
        className="mb-6 md:mb-12"
      />
      <div className="grid grid-cols-1 gap-4 md:gap-6 w-full">
        {experience.map((exp, index) => (
          <ExperienceCard
            key={index}
            icon={experienceIcons[index % experienceIcons.length]}
            company={exp.company}
            role={exp.role}
            mode={exp.mode}
            duration={exp.duration}
            bullets={exp.bullets}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;

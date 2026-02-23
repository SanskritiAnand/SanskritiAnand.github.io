import React from "react";
import Title from "../ui/title";
import ProjectCard from "../component/project-card";
import { Plane, Coins } from "lucide-react";
import { projects } from "@/lib/data";

const projectIcons = [Plane, Coins];

const TestimonialSection = () => {
  return (
    <section
      className="flex flex-col w-full max-w-4xl items-center"
      id="testimonials"
    >
      <Title
        title="Projects"
        subtitle="Things I've built"
        className="mb-6 md:mb-12"
      />
      <div className="grid grid-cols-1 gap-4 md:gap-6 w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            icon={projectIcons[index % projectIcons.length]}
            title={project.title}
            subtitle={project.subtitle}
            bullets={project.bullets}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;

import React from "react";
import Title from "../ui/title";
import AboutCard from "../component/about-card";
import Badge from "../ui/badge";

const AboutSection = () => {
  return (
    <section className="flex flex-col w-full max-w-4xl items-center" id="about">
      <Title
        title="About"
        subtitle="Get to know me better"
        className="mb-6 md:mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 w-full gap-y-8 gap-x-0 md:gap-x-8">
        <div className="col-span-2 flex flex-col">
          <p className="text-sm md:text-base text-muted-foreground">
            Hi! I'm Sanskriti Anand, a full-stack developer and designer from India.
            I try to craft unique and creative digital experiences.
            <span className="h-6 block" />
            I've been programming for 4 years, it all started when covid-19
            struck and now I'm here. I've worked with startups, research organizations to build scalable, user-centric products.
            <span className="h-6 block" />
            I always loved coding in general, but frontend development is my
            piece of cake, alongside with design and product development.
            <span className="h-6 block" />
            Today, I focus on crafting conversion-focused, SEO-optimized, and
            cool-looking websites for businesses and individuals, helping them
            stand out from the crowd.
              <span className="h-6 block" />
           I care about design, performance, and clarity-building interfaces that look great, load fast, and actually convert.
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-4 md:gap-6">
          <AboutCard />
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="w-fit text-sm px-2 py-1">Figma</Badge>
            <Badge className="w-fit text-sm px-2 py-1">React</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Next</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Express</Badge>
            <Badge className="w-fit text-sm px-2 py-1">MongoDB</Badge>
            <Badge className="w-fit text-sm px-2 py-1">REST APIs</Badge>
            <Badge className="w-fit text-sm px-2 py-1">AWS</Badge>
            <Badge className="w-fit text-sm px-2 py-1">CI/CD</Badge>
            <Badge className="w-fit text-sm px-2 py-1">MySQL</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Git / GitHub</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

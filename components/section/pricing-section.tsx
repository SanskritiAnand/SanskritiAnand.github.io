import React from "react";
import Title from "../ui/title";
import { achievements } from "@/lib/data";
import { BookOpen, Trophy, Users, Code2, Award, ExternalLink, LucideIcon } from "lucide-react";
import Link from "next/link";

const achievementIcons: Record<string, LucideIcon> = {
  "Publications": BookOpen,
  "Hackathons & Competitions": Trophy,
  "Leadership & Community": Users,
  "Competitive Programming": Code2,
};

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="flex flex-col w-full max-w-4xl items-center"
    >
      <Title
        title="Achievements & Recognition"
        subtitle="Milestones & recognitions"
        className="mb-6 md:mb-12"
      />
      <div className="grid grid-cols-1 gap-4 md:gap-6 w-full">
        {achievements.map((group, index) => {
          const Icon = achievementIcons[group.category] || Award;
          return (
            <div
              key={index}
              className="flex flex-col rounded-lg border-2 overflow-hidden w-full shadow-sm"
            >
              <div className="flex w-full items-center p-3 md:p-4 gap-x-3 bg-muted border-b">
                <div className="flex bg-sky-100 text-blue-400 border-sky-200 p-1.5 border rounded-md">
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <p className="text-xs md:text-sm font-medium text-foreground flex-1">
                  {group.category}
                </p>
                {group.link && (
                  <Link href={group.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
              </div>
              <ul className="p-3 md:p-4 flex flex-col gap-y-2 bg-white dark:bg-popover">
                {group.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-xs md:text-sm text-muted-foreground leading-tight flex gap-x-2"
                  >
                    <span className="mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingSection;

import { cn } from "@/lib/utils";
import { LucideIcon, Briefcase } from "lucide-react";
import React from "react";

const ExperienceCard = ({
  className,
  icon: Icon = Briefcase,
  company,
  role,
  mode,
  duration,
  bullets,
}: {
  className?: string;
  icon?: LucideIcon;
  company: string;
  role: string;
  mode: string;
  duration: string;
  bullets: string[];
}) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border-2 overflow-hidden w-full h-auto shadow-sm",
        className
      )}
    >
      <div className="flex w-full items-center p-3 md:p-4 gap-x-3 bg-muted border-b">
        <div className="flex bg-sky-100 text-blue-400 border-sky-200 p-1.5 border rounded-md">
          <Icon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div className="flex flex-col gap-y-0.5 flex-1">
          <p className="text-xs md:text-sm font-medium text-foreground">
            {company}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap gap-x-2 gap-y-0.5">
            <p className="text-[10px] md:text-xs text-muted-foreground">
              {role} · {mode}
            </p>
            <p className="text-[10px] md:text-xs text-muted-foreground">
              {duration}
            </p>
          </div>
        </div>
      </div>
      <ul className="p-3 md:p-4 flex flex-col gap-y-2 bg-white dark:bg-popover">
        {bullets.map((bullet, i) => (
          <li
            key={i}
            className="text-xs md:text-sm text-muted-foreground leading-tight flex gap-x-2"
          >
            <span className="mt-1 shrink-0">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;

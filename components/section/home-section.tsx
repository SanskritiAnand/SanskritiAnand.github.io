import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeSection = () => {
  return (
    <section className="flex flex-col w-full max-w-4xl items-center" id="home">
      <div className="flex flex-col w-full justify-center items-center text-center max-w-3xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 md:mb-6">
          Product & UI/UX Designer
          <br></br>Designing Scalable, User-Centered Digital Products
        </h1>
        <div className="flex items-center justify-center gap-x-4 gap-y-4 flex-wrap">
          <Link href="https://drive.google.com/file/d/1uwlzmvsh56TqKpHPiy6qBSCVV-cWJOhj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Button className="border-2 py-1.5 h-fit">
              Resume
            </Button>
          </Link>
          <Link href="https://cal.com/sanskritianand" target="_blank" rel="noopener noreferrer">
            <Button
              className="border-2 py-1.5 h-fit bg-white dark:bg-secondary"
              variant="secondary"
            >
              Schedule a call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

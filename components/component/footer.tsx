import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full border-t flex gap-x-8 gap-y-4 pad-x py-5 justify-between flex-wrap">
      <code className="text-xs md:text-sm text-muted-foreground w-auto grow">© 2026 Sanskriti Anand</code>
      <div className="flex items-center gap-x-4 md:gap-x-6 justify-between w-auto md:w-fit grow sm:grow-0">
        <Link href="https://x.com/Sanskriti_eeh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Twitter className="w-4 h-4 md:w-5 md:h-5" />
        </Link>
        <Link href="https://www.linkedin.com/in/sanskritianand46/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
        </Link>
        <Link href="https://github.com/sanskritianand" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github className="w-4 h-4 md:w-5 md:h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

"use client";

import React, { useState, useRef, useEffect } from "react";
import Profile from "./profile";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#RESUME_LINK", external: true },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full border-b pad-x py-3 flex justify-center sticky top-0 bg-background z-10">
      <div className="flex items-center justify-between gap-x-8 max-w-4xl w-full">
        <Profile
          imageAlt="@sanskritianand"
          imageUrl="https://github.com/sanskritianand.png"
          name="Sanskriti Anand"
          subtitle="Software Engineer"
        />
        <nav className="flex items-center gap-x-2 md:gap-x-4">
          <ModeToggle />

          <div ref={menuRef} className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="bg-muted hover:bg-secondary hover:text-secondary-foreground text-muted-foreground border rounded-lg p-1.5 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-background border-2 rounded-lg shadow-lg py-2 z-20">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

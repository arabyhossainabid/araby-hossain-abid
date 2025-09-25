"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Github,
  Linkedin,
  TextSelect,
  Mail,
  House,
  CodeXml,
  UserRound,
} from "lucide-react";

export function FloatingDockDemo() {
  const links = [
    { title: "Home", icon: <House className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/" },
    { title: "About Me", icon: <UserRound className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/about-us" },
    { title: "Projects", icon: <CodeXml className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/projects" },
    { title: "Blog", icon: <TextSelect className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/blog" },
    { title: "Contact", icon: <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/contact" },
    { title: "Linkedin", icon: <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://www.linkedin.com/in/araby-hossain-abid-6790a5318/" },
    { title: "GitHub", icon: <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://github.com/arabyhossainabid" },
  ];

  return (
    <div>
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}

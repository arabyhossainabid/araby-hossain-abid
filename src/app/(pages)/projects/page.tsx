"use client";

import { motion } from "motion/react";
import SomthingSection from '@/components/home-page-ui/somthing-section';
import ProjectsHero from "@/components/projects-page-ui/projects-hero";
import ProjectsStats from "@/components/projects-page-ui/projects-stats";
import ProjectsGrid from "@/components/projects-page-ui/projects-grid";

// Reusable animation wrapper
const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function ProjectsPage() {
  return (
    <section className="overflow-hidden bg-[#0d0d0d]">
      <ProjectsHero />

      <FadeUp delay={0}>
        <ProjectsStats />
      </FadeUp>

      <FadeUp delay={0.1}>
        <ProjectsGrid />
      </FadeUp>

      <FadeUp delay={0.15}>
        <SomthingSection />
      </FadeUp>
    </section>
  );
}
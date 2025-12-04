"use client";

import { motion } from "motion/react";
import AccordionsPages from '@/components/about-page-ui/accordions-page';
import ContactMe from '@/components/contact-page-ui/contact-me';
import DesignScroll from '@/components/home-page-ui/design-scroll';
import HeroSection from '@/components/home-page-ui/hero-section';
import SomthingSection from '@/components/home-page-ui/somthing-section';

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

export default function ContactPage() {
  return (
    <section className="overflow-hidden">
      <ContactMe />

      <FadeUp delay={0}>
        <HeroSection />
      </FadeUp>

      <FadeUp delay={0.1}>
        <DesignScroll />
      </FadeUp>

      <FadeUp delay={0.15}>
        <AccordionsPages />
      </FadeUp>

      <FadeUp delay={0.2}>
        <SomthingSection />
      </FadeUp>
    </section>
  );
}
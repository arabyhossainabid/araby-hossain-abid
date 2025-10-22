"use client";
import React from 'react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import LogoLoop from '../LogoLoop';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

function HeroSection() {
  return (
    <section className="container mx-auto max-w-7xl my-40 lg:mt-60 mb-10 bg-gradient-to-br overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="text-center mx-auto max-w-6xl w-auto mb-12">
          <h2 className="text-3xl md:text-6xl font-medium leading-tight text-center bg-gradient-to-r from-stone-800/100
     via-gray-100 to-stone-800/100 bg-clip-text text-transparent mb-10">
            Elevate your <span className="font-bold">web</span> presence
            with modern <span className="font-bold">frontend</span> experiences.
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10">
            Passionate Frontend Developer skilled in React.js, Next.js, and Tailwind CSS. Adept at building
            responsive, user-friendly web applications with clean and efficient code. Seeking an opportunity to
            apply creativity and technical expertise to deliver seamless user experiences.
          </p>
        </div>

        <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#0d0d0d"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

"use client";

import React from "react";
import { FlipWords } from "../ui/flip-words";
import { BackgroundBeams } from "../ui/background-beams";

function Banner() {
  const words = ["React", "Next.js", "TailwindCSS", "Aceternity UI"];

  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <BackgroundBeams />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center max-w-4xl space-y-10 px-4">
        {/* Heading */}
        <h2
          className="text-4xl md:text-6xl font-bold leading-tight text-center
          bg-gradient-to-r from-stone-500/100 via-gray-100 to-stone-500/100
          bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Unlimited design at <br /> the next level.
        </h2>

        {/* FlipWords */}
        <div
          className="text-4xl md:text-6xl font-bold py-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Build <FlipWords words={words} />
        </div>

        {/* Paragraph */}
        <p
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Unlimited, high-quality design—plus a frontend developer skilled <br />
          in React, Next.js, and Tailwind CSS creating responsive, user-friendly websites.
        </p>

        {/* Button */}
        <div
          className="flex flex-col sm:flex-row gap-6 mt-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <button
            className="px-10 py-4 text-lg font-semibold rounded-full bg-[#deff00] text-black
                       transition-all duration-300 active:scale-95
                       shadow-[0_0_0px_0_#deff00] hover:shadow-[0_0_15px_0px_#deff00]"
          >
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;

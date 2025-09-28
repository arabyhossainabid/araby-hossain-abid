"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import { cn } from "@/lib/utils";

function SomthingSection() {
  const router = useRouter();

  const handleprojectClick = () => {
    router.push("/projects");
  };

  return (
    <section data-aos="fade-up" data-aos-delay="150" className="relative mt-20 container mx-auto max-w-6xl rounded-3xl flex items-center justify-center h-screen w-full overflow-hidden">
      <BackgroundRippleEffect rows={8} cols={27} cellSize={56} />

      <div className="absolute inset-0 bg-gradient-to-b z-0" />

      <div className="relative z-10 -top-44 text-center px-4 max-w-2xl">
        <h1 data-aos="fade-up" data-aos-delay="150" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Hi, I'm <span className="text-lime-400">Araby Hossain Abid</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="150" className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
          I build fast, modern, and responsive web applications using React, Next.js, Tailwind CSS, and DaisyUI.
        </p>
        <p data-aos="fade-up" data-aos-delay="150" className="mt-4 text-gray-400 text-base sm:text-lg">
          Let's create amazing digital experiences together.
        </p>

        <button data-aos="fade-up" data-aos-delay="150"
          onClick={handleprojectClick}
          className="mt-8 px-8 py-3 font-semibold rounded-full bg-[#deff00] text-black
                       transition-all duration-300 active:scale-95
                       shadow-[0_0_0px_0_#deff00] hover:shadow-[0_0_15px_0px_#deff00]"
        >
          Start a Project
        </button>
      </div>
    </section>
  );
}

export default SomthingSection;

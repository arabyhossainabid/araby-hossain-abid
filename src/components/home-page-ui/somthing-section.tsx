"use client";
import React from "react";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import { cn } from "@/lib/utils";

function SomthingSection() {
  const handleContactClick = () => {
    // Add your contact logic here
    console.log("Start a Project clicked!");
  };

  return (
    <section className="relative my-20 container mx-auto max-w-6xl rounded-3xl flex items-center justify-center h-screen w-full overflow-hidden">
      {/* Background ripple animation */}
      <BackgroundRippleEffect rows={8} cols={27} cellSize={56} />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b z-0" />

      {/* Overlay text */}
      <div className="relative z-10 -top-44 text-center px-4 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Hi, I'm <span className="text-lime-400">Araby Hossain Abid</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
          I build fast, modern, and responsive web applications using React, Next.js, Tailwind CSS, and DaisyUI.
        </p>
        <p className="mt-4 text-gray-400 text-base sm:text-lg">
          Let's create amazing digital experiences together.
        </p>
        <button
          onClick={handleContactClick}
          className="mt-8 px-8 py-3 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-lime-400/25"
        >
          Start a Project
        </button>
      </div>
    </section>
  );
}

export default SomthingSection;
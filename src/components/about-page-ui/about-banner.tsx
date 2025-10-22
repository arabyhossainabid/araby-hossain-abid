"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function AboutBanner() {
  const router = useRouter();

  const handleprojectClick = () => {
    router.push("/projects");
  };

  const handleblogClick = () => {
    router.push("/blog");
  };

  const gradientText =
    "bg-gradient-to-r from-stone-500/100 via-gray-100 to-stone-500/100 bg-clip-text text-transparent";

  return (
    <section className="max-w-6xl mx-auto flex border-b border-gray-600/30 flex-col items-center justify-center py-20">

      <div data-aos="fade-up" data-aos-delay="100">
        <h2
          className={`text-4xl md:text-5xl font-bold leading-tight text-center ${gradientText}`}
          data-aos="fade-up"
        >
          Turning your ideas into modern, <br /> responsive web experiences.
        </h2>
      </div>


      <div data-aos="fade-up" data-aos-delay="200">
        <p className="mt-4 max-w-xl text-center text-gray-400">
          I turn your ideas into engaging, responsive web applications with
          clean design, modern technology, and smooth user experiences.
        </p>
      </div>


      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        <button
          onClick={handleprojectClick}
          className="mt-8 px-8 py-3 font-semibold rounded-full bg-[#deff00] text-black
                       transition-all duration-300 active:scale-95
                       shadow-[0_0_0px_0_#deff00] hover:shadow-[0_0_15px_0px_#deff00]"
        >
          Start a Project
        </button>

        <InteractiveHoverButton
          onClick={handleblogClick}
          className="mt-8 px-8 py-3 border border-lime-400 font-medium rounded-full"
        >
          View Portfolio
        </InteractiveHoverButton>
      </div>


      <div className="mt-16 flex flex-col md:flex-row items-center gap-8">

        <div
          data-aos="fade-down-right"
          className="w-52 h-80 rounded-full overflow-hidden"
        >
          <Image
            src="/image/coding.svg"
            alt="Frontend Development Left"
            width={320}
            height={240}
            className="h-full w-full object-cover"
          />
        </div>


        <div
          data-aos="fade-up"
          className="w-80 h-80 rounded-2xl overflow-hidden"
        >
          <Image
            src="/image/coding.svg"
            alt="Frontend Development Middle"
            width={320}
            height={240}
            className="h-full w-full object-cover"
          />
        </div>


        <div
          data-aos="fade-down-left"
          className="w-52 h-80 rounded-full overflow-hidden"
        >
          <Image
            src="/image/coding.svg"
            alt="Frontend Development Right"
            width={320}
            height={240}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { FlipWords } from "../ui/flip-words";
import { useRouter } from "next/navigation";
import Hyperspeed from "../ui/hyperspeed";
import person from "../../../public/image/BannerImage.svg";
import Image from "next/image";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

function Banner() {
  const router = useRouter();
  const words = ["React", "Next.js", "TailwindCSS", "React Bits", "Aceternity UI"];

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <section data-aos="fade-up" data-aos-delay="0" className="relative max-w-screen max-h-screen py-32 overflow-hidden">

      <div className="absolute inset-0 -z-10 max-w-screen max-h-screen">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>


      <div className="relative z-10 container mx-auto max-w-screen max-h-screen flex justify-around items-center px-6">

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">

          <h2 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-stone-500/100 via-gray-100 to-stone-500/100 bg-clip-text text-transparent">
            Unlimited design at <br /> the next level.
          </h2>

          <div className="text-4xl md:text-6xl font-bold py-2">
            Build <FlipWords words={words} />
          </div>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
            Unlimited, high-quality design—plus a frontend developer skilled <br />
            in React, Next.js, and Tailwind CSS creating responsive, user-friendly websites.
          </p>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:justify-start mt-6">
            <button
              onClick={handleContactClick}
              className="px-10 py-4 text-lg font-semibold rounded-full bg-[#deff00] text-black
                       transition-all duration-300 active:scale-95
                       shadow-[0_0_0px_0_#deff00] hover:shadow-[0_0_15px_0px_#deff00]"
            >
              Contact Now
            </button>
            <InteractiveHoverButton
              className="py-3 border border-[#deff00] font-medium rounded-full"
            >
              View Projects
            </InteractiveHoverButton>
          </div>
        </div>

        <div className="relative w-[300px] h-[450px] lg:w-[440px] lg:h-[590px] flex-shrink-0 hidden md:block">
          <Image
            src={person}
            alt="Person"
            fill
            priority
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Banner;

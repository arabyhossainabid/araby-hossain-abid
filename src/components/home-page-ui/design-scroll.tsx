"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

function DesignScroll() {
  const content = [
    {
      title: "Frontend Development",
      description:
        "I create fast, responsive, and modern web applications using React, Next.js, Tailwind CSS, and DaisyUI. My goal is to deliver seamless user experiences while maintaining high performance.",
      content: (
        <Image
          src="/image/coding.svg"
          alt="Frontend Development"
          width={320}
          height={240}
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Creative UI & Animations",
      description:
        "I design interactive and visually appealing interfaces with smooth animations and micro-interactions, using GSAP to create dynamic motion that enhances the user journey by combining creativity with usability.",
      content: (
        <Image
          src="/image/animation.svg"
          alt="UI Animation"
          width={320}
          height={240}
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Problem Solving & Innovation",
      description:
        "I tackle complex frontend challenges with innovative solutions, ensuring every project not only works flawlessly but also pushes the boundaries of modern web design.",
      content: (
        <Image
          src="/image/problem-solving.svg"
          alt="Problem Solving"
          width={320}
          height={240}
          className="h-full w-full object-cover"
        />
      ),
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto my-10 sm:my-16 lg:my-20">
      <h2 className="text-3xl pb-10 md:text-5xl font-medium leading-tight text-center bg-gradient-to-r from-stone-800/100
         via-gray-100 to-stone-800/100 bg-clip-text text-transparent">
        My<span className="font-bold">Journey</span> as a,<br />
        Frontend <span className="font-bold">Developer</span>
      </h2>
      <StickyScroll content={content} />
    </div>
  );
}

export default DesignScroll;
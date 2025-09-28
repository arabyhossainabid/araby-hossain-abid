"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CometCard } from "../ui/comet-card";

const projects = [
  { id: 1, title: "Portfolio Website", subtitle: "Next.js / Tailwind / Animation", img: "/image/coding.svg" },
  { id: 2, title: "Recipes Bookmark App", subtitle: "React / Context API / JSON Data", img: "/image/coding.svg" },
  { id: 3, title: "Career Hub", subtitle: "Job Search Platform / Responsive UI", img: "/image/coding.svg" },
  { id: 4, title: "Billing Form", subtitle: "NextUI / Tailwind / Validation", img: "/image/coding.svg" },
  { id: 5, title: "KnowMe Section", subtitle: "Dynamic About Page / Motion Effects", img: "/image/coding.svg" },
  { id: 6, title: "Error Page", subtitle: "Custom 404 / Tailwind / Responsive", img: "/image/coding.svg" },
];

function Work() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      {/* Heading */}
      <h2 data-aos="fade-up" data-aos-delay="150" className="text-5xl md:text-7xl pb-10 lg:pb-20 font-medium leading-tight text-start bg-gradient-to-r from-stone-600/100
         via-gray-100 to-stone-800/100 bg-clip-text text-transparent">
        Take<span className="font-bold">a look</span> at<br />
        my <span className="font-bold">past</span> work
      </h2>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <CometCard key={p.id}>
            <div className="bg-[#111] p-5 rounded-2xl overflow-hidden hover:bg-[#1a1a1a] transition-colors duration-300">
              {/* Image */}
              <div className="relative">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover rounded-t-2xl"
                />
              </div>

              {/* Content */}
              <div className="flex justify-between items-center py-4">
                <div>
                  <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                  <p className="text-xs text-gray-400">{p.subtitle}</p>
                </div>
                <button className="bg-[#1a1a1a] border border-gray-700 w-8 h-8 rounded-full flex items-center justify-center text-white">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </CometCard>
        ))}
      </div>
    </section>
  );
}

export default Work;

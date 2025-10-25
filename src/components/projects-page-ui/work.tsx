"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CometCard } from "../ui/comet-card";

const projects = [
  { id: 1, title: "Mojito", subtitle: "Dynamic About Page / Motion Effects", img: "/image/gsap.svg" },
  { id: 2, title: "Career Hub", subtitle: "Job Search Platform / Responsive UI", img: "/image/dream-job.svg" },
  { id: 3, title: "Medical Service", subtitle: "NextUI / Tailwind / Validation", img: "/image/medical-service.svg" },
  { id: 4, title: "Portfolio Website", subtitle: "Next.js / Tailwind / Animation", img: "/image/cover.svg" },
];

function Work() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">

      <h2 data-aos="fade-up" data-aos-delay="150" className="text-5xl md:text-7xl pb-10 lg:pb-20 font-medium leading-tight text-start bg-gradient-to-r from-stone-600/100
         via-gray-100 to-stone-800/100 bg-clip-text text-transparent">
        Take<span className="font-bold">a look</span> at<br />
        my <span className="font-bold">past</span> work
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <CometCard key={p.id}>
            <div className="bg-[#111] p-5 rounded-2xl overflow-hidden hover:bg-[#1a1a1a] transition-colors duration-300">

              <div className="relative">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover rounded-t-2xl"
                />
              </div>

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

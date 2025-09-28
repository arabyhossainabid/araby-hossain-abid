"use client";
import React from "react";
import Image from "next/image";
import { CometCard } from "@/components/ui/comet-card";

export default function Management() {
  const posts = [
    {
      tag: "Frontend Dev",
      title: "React & Next.js UI",
      desc: "Build modern, responsive interfaces with clean, reusable React components.",
      img: "/image/web_developer.png",
    },
    {
      tag: "Optimization",
      title: "Fast & Efficient",
      desc: "Boost performance with lazy loading, code-splitting, and smart state.",
      img: "/image/web_developer.png",
    },
    {
      tag: "Tech Stack",
      title: "Smart Choices",
      desc: "Select frameworks and tools that scale for modern frontend projects.",
      img: "/image/web_developer.png",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-medium leading-tight text-center bg-gradient-to-r from-stone-800/100
         via-gray-100 to-stone-800/100 bg-clip-text text-transparent">
          Keep<span className="font-bold"> learning</span> with my,<br />
          frontend <span className="font-bold">projects</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-3 mt-10">
          {posts.map((post, i) => (
            <CometCard key={i} className="rounded-2xl">
              <div className="bg-[#111] p-2 rounded-2xl text-left hover:bg-[#1a1a1a] transition-colors duration-300">
                <div className="rounded-xl overflow-hidden mb-4">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <span className="inline-block bg-gray-800 text-gray-200 text-sm px-3 py-1 rounded-full mb-2">
                  {post.tag}
                </span>

                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{post.desc}</p>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </section>
  );
}

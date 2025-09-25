"use client";
import React from "react";
import Image from "next/image";
import { CometCard } from "@/components/ui/comet-card";

export default function Management() {
  const posts = [
    {
      tag: "Frontend Development",
      title: "Modern React & Next.js UIs",
      desc: "Building fast, responsive, and accessible React & Next.js interfaces.",
      img: "/image/web_developer.png",
    },
    {
      tag: "Frontend Development",
      title: "Performance & Optimization",
      desc: "Improving page speed with code-splitting, lazy loading and smart state management.",
      img: "/image/web_developer.png",
    },
    {
      tag: "Design & Dev",
      title: "Choosing the Right Tech Stack",
      desc: "Picking tools and frameworks that scale well for modern frontend projects.",
      img: "/image/web_developer.png",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12">
          Keep <span className="text-gray-300 font-light">growing</span> with my{" "}
          <span className="text-gray-300 font-light">frontend blog.</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
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

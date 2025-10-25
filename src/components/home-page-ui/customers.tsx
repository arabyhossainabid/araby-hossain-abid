"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Full Stack Web Developer",
    role: "Abid Hussain",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "I create responsive and high-performance websites and web applications using React, Next.js, and Tailwind CSS. My focus is on clean code, smooth animations, and enhancing the overall user experience.",
    rating: 5,
  },
  {
    name: "Startup Founder",
    role: "Client",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Abid delivered our web application with precision and creativity. The user interface is intuitive, visually appealing, and the site performs flawlessly on all devices.",
    rating: 5,
  },
  {
    name: "Product Manager",
    role: "Client",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "Working with Abid was seamless. He brought our vision to life with modern frontend technologies, responsive layouts, and interactive elements that truly enhance user engagement.",
    rating: 4.5,
  },
  {
    name: "Designer",
    role: "Creative Partner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Abid’s frontend expertise is impressive. He perfectly integrates animations, responsive design, and usability into every project. Collaborating with him is always a great experience.",
    rating: 5,
  },
];


export default function Customers() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 md:px-12 lg:px-20 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-medium leading-tight bg-gradient-to-r from-stone-800/100 via-gray-100 to-stone-800/100 bg-clip-text text-transparent">
          My <span className="font-bold">clients</span> think
          <br />
          about <span className="font-bold">my</span> work
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <Card key={i} className="h-full flex flex-col bg-[#111] hover:bg-[#1a1a1a] transition-colors duration-300">
            <CardContent className="flex flex-col h-full p-6">
              {/* Rating */}
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, idx) => {
                  const fullStar = idx + 1 <= Math.floor(t.rating);
                  const halfStar = idx + 0.5 === t.rating;
                  return (
                    <Star
                      key={idx}
                      size={18}
                      className={`${
                        fullStar
                          ? "text-yellow-400 fill-yellow-400"
                          : halfStar
                          ? "text-yellow-400 fill-yellow-400 opacity-60"
                          : "text-gray-600"
                      }`}
                    />
                  );
                })}
              </div>

              {/* Review */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                {t.review}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 mt-auto">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

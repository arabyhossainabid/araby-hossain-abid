"use client";
import React from "react";
import { CometCard } from "@/components/ui/comet-card";
import { Star } from "lucide-react"; // স্টার আইকনের জন্য

const testimonials = [
  {
    name: "Araby Hossain Abid",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Working with modern frontend tools like React, Next.js, and Tailwind CSS has been an incredible journey. I focus on building clean, responsive, and high-performance websites for businesses and individuals.",
    rating: 4.5,
  },
  {
    name: "Client Feedback",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Abid helped us design and develop a user-friendly web application with speed and precision. The communication was seamless and he delivered beyond our expectations.",
    rating: 5,
  },
  {
    name: "Happy Client",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "It was an absolute pleasure working with Abid. His frontend expertise made our vision come to life exactly as we imagined. Highly recommend him for any web project.",
    rating: 4.5,
  },
  {
    name: "Creative Partner",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Abid’s frontend development skills are top-notch. From animations to responsive layouts, everything was handled perfectly. I look forward to collaborating again.",
    rating: 5,
  },
];

function Customers() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 md:px-12 lg:px-20 text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-medium leading-tight text-center bg-gradient-to-r from-stone-800/100
         via-gray-100 to-stone-800/100 bg-clip-text text-transparent">
          My<span className="font-bold">clients</span> think<br />
          about <span className="font-bold">my</span> work
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <CometCard key={i}>
            <div className="bg-[#111] rounded-2xl p-6 text-left hover:bg-[#1a1a1a] transition-colors duration-300">
              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className={`${idx + 1 <= Math.floor(t.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : idx < t.rating
                        ? "text-yellow-400 fill-yellow-400 opacity-60"
                        : "text-gray-600"
                      }`}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {t.review}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          </CometCard>
        ))}
      </div>
    </section>
  );
}

export default Customers;

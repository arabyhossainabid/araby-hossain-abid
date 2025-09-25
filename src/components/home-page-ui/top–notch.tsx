"use client";
import React from "react";
import { Bell, Database, LifeBuoy } from "lucide-react";
import { CometCard } from "../ui/comet-card";
import { AnimatedTooltip } from "../ui/animated-tooltip";

function Topnotch() {
  const avatars = [
    { id: 1, name: "Alice", designation: "Designer", image: "https://randomuser.me/api/portraits/women/65.jpg" },
    { id: 2, name: "Micheal", designation: "Developer", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, name: "Sophia", designation: "Product Manager", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 4, name: "", designation: "", image: "" }, // dark placeholder
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-medium leading-tight text-center bg-gradient-to-r from-stone-800/100
         via-gray-100 to-stone-800/100 bg-clip-text text-transparent">
          Top–<span className="font-bold">notch</span> designs,<br />
          delivered at <span className="font-bold">your</span> doorstep
        </h2>


        {/* Feature Cards */}
        <div className="grid  md:grid-cols-3 gap-6 mt-12">
          <CometCard>
            <div className="bg-[#111] rounded-2xl p-6 text-left hover:bg-[#1a1a1a] transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] mb-4">
                <Bell className="text-yellow-300" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tell us your vision</h3>
              <p className="text-gray-400 text-sm">
                Our vision is unlimited, high-quality design—fast, efficient, innovative, and effortlessly elevating brands.
              </p>
            </div>
          </CometCard>

          <CometCard>
            <div className="bg-[#111] rounded-2xl p-6 text-left hover:bg-[#1a1a1a] transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] mb-4">
                <Database className="text-yellow-300" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Receive the magic</h3>
              <p className="text-gray-400 text-sm">
                Experience the magic of unlimited, high-quality design—fast, efficient, and effortlessly transformative.
              </p>
            </div>
          </CometCard>

          <CometCard>
            <div className="bg-[#111] rounded-2xl p-6 text-left hover:bg-[#1a1a1a] transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] mb-4">
                <LifeBuoy className="text-yellow-300" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Get ongoing support</h3>
              <p className="text-gray-400 text-sm">
                Receive continuous, reliable support—fast, efficient, and always ready to elevate your brand.
              </p>
            </div>
          </CometCard>
        </div>

        {/* Collaboration Section */}
        <div className="bg-[#111] flex flex-col lg:flex-row justify-between shadow-2xl items-center rounded-2xl p-6 lg:p-16 mt-12">
          <div className="text-left mb-6 max-w-80 w-auto lg:mb-0">
            <h3 className="text-xl md:text-3xl font-semibold mb-4">Real-time collaborate with Flowbite</h3>
            <p className="text-gray-400 text-sm max-w-lg">
              Collaborate in real-time with Flowbite for seamless, efficient, and innovative design.
            </p>
          </div>

          {/* Avatar Row */}
          <div className="flex items-center gap-4">
            <AnimatedTooltip items={avatars} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topnotch;

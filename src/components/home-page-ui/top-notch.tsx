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
        { id: 4, name: "", designation: "", image: "" },
    ];

    return (
        <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-medium leading-tight text-center bg-gradient-to-r from-stone-800/100
         via-gray-100 to-stone-800/100 bg-clip-text text-transparent">
                    Top–<span className="font-bold">notch</span> Frontend,<br />
                    delivered with <span className="font-bold">precision</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <CometCard>
                        <div className="bg-[#111] rounded-2xl p-6 text-left hover:bg-[#1a1a1a] transition">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] mb-4">
                                <Bell className="text-yellow-300" size={28} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Share your vision</h3>
                            <p className="text-gray-400 text-sm">
                                I transform your ideas into modern, responsive, and visually appealing web interfaces using React, Next.js, and Tailwind CSS.
                            </p>
                        </div>
                    </CometCard>

                    <CometCard>
                        <div className="bg-[#111] h-full rounded-2xl p-6 text-left hover:bg-[#1a1a1a] transition">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] mb-4">
                                <Database className="text-yellow-300" size={28} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Build the solution</h3>
                            <p className="text-gray-400 text-sm">
                                I develop fast, efficient, and scalable frontend solutions that bring your projects to life and enhance user experiences.
                            </p>
                        </div>
                    </CometCard>

                    <CometCard>
                        <div className="bg-[#111] rounded-2xl p-6 text-left hover:bg-[#1a1a1a] transition">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] mb-4">
                                <LifeBuoy className="text-yellow-300" size={28} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Ongoing support</h3>
                            <p className="text-gray-400 text-sm">
                                I provide continuous support, updates, and improvements to ensure your web application stays modern, functional, and reliable.
                            </p>
                        </div>
                    </CometCard>
                </div>

                <div className="bg-[#111] flex flex-col lg:flex-row justify-between shadow-2xl items-center rounded-2xl p-6 lg:p-16 mt-12">
                    <div className="text-left mb-6 max-w-80 w-auto lg:mb-0">
                        <h3 className="text-xl md:text-3xl font-semibold mb-4">Collaborate in <br /> real-time</h3>
                        <p className="text-gray-400 text-sm max-w-lg">
                            Work with me to design and develop modern, responsive, and engaging web interfaces using React, Next.js, and Tailwind CSS — ensuring seamless collaboration and bringing your ideas to life.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <AnimatedTooltip items={avatars} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Topnotch;
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Figma, Library } from "lucide-react";
import { CometCard } from "../ui/comet-card";
import { AnimatedTooltip } from "../ui/animated-tooltip";

function AboutTopNotch() {
  const router = useRouter();

  const avatars = [
    { id: 1, name: "Alice", designation: "Designer", image: "https://randomuser.me/api/portraits/women/65.jpg" },
    { id: 2, name: "Micheal", designation: "Developer", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, name: "Sophia", designation: "Product Manager", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 4, name: "", designation: "", image: "" },
  ];

  const handleStartProject = () => {
    router.push("/projects");
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">

        <div
          data-aos="fade-up" data-aos-delay="150"
          className="flex lg:flex-row flex-col justify-between items-center">
          <h2 className="text-3xl md:text-5xl font-medium leading-tight text-start bg-gradient-to-r from-stone-800/100 via-gray-100 to-stone-800/100 bg-clip-text text-transparent">
            Exceptional <span className="font-bold">Frontend Solutions</span>, <br />
            crafted with <span className="font-bold">precision & creativity</span>
          </h2>
          <button
            data-aos="fade-up" data-aos-delay="150"
            onClick={handleStartProject}
            className="px-6 py-3 text-lg font-semibold rounded-full bg-[#deff00] text-black
                       transition-all duration-300 active:scale-95
                       shadow-[0_0_0px_0_#deff00] hover:shadow-[0_0_15px_0px_#deff00]"
          >
            Start a Project
          </button>
        </div>


        <div
          data-aos="fade-up" data-aos-delay="150"
          className="grid md:grid-cols-2 gap-6 mt-12">
          <CometCard>
            <div className="bg-[#111] rounded-2xl p-6 text-left hover:bg-[#1a1a1a] transition flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1a1a1a] mb-4">
                <Figma className="text-yellow-300" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Rapid Prototyping</h3>
              <p className="text-gray-400 text-sm text-center">
                Quickly turn ideas into interactive prototypes with **clean design and intuitive components**, reducing time from concept to reality.
              </p>
            </div>
          </CometCard>

          <CometCard>
            <div className="bg-[#111] rounded-2xl p-6 text-left hover:bg-[#1a1a1a] transition flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1a1a1a] mb-4">
                <Library className="text-yellow-300" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Efficient Component Library</h3>
              <p className="text-gray-400 text-sm text-center">
                Reuse **prebuilt components** and layouts from Flowbite & Figma design system for faster development and consistent UI.
              </p>
            </div>
          </CometCard>
        </div>


        <div data-aos="fade-up" data-aos-delay="150" className="bg-[#111] flex flex-col lg:flex-row justify-between shadow-2xl items-center rounded-2xl p-6 lg:p-16 mt-12">
          <div data-aos="fade-up" data-aos-delay="150" className="text-left mb-6 max-w-80 w-auto lg:mb-0">
            <h3 data-aos="fade-up" data-aos-delay="150" className="text-xl md:text-3xl font-semibold mb-4">Collaborate <br /> Seamlessly in Real-Time</h3>
            <p data-aos="fade-up" data-aos-delay="150" className="text-gray-400 text-sm max-w-lg">
              Work closely to create interactive, modern, and responsive frontend experiences tailored perfectly to your vision.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="150" className="flex items-center gap-4">
            <AnimatedTooltip items={avatars} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTopNotch;

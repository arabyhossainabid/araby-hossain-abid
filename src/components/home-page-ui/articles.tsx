"use client";
import React from "react";
import Image from "next/image";
import person from "../../../public/image/sdasd.avif";
import personImage from "../../../public/image/design.png";
import { Star, Linkedin } from "lucide-react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

function Articles() {
  return (
    <BackgroundBeamsWithCollision className="">
      <section className=" relative container mx-auto">
        {/* Desktop layout */}
        <div className="hidden lg:flex flex-row items-center lg:top-8 top-0 justify-between w-full max-w-6xl mx-auto relative z-10">

          {/* Left: Rating + Trustpilot */}
          <div className="flex flex-col items-center gap-4 text-white flex-1">
            <div className="flex gap-1 text-xl">
              <Star className="text-[#e0ff04] fill-[#e0ff04]" width={20} height={20} />
              <Star className="text-[#e0ff04] fill-[#e0ff04]" width={20} height={20} />
              <Star className="text-[#e0ff04] fill-[#e0ff04]" width={20} height={20} />
              <Star className="text-[#e0ff04] fill-[#e0ff04]" width={20} height={20} />
              <Star className="text-[#e0ff04]" width={20} height={20} />
            </div>
            <p className="text-md font-medium mt-2">
              4.9 out of 5 based on 768 reviews
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Linkedin className="bg-blue-600 p-2 rounded-md" width={50} height={50} />
              <p className="font-medium text-3xl">Trustpilot</p>
            </div>
          </div>

          {/* Middle: Image */}
          <div className="relative w-[300px] h-[450px] lg:w-[440px] lg:h-[590px] flex-shrink-0">
            <Image
              src={person}
              alt="Person"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Right: Testimonial */}
          <div className="flex flex-col items-start gap-4 text-white flex-1">
            <p className="text-lg leading-relaxed w-80">
              "We send about a million emails every week now. Being in a B2C
              business, it's really important for"
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Image
                src={personImage}
                alt="Person"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col text-left">
                <span className="font-bold">Russ Herisson</span>
                <span className="text-sm text-gray-400">
                  Founder of Airbnb
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden relative top-52 flex flex-col items-center justify-center mt-10">
          <div className="w-[280px] h-[400px] md:w-[350px] md:h-[500px] flex-shrink-0">
            <Image
              src={person}
              alt="Person"
              width={280}
              height={400}
              priority
              className="object-contain"
            />
          </div>

          {/* Mobile content */}
          <div className="flex flex-col items-center gap-4 text-white mt-8 px-4">
            <div className="flex gap-1 text-xl">
              <Star className="text-[#e0ff04] fill-[#e0ff04]" width={20} height={20} />
              <Star className="text-[#e0ff04] fill-[#e0ff04]" width={20} height={20} />
              <Star className="text-[#e0ff04] fill-[#e0ff04]" width={20} height={20} />
              <Star className="text-[#e0ff04] fill-[#e0ff04]" width={20} height={20} />
              <Star className="text-[#e0ff04]" width={20} height={20} />
            </div>
            <p className="text-md font-medium mt-2 text-center">
              4.9 out of 5 based on 768 reviews
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Linkedin className="bg-blue-600 p-2 rounded-md" width={40} height={40} />
              <p className="font-medium text-2xl">Trustpilot</p>
            </div>

            <p className="text-lg leading-relaxed text-center mt-6">
              "We send about a million emails every week now. Being in a B2C
              business, it's really important for"
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Image
                src={personImage}
                alt="Person"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col text-left">
                <span className="font-bold">Russ Herisson</span>
                <span className="text-sm text-gray-400">
                  Founder of Airbnb
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}

export default Articles;
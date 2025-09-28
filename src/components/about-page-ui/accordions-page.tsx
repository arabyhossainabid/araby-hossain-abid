"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionsPages() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <section className="max-w-5xl mx-auto py-20">
      <div className="grid md:grid-cols-2 gap-16 mx-3 items-start">
        {/* Left column */}
        <div className="mx-auto text-center md:text-start">
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight
          bg-gradient-to-r from-stone-500/100 via-gray-100 to-stone-500/100
          bg-clip-text text-transparent"
            data-aos="fade-up" data-aos-delay="150"
          >
            Frequently Asked <br /> Questions.
          </h2>
          <p data-aos="fade-up" data-aos-delay="150" className="mt-6 text-gray-400 max-w-md text-sm">
            Here are some of the most common questions people ask me as a{" "}
            <span className="text-white">Frontend Developer</span>.
            I’ve added the answers to help you understand my skills, process, and services.
          </p>
          <button
            onClick={handleContactClick}
            data-aos="fade-up" data-aos-delay="150"
            className="px-5 py-3 mt-6 text-sm font-medium rounded-full bg-[#deff00] text-black/80
                       transition-all duration-300 active:scale-95
                       shadow-[0_0_0px_0_#deff00] hover:shadow-[0_0_15px_0px_#deff00]"
          >
            Let’s Work Together
          </button>
        </div>

        {/* Right column */}
        <div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                title: "What technologies do you use?",
                content:
                  "I specialize in React, Next.js, Tailwind CSS, and Shadcn UI. I also have strong knowledge of JavaScript, HTML, and CSS for building responsive and modern websites.",
              },
              {
                title: "Can you build responsive websites?",
                content:
                  "Yes! I make sure every website is fully responsive and works seamlessly across desktop, tablet, and mobile devices.",
              },
              {
                title: "Do you work with custom designs?",
                content:
                  "Absolutely! I can turn any Figma, XD, or custom design into a fully functional and pixel-perfect frontend website.",
              },
              {
                title: "Do you provide ongoing support?",
                content:
                  "Yes, I offer ongoing support, improvements, and updates to ensure your website always stays modern and functional.",
              },
              {
                title: "Why should I work with you?",
                content:
                  "Because I focus on clean code, performance, and user-friendly experiences. My goal is to help your online presence stand out and grow.",
              },
            ].map((item, index) => (
              <AccordionItem
                data-aos="fade-up" data-aos-delay="150"
                key={index}
                value={`item-${index + 1}`}
                className="border bg-neutral-900 rounded-xl overflow-hidden"
              >
                <AccordionTrigger data-aos="fade-up" data-aos-delay="150" className="text-lg font-medium px-5 py-4 transition">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent data-aos="fade-up" data-aos-delay="150" className="text-gray-400 text-base px-5 py-4 animate-slide-down">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

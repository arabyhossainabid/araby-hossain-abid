// Worked.js
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    date: "Jan 2021 – Dec 2022",
    company: "TechNova",
    role: "Frontend Developer",
    description:
      "Worked on building responsive, user-friendly web applications using React, Next.js, and Tailwind CSS.",
  },
  {
    id: 2,
    date: "Jan 2020 – Dec 2020",
    company: "PixelCraft",
    role: "Junior Frontend Developer",
    description:
      "Developed interactive UI components and assisted in optimizing website performance and responsiveness.",
  },
  {
    id: 3,
    date: "Jun 2019 – Dec 2019",
    company: "WebWorks",
    role: "Frontend Intern",
    description:
      "Collaborated with senior developers to implement modern UI features and improve user experience.",
  },
];

function Worked() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/contact");
  };

  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl pb-10 font-bold leading-tight text-center
          bg-gradient-to-r from-stone-500/100 via-gray-100 to-stone-500/100
          bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          I’ve worked with <br /> some amazing tech companies.
        </h2>

        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              data-aos="fade-up"
              data-aos-delay="150"
              className="bg-neutral-900 p-6 rounded-xl
              flex flex-col sm:flex-row sm:justify-between sm:items-center
              hover:bg-neutral-800 transition-colors"
            >
              {/* Content */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-10 w-full">
                <div>
                  <p
                    className="text-gray-400 pb-2 sm:pb-3 w-32 text-xs sm:text-sm"
                  >
                    {exp.date}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.company}
                  </h3>
                </div>
                <div>
                  <p className="font-semibold text-white mt-1 text-sm sm:text-base">
                    {exp.role}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Arrow button */}
              <button
                data-aos="fade-up"
                data-aos-delay="150"
                onClick={handleNavigate}
                className="mt-4 sm:mt-0 sm:ml-4 p-3 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors self-end sm:self-center"
              >
                <ArrowUpRight size={20} className="text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Worked;

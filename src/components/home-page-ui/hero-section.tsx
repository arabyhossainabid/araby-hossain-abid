"use client";
import React from 'react';
import { ScrollVelocityContainer, ScrollVelocityRow } from '../ui/scroll-based-velocity';

function HeroSection() {

  const brands = [
    { name: 'JavaScript', color: 'text-blue-500' },
    { name: 'React.js', color: 'text-purple-500' },
    { name: 'Next.js', color: 'text-red-500' },
    { name: 'Vue.js', color: 'text-green-500' },
    { name: 'Tailwind CSS', color: 'text-cyan-500' },
    { name: 'DaisyUI', color: 'text-orange-500' },
    { name: 'Bootstrap', color: 'text-pink-500' },
    { name: 'NextUI', color: 'text-yellow-500' },
    { name: 'Git & GitHub', color: 'text-indigo-500' },
    { name: 'npm', color: 'text-teal-500' },
    { name: 'pnpm', color: 'text-red-400' },
    { name: 'Vite', color: 'text-blue-400' }
  ];

  return (
    <section className="container mx-auto max-w-6xl py-20 bg-gradient-to-br overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mx-auto max-w-3xl w-auto mb-12">
          <h2 className="text-lg md:text-xl font-medium leading-tight text-center bg-gradient-to-r from-stone-800/100
         via-gray-100 to-stone-800/100 bg-clip-text text-transparent">
            Elevate your<span className="font-bold">web</span> presence
            with modern <span className="font-bold">frontend</span> experiences.
          </h2>
        </div>

        {/* Scrolling brands */}
        <ScrollVelocityContainer className="rounded-lg p-6 backdrop-blur-sm">
          <ScrollVelocityRow baseVelocity={3} direction={1}>
            <div className="flex items-center gap-12 px-4">
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`text-2xl font-bold ${brand.color}`}>
                    {brand.name}
                  </div>
                  {index < brands.length - 1 && (
                    <div className="h-6 w-px bg-gray-600"></div>
                  )}
                </div>
              ))}

              {/* Duplicate for seamless looping */}
              {brands.map((brand, index) => (
                <div key={`dup-${index}`} className="flex items-center gap-3">
                  <div className={`text-2xl font-bold ${brand.color}`}>
                    {brand.name}
                  </div>
                  <div className="h-6 w-px bg-gray-600"></div>
                </div>
              ))}
            </div>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </section>
  );
}

export default HeroSection;

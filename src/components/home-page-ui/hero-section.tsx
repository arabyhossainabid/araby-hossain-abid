"use client";
import React from 'react';
import { ScrollVelocityContainer, ScrollVelocityRow } from '../ui/scroll-based-velocity';
import { useRouter } from 'next/navigation';

function HeroSection() {
  const router = useRouter();

  const handleProjectsClick = () => {
    router.push("/projects");
  };

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
          <h2 className="text-3xl md:text-5xl font-medium leading-tight text-center bg-gradient-to-r from-stone-800/100
         via-gray-100 to-stone-800/100 bg-clip-text text-transparent">
            Elevate your<span className="font-bold">web</span> presence<br />
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

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-400">95%</div>
            <div className="text-gray-400">Faster Development</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-green-400">100%</div>
            <div className="text-gray-400">Responsive Design</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-400">30%</div>
            <div className="text-gray-400">Performance Boost</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-400">24/7</div>
            <div className="text-gray-400">Developer Support</div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <button
            onClick={handleProjectsClick}
            className="mt-8 px-8 py-3 font-semibold rounded-full bg-[#deff00] text-black
                       transition-all duration-300 active:scale-95
                       shadow-[0_0_0px_0_#deff00] hover:shadow-[0_0_15px_0px_#deff00]">
            Start Building Today
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

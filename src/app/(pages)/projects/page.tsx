import ShowcaseCarousel from '@/components/home-page-ui/showcase-carousel'
import SomthingSection from '@/components/home-page-ui/somthing-section'
import Work from '@/components/projects-page-ui/work'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Projects - Araby Hossain Abid",
  description: "Explore my portfolio of web development projects, showcasing modern applications built with Next.js, React, and cutting-edge technologies.",
  keywords: ["Projects", "Portfolio", "Web Apps", "Development", "Showcase"],
};

export default function ProjectsPage() {
  return (
    <section>

      <div data-aos="fade-up" data-aos-delay="150">
        <ShowcaseCarousel />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <Work />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <SomthingSection />
      </div>
    </section>
  )
}
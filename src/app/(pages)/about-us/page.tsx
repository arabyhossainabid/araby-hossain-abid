import AboutBanner from '@/components/about-page-ui/about-banner'
import AboutTopNotch from '@/components/about-page-ui/about-top-notch'
import AccordionsPages from '@/components/about-page-ui/accordions-page'
import NumberSection from '@/components/about-page-ui/number-section'
import Worked from '@/components/about-page-ui/worked'
import SomthingSection from '@/components/home-page-ui/somthing-section'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About - Araby Hossain Abid",
  description: "Learn more about my journey as a full-stack developer, my skills, experience, and passion for building modern web applications.",
  keywords: ["About", "Developer", "Skills", "Experience", "Portfolio"],
};

export default function AboutPage() {
  return (
    <section>

      <div>
        <AboutBanner />
      </div>

      <div>
        <NumberSection />
      </div>

      <div>
        <AboutTopNotch />
      </div>

      <div>
        <Worked />
      </div>

      <div>
        <AccordionsPages />
      </div>

      <div>
        <SomthingSection />
      </div>

    </section>
  )
}
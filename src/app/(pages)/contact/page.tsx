import AccordionsPages from '@/components/about-page-ui/accordions-page'
import DesignScroll from '@/components/home-page-ui/design-scroll'
import HeroSection from '@/components/home-page-ui/hero-section'
import SomthingSection from '@/components/home-page-ui/somthing-section'
import React from 'react'

function page() {
  return (
    <section className="overflow-hidden">

      <div data-aos="fade-up" data-aos-delay="150">

      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <HeroSection />

      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <DesignScroll />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <AccordionsPages />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <SomthingSection />
      </div>

    </section>
  )
}

export default page
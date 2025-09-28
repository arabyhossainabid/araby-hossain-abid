import ShowcaseCarousel from '@/components/home-page-ui/showcase-carousel'
import SomthingSection from '@/components/home-page-ui/somthing-section'
import Work from '@/components/projects-page-ui/work'
import React from 'react'

function page() {
  return (
    <section>

      <div data-aos="fade-up" data-aos-delay="150">
        <ShowcaseCarousel />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <Work />
      </div>

      <div data-aos="fade-up" data-aos-delay="150" >
        <SomthingSection />
      </div>
    </section>
  )
}

export default page
import AboutBanner from '@/components/about-page-ui/about-banner'
import AboutTopNotch from '@/components/about-page-ui/about-top-notch'
import AccordionsPages from '@/components/about-page-ui/accordions-page'
import NumberSection from '@/components/about-page-ui/number-section'
import Worked from '@/components/about-page-ui/worked'
import SomthingSection from '@/components/home-page-ui/somthing-section'
import React from 'react'

function page() {
  return (
    <section>

      <div>
        <AboutBanner />
      </div>

      <div >
        <NumberSection />
      </div>

      <div >
        <AboutTopNotch />
      </div>

      <div >
        <Worked />
      </div>

      <div >
        <AccordionsPages />
      </div>

      <div >
        <SomthingSection />
      </div>

    </section>
  )
}

export default page
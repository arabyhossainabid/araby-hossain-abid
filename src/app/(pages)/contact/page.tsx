import AccordionsPages from '@/components/about-page-ui/accordions-page'
import ContactMe from '@/components/contact-page-ui/contact-me'
import DesignScroll from '@/components/home-page-ui/design-scroll'
import HeroSection from '@/components/home-page-ui/hero-section'
import SomthingSection from '@/components/home-page-ui/somthing-section'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Contact - Araby Hossain Abid",
  description: "Get in touch with me for project inquiries, collaborations, or just to say hello. I'm always open to discussing new opportunities.",
  keywords: ["Contact", "Hire Developer", "Project Inquiry", "Collaboration"],
};

export default function ContactPage() {
  return (
    <section className="overflow-hidden">

      <div data-aos="fade-up" data-aos-delay="150">
        <ContactMe />
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
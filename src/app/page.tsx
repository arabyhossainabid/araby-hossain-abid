"use client";

import Banner from "@/components/home-page-ui/banner";
import HeroSection from "@/components/home-page-ui/hero-section";
import ShowcaseCarousel from "@/components/home-page-ui/showcase-carousel";
import Customers from "@/components/home-page-ui/customers";
import DesignScroll from "@/components/home-page-ui/design-scroll";
import SomthingSection from "@/components/home-page-ui/somthing-section";
import Topnotch from "@/components/home-page-ui/top–notch";

export default function Home() {
  return (
    <section className="overflow-hidden">

      <div>
        <Banner />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <HeroSection />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <Topnotch />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <ShowcaseCarousel />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <DesignScroll />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <Customers />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <SomthingSection />
      </div>

    </section>
  );
}

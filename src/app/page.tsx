"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "@/components/home-page-ui/banner";
import Articles from "@/components/home-page-ui/articles";
import HeroSection from "@/components/home-page-ui/hero-section";
import Topnotch from "@/components/home-page-ui/top–notch";
import ShowcaseCarousel from "@/components/home-page-ui/showcase-carousel";
import Customers from "@/components/home-page-ui/customers";
import Management from "@/components/home-page-ui/management";
import DesignScroll from "@/components/home-page-ui/design-scroll";
import SomthingSection from "@/components/home-page-ui/somthing-section";
// import ShowcaseCarousel from "@/components/home-page-ui/showcase-carousel";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,       // animate only once
      offset: 200,      // start animation before component comes in view
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="overflow-hidden">
      {/* Banner */}
      <div data-aos="fade-up" data-aos-delay="0">
        <Banner />
      </div>

      {/* Articles */}
      <div data-aos="fade-up" data-aos-delay="150">
        <Articles />
      </div>

      {/* Hero Section */}
      <div data-aos="fade-up" data-aos-delay="150">
        <HeroSection />
      </div>

      {/* Topnotch */}
      <div data-aos="fade-up" data-aos-delay="150">
        <Topnotch />
      </div>
      <div data-aos="fade-up" data-aos-delay="150">
        {/* <ShowcaseCarousel /> */}
        <ShowcaseCarousel />
      </div>
      <div data-aos="fade-up" data-aos-delay="150">
        {/* <DesignScroll /> */}
        <DesignScroll />
      </div>
      <div data-aos="fade-up" data-aos-delay="150">
        {/* <Customers /> */}
        <Customers />
      </div>
      <div data-aos="fade-up" data-aos-delay="150">
        {/* <Management /> */}
        <Management />
      </div>
      <div data-aos="fade-up" data-aos-delay="150">
        {/* <Management /> */}
        <SomthingSection />
      </div>

    </section>
  );
}

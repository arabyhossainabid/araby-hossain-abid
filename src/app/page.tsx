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

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="overflow-hidden">

      <div data-aos="fade-up" data-aos-delay="0">
        <Banner />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <Articles />
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
        <Management />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <SomthingSection />
      </div>

    </section>
  );
}

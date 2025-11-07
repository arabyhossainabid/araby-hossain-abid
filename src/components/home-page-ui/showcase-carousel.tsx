"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function SlideScale() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const slides = [
    { id: 1, image: "/image/gsap.svg", link: "https://mojito-ecru.vercel.app/" },
    { id: 2, image: "/image/cover.svg", link: "https://my-portfolio-sage-two.vercel.app/" },
    { id: 3, image: "/image/medical-service.svg", link: "/" },
    { id: 4, image: "/image/dream-job.svg", link: "https://react-career-hub-three.vercel.app/" },
    { id: 5, image: "/image/gsap-spylt.svg", link: "https://spylt-bay.vercel.app/" },
  ];

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="mx-auto max-w-7xl my-20 lg:my-40">
      <div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight text-center bg-gradient-to-r from-stone-800/100 via-gray-100 to-stone-800/100 bg-clip-text text-transparent">
          Providing <span className="font-bold">stellar</span> results
          <br />
          for <span className="font-bold">every client.</span>
        </h2>
      </div>

      <div className="mt-10">
        <Carousel
          setApi={setApi}
          className="w-full max-w-screen"
          opts={{ loop: true }}
        >
          <CarouselContent className="py-3">
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id} className={cn("basis-[33%]")}>
                <Card
                  className={cn("transition-transform duration-500 p-0", {
                    "scale-[0.6]": index !== current - 1,
                  })}
                >
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full block"
                    >
                      <Image
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </a>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* CarouselPrevious and CarouselNext removed */}
        </Carousel>
      </div>
    </section>
  );
}

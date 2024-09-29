/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import slides from "@/slides.json";
import Image from "next/image";

export function SliderSection() {
  return (
    <div className="flex justify-center w-full">
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full max-w-xl"
      >
        <CarouselContent>
          {slides?.map((slide: any, index: number) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/4 flex justify-center"
            >
              <div className="py-14">
                <Card>
                  <CardContent className="relative w-full h-28">
                    <Image
                      src={slide.image}
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

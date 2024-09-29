/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

import slides from "@/slides.json";

export function HeroSection() {
  return (
    <Carousel plugins={[Autoplay({ delay: 4000 })]}>
      <CarouselContent>
        {slides?.map((slide: any, index: number) => (
          <CarouselItem key={index}>
            <div className="pt-1">
              <Card className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <CardContent className="relative z-10 flex flex-col items-start justify-center p-24 text-center space-y-4">
                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300">
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-lg">
                    {slide.description}
                  </p>

                  {/* Button */}
                  <Link href={slide.buttonLink}>
                    <button className="px-4 py-2 sm:px-6 sm:py-3 mt-4 text-sm sm:text-lg font-semibold text-white bg-purple-600 rounded hover:bg-purple-500">
                      {slide.buttonText}
                    </button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Previous and Next buttons with custom styles */}
      <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2  p-2 rounded-full shadow-lg">
        <span className="text-black">&larr;</span>
      </CarouselPrevious>
      <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full shadow-lg">
        <span className="text-black">&rarr;</span>
      </CarouselNext>
    </Carousel>
  );
}

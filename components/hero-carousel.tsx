"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    image: "/nike-air-max-270-running-shoes.jpg",
    title: "Últimas Novedades en Running",
    subtitle: "Descubre la nueva colección Nike Air Max",
    description: "Tecnología de vanguardia para tus entrenamientos"
  },
  {
    id: 2,
    image: "/adidas-ultraboost-running-shoes.jpg",
    title: "Performance sin Límites",
    subtitle: "Adidas Ultraboost - La revolución continúa",
    description: "Máxima comodidad y energía en cada paso"
  },
  {
    id: 3,
    image: "/nike-lebron-basketball-shoes.jpg",
    title: "Domina la Cancha",
    subtitle: "Colección Basketball 2024",
    description: "Equipamiento profesional para tu mejor juego"
  },
  {
    id: 4,
    image: "/puma-rs-x-casual-sneakers.jpg",
    title: "Estilo Urbano",
    subtitle: "Nuevas tendencias en casual",
    description: "La combinación perfecta entre moda y confort"
  }
]

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-2xl md:text-3xl lg:text-4xl mb-3 drop-shadow-lg">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl drop-shadow-lg">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  )
}

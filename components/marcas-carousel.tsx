"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

const brands = [
  { name: "Nike", logo: "/logos/nike-logo.png" },
  { name: "Adidas", logo: "/logos/adidas-logo.png" },
  { name: "Puma", logo: "/logos/puma-logo.png" },
  { name: "Converse", logo: "/logos/converse-logo.png" },
  { name: "New Balance", logo: "/logos/newbalance-logo.png" },
  { name: "Caterpillar", logo: "/logos/caterpillar-logo.png" },
  { name: "Rolex", logo: "/logos/rolex-logo.png" },
  { name: "Louis Vuitton", logo: "/logos/louisvuitton-logo.png" },
]

export function MarcasCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (hoveredIndex !== null) return // No animar si hay hover
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [hoveredIndex])
  
  return (
    <div className="bg-white border-b border-gray-200 py-6 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-12">
          {/* Versión desktop - muestra todos */}
          <div className="hidden md:flex items-center justify-center gap-12 w-full">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex-shrink-0 transition-all duration-500 cursor-pointer ${
                  index === (hoveredIndex !== null ? hoveredIndex : activeIndex)
                    ? 'grayscale-0 opacity-100 scale-110' 
                    : 'grayscale opacity-60 scale-100'
                }`}
              >
                <div className="relative h-16 w-32">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Versión mobile - carousel automático */}
          <div className="md:hidden flex items-center justify-center w-full">
            <div className="relative h-16 w-32">
              <Image
                src={brands[currentIndex].logo}
                alt={brands[currentIndex].name}
                fill
                className="object-contain transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
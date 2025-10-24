"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Search, ChevronDown } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

interface HeaderProps {
  onResetFilters?: () => void
  selectedBrand?: string | null
  selectedGender?: string | null
  searchQuery?: string
  onBrandChange?: (brand: string | null) => void
  onGenderChange?: (gender: string | null) => void
  onSearchChange?: (query: string) => void
  brands?: string[]
  genders?: Array<{ name: string; value: string }>
}

export function Header({ 
  onResetFilters,
  selectedBrand,
  selectedGender,
  searchQuery,
  onBrandChange,
  onGenderChange,
  onSearchChange,
  brands = [],
  genders = []
}: HeaderProps) {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onResetFilters) {
      onResetFilters()
    }
    router.push("/")
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header 
      className={`sticky top-0 z-50 bg-white ${
        isScrolled ? 'shadow-lg backdrop-blur-sm bg-white/95' : ''
      }`}
      style={!isScrolled ? { 
        boxShadow: "inset 0 4px 6px -1px rgba(238, 64, 35, 0.3), inset 0 -4px 6px -1px rgba(238, 64, 35, 0.3)"
      } : undefined}
    >
      <div className="container mx-auto px-4">
        {/* Header Normal (sin scroll) */}
        <div className={`overflow-hidden ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-48 opacity-100'
        }`} style={{ 
          transition: isScrolled ? 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out' : 'none'
        }}>
          <div className="py-4">
            <div className="flex items-center justify-center">
              <a 
                href="/" 
                onClick={handleLogoClick} 
                className="flex items-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
              >
                <Image 
                  src="/victor-store.jpg" 
                  alt="Victor Store" 
                  width={500} 
                  height={200}
                  priority
                  className="h-32 w-auto drop-shadow-lg"
                />
              </a>

              <Link href="/carrito" className="absolute right-12">
                <Button 
                  variant="outline" 
                  className="relative bg-white hover:bg-gray-100 border-4 border-gray-300 hover:border-[#ee4023] transition-all duration-300 shadow-xl hover:shadow-2xl px-10 py-10 rounded-2xl hover:scale-105"
                >
                  <ShoppingCart className="h-16 w-16 transition-transform duration-300 hover:rotate-12" style={{ color: "#ee4023", strokeWidth: 2.5 }} />
                  {totalItems > 0 && (
                    <span 
                      className="absolute -top-4 -right-4 text-2xl font-bold rounded-full h-12 w-12 flex items-center justify-center shadow-lg border-4 border-white animate-pulse" 
                      style={{ backgroundColor: "#ee4023", color: "white" }}
                    >
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Header Compacto (con scroll) */}
        <div className={`${
          isScrolled ? 'max-h-24 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        }`} style={{ 
          transition: isScrolled ? 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out, transform 0.5s ease-in-out' : 'none'
        }}>
          <div className="py-3">
            <div className="flex items-center gap-6">
              {/* Logo más pequeño a la izquierda */}
              <a 
                href="/" 
                onClick={handleLogoClick} 
                className="flex items-center cursor-pointer flex-shrink-0 transform transition-all duration-300 hover:scale-105"
              >
                <Image 
                  src="/victor-store.jpg" 
                  alt="Victor Store" 
                  width={300} 
                  height={120}
                  priority
                  className="h-16 w-auto drop-shadow-lg"
                />
              </a>

              {/* Filtros en el centro */}
              {genders.length > 0 && (
                <>
                  <div className="flex items-center gap-2 animate-fade-in">
                    {genders.map((gender, index) => (
                      <button
                        key={gender.value}
                        onClick={() => onGenderChange?.(selectedGender === gender.value ? null : gender.value)}
                        className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 ${
                          selectedGender === gender.value
                            ? "bg-[#ee4023] text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
                        }`}
                        style={{ 
                          animationDelay: `${index * 50}ms`,
                          animation: isScrolled ? 'slideInFromTop 0.3s ease-out forwards' : 'none'
                        }}
                      >
                        {gender.name}
                      </button>
                    ))}
                  </div>

                  <div className="h-6 w-px bg-gray-300"></div>

                  {/* Menú de Marcas */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 px-4 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-sm"
                    >
                      Marcas
                      <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isMenuOpen && (
                      <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[200px] z-10 animate-fade-in-down border border-gray-100">
                        <button
                          onClick={() => {
                            onBrandChange?.(null)
                            setIsMenuOpen(false)
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-all duration-200 ${
                            selectedBrand === null ? "bg-[#ee4023] text-white hover:bg-[#d63920]" : ""
                          }`}
                        >
                          Todas las marcas
                        </button>
                        {brands.map((brand) => (
                          <button
                            key={brand}
                            onClick={() => {
                              onBrandChange?.(brand)
                              setIsMenuOpen(false)
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-all duration-200 ${
                              selectedBrand === brand ? "bg-[#ee4023] text-white hover:bg-[#d63920]" : ""
                            }`}
                          >
                            {brand}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Buscador */}
              {onSearchChange && (
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 transition-colors duration-300" />
                    <input
                      type="text"
                      placeholder="Buscar productos..."
                      value={searchQuery || ""}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="w-full pl-9 pr-4 py-1.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ee4023] focus:border-transparent transition-all duration-300 focus:shadow-md"
                    />
                  </div>
                </div>
              )}

              {/* Carrito */}
              <Link href="/carrito" className="flex-shrink-0 ml-auto">
                <Button 
                  variant="outline" 
                  className="relative bg-white hover:bg-gray-100 border-2 border-gray-300 hover:border-[#ee4023] transition-all duration-300 shadow-md hover:shadow-lg px-4 py-4 rounded-xl hover:scale-105"
                >
                  <ShoppingCart className="h-6 w-6 transition-transform duration-300 hover:rotate-12" style={{ color: "#ee4023", strokeWidth: 2.5 }} />
                  {totalItems > 0 && (
                    <span 
                      className="absolute -top-2 -right-2 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md border-2 border-white animate-pulse" 
                      style={{ backgroundColor: "#ee4023", color: "white" }}
                    >
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out;
        }
      `}</style>
    </header>
  )
}
"use client"

import { brands, categories } from "@/lib/products"
import { Button } from "@/components/ui/button"

interface ProductFiltersProps {
  selectedBrand: string | null
  selectedCategory: string | null
  onBrandChange: (brand: string | null) => void
  onCategoryChange: (category: string | null) => void
}

export function ProductFilters({
  selectedBrand,
  selectedCategory,
  onBrandChange,
  onCategoryChange,
}: ProductFiltersProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-3">Marca</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedBrand === null ? "default" : "outline"}
            size="sm"
            onClick={() => onBrandChange(null)}
          >
            Todas
          </Button>
          {brands.map((brand) => (
            <Button
              key={brand}
              variant={selectedBrand === brand ? "default" : "outline"}
              size="sm"
              onClick={() => onBrandChange(brand)}
            >
              {brand}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-3">Categoría</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(null)}
          >
            Todas
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/ui/product-card'

const PRODUCTS = [
  {
    id: 1,
    name: "Bolso Gucci Diana",
    brand: "Gucci",
    image: "/images/products/gucci-diana.jpg",
    description: "Icónico bolso de bambú, perfecto para cualquier ocasión especial.",
    likes: 124,
    available: true
  },
  {
    id: 2,
    name: "Reloj Cartier Tank",
    brand: "Cartier",
    image: "/images/products/cartier-tank.jpg",
    description: "Elegante reloj que combina tradición y modernidad.",
    likes: 98,
    available: true
  },
  {
    id: 3,
    name: "Collar Tiffany & Co.",
    brand: "Tiffany",
    image: "/images/products/tiffany-necklace.jpg",
    description: "Deslumbrante collar de diamantes para ocasiones especiales.",
    likes: 156,
    available: false
  }
]

export function ProductGrid() {
  const [filter, setFilter] = useState<'all' | 'available' | 'unavailable'>('all')

  const filteredProducts = PRODUCTS.filter(product => {
    if (filter === 'available') return product.available
    if (filter === 'unavailable') return !product.available
    return true
  })

  return (
    <div>
      <div className="flex justify-center gap-4 mb-8">
        {[
          { value: 'all', label: 'Todos' },
          { value: 'available', label: 'Disponibles' },
          { value: 'unavailable', label: 'No Disponibles' }
        ].map(({ value, label }) => (
          <Button
            key={value}
            variant={filter === value ? 'default' : 'outline'}
            onClick={() => setFilter(value as typeof filter)}
          >
            {label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
} 
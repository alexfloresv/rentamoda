'use client'

import { ProductCard } from "@/components/ui/product-card"

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
  // ... más productos
]

export function ProductsShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PRODUCTS.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
} 
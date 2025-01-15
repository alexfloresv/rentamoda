'use client'

import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { LikeButton } from "@/components/ui/like-button"

interface ProductCardProps {
  product: {
    id: number
    name: string
    brand: string
    image: string
    description: string
    likes: number
    available: boolean
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-full min-w-full px-4">
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.brand}</p>
              <div className="mt-4 flex items-center justify-between">
                <LikeButton initialLikes={product.likes} productId={product.id} />
                <Button variant="outline" size="sm">Ver más</Button>
              </div>
            </div>
          </div>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px]">
          <div className="relative h-64 mb-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.brand}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className={`px-3 py-1 rounded-full text-sm ${
              product.available 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.available ? 'Disponible' : 'No disponible'}
            </span>
            <Button>Reservar en webinar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
} 
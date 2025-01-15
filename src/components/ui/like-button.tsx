'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { Button } from './button'

interface LikeButtonProps {
  initialLikes?: number
  onLike?: (liked: boolean) => void
  productId?: number
}

export function LikeButton({ initialLikes = 0, onLike, productId }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = async () => {
    try {
      setIsLiked(!isLiked)
      setLikes(prev => isLiked ? prev - 1 : prev + 1)
      
      if (onLike) {
        onLike(!isLiked)
      }
      
      // Aquí irá la lógica para guardar el like en la base de datos
    } catch (error) {
      console.error('Error al dar like:', error)
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex items-center gap-1"
      onClick={handleLike}
    >
      <Heart
        className={`w-5 h-5 transition-colors ${
          isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500'
        }`}
      />
      {likes > 0 && <span className="text-sm">+{likes}</span>}
    </Button>
  )
} 
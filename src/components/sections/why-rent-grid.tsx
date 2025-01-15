'use client'

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { LikeButton } from "@/components/ui/like-button"
import { Clock, Package, Shield, Crown, Sparkles, Leaf } from 'lucide-react'

const BENEFITS = [
  {
    id: 1,
    icon: Clock,
    title: 'Flexibilidad',
    description: 'Renueva tu estilo cuando quieras sin compromiso a largo plazo.',
    details: 'Alquila por días o semanas según tus necesidades. Sin necesidad de invertir en piezas que usarás pocas veces.',
    likes: 45
  },
  {
    id: 2,
    icon: Package,
    title: 'Entrega rápida y segura',
    description: 'Recibe tus accesorios en perfecto estado y a tiempo.',
    details: 'Servicio de entrega premium con seguimiento en tiempo real y empaque especial para proteger las piezas.',
    likes: 38
  },
  {
    id: 3,
    icon: Shield,
    title: 'Cuidado profesional',
    description: 'Mantenimiento experto para cada pieza.',
    details: 'Equipo especializado en el cuidado de artículos de lujo, garantizando su perfecto estado.',
    likes: 52
  },
  {
    id: 4,
    icon: Crown,
    title: 'Acceso a marcas exclusivas',
    description: 'Las mejores marcas a tu alcance.',
    details: 'Colección curada de las marcas más prestigiosas del mundo de la moda.',
    likes: 67
  },
  {
    id: 5,
    icon: Sparkles,
    title: 'Experiencia Premium',
    description: 'Servicio personalizado y atención exclusiva.',
    details: 'Asesoramiento experto y atención personalizada para cada cliente.',
    likes: 43
  },
  {
    id: 6,
    icon: Leaf,
    title: 'Moda Sostenible',
    description: 'Contribuye al consumo responsable.',
    details: 'Reduce tu huella ambiental mientras disfrutas de la moda de lujo.',
    likes: 58
  }
]

export function WhyRentGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {BENEFITS.map((benefit) => (
        <Dialog key={benefit.id}>
          <DialogTrigger asChild>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <LikeButton initialLikes={benefit.likes} />
            </div>
          </DialogTrigger>
          
          <DialogContent>
            <div className="p-4">
              <benefit.icon className="w-16 h-16 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">{benefit.title}</h2>
              <p className="text-gray-700 mb-6">{benefit.details}</p>
              <div className="flex justify-end">
                <LikeButton initialLikes={benefit.likes} />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
} 
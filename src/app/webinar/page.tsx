import { Calendar, Clock, Users, Gift } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const BENEFITS = [
  {
    icon: Users,
    title: 'Networking Exclusivo',
    description: 'Conecta con otros amantes de la moda y expertos del sector.'
  },
  {
    icon: Gift,
    title: 'Ofertas Especiales',
    description: 'Acceso a descuentos exclusivos para los asistentes del webinar.'
  },
  {
    icon: Clock,
    title: 'Tiempo Optimizado',
    description: '60 minutos de contenido valioso y preguntas y respuestas.'
  }
]

export default function WebinarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              El Arte del Alquiler de Lujo
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Descubre cómo acceder a accesorios de lujo de manera inteligente y sostenible
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-md mb-8">
              <div className="flex items-center justify-center gap-2 text-2xl font-semibold text-primary mb-4">
                <Calendar className="w-8 h-8" />
                <span>15 de Marzo, 2024</span>
              </div>
              <p className="text-gray-600">
                7:00 PM (Hora Ciudad de México)
              </p>
            </div>

            <Button asChild size="lg">
              <Link href="/register">
                Asegurar mi lugar
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Qué aprenderás?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md text-center"
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'

export function WebinarCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">
            Descubre el Futuro del Lujo Sostenible
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Únete a nuestro próximo webinar y conoce cómo puedes acceder a accesorios de lujo de manera inteligente y sostenible.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md mb-8">
            <p className="text-2xl font-semibold text-primary mb-2">
              Próximo Webinar: 15 de Marzo, 2024
            </p>
            <p className="text-gray-600">
              7:00 PM (Hora Ciudad de México)
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/register">
              Registrarme Ahora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 
import { WhyRentGrid } from '@/components/sections/why-rent-grid'

export default function WhyRentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          ¿Por qué alquilar con nosotros?
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Descubre las ventajas de alquilar accesorios de lujo y cómo estamos transformando
          la forma de acceder a la moda de alta gama.
        </p>
        <WhyRentGrid />
      </div>
    </div>
  )
}

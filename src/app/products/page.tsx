import { ProductGrid } from '@/components/sections/product-grid'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Nuestros Productos
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Descubre nuestra exclusiva colección de accesorios de lujo disponibles para alquiler.
          Cada pieza ha sido cuidadosamente seleccionada para garantizar calidad y estilo.
        </p>
        <ProductGrid />
      </div>
    </div>
  )
}

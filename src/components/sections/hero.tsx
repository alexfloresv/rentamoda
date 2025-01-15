import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">
            ¡Luce lo mejor sin comprometer tu bolsillo!
          </h1>
          <p className="text-xl mb-8">
            Alquila los accesorios de lujo que siempre has soñado
          </p>
          <Button asChild size="lg">
            <Link href="/products">
              Ver Productos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 
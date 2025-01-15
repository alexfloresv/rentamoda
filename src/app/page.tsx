import { HeroSection } from "@/components/sections/hero"
import { ProductsShowcase } from "@/components/sections/products-showcase"
import { WhyRentPreview } from "@/components/sections/why-rent-preview"
import { WebinarCTA } from "@/components/sections/webinar-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsShowcase />
      <WhyRentPreview />
      <WebinarCTA />
    </>
  )
}

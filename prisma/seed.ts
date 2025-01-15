import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Crear una página inicial
  const homePage = await prisma.page.create({
    data: {
      name: 'home'
    }
  })

  // Crear acciones básicas
  const actions = await prisma.action.createMany({
    data: [
      { name: 'click' },
      { name: 'view' },
      { name: 'like' }
    ]
  })

  // Crear productos iniciales
  const products = await prisma.product.createMany({
    data: [
      {
        name: "Bolso Gucci Diana",
        description: "Icónico bolso de bambú, perfecto para cualquier ocasión especial.",
        available: true,
        urlImage: "/images/products/gucci-diana.jpg"
      },
      {
        name: "Reloj Cartier Tank",
        description: "Elegante reloj que combina tradición y modernidad.",
        available: true,
        urlImage: "/images/products/cartier-tank.jpg"
      }
    ]
  })

  // Crear webinar inicial
  const webinar = await prisma.webinar.create({
    data: {
      title: 'El Arte del Alquiler de Lujo',
      description: 'Descubre cómo acceder a accesorios de lujo de manera inteligente y sostenible',
      scheduledAt: new Date('2024-03-15T19:00:00-06:00'), // 7:00 PM Ciudad de México
    },
  })

  console.log('Seed completado:', { homePage, actions, products, webinar })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 
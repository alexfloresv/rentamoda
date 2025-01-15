import { db } from './db'

async function testConnection() {
  try {
    // Probar consultas a diferentes tablas
    const [page, product, webinar] = await Promise.all([
      db.page.findFirst(),
      db.product.findFirst(),
      db.webinar.findFirst()
    ])

    console.log('Conexión exitosa:', {
      page,
      product,
      webinar
    })
    return true
  } catch (error) {
    console.error('Error de conexión:', error)
    return false
  } finally {
    await db.$disconnect()
  }
}

testConnection() 
import prisma from './db'; // Conexión a la base de datos

export async function createUserDB(user: { id: string, name: string }) {
  try {
    console.log(`Intentando crear un usuario con ID: ${user.id} y nombre: ${user.name}`);
    
    await prisma.client.create({
      data: {
        sessionId: user.id, // Usamos el sessionId como ID
        name: user.name, // Nombre del usuario
      },
    });

    console.log(`Usuario creado exitosamente con ID: ${user.id}`);
    return true; // Retornar true si el usuario fue creado correctamente
  } catch (error) {
    console.error(`Error al crear el usuario con ID: ${user.id}`, error);
    return false; // Retornar false si hubo un error
  }
}